import React, { createContext, useContext, useState } from "react";

interface OpenedApp {
  id: string;
  component: JSX.Element;
}

interface OpenedAppsContextProps {
  openedApps: OpenedApp[];
  addNewOpenedApp: (id: string, component: JSX.Element) => void;
  removeOpenedApp: (id: string) => void;
}

const OpenedAppsContext = createContext<OpenedAppsContextProps>({
  openedApps: [],
  addNewOpenedApp: () => {},
  removeOpenedApp: () => {},
});

export const useOpenedApps = () => {
  return useContext(OpenedAppsContext);
};

interface OpenedAppsProviderProps {
    children: React.ReactNode;
}

export const OpenedAppsProvider: React.FC<OpenedAppsProviderProps> = ({ children }) => {
  const [openedApps, setOpenedApps] = useState<OpenedApp[]>([]);

  const addNewOpenedApp = (id: string, component: JSX.Element) => {
    setOpenedApps((prevApps) => [...prevApps, { id, component }]);
  };

  const removeOpenedApp = (id: string) => {
    setOpenedApps((prevApps) => prevApps.filter((app) => app.id !== id));
  };

  return (
    <OpenedAppsContext.Provider
      value={{ openedApps, addNewOpenedApp, removeOpenedApp }}
    >
      {children}
    </OpenedAppsContext.Provider>
  );
};