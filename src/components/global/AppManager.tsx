//stocker une liste avec les composants et leurs icones 
// map

import Calculator from "../Apps/calculator/Calculator";

const applications = new Map();
//has pour lui demander si il l'a

//déclarer chaque nouvelle app ici
applications.set("calculator name", {icon: "Calculator icon path", component:Calculator })
applications.set("default", {icon:"path", component:(<div></div>) })


export function getApplicationByID(id:string){
    return applications.has(id) ? applications.get(id) : applications.get("default");
}