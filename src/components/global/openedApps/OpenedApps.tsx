import React from "react";
import { useOpenedApps } from "../OpenAppsProvider";

interface OpenedAppsProps {
  // add props here
}

const OpenedApps: React.FC<OpenedAppsProps> = (
  {
    // add props here
  }
) => {
  const { openedApps } = useOpenedApps();

  return (
    <div className="c-opened-apps">
      {openedApps.map((app, i) => (
        //incrément the i to avoid duplicate key
        <React.Fragment key={app.id + i}>{app.component}</React.Fragment>
      ))}
    </div>
  );
};

export default OpenedApps;