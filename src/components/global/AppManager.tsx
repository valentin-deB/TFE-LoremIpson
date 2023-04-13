import react, { useState } from "react";

//importer toutes les apps
import Calculator from "../Apps/calculator/Calculator";

//déclarer chaque nouvelle app ici
let applicationsList = [Calculator]


//GetApplicationByID

const applications = new Map();

applicationsList.forEach((app)=>{
    //on ajoute l'application dans la map
    applications.set(app.name, {icon: "/public/appIcons/modernMac/" + app.name + ".png", component:app })
})
applications.set("default", {icon:"path", component:(<div>Pas d'app</div>) })


export function getApplicationByID(id:string){
    return applications.has(id) ? applications.get(id) : applications.get("default");
}

// // Function to open an app by ID
// export function openAppByID(id:string, setOpenedApps) {
//     const component = getApplicationByID(id);
//     const AppComponent = component;
  
//     // Add opened app to the list of opened apps
//     setOpenedApps((prevApps) => {
//       return [...prevApps, { id: id, component: <AppComponent /> }];
//     });
//   }