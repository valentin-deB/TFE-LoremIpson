import React, { useState, useEffect } from "react";
import "./Menu.scss";
import "./styles/style-modernMac.scss";

//images import
import logoLoremIpson from "./assets/style-modernMac/logoLoremIpson.png";
import wifiIcon from "./assets/style-modernMac/wifiIcon.png";
import controlCenterIcon from "./assets/style-modernMac/controlCenterIcon.png";
import searchIcon from "./assets/style-modernMac/searchIcon.png";


// interface MenuProps {
//   windowId: string;
//   currentStyle: string;
// }

// const Menu: React.FC<MenuProps> = ({
const Menu: React.FC = ({

}) => {

const [style, setStyle] = useState("style-modernMac");

  //App render

  return (  
        <>
            <div className="c-menu-bar">
            <ul className="c-menu-bar__left">
              <li className="c-menu-bar__item">
                <button className="c-menu-bar__btn js-menu-bar__logo">
                  <img
                    className="c-menu-bar__icon"
                    src={logoLoremIpson}
                    alt="logoLoremIpson"
                  />
                </button>
              </li>
              <li className="c-menu-bar__item c-menubar__application">
                <button data-menu-bar="Files" className="c-menu-bar__btn">
                  Files
                </button>
              </li>
              <li className="c-menu-bar__item">
                <button data-menu-bar="Edit" className="c-menu-bar__btn">
                  Edit
                </button>
              </li>
              <li className="c-menu-bar__item">
                <button data-menu-bar="View" className="c-menu-bar__btn">
                  View
                </button>
              </li>
              <li className="c-menu-bar__item">
                <button data-menu-bar="Go" className="c-menu-bar__btn">
                  Go
                </button>
              </li>
              <li className="c-menu-bar__item">
                <button data-menu-bar="View" className="c-menu-bar__btn">
                  Window
                </button>
              </li>
              <li className="c-menu-bar__item">
                <button data-menu-bar="Help" className="c-menu-bar__btn">
                  Help
                </button>
              </li>
            </ul>
            <ul className="c-menu-bar__rigth">
              <li className="c-menu-bar__item">
                <button className="c-menu-bar__btn" data-menu-bar="Wifi">
                  <img
                    className="c-menu-bar__icon"
                    src={wifiIcon}
                    alt="icon Wifi"
                  />
                </button>
              </li>
              <li className="c-menu-bar__item">
                <button className="c-menu-bar__btn" data-menu-bar="Search">
                  <img
                    className="c-menu-bar__icon"
                    src={searchIcon}
                    alt="icon Search"
                  />
                </button>
              </li>
              <li className="c-menu-bar__item">
                <button
                  className="c-menu-bar__btn"
                  data-menu-bar="Control center"
                >
                  <img
                    className="c-menu-bar__icon"
                    src={controlCenterIcon}
                    alt="icon Control center"
                  />
                </button>
              </li>
              <li className="c-menu-bar__item" data-menu-bar="Date">
                <button className="c-menu-bar__btn js-mennubar__btn--date c-mennubar__btn--date">
                  Sat 25 Jun
                </button>
              </li>
              <li className="c-menu-bar__item">
                <button
                  className="c-menu-bar__btn js-mennubar__btn--hour"
                  data-menu-bar="Hour"
                >
                  17:13
                </button>
              </li>
            </ul>
          </div>
        </>
  );
};

export default Menu;