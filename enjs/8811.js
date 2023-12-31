"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[8811],{

/***/ 8811:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-text.entry.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ion_text: () => (/* binding */ Text)
/* harmony export */ });
/* harmony import */ var _index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-2d388930.js */ 2364);
/* harmony import */ var _theme_17531cdf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme-17531cdf.js */ 3567);
/* harmony import */ var _ionic_global_b3fc28dd_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ionic-global-b3fc28dd.js */ 152);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */



const textCss = ":host(.ion-color){color:var(--ion-color-base)}";
const Text = class {
  constructor(hostRef) {
    (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.color = undefined;
  }
  render() {
    const mode = (0,_ionic_global_b3fc28dd_js__WEBPACK_IMPORTED_MODULE_2__.b)(this);
    return (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.H, {
      class: (0,_theme_17531cdf_js__WEBPACK_IMPORTED_MODULE_1__.c)(this.color, {
        [mode]: true
      })
    }, (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null));
  }
};
Text.style = textCss;


/***/ }),

/***/ 3567:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-17531cdf.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ createColorClasses),
/* harmony export */   g: () => (/* binding */ getClassMap),
/* harmony export */   h: () => (/* binding */ hostContext),
/* harmony export */   o: () => (/* binding */ openURL)
/* harmony export */ });
/* harmony import */ var C_Users_ekt_Documents_DOMINGO_evaluationIF_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 5861);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return typeof color === 'string' && color.length > 0 ? Object.assign({
    'ion-color': true,
    [`ion-color-${color}`]: true
  }, cssClassMap) : cssClassMap;
};
const getClassList = classes => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array.filter(c => c != null).map(c => c.trim()).filter(c => c !== '');
  }
  return [];
};
const getClassMap = classes => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = /*#__PURE__*/function () {
  var _ref = (0,C_Users_ekt_Documents_DOMINGO_evaluationIF_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (url, ev, direction, animation) {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
      const router = document.querySelector('ion-router');
      if (router) {
        if (ev != null) {
          ev.preventDefault();
        }
        return router.push(url, direction, animation);
      }
    }
    return false;
  });
  return function openURL(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();


/***/ })

}]);