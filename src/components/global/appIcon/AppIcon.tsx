import React, { useState } from 'react';
import './Appicon.scss';
import './styles/style-modernMac.scss';
import { getApplicationByID } from '../AppManager';

interface AppIconrops {
  name: string;
  dock: boolean;
}

const Appicon: React.FC<AppIconrops> = ({name, dock}) => {

  // App state
  // const [isMinimized, setIsMinimized] = useState(true);
  const iconPath = getApplicationByID(name).icon;

  //App functions
 function openApp() {
    console.log("open app")
    
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