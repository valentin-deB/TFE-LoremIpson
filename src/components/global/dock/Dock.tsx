import React, { useState, useEffect } from "react";
import "./Dock.scss";
import "./styles/style-modernMac.scss";
import AppIcon from "../appIcon/AppIcon";
import { dockApps, dockAppsActives } from "../AppManager";


const Dock: React.FC = () => {

  //App render

  return (  
    <>
      <div className="c-dock js-dock">
        {dockApps.map((app, i) => (
          <AppIcon name={app.name} dock={true} key={app.name + i} />
        ))}
        <div className="c-dock__active js-dock__active">
          {dockAppsActives.map((app, i) => (
            <AppIcon name={app.name} dock={true} key={app.name + i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Dock;
