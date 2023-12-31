"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[9882],{

/***/ 9882:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ion_action_sheet: () => (/* binding */ ActionSheet)
/* harmony export */ });
/* harmony import */ var C_Users_ekt_Documents_DOMINGO_evaluationIF_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 5861);
/* harmony import */ var _index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-2d388930.js */ 2364);
/* harmony import */ var _button_active_513e9fff_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button-active-513e9fff.js */ 5178);
/* harmony import */ var _helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers-3379ba19.js */ 839);
/* harmony import */ var _lock_controller_e8c6c051_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lock-controller-e8c6c051.js */ 3830);
/* harmony import */ var _overlays_8fc6656c_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./overlays-8fc6656c.js */ 1912);
/* harmony import */ var _theme_17531cdf_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./theme-17531cdf.js */ 3567);
/* harmony import */ var _ionic_global_b3fc28dd_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ionic-global-b3fc28dd.js */ 152);
/* harmony import */ var _animation_a1d9e088_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./animation-a1d9e088.js */ 1774);
/* harmony import */ var _haptic_6447af60_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./haptic-6447af60.js */ 7150);
/* harmony import */ var _capacitor_b4979570_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./capacitor-b4979570.js */ 4874);
/* harmony import */ var _index_7a14ecec_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./index-7a14ecec.js */ 6225);
/* harmony import */ var _index_ff313b19_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./index-ff313b19.js */ 9203);
/* harmony import */ var _gesture_controller_0fa396c4_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./gesture-controller-0fa396c4.js */ 619);
/* harmony import */ var _framework_delegate_aa433dea_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./framework-delegate-aa433dea.js */ 6559);
/* harmony import */ var _hardware_back_button_39299f84_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./hardware-back-button-39299f84.js */ 2124);
/* harmony import */ var _index_595d62c9_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./index-595d62c9.js */ 6710);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */

















/**
 * iOS Action Sheet Enter Animation
 */
const iosEnterAnimation = baseEl => {
  const baseAnimation = (0,_animation_a1d9e088_js__WEBPACK_IMPORTED_MODULE_8__.c)();
  const backdropAnimation = (0,_animation_a1d9e088_js__WEBPACK_IMPORTED_MODULE_8__.c)();
  const wrapperAnimation = (0,_animation_a1d9e088_js__WEBPACK_IMPORTED_MODULE_8__.c)();
  backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 0.01, 'var(--backdrop-opacity)').beforeStyles({
    'pointer-events': 'none'
  }).afterClearStyles(['pointer-events']);
  wrapperAnimation.addElement(baseEl.querySelector('.action-sheet-wrapper')).fromTo('transform', 'translateY(100%)', 'translateY(0%)');
  return baseAnimation.addElement(baseEl).easing('cubic-bezier(.36,.66,.04,1)').duration(400).addAnimation([backdropAnimation, wrapperAnimation]);
};

/**
 * iOS Action Sheet Leave Animation
 */
const iosLeaveAnimation = baseEl => {
  const baseAnimation = (0,_animation_a1d9e088_js__WEBPACK_IMPORTED_MODULE_8__.c)();
  const backdropAnimation = (0,_animation_a1d9e088_js__WEBPACK_IMPORTED_MODULE_8__.c)();
  const wrapperAnimation = (0,_animation_a1d9e088_js__WEBPACK_IMPORTED_MODULE_8__.c)();
  backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 'var(--backdrop-opacity)', 0);
  wrapperAnimation.addElement(baseEl.querySelector('.action-sheet-wrapper')).fromTo('transform', 'translateY(0%)', 'translateY(100%)');
  return baseAnimation.addElement(baseEl).easing('cubic-bezier(.36,.66,.04,1)').duration(450).addAnimation([backdropAnimation, wrapperAnimation]);
};

/**
 * MD Action Sheet Enter Animation
 */
const mdEnterAnimation = baseEl => {
  const baseAnimation = (0,_animation_a1d9e088_js__WEBPACK_IMPORTED_MODULE_8__.c)();
  const backdropAnimation = (0,_animation_a1d9e088_js__WEBPACK_IMPORTED_MODULE_8__.c)();
  const wrapperAnimation = (0,_animation_a1d9e088_js__WEBPACK_IMPORTED_MODULE_8__.c)();
  backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 0.01, 'var(--backdrop-opacity)').beforeStyles({
    'pointer-events': 'none'
  }).afterClearStyles(['pointer-events']);
  wrapperAnimation.addElement(baseEl.querySelector('.action-sheet-wrapper')).fromTo('transform', 'translateY(100%)', 'translateY(0%)');
  return baseAnimation.addElement(baseEl).easing('cubic-bezier(.36,.66,.04,1)').duration(400).addAnimation([backdropAnimation, wrapperAnimation]);
};

/**
 * MD Action Sheet Leave Animation
 */
const mdLeaveAnimation = baseEl => {
  const baseAnimation = (0,_animation_a1d9e088_js__WEBPACK_IMPORTED_MODULE_8__.c)();
  const backdropAnimation = (0,_animation_a1d9e088_js__WEBPACK_IMPORTED_MODULE_8__.c)();
  const wrapperAnimation = (0,_animation_a1d9e088_js__WEBPACK_IMPORTED_MODULE_8__.c)();
  backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 'var(--backdrop-opacity)', 0);
  wrapperAnimation.addElement(baseEl.querySelector('.action-sheet-wrapper')).fromTo('transform', 'translateY(0%)', 'translateY(100%)');
  return baseAnimation.addElement(baseEl).easing('cubic-bezier(.36,.66,.04,1)').duration(450).addAnimation([backdropAnimation, wrapperAnimation]);
};
const actionSheetIosCss = ".sc-ion-action-sheet-ios-h{--color:initial;--button-color-activated:var(--button-color);--button-color-focused:var(--button-color);--button-color-hover:var(--button-color);--button-color-selected:var(--button-color);--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--height:auto;--max-height:calc(100% - (var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:block;position:fixed;outline:none;font-family:var(--ion-font-family, inherit);-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-action-sheet-ios-h{display:none}.action-sheet-wrapper.sc-ion-action-sheet-ios{left:0;right:0;bottom:0;-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);display:block;position:absolute;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);z-index:10;pointer-events:none}.action-sheet-button.sc-ion-action-sheet-ios{display:block;position:relative;width:100%;border:0;outline:none;background:var(--button-background);color:var(--button-color);font-family:inherit;overflow:hidden}.action-sheet-button-inner.sc-ion-action-sheet-ios{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;pointer-events:none;width:100%;height:100%;z-index:1}.action-sheet-container.sc-ion-action-sheet-ios{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:end;justify-content:flex-end;height:100%;max-height:100vh}.action-sheet-group.sc-ion-action-sheet-ios{-ms-flex-negative:2;flex-shrink:2;overscroll-behavior-y:contain;overflow-y:auto;-webkit-overflow-scrolling:touch;pointer-events:all;background:var(--background)}.action-sheet-group.sc-ion-action-sheet-ios::-webkit-scrollbar{display:none}.action-sheet-group-cancel.sc-ion-action-sheet-ios{-ms-flex-negative:0;flex-shrink:0;overflow:hidden}.action-sheet-button.sc-ion-action-sheet-ios::after{left:0;right:0;top:0;bottom:0;position:absolute;content:\"\";opacity:0}.action-sheet-selected.sc-ion-action-sheet-ios{color:var(--button-color-selected)}.action-sheet-selected.sc-ion-action-sheet-ios::after{background:var(--button-background-selected);opacity:var(--button-background-selected-opacity)}.action-sheet-button.ion-activated.sc-ion-action-sheet-ios{color:var(--button-color-activated)}.action-sheet-button.ion-activated.sc-ion-action-sheet-ios::after{background:var(--button-background-activated);opacity:var(--button-background-activated-opacity)}.action-sheet-button.ion-focused.sc-ion-action-sheet-ios{color:var(--button-color-focused)}.action-sheet-button.ion-focused.sc-ion-action-sheet-ios::after{background:var(--button-background-focused);opacity:var(--button-background-focused-opacity)}@media (any-hover: hover){.action-sheet-button.sc-ion-action-sheet-ios:hover{color:var(--button-color-hover)}.action-sheet-button.sc-ion-action-sheet-ios:hover::after{background:var(--button-background-hover);opacity:var(--button-background-hover-opacity)}}.sc-ion-action-sheet-ios-h{--background:var(--ion-overlay-background-color, var(--ion-color-step-100, #f9f9f9));--backdrop-opacity:var(--ion-backdrop-opacity, 0.4);--button-background:linear-gradient(0deg, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08), rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08) 50%, transparent 50%) bottom/100% 1px no-repeat transparent;--button-background-activated:var(--ion-text-color, #000);--button-background-activated-opacity:.08;--button-background-hover:currentColor;--button-background-hover-opacity:.04;--button-background-focused:currentColor;--button-background-focused-opacity:.12;--button-background-selected:var(--ion-color-step-150, var(--ion-background-color, #fff));--button-background-selected-opacity:1;--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-400, #999999);text-align:center}.action-sheet-wrapper.sc-ion-action-sheet-ios{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:var(--ion-safe-area-top, 0);margin-bottom:var(--ion-safe-area-bottom, 0)}.action-sheet-container.sc-ion-action-sheet-ios{-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:0;padding-bottom:0}.action-sheet-group.sc-ion-action-sheet-ios{border-radius:13px;margin-bottom:8px}.action-sheet-group.sc-ion-action-sheet-ios:first-child{margin-top:10px}.action-sheet-group.sc-ion-action-sheet-ios:last-child{margin-bottom:10px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-group.sc-ion-action-sheet-ios{background-color:transparent;-webkit-backdrop-filter:saturate(280%) blur(20px);backdrop-filter:saturate(280%) blur(20px)}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-title.sc-ion-action-sheet-ios,.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-button.sc-ion-action-sheet-ios{background-color:transparent;background-image:-webkit-gradient(linear, left bottom, left top, from(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8)), to(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8))), -webkit-gradient(linear, left bottom, left top, from(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4)), color-stop(50%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4)), color-stop(50%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8)));background-image:linear-gradient(0deg, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8), rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 100%), linear-gradient(0deg, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4), rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4) 50%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 50%);background-repeat:no-repeat;background-position:top, bottom;background-size:100% calc(100% - 1px), 100% 1px;-webkit-backdrop-filter:saturate(120%);backdrop-filter:saturate(120%)}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-button.ion-activated.sc-ion-action-sheet-ios{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.7);background-image:none}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-cancel.sc-ion-action-sheet-ios{background:var(--button-background-selected)}}.action-sheet-title.sc-ion-action-sheet-ios{background:-webkit-gradient(linear, left bottom, left top, from(rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08)), color-stop(50%, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08)), color-stop(50%, transparent)) bottom/100% 1px no-repeat transparent;background:linear-gradient(0deg, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08), rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08) 50%, transparent 50%) bottom/100% 1px no-repeat transparent}.action-sheet-title.sc-ion-action-sheet-ios{-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px;padding-top:14px;padding-bottom:13px;color:var(--color, var(--ion-color-step-400, #999999));font-size:13px;font-weight:400;text-align:center}.action-sheet-title.action-sheet-has-sub-title.sc-ion-action-sheet-ios{font-weight:600}.action-sheet-sub-title.sc-ion-action-sheet-ios{padding-left:0;padding-right:0;padding-top:6px;padding-bottom:0;font-size:13px;font-weight:400}.action-sheet-button.sc-ion-action-sheet-ios{-webkit-padding-start:18px;padding-inline-start:18px;-webkit-padding-end:18px;padding-inline-end:18px;padding-top:18px;padding-bottom:18px;height:56px;font-size:20px;contain:strict}.action-sheet-button.sc-ion-action-sheet-ios .action-sheet-icon.sc-ion-action-sheet-ios{-webkit-margin-end:0.3em;margin-inline-end:0.3em;font-size:28px;pointer-events:none}.action-sheet-button.sc-ion-action-sheet-ios:last-child{background-image:none}.action-sheet-selected.sc-ion-action-sheet-ios{font-weight:bold}.action-sheet-cancel.sc-ion-action-sheet-ios{font-weight:600}.action-sheet-cancel.sc-ion-action-sheet-ios::after{background:var(--button-background-selected);opacity:var(--button-background-selected-opacity)}.action-sheet-destructive.sc-ion-action-sheet-ios,.action-sheet-destructive.ion-activated.sc-ion-action-sheet-ios,.action-sheet-destructive.ion-focused.sc-ion-action-sheet-ios{color:var(--ion-color-danger, #eb445a)}@media (any-hover: hover){.action-sheet-destructive.sc-ion-action-sheet-ios:hover{color:var(--ion-color-danger, #eb445a)}}";
const actionSheetMdCss = ".sc-ion-action-sheet-md-h{--color:initial;--button-color-activated:var(--button-color);--button-color-focused:var(--button-color);--button-color-hover:var(--button-color);--button-color-selected:var(--button-color);--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--height:auto;--max-height:calc(100% - (var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:block;position:fixed;outline:none;font-family:var(--ion-font-family, inherit);-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-action-sheet-md-h{display:none}.action-sheet-wrapper.sc-ion-action-sheet-md{left:0;right:0;bottom:0;-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);display:block;position:absolute;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);z-index:10;pointer-events:none}.action-sheet-button.sc-ion-action-sheet-md{display:block;position:relative;width:100%;border:0;outline:none;background:var(--button-background);color:var(--button-color);font-family:inherit;overflow:hidden}.action-sheet-button-inner.sc-ion-action-sheet-md{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;pointer-events:none;width:100%;height:100%;z-index:1}.action-sheet-container.sc-ion-action-sheet-md{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:end;justify-content:flex-end;height:100%;max-height:100vh}.action-sheet-group.sc-ion-action-sheet-md{-ms-flex-negative:2;flex-shrink:2;overscroll-behavior-y:contain;overflow-y:auto;-webkit-overflow-scrolling:touch;pointer-events:all;background:var(--background)}.action-sheet-group.sc-ion-action-sheet-md::-webkit-scrollbar{display:none}.action-sheet-group-cancel.sc-ion-action-sheet-md{-ms-flex-negative:0;flex-shrink:0;overflow:hidden}.action-sheet-button.sc-ion-action-sheet-md::after{left:0;right:0;top:0;bottom:0;position:absolute;content:\"\";opacity:0}.action-sheet-selected.sc-ion-action-sheet-md{color:var(--button-color-selected)}.action-sheet-selected.sc-ion-action-sheet-md::after{background:var(--button-background-selected);opacity:var(--button-background-selected-opacity)}.action-sheet-button.ion-activated.sc-ion-action-sheet-md{color:var(--button-color-activated)}.action-sheet-button.ion-activated.sc-ion-action-sheet-md::after{background:var(--button-background-activated);opacity:var(--button-background-activated-opacity)}.action-sheet-button.ion-focused.sc-ion-action-sheet-md{color:var(--button-color-focused)}.action-sheet-button.ion-focused.sc-ion-action-sheet-md::after{background:var(--button-background-focused);opacity:var(--button-background-focused-opacity)}@media (any-hover: hover){.action-sheet-button.sc-ion-action-sheet-md:hover{color:var(--button-color-hover)}.action-sheet-button.sc-ion-action-sheet-md:hover::after{background:var(--button-background-hover);opacity:var(--button-background-hover-opacity)}}.sc-ion-action-sheet-md-h{--background:var(--ion-overlay-background-color, var(--ion-background-color, #fff));--backdrop-opacity:var(--ion-backdrop-opacity, 0.32);--button-background:transparent;--button-background-selected:currentColor;--button-background-selected-opacity:0;--button-background-activated:transparent;--button-background-activated-opacity:0;--button-background-hover:currentColor;--button-background-hover-opacity:.04;--button-background-focused:currentColor;--button-background-focused-opacity:.12;--button-color:var(--ion-color-step-850, #262626);--color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.54)}.action-sheet-wrapper.sc-ion-action-sheet-md{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:var(--ion-safe-area-top, 0);margin-bottom:0}.action-sheet-title.sc-ion-action-sheet-md{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:20px;padding-bottom:17px;min-height:60px;color:var(--color, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.54));font-size:16px;text-align:start}.action-sheet-sub-title.sc-ion-action-sheet-md{padding-left:0;padding-right:0;padding-top:16px;padding-bottom:0;font-size:14px}.action-sheet-group.sc-ion-action-sheet-md:first-child{padding-top:0}.action-sheet-group.sc-ion-action-sheet-md:last-child{padding-bottom:var(--ion-safe-area-bottom)}.action-sheet-button.sc-ion-action-sheet-md{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:0;padding-bottom:0;position:relative;height:52px;font-size:16px;text-align:start;contain:strict;overflow:hidden}.action-sheet-icon.sc-ion-action-sheet-md{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:32px;margin-inline-end:32px;margin-top:0;margin-bottom:0;color:var(--color);font-size:24px}.action-sheet-button-inner.sc-ion-action-sheet-md{-ms-flex-pack:start;justify-content:flex-start}.action-sheet-selected.sc-ion-action-sheet-md{font-weight:bold}";
const ActionSheet = class {
  constructor(hostRef) {
    (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.didPresent = (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionActionSheetDidPresent", 7);
    this.willPresent = (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionActionSheetWillPresent", 7);
    this.willDismiss = (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionActionSheetWillDismiss", 7);
    this.didDismiss = (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionActionSheetDidDismiss", 7);
    this.didPresentShorthand = (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "didPresent", 7);
    this.willPresentShorthand = (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "willPresent", 7);
    this.willDismissShorthand = (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "willDismiss", 7);
    this.didDismissShorthand = (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "didDismiss", 7);
    this.delegateController = (0,_overlays_8fc6656c_js__WEBPACK_IMPORTED_MODULE_5__.d)(this);
    this.lockController = (0,_lock_controller_e8c6c051_js__WEBPACK_IMPORTED_MODULE_4__.c)();
    this.triggerController = (0,_overlays_8fc6656c_js__WEBPACK_IMPORTED_MODULE_5__.e)();
    this.presented = false;
    this.onBackdropTap = () => {
      this.dismiss(undefined, _overlays_8fc6656c_js__WEBPACK_IMPORTED_MODULE_5__.B);
    };
    this.dispatchCancelHandler = ev => {
      const role = ev.detail.role;
      if ((0,_overlays_8fc6656c_js__WEBPACK_IMPORTED_MODULE_5__.i)(role)) {
        const cancelButton = this.getButtons().find(b => b.role === 'cancel');
        this.callButtonHandler(cancelButton);
      }
    };
    this.overlayIndex = undefined;
    this.delegate = undefined;
    this.hasController = false;
    this.keyboardClose = true;
    this.enterAnimation = undefined;
    this.leaveAnimation = undefined;
    this.buttons = [];
    this.cssClass = undefined;
    this.backdropDismiss = true;
    this.header = undefined;
    this.subHeader = undefined;
    this.translucent = false;
    this.animated = true;
    this.htmlAttributes = undefined;
    this.isOpen = false;
    this.trigger = undefined;
  }
  onIsOpenChange(newValue, oldValue) {
    if (newValue === true && oldValue === false) {
      this.present();
    } else if (newValue === false && oldValue === true) {
      this.dismiss();
    }
  }
  triggerChanged() {
    const {
      trigger,
      el,
      triggerController
    } = this;
    if (trigger) {
      triggerController.addClickListener(el, trigger);
    }
  }
  /**
   * Present the action sheet overlay after it has been created.
   */
  present() {
    var _this = this;
    return (0,C_Users_ekt_Documents_DOMINGO_evaluationIF_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const unlock = yield _this.lockController.lock();
      yield _this.delegateController.attachViewToDom();
      yield (0,_overlays_8fc6656c_js__WEBPACK_IMPORTED_MODULE_5__.f)(_this, 'actionSheetEnter', iosEnterAnimation, mdEnterAnimation);
      unlock();
    })();
  }
  /**
   * Dismiss the action sheet overlay after it has been presented.
   *
   * @param data Any data to emit in the dismiss events.
   * @param role The role of the element that is dismissing the action sheet.
   * This can be useful in a button handler for determining which button was
   * clicked to dismiss the action sheet.
   * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
   */
  dismiss(data, role) {
    var _this2 = this;
    return (0,C_Users_ekt_Documents_DOMINGO_evaluationIF_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const unlock = yield _this2.lockController.lock();
      const dismissed = yield (0,_overlays_8fc6656c_js__WEBPACK_IMPORTED_MODULE_5__.g)(_this2, data, role, 'actionSheetLeave', iosLeaveAnimation, mdLeaveAnimation);
      if (dismissed) {
        _this2.delegateController.removeViewFromDom();
      }
      unlock();
      return dismissed;
    })();
  }
  /**
   * Returns a promise that resolves when the action sheet did dismiss.
   */
  onDidDismiss() {
    return (0,_overlays_8fc6656c_js__WEBPACK_IMPORTED_MODULE_5__.h)(this.el, 'ionActionSheetDidDismiss');
  }
  /**
   * Returns a promise that resolves when the action sheet will dismiss.
   *
   */
  onWillDismiss() {
    return (0,_overlays_8fc6656c_js__WEBPACK_IMPORTED_MODULE_5__.h)(this.el, 'ionActionSheetWillDismiss');
  }
  buttonClick(button) {
    var _this3 = this;
    return (0,C_Users_ekt_Documents_DOMINGO_evaluationIF_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const role = button.role;
      if ((0,_overlays_8fc6656c_js__WEBPACK_IMPORTED_MODULE_5__.i)(role)) {
        return _this3.dismiss(button.data, role);
      }
      const shouldDismiss = yield _this3.callButtonHandler(button);
      if (shouldDismiss) {
        return _this3.dismiss(button.data, button.role);
      }
      return Promise.resolve();
    })();
  }
  callButtonHandler(button) {
    return (0,C_Users_ekt_Documents_DOMINGO_evaluationIF_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (button) {
        // a handler has been provided, execute it
        // pass the handler the values from the inputs
        const rtn = yield (0,_overlays_8fc6656c_js__WEBPACK_IMPORTED_MODULE_5__.s)(button.handler);
        if (rtn === false) {
          // if the return value of the handler is false then do not dismiss
          return false;
        }
      }
      return true;
    })();
  }
  getButtons() {
    return this.buttons.map(b => {
      return typeof b === 'string' ? {
        text: b
      } : b;
    });
  }
  connectedCallback() {
    (0,_overlays_8fc6656c_js__WEBPACK_IMPORTED_MODULE_5__.j)(this.el);
    this.triggerChanged();
  }
  disconnectedCallback() {
    if (this.gesture) {
      this.gesture.destroy();
      this.gesture = undefined;
    }
    this.triggerController.removeClickListener();
  }
  componentWillLoad() {
    (0,_overlays_8fc6656c_js__WEBPACK_IMPORTED_MODULE_5__.k)(this.el);
  }
  componentDidLoad() {
    /**
     * Only create gesture if:
     * 1. A gesture does not already exist
     * 2. App is running in iOS mode
     * 3. A wrapper ref exists
     * 4. A group ref exists
     */
    const {
      groupEl,
      wrapperEl
    } = this;
    if (!this.gesture && (0,_ionic_global_b3fc28dd_js__WEBPACK_IMPORTED_MODULE_7__.b)(this) === 'ios' && wrapperEl && groupEl) {
      (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.e)(() => {
        const isScrollable = groupEl.scrollHeight > groupEl.clientHeight;
        if (!isScrollable) {
          this.gesture = (0,_button_active_513e9fff_js__WEBPACK_IMPORTED_MODULE_2__.c)(wrapperEl, refEl => refEl.classList.contains('action-sheet-button'));
          this.gesture.enable(true);
        }
      });
    }
    /**
     * If action sheet was rendered with isOpen="true"
     * then we should open action sheet immediately.
     */
    if (this.isOpen === true) {
      (0,_helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_3__.r)(() => this.present());
    }
  }
  render() {
    const {
      header,
      htmlAttributes,
      overlayIndex
    } = this;
    const mode = (0,_ionic_global_b3fc28dd_js__WEBPACK_IMPORTED_MODULE_7__.b)(this);
    const allButtons = this.getButtons();
    const cancelButton = allButtons.find(b => b.role === 'cancel');
    const buttons = allButtons.filter(b => b.role !== 'cancel');
    const headerID = `action-sheet-${overlayIndex}-header`;
    return (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.H, Object.assign({
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": header !== undefined ? headerID : null,
      tabindex: "-1"
    }, htmlAttributes, {
      style: {
        zIndex: `${20000 + this.overlayIndex}`
      },
      class: Object.assign(Object.assign({
        [mode]: true
      }, (0,_theme_17531cdf_js__WEBPACK_IMPORTED_MODULE_6__.g)(this.cssClass)), {
        'overlay-hidden': true,
        'action-sheet-translucent': this.translucent
      }),
      onIonActionSheetWillDismiss: this.dispatchCancelHandler,
      onIonBackdropTap: this.onBackdropTap
    }), (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-backdrop", {
      tappable: this.backdropDismiss
    }), (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      tabindex: "0"
    }), (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "action-sheet-wrapper ion-overlay-wrapper",
      ref: el => this.wrapperEl = el
    }, (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "action-sheet-container"
    }, (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "action-sheet-group",
      ref: el => this.groupEl = el
    }, header !== undefined && (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      id: headerID,
      class: {
        'action-sheet-title': true,
        'action-sheet-has-sub-title': this.subHeader !== undefined
      }
    }, header, this.subHeader && (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "action-sheet-sub-title"
    }, this.subHeader)), buttons.map(b => (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)("button", Object.assign({}, b.htmlAttributes, {
      type: "button",
      id: b.id,
      class: buttonClass(b),
      onClick: () => this.buttonClick(b)
    }), (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)("span", {
      class: "action-sheet-button-inner"
    }, b.icon && (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-icon", {
      icon: b.icon,
      "aria-hidden": "true",
      lazy: false,
      class: "action-sheet-icon"
    }), b.text), mode === 'md' && (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-ripple-effect", null)))), cancelButton && (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "action-sheet-group action-sheet-group-cancel"
    }, (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)("button", Object.assign({}, cancelButton.htmlAttributes, {
      type: "button",
      class: buttonClass(cancelButton),
      onClick: () => this.buttonClick(cancelButton)
    }), (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)("span", {
      class: "action-sheet-button-inner"
    }, cancelButton.icon && (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-icon", {
      icon: cancelButton.icon,
      "aria-hidden": "true",
      lazy: false,
      class: "action-sheet-icon"
    }), cancelButton.text), mode === 'md' && (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-ripple-effect", null))))), (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      tabindex: "0"
    }));
  }
  get el() {
    return (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.f)(this);
  }
  static get watchers() {
    return {
      "isOpen": ["onIsOpenChange"],
      "trigger": ["triggerChanged"]
    };
  }
};
const buttonClass = button => {
  return Object.assign({
    'action-sheet-button': true,
    'ion-activatable': true,
    'ion-focusable': true,
    [`action-sheet-${button.role}`]: button.role !== undefined
  }, (0,_theme_17531cdf_js__WEBPACK_IMPORTED_MODULE_6__.g)(button.cssClass));
};
ActionSheet.style = {
  ios: actionSheetIosCss,
  md: actionSheetMdCss
};


/***/ })

}]);