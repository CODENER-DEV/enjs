"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[9625],{

/***/ 9625:
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/status-tap-c5af0dba.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   startStatusTap: () => (/* binding */ startStatusTap)
/* harmony export */ });
/* harmony import */ var C_Users_ekt_Documents_DOMINGO_evaluationIF_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 5861);
/* harmony import */ var _index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-2d388930.js */ 2364);
/* harmony import */ var _index_746a238e_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-746a238e.js */ 8360);
/* harmony import */ var _helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers-3379ba19.js */ 839);
/* harmony import */ var _index_595d62c9_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index-595d62c9.js */ 6710);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */




const startStatusTap = () => {
  const win = window;
  win.addEventListener('statusTap', () => {
    (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.e)(() => {
      const width = win.innerWidth;
      const height = win.innerHeight;
      const el = document.elementFromPoint(width / 2, height / 2);
      if (!el) {
        return;
      }
      const contentEl = (0,_index_746a238e_js__WEBPACK_IMPORTED_MODULE_2__.f)(el);
      if (contentEl) {
        new Promise(resolve => (0,_helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_3__.c)(contentEl, resolve)).then(() => {
          (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.w)( /*#__PURE__*/(0,C_Users_ekt_Documents_DOMINGO_evaluationIF_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            /**
             * If scrolling and user taps status bar,
             * only calling scrollToTop is not enough
             * as engines like WebKit will jump the
             * scroll position back down and complete
             * any in-progress momentum scrolling.
             */
            contentEl.style.setProperty('--overflow', 'hidden');
            yield (0,_index_746a238e_js__WEBPACK_IMPORTED_MODULE_2__.s)(contentEl, 300);
            contentEl.style.removeProperty('--overflow');
          }));
        });
      }
    });
  });
};


/***/ })

}]);