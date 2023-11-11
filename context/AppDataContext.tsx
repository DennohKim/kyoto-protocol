'use client';

import { Planting } from '@/interfaces/types';
import React, {
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from 'react';



export interface IAppDataContext {
  showInfoTab: boolean;
  setShowInfoTab: React.Dispatch<SetStateAction<boolean>>;
  infoTabAsset: Planting;
  setInfoTabAsset: React.Dispatch<SetStateAction<any>>;
}

export const AppDataContext = createContext<IAppDataContext>(
  {} as IAppDataContext
);

export const AppDataProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [showInfoTab, setShowInfoTab] = useState<boolean>(false);
  const [infoTabAsset, setInfoTabAsset] = useState<Planting>({} as Planting);

  return (
    <AppDataContext.Provider
      value={{
        showInfoTab: showInfoTab,
        setShowInfoTab: setShowInfoTab,
        infoTabAsset: infoTabAsset,
        setInfoTabAsset: setInfoTabAsset,
      }}
    >
      {children}
    </AppDataContext.Provider>
  );
};

export default AppDataContext;
