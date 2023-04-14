import { useState } from "react";

//importer toutes les apps
import Calculator from "../Apps/calculator/Calculator";

//déclarer chaque nouvelle app ici
const allApplicationsList = [Calculator]


//GetApplicationByID

const applications = new Map();

allApplicationsList.forEach((app)=>{
    //on ajoute l'application dans la map
    applications.set(app.name, {icon: "/public/appIcons/modernMac/" + app.name + ".png", component:app, name:app.name })
})
applications.set("default", {icon:"path", component:(<div>Pas d'app</div>) })


export function getApplicationByID(id:string){
    return applications.has(id) ? applications.get(id) : applications.get("default");
}