(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[7033],{

/***/ 2123:
/*!*********************************************!*\
  !*** ./src/app/role/role-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RolePageRoutingModule: () => (/* binding */ RolePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 7582);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 5879);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5187);
/* harmony import */ var _role_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./role.page */ 5989);




const routes = [{
  path: '',
  component: _role_page__WEBPACK_IMPORTED_MODULE_0__.RolePage
}];
let RolePageRoutingModule = class RolePageRoutingModule {};
RolePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], RolePageRoutingModule);


/***/ }),

/***/ 7033:
/*!*************************************!*\
  !*** ./src/app/role/role.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RolePageModule: () => (/* binding */ RolePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 7582);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 5879);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6814);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 6223);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 6318);
/* harmony import */ var _role_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./role-routing.module */ 2123);
/* harmony import */ var _role_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./role.page */ 5989);







let RolePageModule = class RolePageModule {};
RolePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _role_routing_module__WEBPACK_IMPORTED_MODULE_0__.RolePageRoutingModule],
  declarations: [_role_page__WEBPACK_IMPORTED_MODULE_1__.RolePage]
})], RolePageModule);


/***/ }),

/***/ 5989:
/*!***********************************!*\
  !*** ./src/app/role/role.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RolePage: () => (/* binding */ RolePage)
/* harmony export */ });
/* harmony import */ var C_Users_ekt_Documents_DOMINGO_evaluationIF_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 5861);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 7582);
/* harmony import */ var _role_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./role.page.html?ngResource */ 5281);
/* harmony import */ var _role_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./role.page.scss?ngResource */ 2824);
/* harmony import */ var _role_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_role_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 5879);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 6318);
/* harmony import */ var _settings_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../settings/config */ 8702);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5187);

var _class;







let RolePage = (_class = class RolePage {
  constructor(router, route, toastController) {
    this.router = router;
    this.route = route;
    this.toastController = toastController;
    this.showSpinner = false;
    this.role = 'user';
    this.id = '';
  }
  // get params user id
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(params['id']);
    });
  }
  /**
   * signUp communicates with API Movies - save and update user role
   * @returns {Object} redirect to login
   */
  signUp() {
    var _this = this;
    this.showSpinner = true;
    axios.put(_settings_config__WEBPACK_IMPORTED_MODULE_3__.config.hostname + ':' + _settings_config__WEBPACK_IMPORTED_MODULE_3__.config.PORT + _settings_config__WEBPACK_IMPORTED_MODULE_3__.config.routeRoles + '/role/' + this.id, {
      role: this.role
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then( /*#__PURE__*/function () {
      var _ref = (0,C_Users_ekt_Documents_DOMINGO_evaluationIF_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        console.log(res);
        if (res.status == 200) {
          _this.router.navigate(['/login'], {
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
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController
}], _class);
RolePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-role',
  template: _role_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_role_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], RolePage);


/***/ }),

/***/ 2824:
/*!************************************************!*\
  !*** ./src/app/role/role.page.scss?ngResource ***!
  \************************************************/
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

/***/ 5281:
/*!************************************************!*\
  !*** ./src/app/role/role.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>Role</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" class=\"ion-padding\">\n  <ion-row>\n    <ion-col sizeMd=\"4\" offsetMd=\"4\">\n      <h1 class=\"ion-text-center ion-margin-vertical ion-padding-vertical\"><b>SELECT ROLE</b></h1>\n      <form class=\"ion-padding\">\n        <div class=\"ion-margin-vertical\">\n          <ion-select label=\"Roles\" class=\"ion-margin-vertical\" [(ngModel)]=\"role\" name=\"role\">\n            <ion-select-option value=\"user\">User</ion-select-option>\n            <ion-select-option value=\"admin\">Administrator</ion-select-option>\n            <ion-select-option value=\"designer\">Designer</ion-select-option>\n            <ion-select-option value=\"support\">Support</ion-select-option>\n          </ion-select>\n        </div>\n        <div class=\"ion-margin-vertical\">\n          <ion-button mode=\"ios\" expand=\"block\" [disabled]=\"showSpinner\" class=\"ion-margin-top\" color=\"primary\" (click)=\"signUp()\">Sign Up <ion-icon name=\"arrow-forward\" slot=\"end\" *ngIf=\"!showSpinner\"></ion-icon> <ion-spinner *ngIf=\"showSpinner\" name=\"lines\"></ion-spinner></ion-button>\n        </div>\n      </form>\n    </ion-col>\n  </ion-row>\n</ion-content>";

/***/ })

}]);