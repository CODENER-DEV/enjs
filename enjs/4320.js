(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[4320],{

/***/ 6058:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomePageRoutingModule: () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 7582);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 5879);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5187);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 6957);




const routes = [{
  path: '',
  component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
}];
let HomePageRoutingModule = class HomePageRoutingModule {};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], HomePageRoutingModule);


/***/ }),

/***/ 4320:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomePageModule: () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 7582);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 5879);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6814);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 6318);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 6223);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 6957);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 6058);







let HomePageModule = class HomePageModule {};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule],
  declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
})], HomePageModule);


/***/ }),

/***/ 6957:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomePage: () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var C_Users_ekt_Documents_DOMINGO_evaluationIF_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 5861);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 7582);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.html?ngResource */ 1670);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 6928);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 5879);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 6318);
/* harmony import */ var _settings_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../settings/config */ 8702);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5187);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage-angular */ 2014);

var _class;








let HomePage = (_class = class HomePage {
  constructor(toastController, alertController, router, storage) {
    this.toastController = toastController;
    this.alertController = alertController;
    this.router = router;
    this.storage = storage;
    this.showSpinner = false;
    this.movies = [];
    this.query = '';
    this.isModalOpen = false;
    this.title = '';
    this.description = '';
    this.producer = '';
    this.director = '';
    this.protagonists = '';
    this.isCreate = false;
    this.titleModal = '';
    this.titleButton = '';
    this.token = '';
  }
  ngOnInit() {}
  /**
   * ionViewWillEnter (Lifecycle event) - verify Token saved in storage if is valid o already expired
   * @returns {Object} show movies if is valid token, else redirect to login if is invalid
   */
  ionViewWillEnter() {
    var _this = this;
    return (0,C_Users_ekt_Documents_DOMINGO_evaluationIF_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.token = yield _this.storage.get('token');
      console.log(_this.token);
      if (!_this.token) {
        _this.router.navigate(['/login'], {
          replaceUrl: true
        });
      }
      _this.getMovies();
    })();
  }
  /**
   * getMovies communicates with API Movies - get all movies and verify Token with JWT if is valid o already expired
   * @returns {Object} movies
   */
  getMovies() {
    var _this2 = this;
    axios.get(_settings_config__WEBPACK_IMPORTED_MODULE_3__.config.hostname + ':' + _settings_config__WEBPACK_IMPORTED_MODULE_3__.config.PORT + _settings_config__WEBPACK_IMPORTED_MODULE_3__.config.routeMovies + '/all', {
      headers: {
        'Content-Type': 'application/json',
        'Auth-Token': this.token
      }
    }).then( /*#__PURE__*/function () {
      var _ref = (0,C_Users_ekt_Documents_DOMINGO_evaluationIF_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        console.log(res);
        if (res.status == 200) {
          _this2.movies = [...res.data.movies];
        }
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()).catch( /*#__PURE__*/function () {
      var _ref2 = (0,C_Users_ekt_Documents_DOMINGO_evaluationIF_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (error) {
        console.log(error);
        _this2.toastController.create({
          message: error.response.data.error,
          position: 'bottom',
          duration: 4000,
          color: 'dark'
        }).then(toast => {
          toast.present();
        });
        if (error.response.data.type == 'tar' || error.response.data.type == 'adtiae') {
          yield _this2.storage.remove('token');
          _this2.router.navigate(['/login'], {
            replaceUrl: true
          });
        }
      });
      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());
  }
  /**
   * getMoviesByTitle communicates with API Movies - get all movies with filter and verify Token with JWT if is valid o already expired
   * @returns {Object} movies
   */
  getMoviesByTitle() {
    var _this3 = this;
    if (this.query == '') {
      this.getMovies();
    } else {
      axios.get(_settings_config__WEBPACK_IMPORTED_MODULE_3__.config.hostname + ':' + _settings_config__WEBPACK_IMPORTED_MODULE_3__.config.PORT + _settings_config__WEBPACK_IMPORTED_MODULE_3__.config.routeMovies + '/search/' + this.query, {
        headers: {
          'Content-Type': 'application/json',
          'Auth-Token': this.token
        }
      }).then( /*#__PURE__*/function () {
        var _ref3 = (0,C_Users_ekt_Documents_DOMINGO_evaluationIF_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          console.log(res);
          if (res.status == 200) {
            _this3.movies = [...res.data.movies];
          }
        });
        return function (_x3) {
          return _ref3.apply(this, arguments);
        };
      }()).catch( /*#__PURE__*/function () {
        var _ref4 = (0,C_Users_ekt_Documents_DOMINGO_evaluationIF_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (error) {
          console.log(error);
          _this3.toastController.create({
            message: error.response.data.error,
            position: 'bottom',
            duration: 4000,
            color: 'dark'
          }).then(toast => {
            toast.present();
          });
          if (error.response.data.type == 'tar' || error.response.data.type == 'adtiae') {
            yield _this3.storage.remove('token');
            _this3.router.navigate(['/login'], {
              replaceUrl: true
            });
          }
        });
        return function (_x4) {
          return _ref4.apply(this, arguments);
        };
      }());
    }
  }
  /**
   * openCreateEditMovie - show modal for edit and create movie
   * @param {Object} from - type action
   * @param {Object} movie  - movie data to edit
   */
  openCreateEditMovie(from, movie) {
    this.isModalOpen = true;
    if (from == 'edit') {
      this.isCreate = false;
      this.titleModal = 'Edit';
      this.titleButton = 'Update';
      this.title = movie.title;
      this.description = movie.description;
      this.producer = movie.producer;
      this.director = movie.director;
      this.protagonists = movie.protagonists;
      this.idMovie = movie._id;
    } else {
      this.isCreate = true;
      this.titleModal = 'Create';
      this.titleButton = this.titleModal;
      this.title = '';
      this.description = '';
      this.producer = '';
      this.director = '';
      this.protagonists = '';
      this.idMovie = '';
    }
  }
  /**
   * createEditMovie communicates with API Movies - create and edit movie and verify Token with JWT if is valid o already expired
   * @returns {Object} show movies
   */
  createEditMovie() {
    var _this4 = this;
    this.showSpinner = true;
    let request;
    if (this.isCreate) {
      request = axios.post(_settings_config__WEBPACK_IMPORTED_MODULE_3__.config.hostname + ':' + _settings_config__WEBPACK_IMPORTED_MODULE_3__.config.PORT + _settings_config__WEBPACK_IMPORTED_MODULE_3__.config.routeMovies + '/create', {
        title: this.title,
        description: this.description,
        producer: this.producer,
        director: this.director,
        protagonists: this.protagonists
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Auth-Token': this.token
        }
      });
    } else {
      request = axios.put(_settings_config__WEBPACK_IMPORTED_MODULE_3__.config.hostname + ':' + _settings_config__WEBPACK_IMPORTED_MODULE_3__.config.PORT + _settings_config__WEBPACK_IMPORTED_MODULE_3__.config.routeMovies + '/update/' + this.idMovie, {
        title: this.title,
        description: this.description,
        producer: this.producer,
        director: this.director,
        protagonists: this.protagonists
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Auth-Token': this.token
        }
      });
    }
    request.then( /*#__PURE__*/function () {
      var _ref5 = (0,C_Users_ekt_Documents_DOMINGO_evaluationIF_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        console.log(res);
        if (res.status == 200) {
          _this4.isModalOpen = false;
          _this4.title = '';
          _this4.description = '';
          _this4.producer = '';
          _this4.director = '';
          _this4.protagonists = '';
          _this4.idMovie = '';
          _this4.showSpinner = false;
          if (_this4.query == '') {
            _this4.getMovies();
          } else {
            _this4.getMoviesByTitle();
          }
        }
      });
      return function (_x5) {
        return _ref5.apply(this, arguments);
      };
    }()).catch( /*#__PURE__*/function () {
      var _ref6 = (0,C_Users_ekt_Documents_DOMINGO_evaluationIF_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (error) {
        console.log(error);
        _this4.showSpinner = false;
        _this4.toastController.create({
          message: error.response.data.error,
          position: 'bottom',
          duration: 4000,
          color: 'dark'
        }).then(toast => {
          toast.present();
        });
        if (error.response.data.type == 'tar' || error.response.data.type == 'adtiae') {
          yield _this4.storage.remove('token');
          _this4.router.navigate(['/login'], {
            replaceUrl: true
          });
        }
      });
      return function (_x6) {
        return _ref6.apply(this, arguments);
      };
    }());
  }
  /**
   * deleteMovie communicates with API Movies - delete movie and verify Token with JWT if is valid o already expired
   * @param {Object} id - id movie to delete
   * @returns {Object} show movies
   */
  deleteMovie(id) {
    var _this5 = this;
    return (0,C_Users_ekt_Documents_DOMINGO_evaluationIF_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this5.alertController.create({
        header: 'Delete movie',
        message: 'Are you sure to delete the movie?',
        buttons: [{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Alert canceled');
          }
        }, {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            console.log('Alert confirmed');
            axios.delete(_settings_config__WEBPACK_IMPORTED_MODULE_3__.config.hostname + ':' + _settings_config__WEBPACK_IMPORTED_MODULE_3__.config.PORT + _settings_config__WEBPACK_IMPORTED_MODULE_3__.config.routeMovies + '/delete/' + id, {
              headers: {
                'Content-Type': 'application/json',
                'Auth-Token': _this5.token
              }
            }).then( /*#__PURE__*/function () {
              var _ref7 = (0,C_Users_ekt_Documents_DOMINGO_evaluationIF_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
                console.log(res);
                if (res.status == 200) {
                  if (_this5.query == '') {
                    _this5.getMovies();
                  } else {
                    _this5.getMoviesByTitle();
                  }
                }
              });
              return function (_x7) {
                return _ref7.apply(this, arguments);
              };
            }()).catch( /*#__PURE__*/function () {
              var _ref8 = (0,C_Users_ekt_Documents_DOMINGO_evaluationIF_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (error) {
                console.log(error);
                _this5.toastController.create({
                  message: error.response.data.error,
                  position: 'bottom',
                  duration: 4000,
                  color: 'dark'
                }).then(toast => {
                  toast.present();
                });
                if (error.response.data.type == 'tar' || error.response.data.type == 'adtiae') {
                  yield _this5.storage.remove('token');
                  _this5.router.navigate(['/login'], {
                    replaceUrl: true
                  });
                }
              });
              return function (_x8) {
                return _ref8.apply(this, arguments);
              };
            }());
          }
        }]
      });
      yield alert.present();
    })();
  }
  /**
   * logOut - log out session user
   * @returns {Object} redirect to login
   */
  logOut() {
    var _this6 = this;
    return (0,C_Users_ekt_Documents_DOMINGO_evaluationIF_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this6.alertController.create({
        header: 'Log Out',
        message: 'Are you sure you want to log out?',
        buttons: [{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Alert canceled');
          }
        }, {
          text: 'OK',
          role: 'confirm',
          handler: function () {
            var _ref9 = (0,C_Users_ekt_Documents_DOMINGO_evaluationIF_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
              console.log('Alert confirmed');
              yield _this6.storage.remove('token');
              _this6.router.navigate(['/login'], {
                replaceUrl: true
              });
            });
            return function handler() {
              return _ref9.apply(this, arguments);
            };
          }()
        }]
      });
      yield alert.present();
    })();
  }
}, _class.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
}, {
  type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__.Storage
}], _class);
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-home',
  template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], HomePage);


/***/ }),

/***/ 6928:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
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

/***/ 1670:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Movies\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"logOut()\">\n        <ion-icon slot=\"icon-only\" name=\"log-out-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-searchbar [debounce]=\"1000\" [(ngModel)]=\"query\" placeholder=\"Search movies by title\" (ionInput)=\"getMoviesByTitle()\"></ion-searchbar>\n  <ion-row class=\"ion-padding ion-text-center\">\n    <ion-col sizeMd=\"3\" *ngFor=\"let movie of movies\">\n      <ion-card class=\"ion-padding-bottom\">\n        <img alt=\"cover-movie\" src=\"{{movie.cover}}\" />\n        <ion-card-header>\n          <ion-card-title><b>{{movie.title}}</b></ion-card-title>\n          <ion-card-subtitle>Director: <b>{{movie.director}}</b></ion-card-subtitle>\n          <ion-card-subtitle>Producer: <b>{{movie.producer}}</b></ion-card-subtitle>\n          <ion-card-subtitle>Protagonists: <b>{{movie.protagonists}}</b></ion-card-subtitle>\n        </ion-card-header>\n      \n        <ion-card-content>\n          <p class=\"ion-text-nowrap\" style=\"text-overflow: ellipsis; overflow: hidden;\">{{movie.description}}</p>\n        </ion-card-content>\n        <ion-button color=\"warning\" mode=\"ios\" (click)=\"openCreateEditMovie('edit', movie)\">Edit</ion-button>\n        <ion-button color=\"danger\" mode=\"ios\" (click)=\"deleteMovie(movie._id)\">Delete</ion-button>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n  <ion-fab slot=\"fixed\" vertical=\"bottom\" horizontal=\"center\">\n    <ion-fab-button (click)=\"openCreateEditMovie('create', null)\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  <ion-modal [isOpen]=\"isModalOpen\" [backdropDismiss]=\"false\">\n    <ng-template>\n      <ion-header>\n        <ion-toolbar>\n          <ion-title>{{titleModal}} movie</ion-title>\n          <ion-buttons slot=\"end\">\n            <ion-button (click)=\"isModalOpen=false\">Close</ion-button>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content class=\"ion-padding\">\n        <form class=\"ion-padding\">\n          <div class=\"ion-margin-vertical\">\n            <ion-input type=\"text\" label=\"Title\" labelPlacement=\"stacked\" class=\"ion-margin-vertical\" [(ngModel)]=\"title\" name=\"title\" placeholder=\"Enter title\" required=\"true\"></ion-input>\n          </div>\n          <div class=\"ion-margin-vertical\">\n            <ion-input type=\"text\" label=\"Description\" labelPlacement=\"stacked\" class=\"ion-margin-vertical\" [(ngModel)]=\"description\" name=\"description\" placeholder=\"Enter description\" required=\"true\"></ion-input>\n          </div>\n          <div class=\"ion-margin-vertical\">\n            <ion-input type=\"text\" label=\"Producer\" labelPlacement=\"stacked\" class=\"ion-margin-vertical\" [(ngModel)]=\"producer\" name=\"producer\" placeholder=\"Enter producer\" required=\"true\"></ion-input>\n          </div>\n          <div class=\"ion-margin-vertical\">\n            <ion-input type=\"text\" label=\"Director\" labelPlacement=\"stacked\" class=\"ion-margin-vertical\" [(ngModel)]=\"director\" name=\"director\" placeholder=\"Enter director\" required=\"true\"></ion-input>\n          </div>\n          <div class=\"ion-margin-vertical\">\n            <ion-input type=\"text\" label=\"Protagonists\" labelPlacement=\"stacked\" class=\"ion-margin-vertical\" [(ngModel)]=\"protagonists\" name=\"protagonists\" placeholder=\"Enter protagonists\" required=\"true\"></ion-input>\n          </div>\n          <div class=\"ion-margin-vertical\">\n            <ion-button mode=\"ios\" expand=\"block\" [disabled]=\"showSpinner\" class=\"ion-margin-top\" color=\"primary\" (click)=\"createEditMovie()\">{{titleButton}} <ion-icon name=\"arrow-forward\" slot=\"end\" *ngIf=\"!showSpinner\"></ion-icon> <ion-spinner *ngIf=\"showSpinner\" name=\"lines\"></ion-spinner></ion-button>\n          </div>\n        </form>\n      </ion-content>\n    </ng-template>\n  </ion-modal>\n</ion-content>";

/***/ })

}]);