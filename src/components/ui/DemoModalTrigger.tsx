'use client';

import React from 'react';
import { useDemoModal } from '@/context/DemoModalContext';

interface DemoModalTriggerProps {
  children: React.ReactNode;
  industry?: string;
  className?: string;
}

export const DemoModalTrigger: React.FC<DemoModalTriggerProps> = ({
  children,
  industry,
  className,
}) => {
  const { openDemoModal } = useDemoModal();

  return (
    <button
      type="button"
      onClick={() => openDemoModal(industry)}
      className={className}
    >
      {children}
    </button>
  );
};
