import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import interact from 'interactjs'
import anime from 'animejs'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

//js
// @TODO: add typescript, add interaction to components sort system

function myRandom(min:number, max:number) {
  var newRandom = Math.random() * (max - min) + min;
  return newRandom;
}

// interractions
//=====================
//=Drag
//=====================

//--------------------
//=Draggable
//--------------------

//Make somthing draggable
//Data attribute data-drag="draggable"

interact('[data-drag="draggable"]').draggable({
  listeners: {
    move: dragMoveListener,
    end: function (event) {
      event.target.classList.remove("is-moving");
      event.target.setAttribute("data-state", "static");
    },
  },

  inertia: {
    resistance: 75,
  },
  //keep cursor normal
  cursorChecker() {},
});

/**
 * fonction qui utilise l'event (listener) pour faire son action
 *      ajoute une classe
 *      defini la position de l'élément grace à ses attributs et la modifie grace à transform translate
 *   en y ajoutant (dx, dy) difference x et y qu'il y a eu lors du drag
 *      fini en mettant a jour les attributs pour connaitre sa position une prochaine fois
 *
 * @param {*} event
 */

function dragMoveListener(event: any) {
  var target = event.target;

  target.setAttribute("data-state", "moving");
  target.classList.add("is-moving");

  // keep the dragged position in the data-x/data-y attributes
  var x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
  var y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

  // translate the element
  target.style.transform = "translate3D(" + x + "px, " + y + "px ,0)";

  // update the posiion attributes
  target.setAttribute("data-x", x);
  target.setAttribute("data-y", y);
}

//--------------------
//=Draggable
//--------------------

// Make something draggable with a dragger
// data attribute data-drag="draggable-dragger"
// go with another drag attribute for the dragger data attribute data-drag="dragger"

interact('[data-drag="draggable-dragger"]').draggable({
  listeners: {
    move: dragMoveListener,
    end: function (event) {
      event.target.classList.remove("is-moving");
      event.target.setAttribute("data-state", "static");
    },
  },

  //only the head is draggable
  allowFrom: '[data-drag="dragger"]',
  inertia: {
    resistance: 75,
  },
  //keep cursor normal
  cursorChecker() {},
});

//=====================
//=Folder
//=====================

interact('[data-type="folder"]').dropzone({
  accept: '[data-drop="droppable"]',
  ondrop: function (event) {
    // set to 0 his dragging attributes
    event.relatedTarget.setAttribute("data-x", 0);
    event.relatedTarget.setAttribute("data-y", 0);
    event.relatedTarget.style.transform = "translate3D(0,0,0)";

    event.target.filesContains.push(event.relatedTarget);
    event.relatedTarget.style.display = "none";
  },
});


//=====================
//=FolderWindow
//=====================

interact('[data-type="folderWindow"]').dropzone({
  accept: '[data-drop="droppable"]',
  ondrop: function (event: Interact.DropzoneDropEvent) {
    let folderWindow = event.target as HTMLElement;
    let droppedElement = event.relatedTarget as HTMLElement;
    if (droppedElement != folderWindow.parent) {
      folderWindow.parent.filesContains.push(droppedElement);
      folderWindow.appendChild(droppedElement);
    }
  },

  ondragleave: function (event: Interact.DropzoneDragLeaveEvent) {
    let folderWindow = event.target as HTMLElement;
    let droppedElement = event.relatedTarget as HTMLElement;
    let newParent = event._interaction._latestPointer.eventTarget as HTMLElement;
    let elementImg = droppedElement.querySelector(".c-desktop__icon-img") as HTMLElement;
    if (newParent != elementImg) {
      newParent.appendChild(droppedElement);
      let filesContains = folderWindow.parent.filesContains;
      let index = filesContains.indexOf(droppedElement);
      filesContains.splice(index, 1);
    }
  },
});

//=====================
//=Trash
//=====================

interact(".trash").dropzone({
  accept: ".trashdrop",
  ondrop: function (event: Interact.DropzoneDropEvent) {
    event.target.classList.add("drop-activated");
    event.relatedTarget.classList.add("dropped");
    event.relatedTarget.style.opacity = "0";
  },

  ondragleave: function (event: Interact.DropzoneDragLeaveEvent) {
    event.target.classList.remove("drop-activated");
    event.relatedTarget.classList.remove("dropped");
    event.target.parentElement?.appendChild(event.relatedTarget);
  },
});

// ipson system

let onFocus: any;
const container = document.querySelector(".js-container") as HTMLElement;
const screen = document.querySelector(".js-screen") as HTMLElement;
const layout = document.querySelector(".js-layout") as HTMLElement;
const dock = document.querySelector(".js-dock") as HTMLElement;
const dockActive = document.querySelector(".js-dock__active") as HTMLElement;
const dockStatic = document.querySelector(".js-dock__static") as HTMLElement;
const style1 = {} as {name: string; call: string};
style1.name = "Modern Mac";
style1.call = "modernMac";
const style2 = {} as {name: string; call: string};
style2.name = "One Bit";
style2.call = "1bit";
var currentStyle = style1;

systemStart();

//================
//= System Start
//================

function systemStart() {
  applyStyle(style1);
  setDesktop();
  animDock();
  addIteractivityToLayout();

  let staticApps = dockStatic.querySelectorAll(".js-dock__app");
  staticApps.forEach((app) => {
    app.addEventListener("click", openNewApp);
  });
}

//================
//= Desktop
//================

//mise en place du desktop
//propriétés des éléments, sélection
//ouvrir l'application au dblclick
function setDesktop(): void {
  container.addEventListener("mousedown", function () {
    let previousSelection = document.querySelector(
      "[data-selection= selected]"
    );
    let previousOpenSelection = document.querySelector(
      "[data-selection= open]"
    );
    if (previousSelection) {
      removeSelect(previousSelection);
    }
    if (previousOpenSelection) {
      removeOpenSelect(previousOpenSelection);
    }
  });

  let allDeskelements = container.querySelectorAll(".js-desktop__element");
  allDeskelements.forEach((element) => {
    element.style.left = `${myRandom(5, 85)}vw`;
    element.style.top = `${myRandom(5, 70)}vh`;
    element.p = element.querySelector(".js-desktop__name");
    element.extention = element.dataset.extention;
    element.name = element.p.textContent;
    element.p.textContent = `${element.name}${element.extention}`;
    element.icon = element.querySelector(".js-desktop__icon");
    element.iconImg = element.querySelector(".js-desktop__icon-img");
    element.type = element.dataset.type;
    element.addEventListener("mouseup", function (evt) {
      addSelect(evt);
    });
    if (element.type == "folder") {
      setFolder(element);
    }
    element.addEventListener("dblclick", function (evt) {
      openNewApp(evt);
      addOpenSelect(evt);
    });
  });
}

function removeSelect(previousSelection: HTMLElement): void {
  previousSelection.icon.classList.remove("sate__selected-icon");
  previousSelection.p.classList.remove("sate__selected-p");
  previousSelection.removeAttribute("data-selection");
}

function addSelect(evt: MouseEvent): void {
  let element = evt.currentTarget as HTMLElement;
  element.icon.classList.add("sate__selected-icon");
  element.p.classList.add("sate__selected-p");
  element.setAttribute("data-selection", "selected");
}

function removeOpenSelect(previousSelection: HTMLElement): void {
  previousSelection.removeAttribute("data-selection");
  previousSelection.icon.classList.remove("sate__selected-icon");
  previousSelection.p.classList.remove("sate__selected-p--open");
}

function addOpenSelect(evt: MouseEvent): void {
  let element = evt.currentTarget as HTMLElement;
  removeSelect(element);
  element.icon.classList.add("sate__selected-icon");
  element.p.classList.add("sate__selected-p--open");
  element.setAttribute("data-selection", "open");
}

function setFolder(folder: HTMLElement & { filesContains?: HTMLElement[] }): void {
  folder.filesContains = [];
}



//================
//= Layout
//================

//Met en place le fonctionnemnt du layout
function addIteractivityToLayout() {
  //activer le layout de changment de style au dbl click
  let logoIpson = document.querySelector(".js-menu-bar__logo");
  let allLayoutBtn = document.querySelectorAll(".js-layout__btn");
  logoIpson.addEventListener("click", function () {
    layout.style.pointerEvents = "auto";
    layout.style.transform = "scale(1)";
    screen.style.transform = "scale(0.7)";
    allLayoutBtn.forEach((btn) => {
      btn.removeAttribute("disabled");
    });
  });
  //ajouter le changment de style au click du btn
  layout.style.transform = "scale(1.5)";
  allLayoutBtn.forEach((btn) => {
    btn.addEventListener("mouseup", function () {
      if (currentStyle == style1) {
        applyStyle(style2);
      } else {
        applyStyle(style1);
      }
      //changer le nom qui s'affiche lorsqu'on change de style
      let displayStyle = document.querySelector(".js-layout__style");
      displayStyle.textContent = currentStyle.name;
    });
  });
  let layoutScreen = document.querySelector(".js-layout__screen");

  layoutScreen.addEventListener("mouseup", function () {
    layout.style.pointerEvents = "none";
    layout.style.transform = "scale(1.5)";
    screen.style.transform = "scale(1)";
    allLayoutBtn.forEach((btn) => {
      btn.setAttribute("disabled", "");
    });
  });
}

//================
//= OpenApp
//================

//Fait ouvrir les app ou erreur si l'app n'existe pas
function openNewApp(evt) {
  let app = evt.currentTarget;
  let appName = app.dataset.applicationName;

  if (appName == "Calculator") {
    createCalculator();
  } else if (appName == "Photos") {
    createPhoto(app);
  } else if (appName == "Folder") {
    createFolder(app);
  } else if (appName == "Slides") {
    createSlides(app);
  } else {
    let iconPath = app.querySelector(".js-dock__icon").getAttribute("src");
    const appError = new IpsonError(appName, iconPath, currentStyle.call);
    appError.build();
  }
}

//mets en place le focus et ajoute l'app sur l'écran
function setNewApp(app) {
  app.display.setAttribute("data-focus", "onFocus");
  app.display.classList.add("state__on-focus");
  container.appendChild(app.display);
  app.display.addEventListener("mousedown", componentGetFocus);
  onFocus = container.querySelector('[data-focus="onFocus"]');
}

//================
//= Create calculator app
//================

function createCalculator() {
  checkFocus();

  const calculator = new IpsonCalculator("fenetre1579", currentStyle.call);
  calculator.build();
  // derriere build(), il va se passer buildWindow() et buildContent().
  // buildContent() est redifini sur IpsonCalculator
  // permettant de créer le contenu html de la calculator sans devoir réecrire le code de MyWindow

  // on peut aussi ajouter des interactions
  calculator.addInteractivity();
  // derriere addInteractivity(), il va se passer addWindowInteractivity() et addContentInteractivity()
  // addWindowInteractivity() va permettre de deplacer, fermer, minimiser toute fenetre
  // addContentInteractivity() va permettre l'interaction propre à la calculator
  setNewApp(calculator);
}

//================
//= Create Photo App
//================

function createPhoto(app) {
  checkFocus();

  const photo = new IpsonPhoto("fenetre1479", currentStyle.call, app);
  photo.build();
  // derriere build(), il va se passer buildWindow() et buildContent().
  // buildContent() est redifini sur IpsonCalculator
  // permettant de créer le contenu html de la calculator sans devoir réecrire le code de MyWindow

  // on peut aussi ajouter des interactions
  photo.addInteractivity();
  photo.setFullScreen();

  // derriere addInteractivity(), il va se passer addWindowInteractivity() et addContentInteractivity()
  // addWindowInteractivity() va permettre de deplacer, fermer, minimiser toute fenetre
  // addContentInteractivity() va permettre l'interaction propre à la calculator

  setNewApp(photo);
}

//================
//= Create IsponSlide App
//================

function createSlides(app) {
  checkFocus();

  const slides = new IpsonSlides("fenetre1479", currentStyle.call, app);
  slides.build();
  // derriere build(), il va se passer buildWindow() et buildContent().
  // buildContent() est redifini sur IpsonCalculator
  // permettant de créer le contenu html de la calculator sans devoir réecrire le code de MyWindow

  // on peut aussi ajouter des interactions
  slides.addInteractivity();
  slides.setFullScreen();
  // derriere addInteractivity(), il va se passer addWindowInteractivity() et addContentInteractivity()
  // addWindowInteractivity() va permettre de deplacer, fermer, minimiser toute fenetre
  // addContentInteractivity() va permettre l'interaction propre à la calculator

  setNewApp(slides);
}

//================
//=Create Folder App
//================

function createFolder(app) {
  checkFocus();
  const folder = new IpsonFolder("fenetre1479", currentStyle.call, app);
  folder.build();
  // derriere build(), il va se passer buildWindow() et buildContent().
  // buildContent() est redifini sur IpsonCalculator
  // permettant de créer le contenu html de la calculator sans devoir réecrire le code de MyWindow

  // on peut aussi ajouter des interactions
  folder.addInteractivity();
  // derriere addInteractivity(), il va se passer addWindowInteractivity() et addContentInteractivity()
  // addWindowInteractivity() va permettre de deplacer, fermer, minimiser toute fenetre
  // addContentInteractivity() va permettre l'interaction propre à la calculator

  setNewApp(folder);
}

//================
//=handleKeyUp
//================

//listen to the keboard event on the active element
document.addEventListener("keyup", (evt) => {
  if (onFocus != null) {
    onFocus.instance.handleKeyUp(evt);
  }
});

//================
//= Focus
//================

function checkFocus() {
  if (onFocus != null) {
    onFocus.classList.remove("state__on-focus");
    onFocus.classList.add("state__no-focus");

    onFocus.dataset.focus = "noFocus";
  }
}

//select the active element
function componentGetFocus(evt) {
  //onFocus = the precent focused element
  //evt.currentTarget = new one
  //remove focus state from the old one and add it to the new one
  onFocus.classList.remove("state__on-focus");
  onFocus.classList.add("state__no-focus");
  //to get the class (z index ans design diffrences if I want)
  onFocus.dataset.focus = "noFocus";
  evt.currentTarget.dataset.focus = "onFocus";
  //dataSet is to get the element in forcus
  evt.currentTarget.classList.remove("state__no-focus");
  evt.currentTarget.classList.add("state__on-focus");
  onFocus = evt.currentTarget;
  //onFocus become the new one
}

//================
//= Changement de style
//================

function applyStyle(myNewStyle) {
  let newStyleCall = myNewStyle.call;
  let allCSS = document.querySelectorAll("[data-css-style]");
  allCSS.forEach((css) => {
    let href = css.href;
    let newHref = href.replace(currentStyle.call, newStyleCall);
    css.setAttribute("href", newHref);
    css.dataset.cssStyle = myNewStyle;
  });

  let allIMG = document.querySelectorAll("img");
  allIMG.forEach((img) => {
    let src = img.src;
    let newSrc = src.replace(currentStyle.call, newStyleCall);
    img.setAttribute("src", newSrc);
  });

  currentStyle = myNewStyle;
}

