"use client";

import AppDataContext, { IAppDataContext } from '@/context/AppDataContext';
import { useContext } from 'react';

function useAppDataContext(): IAppDataContext {
  const context = useContext(AppDataContext);
  if (context === undefined) {
    throw new Error('useAppDataContext must be used within an AppDataProvider');
  }
  return context;
}

export default useAppDataContext;
