import React from "react";
import "./Appicon.scss";
import "./styles/style-modernMac.scss";
import { getApplicationByID } from "../AppManager";
import { useOpenedApps } from "../OpenAppsProvider";

interface AppIconProps {
  name: string;
  dock: boolean;
}

const Appicon: React.FC<AppIconProps> = ({ name, dock }) => {
  const iconPath = getApplicationByID(name).icon;
  const { addNewOpenedApp } = useOpenedApps();

  function openApp() {
    const app = getApplicationByID(name);
    addNewOpenedApp(app.name, <app.component />);
  }

  return (
    <>
      {dock ? (
        // dock icon
        <div
          className="c-dock__app"
          data-application-name={name}
          onClick={openApp}
        >
          <img src={iconPath} className="c-dock__icon js-dock__icon" alt="App Icon" />
        </div>
      ) : (
        // desktop icon
        <div
          className="c-desktop__app"
          data-application-name={name}
          onClick={openApp}
        >
          <img src={iconPath} className="c-desktop__icon" alt="App Icon" />
        </div>
      )}
    </>
  );
};

export default Appicon;