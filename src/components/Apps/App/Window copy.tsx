import React, { Component } from 'react';

// Replace the switch with onClick on the buttons

export default class IpsonWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowId: props.windowId,
      applicationName: props.applicationName,
      iconPath: props.iconPath,
      hideState: false,
      scaleState: false,
      oldTransform: '',
      oldWidth: null,
      oldHeight: null,
      oldX: null,
      oldY: null,
      containerWidth: null,
      containerHeight: null,
    };
  }

  componentDidMount() {
    this.addInteractivity();
  }

  addInteractivity() {
    this.addWindowInteractivity();
    this.addContentInteractivity();
  }

  // Add your interactivity methods here
  // Add event listeners for window controls
addWindowInteractivity() {
    this.icon.addEventListener("click", this.removeStateHide);
  
    this.allBtn.forEach((button) => {
      button.addEventListener("click", () => {
        this.windowControlAction(button.dataset.windowControl);
      });
    });
  }
  
  // Perform actions based on the window control clicked
  windowControlAction(action) {
    this.setState((prevState) => {
      const scaleState = prevState.scaleState;
      const hideState = prevState.hideState;
  
      switch (action) {
        case "quit":
          this.display.remove();
          break;
  
        case "hide":
          if (hideState) {
            this.removeStateHide();
          } else {
            this.addStateHide();
          }
          break;
  
        case "scale":
          if (scaleState) {
            this.removeStateScale();
          } else {
            this.addStateScale();
          }
          break;
  
        default:
          break;
      }
  
      return null;
    });
  }
  
  // Add or remove state for hiding the window
  addStateHide() {
    // this.activeDock.prepend(this.dockApp);
    this.display.setAttribute("data-drag", "static");
    this.display.style.display = "none";
    this.setState({ hideState: true });
  
    if (this.state.scaleState) {
      this.removeStateScale();
    }
  }
  
  removeStateHide() {
    // this.activeDock.removeChild(this.dockApp);
    this.display.setAttribute("data-drag", "draggable");
    this.container.appendChild(this.display);
    this.display.style.display = "";
    this.setState({ hideState: false });
  }
  
  // Add or remove state for scaling the window
  addStateScale() {
    const { container } = this;
    const oldWidth = this.content.offsetWidth;
    const oldHeight = this.content.offsetHeight;
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const oldTransform = this.display.style.transform;
    const oldX = this.display.getAttribute("data-x");
    const oldY = this.display.getAttribute("data-y");
  
    this.display.classList.add("state--big");
    this.display.classList.remove("state--hide");
    this.display.style.width = `${containerWidth}px`;
    this.display.style.height = `${containerHeight}px`;
    this.content.style.width = "100%";
    this.content.style.height = "100%";
    this.display.style.transform = "translate(0,0)";
    this.display.setAttribute("data-x", "0");
    this.display.setAttribute("data-y", "0");
  
    this.setState({
      scaleState: true,
      oldWidth,
      oldHeight,
      oldTransform,
      oldX,
      oldY,
      containerWidth,
      containerHeight,
    });
  
    if (this.state.hideState) {
      this.removeStateHide();
    }
  }
  
  removeStateScale() {
    const { oldWidth, oldHeight, oldTransform, oldX, oldY } = this.state;
    
    this.display.classList.remove("state--big");
    this.display.style.transform = oldTransform;
    this.display.setAttribute("data-x", oldX);
    this.display.setAttribute("data-y", oldY);
    this.display.style.height = "fit-content";
    this.display.style.width = "fit-content";
    this.content.style.width = `${oldWidth}px`;
    this.content.style.height = `${oldHeight}px`;
  
    this.setState({ scaleState: false });
  }

  /**
   * Différent pour chaque window
   */
  addContentInteractivity() {
    // rien par défault
  }
  
  // Add interactivity specific to the content of the window

  render() {
    const { windowId, applicationName, iconPath } = this.props;
  
    return (
      <div className="c-window" data-type="window" data-drag="draggable-dragger">
        <div className="c-window__head js-window__head">
          <ul className="c-window__controls">
            <li>
              <button
                className="c-window__control c-window__control--quit"
                onClick={() => this.windowControlAction("quit")}
              >
                {/* Add your SVG element for the quit button */}
                <svg
                  className="c-window__control-icon"
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* ... */}
                </svg>
              </button>
            </li>
            <li>
              <button
                data-window-control="hide"
                className="c-window__control c-window__control--hide"
                onClick={() => this.windowControlAction("hide")}
              >
                {/* Add your SVG element for the hide button */}
                <svg
                  className="c-window__control-icon"
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* ... */}
                </svg>
              </button>
            </li>
            <li>
              <button
                data-window-control="scale"
                className="c-window__control c-window__control--scale"
                onClick={() => this.windowControlAction("scale")}
              >
                {/* Add your SVG element for the scale button */}
                <svg
                  className="c-window__control-icon"
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* ... */}
                </svg>
              </button>
            </li>
          </ul>
        </div>
        <div className="c-window__content js-window__content">
          {/* Add your content components */}
          {/* ... */}
        </div>
      </div>
    );
  }
}