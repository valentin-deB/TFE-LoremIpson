import React from "react";
import "./Screen.scss";
import "./styles/style-modernMac.scss";

//assets
import Menu from "./assets/components/menu/Menu";
import Dock from "./assets/components/dock/Dock";

//apps
import AppIcon from "../global/appIcon/AppIcon";
import Calculator from "../Apps/calculator/Calculator";

var style:string = "style-modernMac";

const Screen = () => {
  
  return(
        <div className="c-screen js-screen">
          <div className="c-screen__overlay js-screen__overlay"></div>
          <Menu/>
          <div className="o-container js-container">
            <AppIcon name="calculator" dock={false} />
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
          <Dock></Dock>
      </div>
  );
}

export default Screen;
    