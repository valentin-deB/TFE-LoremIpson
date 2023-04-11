import React, { useState } from 'react';
import './AppComponent.scss';
import './styles/style-modernMac.scss';

interface WindowProps {
  icon: React.ReactNode;
  name: string;
  place: string;
}

const AppComponent: React.FC<WindowProps> = ({ icon, name, place}) => {

  // App state
  const [isMinimized, setIsMinimized] = useState(true);

  //App functions
 function openApp() {
    console.log("open app")
  }

  return (
    <>
      {place === "dock" ? (
        // dock icon
        <div
          className="c-dock__app js-dock__app"
          data-application-name={name}
          onClick={openApp}
        >
          {icon}
        </div>
      ) : place === "desk" ? (
        // desktop icon
        <div
          className="c-desktop__app"
          data-application-name={name}
          onClick={openApp}
        >
          {icon}
        </div>
      ) : null}
    </>
  );
};

export default AppComponent;