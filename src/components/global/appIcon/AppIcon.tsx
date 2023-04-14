// Appicon.tsx
import React from 'react';
import './Appicon.scss';
import './styles/style-modernMac.scss';
import { getApplicationByID } from '../AppManager';
import { useOpenedApps } from '../openedApps/OpenedApps';

interface AppIconProps {
  name: string;
  dock: boolean;
}

const Appicon: React.FC<AppIconProps> = ({name, dock}) => {
  
  const iconPath = getApplicationByID(name).icon;
  const { addNewOpenedApp } = useOpenedApps();

  //App functions
  function openApp() {
    console.log("open app")
    const app = getApplicationByID(name);
    addNewOpenedApp(app.component);
  }

  return (
    <>
      {dock ? (
        // dock icon
        <div
          className="c-dock__app js-dock__app"
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
          <img src={iconPath} className="c-dock__icon js-dock__icon" alt="App Icon" />
        </div>
      )}
    </>
  );
};

export default Appicon;