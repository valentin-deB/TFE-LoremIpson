import React from "react";
export function Layout({}) {
  return <div className="c-layout js-layout">
        <div className="c-layout__display">
          <div className="c-layout__controls">
            <button disabled className="c-layout__btn c-layout__btn--back js-layout__btn">
              <img src="assets/img/layout/layout__btn-icon--up.png" alt="Bouton pécédent" className="c-layout__btn-icon o-fluidimage" />
            </button>
            <button disabled className="c-layout__btn c-layout__btn--next js-layout__btn">
              <img src="assets/img/layout/layout__btn-icon--down.png" alt="Bouton pécédent" className="c-layout__btn-icon c-layout__btn-icon--invert o-fluidimage" />
            </button>
          </div>
          <div className="c-layout__icon">
            <img className="o-fluidimage" src="assets/img/layout/loremIpsonIcon.png" alt="Logo neumorphique Lorem Ipson" />
          </div>

          <h2 className="c-layout__style js-layout__style">Modern Mac</h2>
        </div>
        <div className="c-layout__screen js-layout__screen"></div>
      </div>;
}
  