"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[8866],{

/***/ 4874:
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/capacitor-b4979570.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ getCapacitor)
/* harmony export */ });
/* harmony import */ var _index_7a14ecec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a14ecec.js */ 6225);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */

const getCapacitor = () => {
  if (_index_7a14ecec_js__WEBPACK_IMPORTED_MODULE_0__.w !== undefined) {
    return _index_7a14ecec_js__WEBPACK_IMPORTED_MODULE_0__.w.Capacitor;
  }
  return undefined;
};


/***/ }),

/***/ 5487:
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/form-controller-ed77647a.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ createLegacyFormController)
/* harmony export */ });
/* harmony import */ var _helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-3379ba19.js */ 839);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */


/**
 * Creates a controller that tracks whether a form control is using the legacy or modern syntax. This should be removed when the legacy form control syntax is removed.
 *
 * @internal
 * @prop el: The Ionic form component to reference
 */
const createLegacyFormController = el => {
  const controlEl = el;
  let legacyControl;
  const hasLegacyControl = () => {
    if (legacyControl === undefined) {
      /**
       * Detect if developers are using the legacy form control syntax
       * so a deprecation warning is logged. This warning can be disabled
       * by either using the new `label` property or setting `aria-label`
       * on the control.
       * Alternatively, components that use a slot for the label
       * can check to see if the component has slotted text
       * in the light DOM.
       */
      const hasLabelProp = controlEl.label !== undefined || hasLabelSlot(controlEl);
      const hasAriaLabelAttribute = controlEl.hasAttribute('aria-label') ||
      // Shadow DOM form controls cannot use aria-labelledby
      controlEl.hasAttribute('aria-labelledby') && controlEl.shadowRoot === null;
      const legacyItemLabel = (0,_helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_0__.h)(controlEl);
      /**
       * Developers can manually opt-out of the modern form markup
       * by setting `legacy="true"` on components.
       */
      legacyControl = controlEl.legacy === true || !hasLabelProp && !hasAriaLabelAttribute && legacyItemLabel !== null;
    }
    return legacyControl;
  };
  return {
    hasLegacyControl
  };
};
const hasLabelSlot = controlEl => {
  const root = controlEl.shadowRoot;
  if (root === null) {
    return false;
  }
  /**
   * Components that have a named label slot
   * also have other slots, so we need to query for
   * anything that is explicitly passed to slot="label"
   */
  if (NAMED_LABEL_SLOT_COMPONENTS.includes(controlEl.tagName) && controlEl.querySelector('[slot="label"]') !== null) {
    return true;
  }
  /**
   * Components that have an unnamed slot for the label
   * have no other slots, so we can check the textContent
   * of the element.
   */
  if (UNNAMED_LABEL_SLOT_COMPONENTS.includes(controlEl.tagName) && controlEl.textContent !== '') {
    return true;
  }
  return false;
};
const NAMED_LABEL_SLOT_COMPONENTS = ['ION-RANGE'];
const UNNAMED_LABEL_SLOT_COMPONENTS = ['ION-TOGGLE', 'ION-CHECKBOX', 'ION-RADIO'];


/***/ }),

/***/ 7150:
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-6447af60.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ ImpactStyle),
/* harmony export */   a: () => (/* binding */ hapticSelectionStart),
/* harmony export */   b: () => (/* binding */ hapticSelectionChanged),
/* harmony export */   c: () => (/* binding */ hapticSelection),
/* harmony export */   d: () => (/* binding */ hapticImpact),
/* harmony export */   h: () => (/* binding */ hapticSelectionEnd)
/* harmony export */ });
/* harmony import */ var _capacitor_b4979570_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./capacitor-b4979570.js */ 4874);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */

var ImpactStyle;
(function (ImpactStyle) {
  /**
   * A collision between large, heavy user interface elements
   *
   * @since 1.0.0
   */
  ImpactStyle["Heavy"] = "HEAVY";
  /**
   * A collision between moderately sized user interface elements
   *
   * @since 1.0.0
   */
  ImpactStyle["Medium"] = "MEDIUM";
  /**
   * A collision between small, light user interface elements
   *
   * @since 1.0.0
   */
  ImpactStyle["Light"] = "LIGHT";
})(ImpactStyle || (ImpactStyle = {}));
var NotificationType;
(function (NotificationType) {
  /**
   * A notification feedback type indicating that a task has completed successfully
   *
   * @since 1.0.0
   */
  NotificationType["Success"] = "SUCCESS";
  /**
   * A notification feedback type indicating that a task has produced a warning
   *
   * @since 1.0.0
   */
  NotificationType["Warning"] = "WARNING";
  /**
   * A notification feedback type indicating that a task has failed
   *
   * @since 1.0.0
   */
  NotificationType["Error"] = "ERROR";
})(NotificationType || (NotificationType = {}));
const HapticEngine = {
  getEngine() {
    const tapticEngine = window.TapticEngine;
    if (tapticEngine) {
      // Cordova
      // TODO FW-4707 - Remove this in Ionic 8
      return tapticEngine;
    }
    const capacitor = (0,_capacitor_b4979570_js__WEBPACK_IMPORTED_MODULE_0__.g)();
    if (capacitor === null || capacitor === void 0 ? void 0 : capacitor.isPluginAvailable('Haptics')) {
      // Capacitor
      return capacitor.Plugins.Haptics;
    }
    return undefined;
  },
  available() {
    const engine = this.getEngine();
    if (!engine) {
      return false;
    }
    const capacitor = (0,_capacitor_b4979570_js__WEBPACK_IMPORTED_MODULE_0__.g)();
    /**
     * Developers can manually import the
     * Haptics plugin in their app which will cause
     * getEngine to return the Haptics engine. However,
     * the Haptics engine will throw an error if
     * used in a web browser that does not support
     * the Vibrate API. This check avoids that error
     * if the browser does not support the Vibrate API.
     */
    if ((capacitor === null || capacitor === void 0 ? void 0 : capacitor.getPlatform()) === 'web') {
      return typeof navigator !== 'undefined' && navigator.vibrate !== undefined;
    }
    return true;
  },
  isCordova() {
    return window.TapticEngine !== undefined;
  },
  isCapacitor() {
    return (0,_capacitor_b4979570_js__WEBPACK_IMPORTED_MODULE_0__.g)() !== undefined;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    /**
     * To provide backwards compatibility with Cordova apps,
     * we convert the style to lowercase.
     *
     * TODO: FW-4707 - Remove this in Ionic 8
     */
    const style = this.isCapacitor() ? options.style : options.style.toLowerCase();
    engine.impact({
      style
    });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    /**
     * To provide backwards compatibility with Cordova apps,
     * we convert the style to lowercase.
     *
     * TODO: FW-4707 - Remove this in Ionic 8
     */
    const type = this.isCapacitor() ? options.type : options.type.toLowerCase();
    engine.notification({
      type
    });
  },
  selection() {
    /**
     * To provide backwards compatibility with Cordova apps,
     * we convert the style to lowercase.
     *
     * TODO: FW-4707 - Remove this in Ionic 8
     */
    const style = this.isCapacitor() ? ImpactStyle.Light : 'light';
    this.impact({
      style
    });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    } else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    } else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    } else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Check to see if the Haptic Plugin is available
 * @return Returns `true` or false if the plugin is available
 */
const hapticAvailable = () => {
  return HapticEngine.available();
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  hapticAvailable() && HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  hapticAvailable() && HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  hapticAvailable() && HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  hapticAvailable() && HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: ImpactStyle.LIGHT }` (or `MEDIUM`/`HEAVY`)
 */
const hapticImpact = options => {
  hapticAvailable() && HapticEngine.impact(options);
};


/***/ }),

/***/ 8866:
/*!***************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ion_toggle: () => (/* binding */ Toggle)
/* harmony export */ });
/* harmony import */ var C_Users_ekt_Documents_DOMINGO_evaluationIF_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 5861);
/* harmony import */ var _index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-2d388930.js */ 2364);
/* harmony import */ var _form_controller_ed77647a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-controller-ed77647a.js */ 5487);
/* harmony import */ var _helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers-3379ba19.js */ 839);
/* harmony import */ var _index_595d62c9_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index-595d62c9.js */ 6710);
/* harmony import */ var _haptic_6447af60_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./haptic-6447af60.js */ 7150);
/* harmony import */ var _dir_912e3e13_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dir-912e3e13.js */ 5085);
/* harmony import */ var _theme_17531cdf_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./theme-17531cdf.js */ 3567);
/* harmony import */ var _index_ecfc2c9f_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index-ecfc2c9f.js */ 3173);
/* harmony import */ var _ionic_global_b3fc28dd_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ionic-global-b3fc28dd.js */ 152);
/* harmony import */ var _capacitor_b4979570_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./capacitor-b4979570.js */ 4874);
/* harmony import */ var _index_7a14ecec_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./index-7a14ecec.js */ 6225);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */











const toggleIosCss = ":host{-webkit-box-sizing:content-box !important;box-sizing:content-box !important;display:inline-block;position:relative;max-width:100%;outline:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.in-item:not(.legacy-toggle)){width:100%;height:100%}:host([slot=start]:not(.legacy-toggle)),:host([slot=end]:not(.legacy-toggle)){width:auto}:host(.legacy-toggle){contain:content;-ms-touch-action:none;touch-action:none}:host(.ion-focused) input{border:2px solid #5e9ed6}:host(.toggle-disabled){pointer-events:none}:host(.legacy-toggle) label{top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0;pointer-events:none}@supports (inset-inline-start: 0){:host(.legacy-toggle) label{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host(.legacy-toggle) label{left:0}:host-context([dir=rtl]):host(.legacy-toggle) label,:host-context([dir=rtl]).legacy-toggle label{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host(.legacy-toggle) label:dir(rtl){left:unset;right:unset;right:0}}}:host(.legacy-toggle) label::-moz-focus-inner{border:0}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.toggle-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;height:inherit;-webkit-transition:background-color 15ms linear;transition:background-color 15ms linear;cursor:inherit}.label-text-wrapper{pointer-events:none;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host(.in-item:not(.legacy-toggle)) .label-text-wrapper{margin-top:10px;margin-bottom:10px}:host(.in-item.toggle-label-placement-stacked) .label-text-wrapper{margin-top:10px;margin-bottom:16px}:host(.in-item.toggle-label-placement-stacked) .native-wrapper{margin-bottom:10px}.label-text-wrapper-hidden{display:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host(.toggle-justify-space-between) .toggle-wrapper{-ms-flex-pack:justify;justify-content:space-between}:host(.toggle-justify-start) .toggle-wrapper{-ms-flex-pack:start;justify-content:start}:host(.toggle-justify-end) .toggle-wrapper{-ms-flex-pack:end;justify-content:end}:host(.toggle-alignment-start) .toggle-wrapper{-ms-flex-align:start;align-items:start}:host(.toggle-alignment-center) .toggle-wrapper{-ms-flex-align:center;align-items:center}:host(.toggle-label-placement-start) .toggle-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.toggle-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.toggle-label-placement-end) .toggle-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.toggle-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}:host(.toggle-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.toggle-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}:host(.toggle-label-placement-stacked) .toggle-wrapper{-ms-flex-direction:column;flex-direction:column}:host(.toggle-label-placement-stacked) .label-text-wrapper{-webkit-transform:scale(0.75);transform:scale(0.75);margin-left:0;margin-right:0;margin-bottom:16px;max-width:calc(100% / 0.75)}:host(.toggle-label-placement-stacked.toggle-alignment-start) .label-text-wrapper{-webkit-transform-origin:left top;transform-origin:left top}:host-context([dir=rtl]):host(.toggle-label-placement-stacked.toggle-alignment-start) .label-text-wrapper,:host-context([dir=rtl]).toggle-label-placement-stacked.toggle-alignment-start .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){:host(.toggle-label-placement-stacked.toggle-alignment-start) .label-text-wrapper:dir(rtl){-webkit-transform-origin:right top;transform-origin:right top}}:host(.toggle-label-placement-stacked.toggle-alignment-center) .label-text-wrapper{-webkit-transform-origin:center top;transform-origin:center top}:host-context([dir=rtl]):host(.toggle-label-placement-stacked.toggle-alignment-center) .label-text-wrapper,:host-context([dir=rtl]).toggle-label-placement-stacked.toggle-alignment-center .label-text-wrapper{-webkit-transform-origin:calc(100% - center) top;transform-origin:calc(100% - center) top}@supports selector(:dir(rtl)){:host(.toggle-label-placement-stacked.toggle-alignment-center) .label-text-wrapper:dir(rtl){-webkit-transform-origin:calc(100% - center) top;transform-origin:calc(100% - center) top}}.toggle-icon-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;height:100%;-webkit-transition:var(--handle-transition);transition:var(--handle-transition);will-change:transform}.toggle-icon{border-radius:var(--border-radius);display:block;position:relative;width:100%;height:100%;background:var(--track-background);overflow:inherit}:host(.toggle-checked) .toggle-icon{background:var(--track-background-checked)}.toggle-inner{border-radius:var(--handle-border-radius);position:absolute;left:var(--handle-spacing);width:var(--handle-width);height:var(--handle-height);max-height:var(--handle-max-height);-webkit-transition:var(--handle-transition);transition:var(--handle-transition);background:var(--handle-background);-webkit-box-shadow:var(--handle-box-shadow);box-shadow:var(--handle-box-shadow);contain:strict}:host(.toggle-ltr) .toggle-inner{left:var(--handle-spacing)}:host(.toggle-rtl) .toggle-inner{right:var(--handle-spacing)}:host(.toggle-ltr.toggle-checked) .toggle-icon-wrapper{-webkit-transform:translate3d(calc(100% - var(--handle-width)), 0, 0);transform:translate3d(calc(100% - var(--handle-width)), 0, 0)}:host(.toggle-rtl.toggle-checked) .toggle-icon-wrapper{-webkit-transform:translate3d(calc(-100% + var(--handle-width)), 0, 0);transform:translate3d(calc(-100% + var(--handle-width)), 0, 0)}:host(.toggle-checked) .toggle-inner{background:var(--handle-background-checked)}:host(.toggle-ltr.toggle-checked) .toggle-inner{-webkit-transform:translate3d(calc(var(--handle-spacing) * -2), 0, 0);transform:translate3d(calc(var(--handle-spacing) * -2), 0, 0)}:host(.toggle-rtl.toggle-checked) .toggle-inner{-webkit-transform:translate3d(calc(var(--handle-spacing) * 2), 0, 0);transform:translate3d(calc(var(--handle-spacing) * 2), 0, 0)}:host{--track-background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.088);--track-background-checked:var(--ion-color-primary, #3880ff);--border-radius:16px;--handle-background:#ffffff;--handle-background-checked:#ffffff;--handle-border-radius:25.5px;--handle-box-shadow:0 3px 12px rgba(0, 0, 0, 0.16), 0 3px 1px rgba(0, 0, 0, 0.1);--handle-height:calc(32px - (2px * 2));--handle-max-height:calc(100% - var(--handle-spacing) * 2);--handle-width:calc(32px - (2px * 2));--handle-spacing:2px;--handle-transition:transform 300ms, width 120ms ease-in-out 80ms, left 110ms ease-in-out 80ms, right 110ms ease-in-out 80ms}:host(.legacy-toggle){width:51px;height:32px;contain:strict;overflow:hidden}.native-wrapper .toggle-icon{width:51px;height:32px;overflow:hidden}:host(.ion-color.toggle-checked) .toggle-icon{background:var(--ion-color-base)}:host(.toggle-activated) .toggle-switch-icon{opacity:0}.toggle-icon{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);-webkit-transition:background-color 300ms;transition:background-color 300ms}.toggle-inner{will-change:transform}.toggle-switch-icon{position:absolute;top:50%;width:11px;height:11px;-webkit-transform:translateY(-50%);transform:translateY(-50%);-webkit-transition:opacity 300ms, color 300ms;transition:opacity 300ms, color 300ms}.toggle-switch-icon{position:absolute;color:var(--ion-color-dark)}:host(.toggle-ltr) .toggle-switch-icon{right:6px}:host(.toggle-rtl) .toggle-switch-icon{right:initial;left:6px;}:host(.toggle-checked) .toggle-switch-icon.toggle-switch-icon-checked{color:var(--ion-color-contrast, #fff)}:host(.toggle-checked) .toggle-switch-icon:not(.toggle-switch-icon-checked){opacity:0}.toggle-switch-icon-checked{position:absolute;width:15px;height:15px;-webkit-transform:translateY(-50%) rotate(90deg);transform:translateY(-50%) rotate(90deg)}:host(.toggle-ltr) .toggle-switch-icon-checked{right:initial;left:4px;}:host(.toggle-rtl) .toggle-switch-icon-checked{right:4px}:host(.toggle-activated) .toggle-icon::before,:host(.toggle-checked) .toggle-icon::before{-webkit-transform:scale3d(0, 0, 0);transform:scale3d(0, 0, 0)}:host(.toggle-activated.toggle-checked) .toggle-inner::before{-webkit-transform:scale3d(0, 0, 0);transform:scale3d(0, 0, 0)}:host(.toggle-activated) .toggle-inner{width:calc(var(--handle-width) + 6px)}:host(.toggle-ltr.toggle-activated.toggle-checked) .toggle-icon-wrapper{-webkit-transform:translate3d(calc(100% - var(--handle-width) - 6px), 0, 0);transform:translate3d(calc(100% - var(--handle-width) - 6px), 0, 0)}:host(.toggle-rtl.toggle-activated.toggle-checked) .toggle-icon-wrapper{-webkit-transform:translate3d(calc(-100% + var(--handle-width) + 6px), 0, 0);transform:translate3d(calc(-100% + var(--handle-width) + 6px), 0, 0)}:host(.toggle-disabled){opacity:0.3}:host(.in-item.legacy-toggle){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:0;padding-inline-end:0;padding-top:6px;padding-bottom:5px}:host(.in-item.legacy-toggle[slot=start]){-webkit-padding-start:0;padding-inline-start:0;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:6px;padding-bottom:5px}";
const toggleMdCss = ":host{-webkit-box-sizing:content-box !important;box-sizing:content-box !important;display:inline-block;position:relative;max-width:100%;outline:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.in-item:not(.legacy-toggle)){width:100%;height:100%}:host([slot=start]:not(.legacy-toggle)),:host([slot=end]:not(.legacy-toggle)){width:auto}:host(.legacy-toggle){contain:content;-ms-touch-action:none;touch-action:none}:host(.ion-focused) input{border:2px solid #5e9ed6}:host(.toggle-disabled){pointer-events:none}:host(.legacy-toggle) label{top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0;pointer-events:none}@supports (inset-inline-start: 0){:host(.legacy-toggle) label{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host(.legacy-toggle) label{left:0}:host-context([dir=rtl]):host(.legacy-toggle) label,:host-context([dir=rtl]).legacy-toggle label{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host(.legacy-toggle) label:dir(rtl){left:unset;right:unset;right:0}}}:host(.legacy-toggle) label::-moz-focus-inner{border:0}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.toggle-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;height:inherit;-webkit-transition:background-color 15ms linear;transition:background-color 15ms linear;cursor:inherit}.label-text-wrapper{pointer-events:none;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host(.in-item:not(.legacy-toggle)) .label-text-wrapper{margin-top:10px;margin-bottom:10px}:host(.in-item.toggle-label-placement-stacked) .label-text-wrapper{margin-top:10px;margin-bottom:16px}:host(.in-item.toggle-label-placement-stacked) .native-wrapper{margin-bottom:10px}.label-text-wrapper-hidden{display:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host(.toggle-justify-space-between) .toggle-wrapper{-ms-flex-pack:justify;justify-content:space-between}:host(.toggle-justify-start) .toggle-wrapper{-ms-flex-pack:start;justify-content:start}:host(.toggle-justify-end) .toggle-wrapper{-ms-flex-pack:end;justify-content:end}:host(.toggle-alignment-start) .toggle-wrapper{-ms-flex-align:start;align-items:start}:host(.toggle-alignment-center) .toggle-wrapper{-ms-flex-align:center;align-items:center}:host(.toggle-label-placement-start) .toggle-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.toggle-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.toggle-label-placement-end) .toggle-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.toggle-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}:host(.toggle-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.toggle-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}:host(.toggle-label-placement-stacked) .toggle-wrapper{-ms-flex-direction:column;flex-direction:column}:host(.toggle-label-placement-stacked) .label-text-wrapper{-webkit-transform:scale(0.75);transform:scale(0.75);margin-left:0;margin-right:0;margin-bottom:16px;max-width:calc(100% / 0.75)}:host(.toggle-label-placement-stacked.toggle-alignment-start) .label-text-wrapper{-webkit-transform-origin:left top;transform-origin:left top}:host-context([dir=rtl]):host(.toggle-label-placement-stacked.toggle-alignment-start) .label-text-wrapper,:host-context([dir=rtl]).toggle-label-placement-stacked.toggle-alignment-start .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){:host(.toggle-label-placement-stacked.toggle-alignment-start) .label-text-wrapper:dir(rtl){-webkit-transform-origin:right top;transform-origin:right top}}:host(.toggle-label-placement-stacked.toggle-alignment-center) .label-text-wrapper{-webkit-transform-origin:center top;transform-origin:center top}:host-context([dir=rtl]):host(.toggle-label-placement-stacked.toggle-alignment-center) .label-text-wrapper,:host-context([dir=rtl]).toggle-label-placement-stacked.toggle-alignment-center .label-text-wrapper{-webkit-transform-origin:calc(100% - center) top;transform-origin:calc(100% - center) top}@supports selector(:dir(rtl)){:host(.toggle-label-placement-stacked.toggle-alignment-center) .label-text-wrapper:dir(rtl){-webkit-transform-origin:calc(100% - center) top;transform-origin:calc(100% - center) top}}.toggle-icon-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;height:100%;-webkit-transition:var(--handle-transition);transition:var(--handle-transition);will-change:transform}.toggle-icon{border-radius:var(--border-radius);display:block;position:relative;width:100%;height:100%;background:var(--track-background);overflow:inherit}:host(.toggle-checked) .toggle-icon{background:var(--track-background-checked)}.toggle-inner{border-radius:var(--handle-border-radius);position:absolute;left:var(--handle-spacing);width:var(--handle-width);height:var(--handle-height);max-height:var(--handle-max-height);-webkit-transition:var(--handle-transition);transition:var(--handle-transition);background:var(--handle-background);-webkit-box-shadow:var(--handle-box-shadow);box-shadow:var(--handle-box-shadow);contain:strict}:host(.toggle-ltr) .toggle-inner{left:var(--handle-spacing)}:host(.toggle-rtl) .toggle-inner{right:var(--handle-spacing)}:host(.toggle-ltr.toggle-checked) .toggle-icon-wrapper{-webkit-transform:translate3d(calc(100% - var(--handle-width)), 0, 0);transform:translate3d(calc(100% - var(--handle-width)), 0, 0)}:host(.toggle-rtl.toggle-checked) .toggle-icon-wrapper{-webkit-transform:translate3d(calc(-100% + var(--handle-width)), 0, 0);transform:translate3d(calc(-100% + var(--handle-width)), 0, 0)}:host(.toggle-checked) .toggle-inner{background:var(--handle-background-checked)}:host(.toggle-ltr.toggle-checked) .toggle-inner{-webkit-transform:translate3d(calc(var(--handle-spacing) * -2), 0, 0);transform:translate3d(calc(var(--handle-spacing) * -2), 0, 0)}:host(.toggle-rtl.toggle-checked) .toggle-inner{-webkit-transform:translate3d(calc(var(--handle-spacing) * 2), 0, 0);transform:translate3d(calc(var(--handle-spacing) * 2), 0, 0)}:host{--track-background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.39);--track-background-checked:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.5);--border-radius:14px;--handle-background:#ffffff;--handle-background-checked:var(--ion-color-primary, #3880ff);--handle-border-radius:50%;--handle-box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);--handle-width:20px;--handle-height:20px;--handle-max-height:calc(100% + 6px);--handle-spacing:0;--handle-transition:transform 160ms cubic-bezier(0.4, 0, 0.2, 1), background-color 160ms cubic-bezier(0.4, 0, 0.2, 1)}:host(.legacy-toggle){-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:12px;padding-bottom:12px;width:36px;height:14px;contain:strict}.native-wrapper .toggle-icon{width:36px;height:14px}:host(.ion-color.toggle-checked) .toggle-icon{background:rgba(var(--ion-color-base-rgb), 0.5)}:host(.ion-color.toggle-checked) .toggle-inner{background:var(--ion-color-base)}:host(.toggle-checked) .toggle-inner{color:var(--ion-color-contrast, #fff)}.toggle-icon{-webkit-transition:background-color 160ms;transition:background-color 160ms}.toggle-inner{will-change:background-color, transform;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:#000}.toggle-inner .toggle-switch-icon{-webkit-padding-start:1px;padding-inline-start:1px;-webkit-padding-end:1px;padding-inline-end:1px;padding-top:1px;padding-bottom:1px;width:100%;height:100%}:host(.toggle-disabled){opacity:0.38}:host(.in-item.legacy-toggle){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:0;padding-inline-end:0;padding-top:12px;padding-bottom:12px;cursor:pointer}:host(.in-item.legacy-toggle[slot=start]){-webkit-padding-start:2px;padding-inline-start:2px;-webkit-padding-end:18px;padding-inline-end:18px;padding-top:12px;padding-bottom:12px}";
const Toggle = class {
  constructor(hostRef) {
    var _this = this;
    (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.ionChange = (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionChange", 7);
    this.ionFocus = (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionFocus", 7);
    this.ionBlur = (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionBlur", 7);
    this.ionStyle = (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionStyle", 7);
    this.inputId = `ion-tg-${toggleIds++}`;
    this.lastDrag = 0;
    this.inheritedAttributes = {};
    this.didLoad = false;
    // This flag ensures we log the deprecation warning at most once.
    this.hasLoggedDeprecationWarning = false;
    this.setupGesture = /*#__PURE__*/(0,C_Users_ekt_Documents_DOMINGO_evaluationIF_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        toggleTrack
      } = _this;
      if (toggleTrack) {
        _this.gesture = (yield Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./index-ff313b19.js */ 9203))).createGesture({
          el: toggleTrack,
          gestureName: 'toggle',
          gesturePriority: 100,
          threshold: 5,
          passive: false,
          onStart: () => _this.onStart(),
          onMove: ev => _this.onMove(ev),
          onEnd: ev => _this.onEnd(ev)
        });
        _this.disabledChanged();
      }
    });
    this.onClick = ev => {
      ev.preventDefault();
      if (this.lastDrag + 300 < Date.now()) {
        this.toggleChecked();
      }
    };
    this.onFocus = () => {
      this.ionFocus.emit();
    };
    this.onBlur = () => {
      this.ionBlur.emit();
    };
    this.getSwitchLabelIcon = (mode, checked) => {
      if (mode === 'md') {
        return checked ? _index_ecfc2c9f_js__WEBPACK_IMPORTED_MODULE_8__.f : _index_ecfc2c9f_js__WEBPACK_IMPORTED_MODULE_8__.r;
      }
      return checked ? _index_ecfc2c9f_js__WEBPACK_IMPORTED_MODULE_8__.r : _index_ecfc2c9f_js__WEBPACK_IMPORTED_MODULE_8__.g;
    };
    this.activated = false;
    this.color = undefined;
    this.name = this.inputId;
    this.checked = false;
    this.disabled = false;
    this.value = 'on';
    this.enableOnOffLabels = _ionic_global_b3fc28dd_js__WEBPACK_IMPORTED_MODULE_9__.c.get('toggleOnOffLabels');
    this.labelPlacement = 'start';
    this.legacy = undefined;
    this.justify = 'space-between';
    this.alignment = 'center';
  }
  disabledChanged() {
    this.emitStyle();
    if (this.gesture) {
      this.gesture.enable(!this.disabled);
    }
  }
  toggleChecked() {
    const {
      checked,
      value
    } = this;
    const isNowChecked = !checked;
    this.checked = isNowChecked;
    this.ionChange.emit({
      checked: isNowChecked,
      value
    });
  }
  connectedCallback() {
    var _this2 = this;
    return (0,C_Users_ekt_Documents_DOMINGO_evaluationIF_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.legacyFormController = (0,_form_controller_ed77647a_js__WEBPACK_IMPORTED_MODULE_2__.c)(_this2.el);
      /**
       * If we have not yet rendered
       * ion-toggle, then toggleTrack is not defined.
       * But if we are moving ion-toggle via appendChild,
       * then toggleTrack will be defined.
       */
      if (_this2.didLoad) {
        _this2.setupGesture();
      }
    })();
  }
  componentDidLoad() {
    this.setupGesture();
    this.didLoad = true;
  }
  disconnectedCallback() {
    if (this.gesture) {
      this.gesture.destroy();
      this.gesture = undefined;
    }
  }
  componentWillLoad() {
    this.emitStyle();
    if (!this.legacyFormController.hasLegacyControl()) {
      this.inheritedAttributes = Object.assign({}, (0,_helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_3__.i)(this.el));
    }
  }
  emitStyle() {
    if (this.legacyFormController.hasLegacyControl()) {
      this.ionStyle.emit({
        'interactive-disabled': this.disabled
      });
    }
  }
  onStart() {
    this.activated = true;
    // touch-action does not work in iOS
    this.setFocus();
  }
  onMove(detail) {
    if (shouldToggle((0,_dir_912e3e13_js__WEBPACK_IMPORTED_MODULE_6__.i)(this.el), this.checked, detail.deltaX, -10)) {
      this.toggleChecked();
      (0,_haptic_6447af60_js__WEBPACK_IMPORTED_MODULE_5__.c)();
    }
  }
  onEnd(ev) {
    this.activated = false;
    this.lastDrag = Date.now();
    ev.event.preventDefault();
    ev.event.stopImmediatePropagation();
  }
  getValue() {
    return this.value || '';
  }
  setFocus() {
    if (this.focusEl) {
      this.focusEl.focus();
    }
  }
  renderOnOffSwitchLabels(mode, checked) {
    const icon = this.getSwitchLabelIcon(mode, checked);
    return (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-icon", {
      class: {
        'toggle-switch-icon': true,
        'toggle-switch-icon-checked': checked
      },
      icon: icon,
      "aria-hidden": "true"
    });
  }
  renderToggleControl() {
    const mode = (0,_ionic_global_b3fc28dd_js__WEBPACK_IMPORTED_MODULE_9__.b)(this);
    const {
      enableOnOffLabels,
      checked
    } = this;
    return (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "toggle-icon",
      part: "track",
      ref: el => this.toggleTrack = el
    }, enableOnOffLabels && mode === 'ios' && [this.renderOnOffSwitchLabels(mode, true), this.renderOnOffSwitchLabels(mode, false)], (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "toggle-icon-wrapper"
    }, (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "toggle-inner",
      part: "handle"
    }, enableOnOffLabels && mode === 'md' && this.renderOnOffSwitchLabels(mode, checked))));
  }
  get hasLabel() {
    return this.el.textContent !== '';
  }
  render() {
    const {
      legacyFormController
    } = this;
    return legacyFormController.hasLegacyControl() ? this.renderLegacyToggle() : this.renderToggle();
  }
  renderToggle() {
    const {
      activated,
      color,
      checked,
      disabled,
      el,
      justify,
      labelPlacement,
      inputId,
      name,
      alignment
    } = this;
    const mode = (0,_ionic_global_b3fc28dd_js__WEBPACK_IMPORTED_MODULE_9__.b)(this);
    const value = this.getValue();
    const rtl = (0,_dir_912e3e13_js__WEBPACK_IMPORTED_MODULE_6__.i)(el) ? 'rtl' : 'ltr';
    (0,_helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_3__.d)(true, el, name, checked ? value : '', disabled);
    return (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.H, {
      onClick: this.onClick,
      class: (0,_theme_17531cdf_js__WEBPACK_IMPORTED_MODULE_7__.c)(color, {
        [mode]: true,
        'in-item': (0,_theme_17531cdf_js__WEBPACK_IMPORTED_MODULE_7__.h)('ion-item', el),
        'toggle-activated': activated,
        'toggle-checked': checked,
        'toggle-disabled': disabled,
        [`toggle-justify-${justify}`]: true,
        [`toggle-alignment-${alignment}`]: true,
        [`toggle-label-placement-${labelPlacement}`]: true,
        [`toggle-${rtl}`]: true
      })
    }, (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)("label", {
      class: "toggle-wrapper"
    }, (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)("input", Object.assign({
      type: "checkbox",
      role: "switch",
      "aria-checked": `${checked}`,
      checked: checked,
      disabled: disabled,
      id: inputId,
      onFocus: () => this.onFocus(),
      onBlur: () => this.onBlur(),
      ref: focusEl => this.focusEl = focusEl
    }, this.inheritedAttributes)), (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: {
        'label-text-wrapper': true,
        'label-text-wrapper-hidden': !this.hasLabel
      }
    }, (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", null)), (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "native-wrapper"
    }, this.renderToggleControl())));
  }
  renderLegacyToggle() {
    if (!this.hasLoggedDeprecationWarning) {
      (0,_index_595d62c9_js__WEBPACK_IMPORTED_MODULE_4__.p)(`ion-toggle now requires providing a label with either the default slot or the "aria-label" attribute. To migrate, remove any usage of "ion-label" and pass the label text to either the component or the "aria-label" attribute.

Example: <ion-toggle>Email</ion-toggle>
Example with aria-label: <ion-toggle aria-label="Email"></ion-toggle>

Developers can use the "legacy" property to continue using the legacy form markup. This property will be removed in an upcoming major release of Ionic where this form control will use the modern form markup.`, this.el);
      if (this.legacy) {
        (0,_index_595d62c9_js__WEBPACK_IMPORTED_MODULE_4__.p)(`ion-toggle is being used with the "legacy" property enabled which will forcibly enable the legacy form markup. This property will be removed in an upcoming major release of Ionic where this form control will use the modern form markup.

Developers can dismiss this warning by removing their usage of the "legacy" property and using the new toggle syntax.`, this.el);
      }
      this.hasLoggedDeprecationWarning = true;
    }
    const {
      activated,
      color,
      checked,
      disabled,
      el,
      inputId,
      name
    } = this;
    const mode = (0,_ionic_global_b3fc28dd_js__WEBPACK_IMPORTED_MODULE_9__.b)(this);
    const {
      label,
      labelId,
      labelText
    } = (0,_helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_3__.e)(el, inputId);
    const value = this.getValue();
    const rtl = (0,_dir_912e3e13_js__WEBPACK_IMPORTED_MODULE_6__.i)(el) ? 'rtl' : 'ltr';
    (0,_helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_3__.d)(true, el, name, checked ? value : '', disabled);
    return (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.H, {
      onClick: this.onClick,
      "aria-labelledby": label ? labelId : null,
      "aria-checked": `${checked}`,
      "aria-hidden": disabled ? 'true' : null,
      role: "switch",
      class: (0,_theme_17531cdf_js__WEBPACK_IMPORTED_MODULE_7__.c)(color, {
        [mode]: true,
        'in-item': (0,_theme_17531cdf_js__WEBPACK_IMPORTED_MODULE_7__.h)('ion-item', el),
        'toggle-activated': activated,
        'toggle-checked': checked,
        'toggle-disabled': disabled,
        'legacy-toggle': true,
        interactive: true,
        [`toggle-${rtl}`]: true
      })
    }, this.renderToggleControl(), (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)("label", {
      htmlFor: inputId
    }, labelText), (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)("input", {
      type: "checkbox",
      role: "switch",
      "aria-checked": `${checked}`,
      disabled: disabled,
      id: inputId,
      onFocus: () => this.onFocus(),
      onBlur: () => this.onBlur(),
      ref: focusEl => this.focusEl = focusEl
    }));
  }
  get el() {
    return (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.f)(this);
  }
  static get watchers() {
    return {
      "disabled": ["disabledChanged"]
    };
  }
};
const shouldToggle = (rtl, checked, deltaX, margin) => {
  if (checked) {
    return !rtl && margin > deltaX || rtl && -margin < deltaX;
  } else {
    return !rtl && -margin < deltaX || rtl && margin > deltaX;
  }
};
let toggleIds = 0;
Toggle.style = {
  ios: toggleIosCss,
  md: toggleMdCss
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