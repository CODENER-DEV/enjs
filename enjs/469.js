"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[469],{

/***/ 469:
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ion_backdrop: () => (/* binding */ Backdrop)
/* harmony export */ });
/* harmony import */ var _index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-2d388930.js */ 2364);
/* harmony import */ var _gesture_controller_0fa396c4_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gesture-controller-0fa396c4.js */ 619);
/* harmony import */ var _ionic_global_b3fc28dd_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ionic-global-b3fc28dd.js */ 152);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */



const backdropIosCss = ":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}";
const backdropMdCss = ":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}";
const Backdrop = class {
  constructor(hostRef) {
    (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.ionBackdropTap = (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.d)(this, "ionBackdropTap", 7);
    this.blocker = _gesture_controller_0fa396c4_js__WEBPACK_IMPORTED_MODULE_1__.G.createBlocker({
      disableScroll: true
    });
    this.visible = true;
    this.tappable = true;
    this.stopPropagation = true;
  }
  connectedCallback() {
    if (this.stopPropagation) {
      this.blocker.block();
    }
  }
  disconnectedCallback() {
    this.blocker.unblock();
  }
  onMouseDown(ev) {
    this.emitTap(ev);
  }
  emitTap(ev) {
    if (this.stopPropagation) {
      ev.preventDefault();
      ev.stopPropagation();
    }
    if (this.tappable) {
      this.ionBackdropTap.emit();
    }
  }
  render() {
    const mode = (0,_ionic_global_b3fc28dd_js__WEBPACK_IMPORTED_MODULE_2__.b)(this);
    return (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.H, {
      tabindex: "-1",
      "aria-hidden": "true",
      class: {
        [mode]: true,
        'backdrop-hide': !this.visible,
        'backdrop-no-tappable': !this.tappable
      }
    });
  }
};
Backdrop.style = {
  ios: backdropIosCss,
  md: backdropMdCss
};


/***/ })

}]);