//importer toutes les apps

import Calculator from "../Apps/calculator/Calculator";


const applications = new Map();
//has pour lui demander si il l'a

//déclarer chaque nouvelle app ici
let applicationsList = [Calculator]

//pour chaque app dans la liste
applicationsList.forEach((app)=>{
    //on ajoute l'application dans la map
    applications.set(app.name, {icon: "/public/appIcons/modernMac/" + app.name + ".png", component:app })
})
applications.set("default", {icon:"path", component:(<div>Pas d'app</div>) })


export function getApplicationByID(id:string){
    return applications.has(id) ? applications.get(id) : applications.get("default");
}