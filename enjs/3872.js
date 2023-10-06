(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[3872],{

/***/ 2402:
/*!*************************************************!*\
  !*** ./src/app/signup/signup-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignupPageRoutingModule: () => (/* binding */ SignupPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 7582);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 5879);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5187);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.page */ 1342);




const routes = [{
  path: '',
  component: _signup_page__WEBPACK_IMPORTED_MODULE_0__.SignupPage
}];
let SignupPageRoutingModule = class SignupPageRoutingModule {};
SignupPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], SignupPageRoutingModule);


/***/ }),

/***/ 3872:
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignupPageModule: () => (/* binding */ SignupPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 7582);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 5879);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6814);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 6223);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 6318);
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup-routing.module */ 2402);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page */ 1342);







let SignupPageModule = class SignupPageModule {};
SignupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignupPageRoutingModule],
  declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_1__.SignupPage]
})], SignupPageModule);


/***/ }),

/***/ 1342:
/*!***************************************!*\
  !*** ./src/app/signup/signup.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignupPage: () => (/* binding */ SignupPage)
/* harmony export */ });
/* harmony import */ var C_Users_ekt_Documents_DOMINGO_evaluationIF_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 5861);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 7582);
/* harmony import */ var _signup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page.html?ngResource */ 1998);
/* harmony import */ var _signup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup.page.scss?ngResource */ 1471);
/* harmony import */ var _signup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_signup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 5879);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 6318);
/* harmony import */ var _settings_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../settings/config */ 8702);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5187);

var _class;







let SignupPage = (_class = class SignupPage {
  constructor(toastController, router) {
    this.toastController = toastController;
    this.router = router;
    this.showSpinner = false;
    this.name = '';
    this.email = '';
    this.password = '';
  }
  ngOnInit() {}
  /**
   * nextRole communicates with API Movies - save user
   * @returns {Object} redirect to select role
   */
  nextRole() {
    var _this = this;
    this.showSpinner = true;
    axios.post(_settings_config__WEBPACK_IMPORTED_MODULE_3__.config.hostname + ':' + _settings_config__WEBPACK_IMPORTED_MODULE_3__.config.PORT + _settings_config__WEBPACK_IMPORTED_MODULE_3__.config.routeUsers + '/register', {
      name: this.name,
      email: this.email,
      password: this.password
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then( /*#__PURE__*/function () {
      var _ref = (0,C_Users_ekt_Documents_DOMINGO_evaluationIF_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        console.log(res);
        if (res.status == 200) {
          _this.router.navigate(['/role', {
            id: res.data.user._id
          }], {
            replaceUrl: true
          });
        }
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()).catch(error => {
      console.log(error);
      this.showSpinner = false;
      this.toastController.create({
        message: error.response.data.error,
        position: 'bottom',
        duration: 4000,
        color: 'dark'
      }).then(toast => {
        toast.present();
      });
    });
  }
}, _class.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
}], _class);
SignupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-signup',
  template: _signup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_signup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], SignupPage);


/***/ }),

/***/ 1471:
/*!****************************************************!*\
  !*** ./src/app/signup/signup.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ 4969);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 1451);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 1998:
/*!****************************************************!*\
  !*** ./src/app/signup/signup.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>Sign Up</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" class=\"ion-padding\">\n  <ion-row>\n    <ion-col sizeMd=\"4\" offsetMd=\"4\">\n      <h1 class=\"ion-text-center ion-margin-vertical ion-padding-vertical\"><b>SIGN UP</b></h1>\n      <form class=\"ion-padding\">\n        <div class=\"ion-margin-vertical\">\n          <ion-input type=\"text\" label=\"Name\" labelPlacement=\"stacked\" class=\"ion-margin-vertical\" [(ngModel)]=\"name\" name=\"name\" placeholder=\"Enter name\" required=\"true\"></ion-input>\n        </div>\n        <div class=\"ion-margin-vertical\">\n          <ion-input type=\"email\" label=\"Email\" labelPlacement=\"stacked\" class=\"ion-margin-vertical\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"Enter email\" required=\"true\"></ion-input>\n        </div>\n        <div class=\"ion-margin-vertical\">\n          <ion-input type=\"password\" label=\"Password\" labelPlacement=\"stacked\" class=\"ion-margin-vertical\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"Enter password\" required=\"true\"></ion-input>\n        </div>\n        <div class=\"ion-margin-vertical\">\n          <p>Do you already have an account? <ion-chip color=\"primary\" [routerLink]=\"['/login']\">Log In</ion-chip></p>\n        </div>\n        <div class=\"ion-margin-vertical\">\n          <ion-button mode=\"ios\" expand=\"block\" [disabled]=\"showSpinner\" class=\"ion-margin-top\" color=\"primary\" (click)=\"nextRole()\">Next <ion-icon name=\"arrow-forward\" slot=\"end\" *ngIf=\"!showSpinner\"></ion-icon> <ion-spinner *ngIf=\"showSpinner\" name=\"lines\"></ion-spinner></ion-button>\n        </div>\n      </form>\n    </ion-col>\n  </ion-row>\n</ion-content>";

/***/ })

}]);