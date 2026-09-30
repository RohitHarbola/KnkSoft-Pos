'use client';

import React, { useEffect, useRef } from 'react';

interface SquarespaceCanvasProps {
  className?: string;
  particleCount?: number;
  mode?: 'sphere' | 'wave' | 'constellation';
  theme?: 'dark' | 'light' | 'orange';
}

export const SquarespaceCanvas: React.FC<SquarespaceCanvasProps> = ({
  className = '',
  particleCount = 600,
  mode = 'sphere',
  theme = 'light',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let cssWidth = 0;
    let cssHeight = 0;

    const resize = () => {
      if (!canvas || !canvas.parentElement) return;
      const rect = canvas.getBoundingClientRect();
      cssWidth = rect.width || canvas.parentElement.clientWidth || 800;
      cssHeight = rect.height || canvas.parentElement.clientHeight || 500;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = cssWidth * dpr;
      canvas.height = cssHeight * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    // Setup 3D Particles
    const particles: {
      x: number;
      y: number;
      z: number;
      size: number;
      alpha: number;
      baseAlpha: number;
    }[] = [];

    if (mode === 'sphere') {
      for (let i = 0; i < particleCount; i++) {
        const phi = Math.acos(1 - (2 * (i + 0.5)) / particleCount);
        const theta = Math.PI * (1 + Math.sqrt(5)) * (i + 0.5);

        const nx = Math.sin(phi) * Math.cos(theta);
        const ny = Math.cos(phi);
        const nz = Math.sin(phi) * Math.sin(theta);

        particles.push({
          x: nx,
          y: ny,
          z: nz,
          size: Math.random() * 1.6 + 0.6,
          alpha: Math.random() * 0.5 + 0.5,
          baseAlpha: Math.random() * 0.4 + 0.3,
        });
      }
    } else if (mode === 'wave') {
      const cols = 26;
      const rows = 20;
      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const nx = (c / cols - 0.5) * 2;
          const nz = (r / rows - 0.5) * 2;
          particles.push({
            x: nx,
            y: 0,
            z: nz,
            size: Math.random() * 1.2 + 0.8,
            alpha: 0.7,
            baseAlpha: 0.5,
          });
        }
      }
    } else {
      // constellation
      for (let i = 0; i < 90; i++) {
        particles.push({
          x: (Math.random() - 0.5) * 2,
          y: (Math.random() - 0.5) * 2,
          z: (Math.random() - 0.5) * 2,
          size: Math.random() * 2 + 1,
          alpha: Math.random() * 0.6 + 0.4,
          baseAlpha: Math.random() * 0.4 + 0.3,
        });
      }
    }

    let rotX = 0.2;
    let rotY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
      const y = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
      targetMouseX = x * 0.0008;
      targetMouseY = y * 0.0008;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const fov = 380;
    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, cssWidth, cssHeight);

      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      rotY += 0.003 + mouseX;
      rotX += 0.001 + mouseY;
      time += 0.03;

      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      const centerX = cssWidth / 2;
      const centerY = cssHeight / 2;
      const radius = Math.min(cssWidth, cssHeight) * 0.44;

      const projected = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        let px = p.x * radius;
        let py = p.y * radius;
        let pz = p.z * radius;

        if (mode === 'wave') {
          const dist = Math.sqrt(p.x * p.x + p.z * p.z);
          py = Math.sin(dist * 6 - time) * 35;
        }

        // Rotate Y
        const x1 = px * cosY - pz * sinY;
        const z1 = pz * cosY + px * sinY;

        // Rotate X
        const y2 = py * cosX - z1 * sinX;
        const z2 = z1 * cosX + py * sinX;

        // 3D Perspective Projection
        const scale = fov / (fov + z2 + radius * 0.25);
        const projX = centerX + x1 * scale;
        const projY = centerY + y2 * scale;

        const depth = Math.max(0.08, Math.min(1, (z2 + radius) / (radius * 2)));

        projected.push({
          x: projX,
          y: projY,
          z: z2,
          size: p.size * scale,
          alpha: p.alpha * depth,
        });
      }

      projected.sort((a, b) => a.z - b.z);

      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.6, p.size), 0, Math.PI * 2);

        if (theme === 'orange') {
          ctx.fillStyle = `rgba(255, 76, 0, ${p.alpha * 0.85})`;
        } else if (theme === 'dark') {
          ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha * 0.85})`;
        } else {
          // light theme with subtle warm tint
          ctx.fillStyle = `rgba(255, 76, 0, ${p.alpha * 0.45})`;
        }
        ctx.fill();
      }

      // Constellation connection lines
      if (mode === 'constellation') {
        for (let i = 0; i < projected.length; i++) {
          for (let j = i + 1; j < projected.length; j++) {
            const dx = projected[i].x - projected[j].x;
            const dy = projected[i].y - projected[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 65) {
              ctx.beginPath();
              ctx.moveTo(projected[i].x, projected[i].y);
              ctx.lineTo(projected[j].x, projected[j].y);
              ctx.strokeStyle = `rgba(255, 76, 0, ${(1 - dist / 65) * 0.25})`;
              ctx.lineWidth = 0.75;
              ctx.stroke();
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [particleCount, mode, theme]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none ${className}`}
      style={{ display: 'block', width: '100%', height: '100%' }}
    />
  );
};

export default SquarespaceCanvas;
