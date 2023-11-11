'use client';

import React, {
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from 'react';



export interface IAppDataContext {
  showInfoTab: boolean;
  setShowInfoTab: React.Dispatch<SetStateAction<boolean>>;
  infoTabAsset: any;
  setInfoTabAsset: React.Dispatch<SetStateAction<any>>;
}

export const AppDataContext = createContext<IAppDataContext>(
  {} as IAppDataContext
);

export const AppDataProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [showInfoTab, setShowInfoTab] = useState<boolean>(false);
  const [infoTabAsset, setInfoTabAsset] = useState<any>({} as any);

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
