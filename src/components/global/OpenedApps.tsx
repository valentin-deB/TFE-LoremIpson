import react, { useState } from "react";
import { getApplicationByID } from "./AppManager";

const OpenedApps = () => {
    const [openApps, setOpenApps] = useState([]);

  const openAppByID = (id:string) => {
    const component = getApplicationByID(id).component;
    setOpenApps([...openApps, component]);
  };
  return (
    <div className="applications-open">
      {openApps.map((AppComponent, i) => (
        <div key={i} className="application-open">
          <AppComponent.app />
        </div>
      ))}
    </div>
  );
};

export default OpenedApps;