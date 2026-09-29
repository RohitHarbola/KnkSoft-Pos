'use client';

import React, { createContext, useContext, useState } from 'react';

interface DemoModalContextType {
  isOpen: boolean;
  openDemoModal: (prefillIndustry?: string) => void;
  closeDemoModal: () => void;
  selectedIndustry: string;
}

const DemoModalContext = createContext<DemoModalContextType | undefined>(undefined);

export const DemoModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState('Restaurant / Cafe');

  const openDemoModal = (industry?: string) => {
    if (industry) {
      setSelectedIndustry(industry);
    }
    setIsOpen(true);
  };

  const closeDemoModal = () => {
    setIsOpen(false);
  };

  return (
    <DemoModalContext.Provider value={{ isOpen, openDemoModal, closeDemoModal, selectedIndustry }}>
      {children}
    </DemoModalContext.Provider>
  );
};

export const useDemoModal = () => {
  const context = useContext(DemoModalContext);
  if (!context) {
    throw new Error('useDemoModal must be used within a DemoModalProvider');
  }
  return context;
};
