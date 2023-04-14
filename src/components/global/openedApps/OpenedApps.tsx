import React, { useState, useEffect } from "react";

interface OpenedAppsProps {
  // add props here
}

const OpenedApps: React.FC<OpenedAppsProps> = (
  {
    // add props here
  }
) => {
  // Component states and functions
  const [openedApps, setOpenedApps] = useState<OpenedApp[]>([]);
  const { addNewOpenedApp } = useOpenedApps();

  useEffect(() => {
    addNewOpenedApp(setOpenedApps);
  }, [addNewOpenedApp]);

  // Component render
  return (
    <div>
      {openedApps.map((app, i) => (
        <React.Fragment key={app.id}>{app.component}</React.Fragment>
      ))}
    </div>
  );
};

//OpenedApp
interface OpenedApp {
  id: string;
  component: JSX.Element;
}

const useOpenedApps = () => {
  const [setOpenedApps, _setOpenedApps] = useState<((apps: OpenedApp[]) => void) | null>(null);

  const addNewOpenedApp = (setOpenedAppsFunc: (apps: OpenedApp[]) => void) => {
    console.log("add new opened app")
    _setOpenedApps(() => setOpenedAppsFunc);
  };

  return { addNewOpenedApp };
};

export { OpenedApps, useOpenedApps };