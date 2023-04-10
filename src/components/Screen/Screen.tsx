import React from "react";
import "./Screen.scss";
import "./styles/style-modernMac.scss";

//assets
import Menu from "./assets/components/Menu/Menu";

//apps
import Calculator from "../Apps/Calculator/Calculator";

var style:string = "style-modernMac";

const Screen = () => {
  
  return(
        <div className="c-screen js-screen">
          <div className="c-screen__overlay js-screen__overlay"></div>
          <Menu></Menu>
          <div className="o-container js-container">
            <Calculator windowId='1' currentStyle='ModernMac'/>
            <div className="c-desktop js-desktop">
              <div
                className="c-desktop__element js-desktop__element"
                data-drag="draggable"
                data-type="folder"
                data-drop="droppable"
                data-application-name="Folder"
                data-extention=""
              >
                <div className="c-desktop__icon js-desktop__icon">
                  <img
                    className="c-desktop__icon-img js-desktop__icon-img o-fluidimage"
                    src={`./assets/${style}/desktopIcons/folder.png`}
                    alt="Folder"
                  />
                </div>
                <p className="c-desktop__name js-desktop__name">Utilted01</p>
              </div>
              <div
                className="c-desktop__element js-desktop__element"
                data-drag="draggable"
                data-type="slide"
                data-drop="droppable"
                data-application-name="Slides"
                data-extention=".sld"
                data-n-pages="4"
              >
                <div className="c-desktop__icon js-desktop__icon">
                  <img
                    className="c-desktop__icon-img js-desktop__icon-img o-fluidimage"
                    src="assets/img//modernMac/desktopIcons/slides.png"
                    alt="Icon Logo"
                  />
                </div>
                <p className="c-desktop__name js-desktop__name">SlidesTest</p>
              </div>
              <div
                className="c-desktop__element js-desktop__element"
                data-drag="draggable"
                data-type="image"
                data-drop="droppable"
                data-application-name="Photos"
                data-extention=".jpg"
              >
                <div className="c-desktop__icon js-desktop__icon">
                  <img
                    className="c-desktop__icon-img js-desktop__icon-img c-desktop__icon-img--image"
                    src="assets/img/constantImages/hans-ott-oxkf_pBlR7o-unsplash.jpg"
                    alt="Image"
                  />
                </div>
                <p className="c-desktop__name js-desktop__name">ImageTest</p>
              </div>
              <div
                className="c-desktop__element js-desktop__element"
                data-drag="draggable"
                data-type="folder"
                data-drop="droppable"
                data-application-name="Folder"
                data-extention=""
              >
                <div className="c-desktop__icon js-desktop__icon">
                  <img
                    className="c-desktop__icon-img js-desktop__icon-img o-fluidimage"
                    src={`./assets/${style}/desktopIcons/folder.png`}
                    alt="Folder"
                  />
                </div>
                <p className="c-desktop__name js-desktop__name">Utilted</p>
              </div>
            </div>
          </div>
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
      </div>
  );
}

export default Screen;
    