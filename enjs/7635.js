"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[7635],{

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

/***/ 7635:
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ion_checkbox: () => (/* binding */ Checkbox)
/* harmony export */ });
/* harmony import */ var _index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-2d388930.js */ 2364);
/* harmony import */ var _form_controller_ed77647a_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-controller-ed77647a.js */ 5487);
/* harmony import */ var _helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-3379ba19.js */ 839);
/* harmony import */ var _index_595d62c9_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index-595d62c9.js */ 6710);
/* harmony import */ var _theme_17531cdf_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme-17531cdf.js */ 3567);
/* harmony import */ var _ionic_global_b3fc28dd_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ionic-global-b3fc28dd.js */ 152);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */






const checkboxIosCss = ":host{--checkbox-background-checked:var(--ion-color-primary, #3880ff);--border-color-checked:var(--ion-color-primary, #3880ff);--checkmark-color:var(--ion-color-primary-contrast, #fff);--checkmark-width:1;--transition:none;display:inline-block;position:relative;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.in-item){width:100%;height:100%}:host([slot=start]:not(.legacy-checkbox)),:host([slot=end]:not(.legacy-checkbox)){width:auto}:host(.legacy-checkbox){width:var(--size);height:var(--size)}:host(.ion-color){--checkbox-background-checked:var(--ion-color-base);--border-color-checked:var(--ion-color-base);--checkmark-color:var(--ion-color-contrast)}:host(.legacy-checkbox) label{top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}@supports (inset-inline-start: 0){:host(.legacy-checkbox) label{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host(.legacy-checkbox) label{left:0}:host-context([dir=rtl]):host(.legacy-checkbox) label,:host-context([dir=rtl]).legacy-checkbox label{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host(.legacy-checkbox) label:dir(rtl){left:unset;right:unset;right:0}}}:host(.legacy-checkbox) label::-moz-focus-inner{border:0}.checkbox-wrapper{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;height:inherit;cursor:inherit}.label-text-wrapper{pointer-events:none;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host(.in-item:not(.legacy-checkbox)) .label-text-wrapper{margin-top:10px;margin-bottom:10px}:host(.in-item.checkbox-label-placement-stacked) .label-text-wrapper{margin-top:10px;margin-bottom:16px}:host(.in-item.checkbox-label-placement-stacked) .native-wrapper{margin-bottom:10px}.label-text-wrapper-hidden{display:none}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.checkbox-icon{border-radius:var(--border-radius);position:relative;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--checkbox-background);-webkit-box-sizing:border-box;box-sizing:border-box}:host(.legacy-checkbox) .checkbox-icon{display:block;width:100%;height:100%}:host(:not(.legacy-checkbox)) .checkbox-icon{width:var(--size);height:var(--size)}.checkbox-icon path{fill:none;stroke:var(--checkmark-color);stroke-width:var(--checkmark-width);opacity:0}:host(.checkbox-justify-space-between) .checkbox-wrapper{-ms-flex-pack:justify;justify-content:space-between}:host(.checkbox-justify-start) .checkbox-wrapper{-ms-flex-pack:start;justify-content:start}:host(.checkbox-justify-end) .checkbox-wrapper{-ms-flex-pack:end;justify-content:end}:host(.checkbox-alignment-start) .checkbox-wrapper{-ms-flex-align:start;align-items:start}:host(.checkbox-alignment-center) .checkbox-wrapper{-ms-flex-align:center;align-items:center}:host(.checkbox-label-placement-start) .checkbox-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.checkbox-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.checkbox-label-placement-end) .checkbox-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.checkbox-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}:host(.checkbox-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.checkbox-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}:host(.checkbox-label-placement-stacked) .checkbox-wrapper{-ms-flex-direction:column;flex-direction:column}:host(.checkbox-label-placement-stacked) .label-text-wrapper{-webkit-transform:scale(0.75);transform:scale(0.75);margin-left:0;margin-right:0;margin-bottom:16px;max-width:calc(100% / 0.75)}:host(.checkbox-label-placement-stacked.checkbox-alignment-start) .label-text-wrapper{-webkit-transform-origin:left top;transform-origin:left top}:host-context([dir=rtl]):host(.checkbox-label-placement-stacked.checkbox-alignment-start) .label-text-wrapper,:host-context([dir=rtl]).checkbox-label-placement-stacked.checkbox-alignment-start .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){:host(.checkbox-label-placement-stacked.checkbox-alignment-start) .label-text-wrapper:dir(rtl){-webkit-transform-origin:right top;transform-origin:right top}}:host(.checkbox-label-placement-stacked.checkbox-alignment-center) .label-text-wrapper{-webkit-transform-origin:center top;transform-origin:center top}:host-context([dir=rtl]):host(.checkbox-label-placement-stacked.checkbox-alignment-center) .label-text-wrapper,:host-context([dir=rtl]).checkbox-label-placement-stacked.checkbox-alignment-center .label-text-wrapper{-webkit-transform-origin:calc(100% - center) top;transform-origin:calc(100% - center) top}@supports selector(:dir(rtl)){:host(.checkbox-label-placement-stacked.checkbox-alignment-center) .label-text-wrapper:dir(rtl){-webkit-transform-origin:calc(100% - center) top;transform-origin:calc(100% - center) top}}:host(.checkbox-checked) .checkbox-icon,:host(.checkbox-indeterminate) .checkbox-icon{border-color:var(--border-color-checked);background:var(--checkbox-background-checked)}:host(.checkbox-checked) .checkbox-icon path,:host(.checkbox-indeterminate) .checkbox-icon path{opacity:1}:host(.checkbox-disabled){pointer-events:none}:host{--border-radius:50%;--border-width:1px;--border-style:solid;--border-color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.23);--checkbox-background:var(--ion-item-background, var(--ion-background-color, #fff));--size:26px}:host(.checkbox-disabled){opacity:0.3}:host(.in-item.legacy-checkbox){-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px;margin-top:10px;margin-bottom:9px;display:block;position:static}:host(.in-item.legacy-checkbox[slot=start]){-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:8px;margin-bottom:8px}";
const checkboxMdCss = ":host{--checkbox-background-checked:var(--ion-color-primary, #3880ff);--border-color-checked:var(--ion-color-primary, #3880ff);--checkmark-color:var(--ion-color-primary-contrast, #fff);--checkmark-width:1;--transition:none;display:inline-block;position:relative;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.in-item){width:100%;height:100%}:host([slot=start]:not(.legacy-checkbox)),:host([slot=end]:not(.legacy-checkbox)){width:auto}:host(.legacy-checkbox){width:var(--size);height:var(--size)}:host(.ion-color){--checkbox-background-checked:var(--ion-color-base);--border-color-checked:var(--ion-color-base);--checkmark-color:var(--ion-color-contrast)}:host(.legacy-checkbox) label{top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}@supports (inset-inline-start: 0){:host(.legacy-checkbox) label{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host(.legacy-checkbox) label{left:0}:host-context([dir=rtl]):host(.legacy-checkbox) label,:host-context([dir=rtl]).legacy-checkbox label{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host(.legacy-checkbox) label:dir(rtl){left:unset;right:unset;right:0}}}:host(.legacy-checkbox) label::-moz-focus-inner{border:0}.checkbox-wrapper{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;height:inherit;cursor:inherit}.label-text-wrapper{pointer-events:none;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host(.in-item:not(.legacy-checkbox)) .label-text-wrapper{margin-top:10px;margin-bottom:10px}:host(.in-item.checkbox-label-placement-stacked) .label-text-wrapper{margin-top:10px;margin-bottom:16px}:host(.in-item.checkbox-label-placement-stacked) .native-wrapper{margin-bottom:10px}.label-text-wrapper-hidden{display:none}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.checkbox-icon{border-radius:var(--border-radius);position:relative;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--checkbox-background);-webkit-box-sizing:border-box;box-sizing:border-box}:host(.legacy-checkbox) .checkbox-icon{display:block;width:100%;height:100%}:host(:not(.legacy-checkbox)) .checkbox-icon{width:var(--size);height:var(--size)}.checkbox-icon path{fill:none;stroke:var(--checkmark-color);stroke-width:var(--checkmark-width);opacity:0}:host(.checkbox-justify-space-between) .checkbox-wrapper{-ms-flex-pack:justify;justify-content:space-between}:host(.checkbox-justify-start) .checkbox-wrapper{-ms-flex-pack:start;justify-content:start}:host(.checkbox-justify-end) .checkbox-wrapper{-ms-flex-pack:end;justify-content:end}:host(.checkbox-alignment-start) .checkbox-wrapper{-ms-flex-align:start;align-items:start}:host(.checkbox-alignment-center) .checkbox-wrapper{-ms-flex-align:center;align-items:center}:host(.checkbox-label-placement-start) .checkbox-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.checkbox-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.checkbox-label-placement-end) .checkbox-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.checkbox-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}:host(.checkbox-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.checkbox-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}:host(.checkbox-label-placement-stacked) .checkbox-wrapper{-ms-flex-direction:column;flex-direction:column}:host(.checkbox-label-placement-stacked) .label-text-wrapper{-webkit-transform:scale(0.75);transform:scale(0.75);margin-left:0;margin-right:0;margin-bottom:16px;max-width:calc(100% / 0.75)}:host(.checkbox-label-placement-stacked.checkbox-alignment-start) .label-text-wrapper{-webkit-transform-origin:left top;transform-origin:left top}:host-context([dir=rtl]):host(.checkbox-label-placement-stacked.checkbox-alignment-start) .label-text-wrapper,:host-context([dir=rtl]).checkbox-label-placement-stacked.checkbox-alignment-start .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){:host(.checkbox-label-placement-stacked.checkbox-alignment-start) .label-text-wrapper:dir(rtl){-webkit-transform-origin:right top;transform-origin:right top}}:host(.checkbox-label-placement-stacked.checkbox-alignment-center) .label-text-wrapper{-webkit-transform-origin:center top;transform-origin:center top}:host-context([dir=rtl]):host(.checkbox-label-placement-stacked.checkbox-alignment-center) .label-text-wrapper,:host-context([dir=rtl]).checkbox-label-placement-stacked.checkbox-alignment-center .label-text-wrapper{-webkit-transform-origin:calc(100% - center) top;transform-origin:calc(100% - center) top}@supports selector(:dir(rtl)){:host(.checkbox-label-placement-stacked.checkbox-alignment-center) .label-text-wrapper:dir(rtl){-webkit-transform-origin:calc(100% - center) top;transform-origin:calc(100% - center) top}}:host(.checkbox-checked) .checkbox-icon,:host(.checkbox-indeterminate) .checkbox-icon{border-color:var(--border-color-checked);background:var(--checkbox-background-checked)}:host(.checkbox-checked) .checkbox-icon path,:host(.checkbox-indeterminate) .checkbox-icon path{opacity:1}:host(.checkbox-disabled){pointer-events:none}:host{--border-radius:calc(var(--size) * .125);--border-width:2px;--border-style:solid;--border-color:rgb(var(--ion-text-color-rgb, 0, 0, 0), 0.6);--checkmark-width:3;--checkbox-background:var(--ion-item-background, var(--ion-background-color, #fff));--transition:background 180ms cubic-bezier(0.4, 0, 0.2, 1);--size:18px}.checkbox-icon path{stroke-dasharray:30;stroke-dashoffset:30}:host(.checkbox-checked) .checkbox-icon path,:host(.checkbox-indeterminate) .checkbox-icon path{stroke-dashoffset:0;-webkit-transition:stroke-dashoffset 90ms linear 90ms;transition:stroke-dashoffset 90ms linear 90ms}:host(.legacy-checkbox.checkbox-disabled),:host(.checkbox-disabled) .label-text-wrapper{opacity:0.38}:host(.checkbox-disabled) .native-wrapper{opacity:0.63}:host(.in-item.legacy-checkbox){margin-left:0;margin-right:0;margin-top:18px;margin-bottom:18px;display:block;position:static}:host(.in-item.legacy-checkbox[slot=start]){-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:36px;margin-inline-end:36px;margin-top:18px;margin-bottom:18px}";
const Checkbox = class {
  constructor(hostRef) {
    (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.ionChange = (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.d)(this, "ionChange", 7);
    this.ionFocus = (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.d)(this, "ionFocus", 7);
    this.ionBlur = (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.d)(this, "ionBlur", 7);
    this.ionStyle = (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.d)(this, "ionStyle", 7);
    this.inputId = `ion-cb-${checkboxIds++}`;
    this.inheritedAttributes = {};
    // TODO(FW-3100): remove this
    // This flag ensures we log the deprecation warning at most once.
    this.hasLoggedDeprecationWarning = false;
    /**
     * Sets the checked property and emits
     * the ionChange event. Use this to update the
     * checked state in response to user-generated
     * actions such as a click.
     */
    this.setChecked = state => {
      const isChecked = this.checked = state;
      this.ionChange.emit({
        checked: isChecked,
        value: this.value
      });
    };
    this.toggleChecked = ev => {
      ev.preventDefault();
      this.setFocus();
      this.setChecked(!this.checked);
      this.indeterminate = false;
    };
    this.onFocus = () => {
      this.ionFocus.emit();
    };
    this.onBlur = () => {
      this.ionBlur.emit();
    };
    this.onClick = ev => {
      this.toggleChecked(ev);
    };
    this.color = undefined;
    this.name = this.inputId;
    this.checked = false;
    this.indeterminate = false;
    this.disabled = false;
    this.value = 'on';
    this.labelPlacement = 'start';
    this.justify = 'space-between';
    this.alignment = 'center';
    this.legacy = undefined;
  }
  connectedCallback() {
    this.legacyFormController = (0,_form_controller_ed77647a_js__WEBPACK_IMPORTED_MODULE_1__.c)(this.el); // TODO(FW-3100): remove this
  }

  componentWillLoad() {
    this.emitStyle();
    // TODO(FW-3100): remove check
    if (!this.legacyFormController.hasLegacyControl()) {
      this.inheritedAttributes = Object.assign({}, (0,_helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_2__.i)(this.el));
    }
  }
  styleChanged() {
    this.emitStyle();
  }
  emitStyle() {
    const style = {
      'interactive-disabled': this.disabled
    };
    // TODO(FW-3100): remove this
    if (this.legacyFormController.hasLegacyControl()) {
      style['checkbox-checked'] = this.checked;
    }
    this.ionStyle.emit(style);
  }
  setFocus() {
    if (this.focusEl) {
      this.focusEl.focus();
    }
  }
  // TODO(FW-3100): run contents of renderCheckbox directly instead
  render() {
    const {
      legacyFormController
    } = this;
    return legacyFormController.hasLegacyControl() ? this.renderLegacyCheckbox() : this.renderCheckbox();
  }
  renderCheckbox() {
    const {
      color,
      checked,
      disabled,
      el,
      getSVGPath,
      indeterminate,
      inheritedAttributes,
      inputId,
      justify,
      labelPlacement,
      name,
      value,
      alignment
    } = this;
    const mode = (0,_ionic_global_b3fc28dd_js__WEBPACK_IMPORTED_MODULE_5__.b)(this);
    const path = getSVGPath(mode, indeterminate);
    (0,_helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_2__.d)(true, el, name, checked ? value : '', disabled);
    return (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.H, {
      class: (0,_theme_17531cdf_js__WEBPACK_IMPORTED_MODULE_4__.c)(color, {
        [mode]: true,
        'in-item': (0,_theme_17531cdf_js__WEBPACK_IMPORTED_MODULE_4__.h)('ion-item', el),
        'checkbox-checked': checked,
        'checkbox-disabled': disabled,
        'checkbox-indeterminate': indeterminate,
        interactive: true,
        [`checkbox-justify-${justify}`]: true,
        [`checkbox-alignment-${alignment}`]: true,
        [`checkbox-label-placement-${labelPlacement}`]: true
      }),
      onClick: this.onClick
    }, (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.h)("label", {
      class: "checkbox-wrapper"
    }, (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.h)("input", Object.assign({
      type: "checkbox",
      checked: checked ? true : undefined,
      disabled: disabled,
      id: inputId,
      onChange: this.toggleChecked,
      onFocus: () => this.onFocus(),
      onBlur: () => this.onBlur(),
      ref: focusEl => this.focusEl = focusEl
    }, inheritedAttributes)), (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: {
        'label-text-wrapper': true,
        'label-text-wrapper-hidden': el.textContent === ''
      }
    }, (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null)), (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: "native-wrapper"
    }, (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", {
      class: "checkbox-icon",
      viewBox: "0 0 24 24",
      part: "container"
    }, path))));
  }
  // TODO(FW-3100): remove this
  renderLegacyCheckbox() {
    if (!this.hasLoggedDeprecationWarning) {
      (0,_index_595d62c9_js__WEBPACK_IMPORTED_MODULE_3__.p)(`ion-checkbox now requires providing a label with either the default slot or the "aria-label" attribute. To migrate, remove any usage of "ion-label" and pass the label text to either the component or the "aria-label" attribute.

Example: <ion-checkbox>Label</ion-checkbox>
Example with aria-label: <ion-checkbox aria-label="Label"></ion-checkbox>

Developers can use the "legacy" property to continue using the legacy form markup. This property will be removed in an upcoming major release of Ionic where this form control will use the modern form markup.`, this.el);
      if (this.legacy) {
        (0,_index_595d62c9_js__WEBPACK_IMPORTED_MODULE_3__.p)(`ion-checkbox is being used with the "legacy" property enabled which will forcibly enable the legacy form markup. This property will be removed in an upcoming major release of Ionic where this form control will use the modern form markup.
Developers can dismiss this warning by removing their usage of the "legacy" property and using the new checkbox syntax.`, this.el);
      }
      this.hasLoggedDeprecationWarning = true;
    }
    const {
      color,
      checked,
      disabled,
      el,
      getSVGPath,
      indeterminate,
      inputId,
      name,
      value
    } = this;
    const mode = (0,_ionic_global_b3fc28dd_js__WEBPACK_IMPORTED_MODULE_5__.b)(this);
    const {
      label,
      labelId,
      labelText
    } = (0,_helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_2__.e)(el, inputId);
    const path = getSVGPath(mode, indeterminate);
    (0,_helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_2__.d)(true, el, name, checked ? value : '', disabled);
    return (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.H, {
      "aria-labelledby": label ? labelId : null,
      "aria-checked": `${checked}`,
      "aria-hidden": disabled ? 'true' : null,
      role: "checkbox",
      class: (0,_theme_17531cdf_js__WEBPACK_IMPORTED_MODULE_4__.c)(color, {
        [mode]: true,
        'in-item': (0,_theme_17531cdf_js__WEBPACK_IMPORTED_MODULE_4__.h)('ion-item', el),
        'checkbox-checked': checked,
        'checkbox-disabled': disabled,
        'checkbox-indeterminate': indeterminate,
        'legacy-checkbox': true,
        interactive: true
      }),
      onClick: this.onClick
    }, (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", {
      class: "checkbox-icon",
      viewBox: "0 0 24 24",
      part: "container"
    }, path), (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.h)("label", {
      htmlFor: inputId
    }, labelText), (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.h)("input", {
      type: "checkbox",
      "aria-checked": `${checked}`,
      disabled: disabled,
      id: inputId,
      onChange: this.toggleChecked,
      onFocus: () => this.onFocus(),
      onBlur: () => this.onBlur(),
      ref: focusEl => this.focusEl = focusEl
    }));
  }
  getSVGPath(mode, indeterminate) {
    let path = indeterminate ? (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", {
      d: "M6 12L18 12",
      part: "mark"
    }) : (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", {
      d: "M5.9,12.5l3.8,3.8l8.8-8.8",
      part: "mark"
    });
    if (mode === 'md') {
      path = indeterminate ? (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", {
        d: "M2 12H22",
        part: "mark"
      }) : (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", {
        d: "M1.73,12.91 8.1,19.28 22.79,4.59",
        part: "mark"
      });
    }
    return path;
  }
  get el() {
    return (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.f)(this);
  }
  static get watchers() {
    return {
      "checked": ["styleChanged"],
      "disabled": ["styleChanged"]
    };
  }
};
let checkboxIds = 0;
Checkbox.style = {
  ios: checkboxIosCss,
  md: checkboxMdCss
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