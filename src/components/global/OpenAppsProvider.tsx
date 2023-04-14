import React, { createContext, useContext, useState } from "react"; // Import createContext, useContext, and useState from the "react" package

interface OpenedApp { // Create an interface for the OpenedApp type
  id: string; // The ID of the opened app
  component: JSX.Element; // The app itself (a JSX element)
}

interface OpenedAppsContextProps { // Create an interface for the OpenedAppsContextProps type
  openedApps: OpenedApp[]; // The opened apps array
  addNewOpenedApp: (id: string, component: JSX.Element) => void; // The function to add a new app to the opened apps array
  removeOpenedApp: (id: string) => void; // The function to remove an app from the opened apps array
}

const OpenedAppsContext = createContext<OpenedAppsContextProps>({ // Create the context using the OpenedAppsContextProps interface
  openedApps: [], // Set the initial value of the openedApps property to an empty array
  addNewOpenedApp: () => {}, // Set the initial value of the addNewOpenedApp property to an empty function
  removeOpenedApp: () => {}, // Set the initial value of the removeOpenedApp property to an empty function
});

export const useOpenedApps = () => { // Create a custom hook to use the context
  return useContext(OpenedAppsContext); // Return the context
};

interface OpenedAppsProviderProps { // Create an interface for the OpenedAppsProviderProps type
    children: React.ReactNode; // The children property of the component
}

export const OpenedAppsProvider: React.FC<OpenedAppsProviderProps> = ({ children }) => { // Create the provider component
  const [openedApps, setOpenedApps] = useState<OpenedApp[]>([]); // Create the openedApps state

  const addNewOpenedApp = (id: string, component: JSX.Element) => { // Create the addNewOpenedApp function
    setOpenedApps((prevApps) => [...prevApps, { id, component }]); // Set the openedApps state to the previous openedApps array with the new app added to it
  };

  const removeOpenedApp = (id: string) => { // Create the removeOpenedApp function
    setOpenedApps((prevApps) => prevApps.filter((app) => app.id !== id)); // Set the openedApps state to the previous openedApps array with the app removed from it
  };

  return (
    <OpenedAppsContext.Provider
      value={{ openedApps, addNewOpenedApp, removeOpenedApp }} // Set the context value
    >
      {children}
      </OpenedAppsContext.Provider>
  );
};