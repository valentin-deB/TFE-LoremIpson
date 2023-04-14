import React from "react";
import { useOpenedApps } from "../OpenAppsProvider";
import AppWindow from "../appWindow/AppWindow";

import "./OpenedApps.scss";


const OpenedApps: React.FC = (
  
) => {
  const { openedApps } = useOpenedApps();

  return (
    <div className="c-opened-apps">
      {openedApps.map((app, i) => (
        //incrément the i to avoid duplicate key
        <AppWindow id={app.id} children={app.component} key={app.id + i}/>
      ))}
    </div>
  );
};

export default OpenedApps;