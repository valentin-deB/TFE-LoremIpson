import React, { useState } from 'react';
import './AppWindow.scss';
import './styles/style-modernMac.scss';

interface AppWindowProps {
  children: React.ReactElement;
}

const AppWindow: React.FC<AppWindowProps> = ({ children}) => {

  return (
    <div className="c-window " data-type="window" data-drag="draggable-dragger">
        <div data-drag="dragger" className="c-window__head js-window__head">
          <ul className="c-window__controls">
            <li>
              <button
                className="c-window__control c-window__control--quit"
                onClick={() => console.log('quit')}
              >
                <svg   
                  className="c-window__control-icon"
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.29468 1.55566L5.81547 5.07645M9.36575 8.62673L5.81547 5.07645M5.81547 5.07645L9.33429 1.55763M5.81547 5.07645L2.26322 8.6287"
                    stroke="black"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </li>
            <li>
              <button
                data-window-control="hide"
                className="c-window__control c-window__control--hide"
                onClick={() => console.log('hide')}
              >
                <svg
                  className="c-window__control-icon"
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.409668 5.10791H10.4097"
                    stroke="black"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </li>
            <li>
              <button
                data-window-control="scale"
                className="c-window__control c-window__control--scale"
                onClick={() => console.log('scale')}
              >
                <svg
                  className="c-window__control-icon"
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.32202 1.84436H8.8491V8.37143H2.32202V1.84436Z"
                    stroke="black"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </div>
        <div className="c-window__content js-window__content">
          {children}
        </div>
    </div>
  );
};

export default AppWindow;