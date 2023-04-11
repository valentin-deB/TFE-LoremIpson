import React, { useState, useEffect } from "react";
import "./Dock.scss";
import "./styles/style-modernMac.scss";
import anime from "animejs";

const Dock: React.FC = () => {

  const [style, setStyle] = useState("modernMac");
  const dock = document.querySelector(".js-dock") as HTMLElement;
  const dockActive = document.querySelector(".js-dock__active") as HTMLElement;
  const dockStatic = document.querySelector(".js-dock__static") as HTMLElement; 


// //================
// //= Dock interractivity
// //================

// // dock animation

// // observe when an icon is added to the dock in order to add it to the animation cycle
// let observer = new MutationObserver((recordedMutations) => {
//   recordedMutations.forEach((mutation) => {
//     mutation.addedNodes.forEach((app) => {
//       let appIcon = app.querySelector(".js-dock__icon");
//       animDockAddEvtList(appIcon);
//       appIcon.style.transform = "scale(1)";
//     });
//   });
// });

// // observe everything except attributes
// observer.observe(dockActive, {
//   childList: true, // observe direct children
//   subtree: true, // and lower descendants too
// });

// // set up basic animation
// function animDock() {
//   let dockApps = dock.querySelectorAll(".js-dock__icon");
//   let arrDockApps = Array.from(dockApps);
//   dockApps.forEach((dockApp) => {
//     animDockAddEvtList(dockApp);
//   });
// }

// // add an addEventListener to the passed application (important when hiding an app)
// function animDockAddEvtList(app: HTMLElement) {
//   app.addEventListener("mouseenter", (evt: Event) => {
//     addAnim(evt, iconAnimDockIn);
//   });
//   app.addEventListener("mouseleave", (evt: Event) => {
//     addAnim(evt, iconAnimDockOut);
//   });
// }

// function addAnim(evt: Event, iconAnimDock: Function) {
//   let dockAppsDyn = dock.querySelectorAll(".js-dock__icon");
//   let arrDockAppsDyn = Array.from(dockAppsDyn);
//   let currentApp = arrDockAppsDyn.indexOf(evt.currentTarget as Node);
//   let appBefore = arrDockAppsDyn.at(currentApp - 1);
//   let appAfter = arrDockAppsDyn.at(currentApp + 1);
//   if (currentApp == 0) {
//     appBefore = null;
//   }
//   iconAnimDock(appBefore, evt.currentTarget as HTMLElement, appAfter);
// }

// function iconAnimDockIn(appBefore: any, currentApp: HTMLElement, appAfter: any) {
//   animeJsTarget(currentApp, 1.3);
//   animeJsTarget(appBefore, 1.1);
//   animeJsTarget(appAfter, 1.1);
// }

// function iconAnimDockOut(appBefore: any, currentApp: HTMLElement, appAfter: any) {
//   animeJsTarget(currentApp, 1);
//   animeJsTarget(appBefore, 1);
//   animeJsTarget(appAfter, 1);
// }

// function animeJsTarget(target: any, scale: number) {
//   anime({
//     targets: target,
//     scale: scale,
//     duration: 10,
//     easing: "easeInOutSine",
//   });
// }

//App render

  return (  
        <>
          <div className="c-dock js-dock">
            <div className="c-dock__static js-dock__static">
              <div
                data-application-name="Finder"
                className="c-dock__app js-dock__app c-dock__app--active"
              >
                <img
                  className="c-dock__icon js-dock__icon"
                  src={`./assets/${style}/dockIcons/finder.png`}
                />
              </div>
              <div
                className="c-dock__app js-dock__app"
                data-application-name="System preferences"
              >
                <img
                  className="c-dock__icon js-dock__icon"
                  src={`./assets/${style}/dockIcons/preferences.png`}
                />
              </div>
              <div
                data-application-name="App Store"
                className="c-dock__app js-dock__app"
              >
                <img
                  className="c-dock__icon js-dock__icon"
                  src={`./assets/${style}/dockIcons/appStore.png`}
                />
              </div>
              <div
                data-application-name="Camera"
                className="c-dock__app js-dock__app"
              >
                <img
                  className="c-dock__icon js-dock__icon"
                  src={`./assets/${style}/dockIcons/camera.png`}
                />
              </div>
              <div
                data-application-name="Photos"
                className="c-dock__app js-dock__app"
              >
                <img
                  className="c-dock__icon js-dock__icon"
                  src={`./assets/${style}/dockIcons/photo.png`}
                />
              </div>
              <div
                className="c-dock__app js-dock__app"
                data-application-name="Mail"
              >
                <img
                  className="c-dock__icon js-dock__icon"
                  src={`./assets/${style}/dockIcons/mail.png`}
                />
              </div>
              <div
                className="c-dock__app js-dock__app"
                data-application-name="Calculator"
              >
                <img
                  className="c-dock__icon js-dock__icon"
                  src={`./assets/${style}/dockIcons/calculator.png`}
                />
              </div>
              <div
                data-application-name="Chrome"
                className="c-dock__app js-dock__app"
              >
                <img
                  className="c-dock__icon js-dock__icon"
                  src={`./assets/${style}/dockIcons/chrome.png`}
                />
              </div>
              <div
                data-application-name="Figma"
                className="c-dock__app js-dock__app"
              >
                <img
                  className="c-dock__icon js-dock__icon"
                  src={`./assets/${style}/dockIcons/figma.png`}
                />
              </div>
            </div>
            <div className="c-dock__active js-dock__active">
              <div
                data-application-name="Trash"
                className="c-dock__app js-dock__app"
              >
                <img
                  className="c-dock__icon js-dock__icon"
                  src={`./assets/${style}/dockIcons/trash.png`}
                />
              </div>
            </div>
          </div>
        </>
  );
};

export default Dock;