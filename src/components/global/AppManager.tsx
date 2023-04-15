// Import all apps
import Figma from "../Apps/figma/Figma";
import Calculator from "../Apps/calculator/Calculator";
import Trash from "../Apps/trash/Trash";

// Declare arrays of apps
export const dockApps = [Calculator, Figma];
export const dockAppsActives = [Trash];

// Combine arrays of apps
const allApplicationsList = [...dockApps, ...dockAppsActives];

// Initialize map of applications
const applications = new Map();

// Add each application to the map
allApplicationsList.forEach((app)=>{
    // Add the application to the map
    applications.set(app.name, {
        icon: "/public/appIcons/modernMac/" + app.name + ".png",
        component: app,
        name: app.name
    });
});

// Add a default application to the map
applications.set("default", {
    icon: "path",
    component: (<div>Pas d'app</div>),
});

// Define a function to get an application by ID
export function getApplicationByID(id: string) {
    return applications.has(id) ? applications.get(id) : applications.get("default");
}
