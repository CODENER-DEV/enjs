"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[6642],{

/***/ 6642:
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-toast.entry.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ion_toast: () => (/* binding */ Toast)
/* harmony export */ });
/* harmony import */ var C_Users_ekt_Documents_DOMINGO_evaluationIF_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 5861);
/* harmony import */ var _index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-2d388930.js */ 2364);
/* harmony import */ var _config_96c9ace3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config-96c9ace3.js */ 3365);
/* harmony import */ var _helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers-3379ba19.js */ 839);
/* harmony import */ var _lock_controller_e8c6c051_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lock-controller-e8c6c051.js */ 3830);
/* harmony import */ var _index_595d62c9_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index-595d62c9.js */ 6710);
/* harmony import */ var _overlays_8fc6656c_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./overlays-8fc6656c.js */ 1912);
/* harmony import */ var _theme_17531cdf_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./theme-17531cdf.js */ 3567);
/* harmony import */ var _ionic_global_b3fc28dd_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ionic-global-b3fc28dd.js */ 152);
/* harmony import */ var _animation_a1d9e088_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./animation-a1d9e088.js */ 1774);
/* harmony import */ var _index_7a14ecec_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index-7a14ecec.js */ 6225);
/* harmony import */ var _framework_delegate_aa433dea_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./framework-delegate-aa433dea.js */ 6559);
/* harmony import */ var _hardware_back_button_39299f84_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./hardware-back-button-39299f84.js */ 2124);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */













/**
 * iOS Toast Enter Animation
 */
const iosEnterAnimation = (baseEl, position) => {
  const baseAnimation = (0,_animation_a1d9e088_js__WEBPACK_IMPORTED_MODULE_9__.c)();
  const wrapperAnimation = (0,_animation_a1d9e088_js__WEBPACK_IMPORTED_MODULE_9__.c)();
  const root = (0,_helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_3__.g)(baseEl);
  const wrapperEl = root.querySelector('.toast-wrapper');
  const bottom = `calc(-10px - var(--ion-safe-area-bottom, 0px))`;
  const top = `calc(10px + var(--ion-safe-area-top, 0px))`;
  wrapperAnimation.addElement(wrapperEl);
  switch (position) {
    case 'top':
      wrapperAnimation.fromTo('transform', 'translateY(-100%)', `translateY(${top})`);
      break;
    case 'middle':
      const topPosition = Math.floor(baseEl.clientHeight / 2 - wrapperEl.clientHeight / 2);
      wrapperEl.style.top = `${topPosition}px`;
      wrapperAnimation.fromTo('opacity', 0.01, 1);
      break;
    default:
      wrapperAnimation.fromTo('transform', 'translateY(100%)', `translateY(${bottom})`);
      break;
  }
  return baseAnimation.easing('cubic-bezier(.155,1.105,.295,1.12)').duration(400).addAnimation(wrapperAnimation);
};

/**
 * iOS Toast Leave Animation
 */
const iosLeaveAnimation = (baseEl, position) => {
  const baseAnimation = (0,_animation_a1d9e088_js__WEBPACK_IMPORTED_MODULE_9__.c)();
  const wrapperAnimation = (0,_animation_a1d9e088_js__WEBPACK_IMPORTED_MODULE_9__.c)();
  const root = (0,_helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_3__.g)(baseEl);
  const wrapperEl = root.querySelector('.toast-wrapper');
  const bottom = `calc(-10px - var(--ion-safe-area-bottom, 0px))`;
  const top = `calc(10px + var(--ion-safe-area-top, 0px))`;
  wrapperAnimation.addElement(wrapperEl);
  switch (position) {
    case 'top':
      wrapperAnimation.fromTo('transform', `translateY(${top})`, 'translateY(-100%)');
      break;
    case 'middle':
      wrapperAnimation.fromTo('opacity', 0.99, 0);
      break;
    default:
      wrapperAnimation.fromTo('transform', `translateY(${bottom})`, 'translateY(100%)');
      break;
  }
  return baseAnimation.easing('cubic-bezier(.36,.66,.04,1)').duration(300).addAnimation(wrapperAnimation);
};

/**
 * MD Toast Enter Animation
 */
const mdEnterAnimation = (baseEl, position) => {
  const baseAnimation = (0,_animation_a1d9e088_js__WEBPACK_IMPORTED_MODULE_9__.c)();
  const wrapperAnimation = (0,_animation_a1d9e088_js__WEBPACK_IMPORTED_MODULE_9__.c)();
  const root = (0,_helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_3__.g)(baseEl);
  const wrapperEl = root.querySelector('.toast-wrapper');
  const bottom = `calc(8px + var(--ion-safe-area-bottom, 0px))`;
  const top = `calc(8px + var(--ion-safe-area-top, 0px))`;
  wrapperAnimation.addElement(wrapperEl);
  switch (position) {
    case 'top':
      wrapperEl.style.top = top;
      wrapperAnimation.fromTo('opacity', 0.01, 1);
      break;
    case 'middle':
      const topPosition = Math.floor(baseEl.clientHeight / 2 - wrapperEl.clientHeight / 2);
      wrapperEl.style.top = `${topPosition}px`;
      wrapperAnimation.fromTo('opacity', 0.01, 1);
      break;
    default:
      wrapperEl.style.bottom = bottom;
      wrapperAnimation.fromTo('opacity', 0.01, 1);
      break;
  }
  return baseAnimation.easing('cubic-bezier(.36,.66,.04,1)').duration(400).addAnimation(wrapperAnimation);
};

/**
 * md Toast Leave Animation
 */
const mdLeaveAnimation = baseEl => {
  const baseAnimation = (0,_animation_a1d9e088_js__WEBPACK_IMPORTED_MODULE_9__.c)();
  const wrapperAnimation = (0,_animation_a1d9e088_js__WEBPACK_IMPORTED_MODULE_9__.c)();
  const root = (0,_helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_3__.g)(baseEl);
  const wrapperEl = root.querySelector('.toast-wrapper');
  wrapperAnimation.addElement(wrapperEl).fromTo('opacity', 0.99, 0);
  return baseAnimation.easing('cubic-bezier(.36,.66,.04,1)').duration(300).addAnimation(wrapperAnimation);
};
const toastIosCss = ":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:normal;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}@supports (inset-inline-start: 0){:host{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host{left:0}:host-context([dir=rtl]){left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host:dir(rtl){left:unset;right:unset;right:0}}}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}@supports (inset-inline-start: 0){.toast-wrapper{inset-inline-start:var(--start);inset-inline-end:var(--end)}}@supports not (inset-inline-start: 0){.toast-wrapper{left:var(--start);right:var(--end)}:host-context([dir=rtl]) .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}[dir=rtl] .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}@supports selector(:dir(rtl)){.toast-wrapper:dir(rtl){left:unset;right:unset;left:var(--end);right:var(--start)}}}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-layout-stacked .toast-container{-ms-flex-wrap:wrap;flex-wrap:wrap}.toast-layout-baseline .toast-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-icon{-webkit-margin-start:16px;margin-inline-start:16px}.toast-message{-ms-flex:1;flex:1;white-space:var(--white-space)}.toast-button-group{display:-ms-flexbox;display:flex}.toast-layout-stacked .toast-button-group{-ms-flex-pack:end;justify-content:end;width:100%}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon,.toast-button-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-50, #f2f2f2);--border-radius:14px;--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-850, #262626);--max-width:700px;--start:10px;--end:10px;font-size:14px}.toast-wrapper{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;z-index:10}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.toast-translucent) .toast-wrapper{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}:host(.ion-color.toast-translucent) .toast-wrapper{background:rgba(var(--ion-color-base-rgb), 0.8)}}.toast-wrapper.toast-top{-webkit-transform:translate3d(0,  -100%,  0);transform:translate3d(0,  -100%,  0);top:0}.toast-wrapper.toast-middle{opacity:0.01}.toast-wrapper.toast-bottom{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);bottom:0}.toast-content{-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px;padding-top:15px;padding-bottom:15px}.toast-header{margin-bottom:2px;font-weight:500}.toast-button{-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px;padding-top:10px;padding-bottom:10px;height:44px;-webkit-transition:background-color, opacity 100ms linear;transition:background-color, opacity 100ms linear;border:0;background-color:transparent;font-family:var(--ion-font-family);font-size:17px;font-weight:500;overflow:hidden}.toast-button.ion-activated{opacity:0.4}@media (any-hover: hover){.toast-button:hover{opacity:0.6}}";
const toastMdCss = ":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:normal;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}@supports (inset-inline-start: 0){:host{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host{left:0}:host-context([dir=rtl]){left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host:dir(rtl){left:unset;right:unset;right:0}}}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}@supports (inset-inline-start: 0){.toast-wrapper{inset-inline-start:var(--start);inset-inline-end:var(--end)}}@supports not (inset-inline-start: 0){.toast-wrapper{left:var(--start);right:var(--end)}:host-context([dir=rtl]) .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}[dir=rtl] .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}@supports selector(:dir(rtl)){.toast-wrapper:dir(rtl){left:unset;right:unset;left:var(--end);right:var(--start)}}}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-layout-stacked .toast-container{-ms-flex-wrap:wrap;flex-wrap:wrap}.toast-layout-baseline .toast-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-icon{-webkit-margin-start:16px;margin-inline-start:16px}.toast-message{-ms-flex:1;flex:1;white-space:var(--white-space)}.toast-button-group{display:-ms-flexbox;display:flex}.toast-layout-stacked .toast-button-group{-ms-flex-pack:end;justify-content:end;width:100%}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon,.toast-button-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-800, #333333);--border-radius:4px;--box-shadow:0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-50, #f2f2f2);--max-width:700px;--start:8px;--end:8px;font-size:14px}.toast-wrapper{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;opacity:0.01;z-index:10}.toast-content{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:14px;padding-bottom:14px}.toast-header{margin-bottom:2px;font-weight:500;line-height:20px}.toast-message{line-height:20px}.toast-layout-baseline .toast-button-group-start{-webkit-margin-start:8px;margin-inline-start:8px}.toast-layout-stacked .toast-button-group-start{-webkit-margin-end:8px;margin-inline-end:8px;margin-top:8px}.toast-layout-baseline .toast-button-group-end{-webkit-margin-end:8px;margin-inline-end:8px}.toast-layout-stacked .toast-button-group-end{-webkit-margin-end:8px;margin-inline-end:8px;margin-bottom:8px}.toast-button{-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px;padding-top:10px;padding-bottom:10px;position:relative;background-color:transparent;font-family:var(--ion-font-family);font-size:14px;font-weight:500;letter-spacing:0.84px;text-transform:uppercase;overflow:hidden}.toast-button-cancel{color:var(--ion-color-step-100, #e6e6e6)}.toast-button-icon-only{border-radius:50%;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px;padding-top:9px;padding-bottom:9px;width:36px;height:36px}@media (any-hover: hover){.toast-button:hover{background-color:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.08)}.toast-button-cancel:hover{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.08)}}";
const Toast = class {
  constructor(hostRef) {
    (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.didPresent = (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionToastDidPresent", 7);
    this.willPresent = (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionToastWillPresent", 7);
    this.willDismiss = (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionToastWillDismiss", 7);
    this.didDismiss = (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionToastDidDismiss", 7);
    this.didPresentShorthand = (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "didPresent", 7);
    this.willPresentShorthand = (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "willPresent", 7);
    this.willDismissShorthand = (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "willDismiss", 7);
    this.didDismissShorthand = (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "didDismiss", 7);
    this.delegateController = (0,_overlays_8fc6656c_js__WEBPACK_IMPORTED_MODULE_6__.d)(this);
    this.lockController = (0,_lock_controller_e8c6c051_js__WEBPACK_IMPORTED_MODULE_4__.c)();
    this.triggerController = (0,_overlays_8fc6656c_js__WEBPACK_IMPORTED_MODULE_6__.e)();
    this.customHTMLEnabled = _ionic_global_b3fc28dd_js__WEBPACK_IMPORTED_MODULE_8__.c.get('innerHTMLTemplatesEnabled', _config_96c9ace3_js__WEBPACK_IMPORTED_MODULE_2__.E);
    this.presented = false;
    this.dispatchCancelHandler = ev => {
      const role = ev.detail.role;
      if ((0,_overlays_8fc6656c_js__WEBPACK_IMPORTED_MODULE_6__.i)(role)) {
        const cancelButton = this.getButtons().find(b => b.role === 'cancel');
        this.callButtonHandler(cancelButton);
      }
    };
    this.revealContentToScreenReader = false;
    this.overlayIndex = undefined;
    this.delegate = undefined;
    this.hasController = false;
    this.color = undefined;
    this.enterAnimation = undefined;
    this.leaveAnimation = undefined;
    this.cssClass = undefined;
    this.duration = _ionic_global_b3fc28dd_js__WEBPACK_IMPORTED_MODULE_8__.c.getNumber('toastDuration', 0);
    this.header = undefined;
    this.layout = 'baseline';
    this.message = undefined;
    this.keyboardClose = false;
    this.position = 'bottom';
    this.buttons = undefined;
    this.translucent = false;
    this.animated = true;
    this.icon = undefined;
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
  connectedCallback() {
    (0,_overlays_8fc6656c_js__WEBPACK_IMPORTED_MODULE_6__.j)(this.el);
    this.triggerChanged();
  }
  disconnectedCallback() {
    this.triggerController.removeClickListener();
  }
  componentWillLoad() {
    (0,_overlays_8fc6656c_js__WEBPACK_IMPORTED_MODULE_6__.k)(this.el);
  }
  componentDidLoad() {
    /**
     * If toast was rendered with isOpen="true"
     * then we should open toast immediately.
     */
    if (this.isOpen === true) {
      (0,_helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_3__.r)(() => this.present());
    }
  }
  /**
   * Present the toast overlay after it has been created.
   */
  present() {
    var _this = this;
    return (0,C_Users_ekt_Documents_DOMINGO_evaluationIF_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const unlock = yield _this.lockController.lock();
      yield _this.delegateController.attachViewToDom();
      yield (0,_overlays_8fc6656c_js__WEBPACK_IMPORTED_MODULE_6__.f)(_this, 'toastEnter', iosEnterAnimation, mdEnterAnimation, _this.position);
      /**
       * Content is revealed to screen readers after
       * the transition to avoid jank since this
       * state updates will cause a re-render.
       */
      _this.revealContentToScreenReader = true;
      if (_this.duration > 0) {
        _this.durationTimeout = setTimeout(() => _this.dismiss(undefined, 'timeout'), _this.duration);
      }
      unlock();
    })();
  }
  /**
   * Dismiss the toast overlay after it has been presented.
   *
   * @param data Any data to emit in the dismiss events.
   * @param role The role of the element that is dismissing the toast.
   * This can be useful in a button handler for determining which button was
   * clicked to dismiss the toast.
   * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
   */
  dismiss(data, role) {
    var _this2 = this;
    return (0,C_Users_ekt_Documents_DOMINGO_evaluationIF_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const unlock = yield _this2.lockController.lock();
      if (_this2.durationTimeout) {
        clearTimeout(_this2.durationTimeout);
      }
      const dismissed = yield (0,_overlays_8fc6656c_js__WEBPACK_IMPORTED_MODULE_6__.g)(_this2, data, role, 'toastLeave', iosLeaveAnimation, mdLeaveAnimation, _this2.position);
      if (dismissed) {
        _this2.delegateController.removeViewFromDom();
        _this2.revealContentToScreenReader = false;
      }
      unlock();
      return dismissed;
    })();
  }
  /**
   * Returns a promise that resolves when the toast did dismiss.
   */
  onDidDismiss() {
    return (0,_overlays_8fc6656c_js__WEBPACK_IMPORTED_MODULE_6__.h)(this.el, 'ionToastDidDismiss');
  }
  /**
   * Returns a promise that resolves when the toast will dismiss.
   */
  onWillDismiss() {
    return (0,_overlays_8fc6656c_js__WEBPACK_IMPORTED_MODULE_6__.h)(this.el, 'ionToastWillDismiss');
  }
  getButtons() {
    const buttons = this.buttons ? this.buttons.map(b => {
      return typeof b === 'string' ? {
        text: b
      } : b;
    }) : [];
    return buttons;
  }
  buttonClick(button) {
    var _this3 = this;
    return (0,C_Users_ekt_Documents_DOMINGO_evaluationIF_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const role = button.role;
      if ((0,_overlays_8fc6656c_js__WEBPACK_IMPORTED_MODULE_6__.i)(role)) {
        return _this3.dismiss(undefined, role);
      }
      const shouldDismiss = yield _this3.callButtonHandler(button);
      if (shouldDismiss) {
        return _this3.dismiss(undefined, role);
      }
      return Promise.resolve();
    })();
  }
  callButtonHandler(button) {
    return (0,C_Users_ekt_Documents_DOMINGO_evaluationIF_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (button === null || button === void 0 ? void 0 : button.handler) {
        // a handler has been provided, execute it
        // pass the handler the values from the inputs
        try {
          const rtn = yield (0,_overlays_8fc6656c_js__WEBPACK_IMPORTED_MODULE_6__.s)(button.handler);
          if (rtn === false) {
            // if the return value of the handler is false then do not dismiss
            return false;
          }
        } catch (e) {
          console.error(e);
        }
      }
      return true;
    })();
  }
  renderButtons(buttons, side) {
    if (buttons.length === 0) {
      return;
    }
    const mode = (0,_ionic_global_b3fc28dd_js__WEBPACK_IMPORTED_MODULE_8__.b)(this);
    const buttonGroupsClasses = {
      'toast-button-group': true,
      [`toast-button-group-${side}`]: true
    };
    return (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: buttonGroupsClasses
    }, buttons.map(b => (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)("button", Object.assign({}, b.htmlAttributes, {
      type: "button",
      class: buttonClass(b),
      tabIndex: 0,
      onClick: () => this.buttonClick(b),
      part: buttonPart(b)
    }), (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "toast-button-inner"
    }, b.icon && (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-icon", {
      "aria-hidden": "true",
      icon: b.icon,
      slot: b.text === undefined ? 'icon-only' : undefined,
      class: "toast-button-icon"
    }), b.text), mode === 'md' && (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-ripple-effect", {
      type: b.icon !== undefined && b.text === undefined ? 'unbounded' : 'bounded'
    }))));
  }
  /**
   * Render the `message` property.
   * @param key - A key to give the element a stable identity. This is used to improve compatibility with screen readers.
   * @param ariaHidden - If "true" then content will be hidden from screen readers.
   */
  renderToastMessage(key, ariaHidden = null) {
    const {
      customHTMLEnabled,
      message
    } = this;
    if (customHTMLEnabled) {
      return (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
        key: key,
        "aria-hidden": ariaHidden,
        class: "toast-message",
        part: "message",
        innerHTML: (0,_config_96c9ace3_js__WEBPACK_IMPORTED_MODULE_2__.a)(message)
      });
    }
    return (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      key: key,
      "aria-hidden": ariaHidden,
      class: "toast-message",
      part: "message"
    }, message);
  }
  /**
   * Render the `header` property.
   * @param key - A key to give the element a stable identity. This is used to improve compatibility with screen readers.
   * @param ariaHidden - If "true" then content will be hidden from screen readers.
   */
  renderHeader(key, ariaHidden = null) {
    return (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      key: key,
      class: "toast-header",
      "aria-hidden": ariaHidden,
      part: "header"
    }, this.header);
  }
  render() {
    const {
      layout,
      el,
      revealContentToScreenReader,
      header,
      message
    } = this;
    const allButtons = this.getButtons();
    const startButtons = allButtons.filter(b => b.side === 'start');
    const endButtons = allButtons.filter(b => b.side !== 'start');
    const mode = (0,_ionic_global_b3fc28dd_js__WEBPACK_IMPORTED_MODULE_8__.b)(this);
    const wrapperClass = {
      'toast-wrapper': true,
      [`toast-${this.position}`]: true,
      [`toast-layout-${layout}`]: true
    };
    /**
     * Stacked buttons are only meant to be
     *  used with one type of button.
     */
    if (layout === 'stacked' && startButtons.length > 0 && endButtons.length > 0) {
      (0,_index_595d62c9_js__WEBPACK_IMPORTED_MODULE_5__.p)('This toast is using start and end buttons with the stacked toast layout. We recommend following the best practice of using either start or end buttons with the stacked toast layout.', el);
    }
    return (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.H, Object.assign({
      tabindex: "-1"
    }, this.htmlAttributes, {
      style: {
        zIndex: `${60000 + this.overlayIndex}`
      },
      class: (0,_theme_17531cdf_js__WEBPACK_IMPORTED_MODULE_7__.c)(this.color, Object.assign(Object.assign({
        [mode]: true
      }, (0,_theme_17531cdf_js__WEBPACK_IMPORTED_MODULE_7__.g)(this.cssClass)), {
        'overlay-hidden': true,
        'toast-translucent': this.translucent
      })),
      onIonToastWillDismiss: this.dispatchCancelHandler
    }), (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: wrapperClass
    }, (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "toast-container",
      part: "container"
    }, this.renderButtons(startButtons, 'start'), this.icon !== undefined && (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-icon", {
      class: "toast-icon",
      part: "icon",
      icon: this.icon,
      lazy: false,
      "aria-hidden": "true"
    }), (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "toast-content",
      role: "status",
      "aria-atomic": "true",
      "aria-live": "polite"
    }, !revealContentToScreenReader && header !== undefined && this.renderHeader('oldHeader', 'true'), !revealContentToScreenReader && message !== undefined && this.renderToastMessage('oldMessage', 'true'), revealContentToScreenReader && header !== undefined && this.renderHeader('header'), revealContentToScreenReader && message !== undefined && this.renderToastMessage('header')), this.renderButtons(endButtons, 'end'))));
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
    'toast-button': true,
    'toast-button-icon-only': button.icon !== undefined && button.text === undefined,
    [`toast-button-${button.role}`]: button.role !== undefined,
    'ion-focusable': true,
    'ion-activatable': true
  }, (0,_theme_17531cdf_js__WEBPACK_IMPORTED_MODULE_7__.g)(button.cssClass));
};
const buttonPart = button => {
  return (0,_overlays_8fc6656c_js__WEBPACK_IMPORTED_MODULE_6__.i)(button.role) ? 'button cancel' : 'button';
};
Toast.style = {
  ios: toastIosCss,
  md: toastMdCss
};


/***/ }),

/***/ 3830:
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/lock-controller-e8c6c051.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ createLockController)
/* harmony export */ });
/* harmony import */ var C_Users_ekt_Documents_DOMINGO_evaluationIF_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 5861);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/**
 * Creates a lock controller.
 *
 * Claiming a lock means that nothing else can acquire the lock until it is released.
 * This can momentarily prevent execution of code that needs to wait for the earlier code to finish.
 * For example, this can be used to prevent multiple transitions from occurring at the same time.
 */
const createLockController = () => {
  let waitPromise;
  /**
   * When lock() is called, the lock is claimed.
   * Once a lock has been claimed, it cannot be claimed again until it is released.
   * When this function gets resolved, the lock is released, allowing it to be claimed again.
   *
   * @example ```tsx
   * const unlock = await this.lockController.lock();
   * // do other stuff
   * unlock();
   * ```
   */
  const lock = /*#__PURE__*/function () {
    var _ref = (0,C_Users_ekt_Documents_DOMINGO_evaluationIF_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const p = waitPromise;
      let resolve;
      waitPromise = new Promise(r => resolve = r);
      if (p !== undefined) {
        yield p;
      }
      return resolve;
    });
    return function lock() {
      return _ref.apply(this, arguments);
    };
  }();
  return {
    lock
  };
};


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