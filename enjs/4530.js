"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[4530],{

/***/ 4530:
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-input.entry.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ion_input: () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var C_Users_ekt_Documents_DOMINGO_evaluationIF_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 5861);
/* harmony import */ var _index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-2d388930.js */ 2364);
/* harmony import */ var _form_controller_ed77647a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-controller-ed77647a.js */ 5487);
/* harmony import */ var _notch_controller_8c9c0e54_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notch-controller-8c9c0e54.js */ 5857);
/* harmony import */ var _helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers-3379ba19.js */ 839);
/* harmony import */ var _index_595d62c9_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index-595d62c9.js */ 6710);
/* harmony import */ var _input_utils_ec063df4_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./input.utils-ec063df4.js */ 2894);
/* harmony import */ var _theme_17531cdf_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./theme-17531cdf.js */ 3567);
/* harmony import */ var _index_ecfc2c9f_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index-ecfc2c9f.js */ 3173);
/* harmony import */ var _ionic_global_b3fc28dd_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ionic-global-b3fc28dd.js */ 152);
/* harmony import */ var _index_7a14ecec_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index-7a14ecec.js */ 6225);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */










const inputIosCss = ".sc-ion-input-ios-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:0.6;--padding-top:0px;--padding-end:0px;--padding-bottom:0px;--padding-start:0px;--background:transparent;--color:initial;--border-style:solid;--highlight-color-focused:var(--ion-color-primary, #3880ff);--highlight-color-valid:var(--ion-color-success, #2dd36f);--highlight-color-invalid:var(--ion-color-danger, #eb445a);--highlight-color:var(--highlight-color-focused);display:block;position:relative;width:100%;padding:0 !important;color:var(--color);font-family:var(--ion-font-family, inherit);z-index:2}.legacy-input.sc-ion-input-ios-h{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;background:var(--background)}.legacy-input.sc-ion-input-ios-h .native-input.sc-ion-input-ios{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);border-radius:var(--border-radius)}ion-item.sc-ion-input-ios-h:not(.item-label):not(.item-has-modern-input),ion-item:not(.item-label):not(.item-has-modern-input) .sc-ion-input-ios-h{--padding-start:0}ion-item[slot=start].sc-ion-input-ios-h,ion-item [slot=start].sc-ion-input-ios-h,ion-item[slot=end].sc-ion-input-ios-h,ion-item [slot=end].sc-ion-input-ios-h{width:auto}.legacy-input.ion-color.sc-ion-input-ios-h{color:var(--ion-color-base)}.ion-color.sc-ion-input-ios-h{--highlight-color-focused:var(--ion-color-base)}.native-input.sc-ion-input-ios{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:inline-block;position:relative;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none;z-index:1}.native-input.sc-ion-input-ios::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-ios::-moz-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-ios:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-ios::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-ios::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-ios:-webkit-autofill{background-color:transparent}.native-input.sc-ion-input-ios:invalid{-webkit-box-shadow:none;box-shadow:none}.native-input.sc-ion-input-ios::-ms-clear{display:none}.cloned-input.sc-ion-input-ios{top:0;bottom:0;position:absolute;pointer-events:none}@supports (inset-inline-start: 0){.cloned-input.sc-ion-input-ios{inset-inline-start:0}}@supports not (inset-inline-start: 0){.cloned-input.sc-ion-input-ios{left:0}[dir=rtl].sc-ion-input-ios-h .cloned-input.sc-ion-input-ios,[dir=rtl] .sc-ion-input-ios-h .cloned-input.sc-ion-input-ios{left:unset;right:unset;right:0}[dir=rtl].sc-ion-input-ios .cloned-input.sc-ion-input-ios{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.cloned-input.sc-ion-input-ios:dir(rtl){left:unset;right:unset;right:0}}}.cloned-input.sc-ion-input-ios:disabled{opacity:1}.legacy-input.sc-ion-input-ios-h .input-clear-icon.sc-ion-input-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}.input-clear-icon.sc-ion-input-ios{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:auto;margin-bottom:auto;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;background-position:center;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:30px;height:30px;border:0;outline:none;background-color:transparent;background-repeat:no-repeat;color:var(--ion-color-step-600, #666666);visibility:hidden;-webkit-appearance:none;-moz-appearance:none;appearance:none}.in-item-color.sc-ion-input-ios-h .input-clear-icon.sc-ion-input-ios{color:inherit}.input-clear-icon.sc-ion-input-ios:focus{opacity:0.5}.has-value.sc-ion-input-ios-h .input-clear-icon.sc-ion-input-ios{visibility:visible}.has-focus.sc-ion-input-ios-h{pointer-events:none}.has-focus.sc-ion-input-ios-h input.sc-ion-input-ios,.has-focus.sc-ion-input-ios-h a.sc-ion-input-ios,.has-focus.sc-ion-input-ios-h button.sc-ion-input-ios{pointer-events:auto}.item-label-floating.item-has-placeholder.sc-ion-input-ios-h:not(.item-has-value),.item-label-floating.item-has-placeholder:not(.item-has-value) .sc-ion-input-ios-h{opacity:0}.item-label-floating.item-has-placeholder.sc-ion-input-ios-h:not(.item-has-value).item-has-focus,.item-label-floating.item-has-placeholder:not(.item-has-value).item-has-focus .sc-ion-input-ios-h{-webkit-transition:opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);opacity:1}.input-wrapper.sc-ion-input-ios{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);border-radius:var(--border-radius);display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:stretch;align-items:stretch;height:inherit;min-height:inherit;-webkit-transition:background-color 15ms linear;transition:background-color 15ms linear;background:var(--background);line-height:normal}.native-wrapper.sc-ion-input-ios{display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;width:100%}.ion-touched.ion-invalid.sc-ion-input-ios-h{--highlight-color:var(--highlight-color-invalid)}.ion-valid.sc-ion-input-ios-h{--highlight-color:var(--highlight-color-valid)}.input-bottom.sc-ion-input-ios{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:5px;padding-bottom:0;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;border-top:var(--border-width) var(--border-style) var(--border-color);font-size:12px}.has-focus.ion-valid.sc-ion-input-ios-h,.ion-touched.ion-invalid.sc-ion-input-ios-h{--border-color:var(--highlight-color)}.input-bottom.sc-ion-input-ios .error-text.sc-ion-input-ios{display:none;color:var(--highlight-color-invalid)}.input-bottom.sc-ion-input-ios .helper-text.sc-ion-input-ios{display:block;color:var(--ion-color-step-550, #737373)}.ion-touched.ion-invalid.sc-ion-input-ios-h .input-bottom.sc-ion-input-ios .error-text.sc-ion-input-ios{display:block}.ion-touched.ion-invalid.sc-ion-input-ios-h .input-bottom.sc-ion-input-ios .helper-text.sc-ion-input-ios{display:none}.input-bottom.sc-ion-input-ios .counter.sc-ion-input-ios{-webkit-margin-start:auto;margin-inline-start:auto;color:var(--ion-color-step-550, #737373);white-space:nowrap;-webkit-padding-start:16px;padding-inline-start:16px}.has-focus.sc-ion-input-ios-h input.sc-ion-input-ios{caret-color:var(--highlight-color)}.label-text-wrapper.sc-ion-input-ios{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;max-width:200px;-webkit-transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);pointer-events:none}.label-text.sc-ion-input-ios,.sc-ion-input-ios-s>[slot=label]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.label-text-wrapper-hidden.sc-ion-input-ios,.input-outline-notch-hidden.sc-ion-input-ios{display:none}.input-wrapper.sc-ion-input-ios input.sc-ion-input-ios{-webkit-transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)}.input-label-placement-start.sc-ion-input-ios-h .input-wrapper.sc-ion-input-ios{-ms-flex-direction:row;flex-direction:row}.input-label-placement-start.sc-ion-input-ios-h .label-text-wrapper.sc-ion-input-ios{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}.input-label-placement-end.sc-ion-input-ios-h .input-wrapper.sc-ion-input-ios{-ms-flex-direction:row-reverse;flex-direction:row-reverse}.input-label-placement-end.sc-ion-input-ios-h .label-text-wrapper.sc-ion-input-ios{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}.input-label-placement-fixed.sc-ion-input-ios-h .label-text-wrapper.sc-ion-input-ios{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}.input-label-placement-fixed.sc-ion-input-ios-h .label-text.sc-ion-input-ios{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}.input-label-placement-stacked.sc-ion-input-ios-h .input-wrapper.sc-ion-input-ios,.input-label-placement-floating.sc-ion-input-ios-h .input-wrapper.sc-ion-input-ios{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:start}.input-label-placement-stacked.sc-ion-input-ios-h .label-text-wrapper.sc-ion-input-ios,.input-label-placement-floating.sc-ion-input-ios-h .label-text-wrapper.sc-ion-input-ios{-webkit-transform-origin:left top;transform-origin:left top;max-width:100%;z-index:2}[dir=rtl].sc-ion-input-ios-h -no-combinator.input-label-placement-stacked.sc-ion-input-ios-h .label-text-wrapper.sc-ion-input-ios,[dir=rtl] .sc-ion-input-ios-h -no-combinator.input-label-placement-stacked.sc-ion-input-ios-h .label-text-wrapper.sc-ion-input-ios,[dir=rtl].input-label-placement-stacked.sc-ion-input-ios-h .label-text-wrapper.sc-ion-input-ios,[dir=rtl] .input-label-placement-stacked.sc-ion-input-ios-h .label-text-wrapper.sc-ion-input-ios,[dir=rtl].sc-ion-input-ios-h -no-combinator.input-label-placement-floating.sc-ion-input-ios-h .label-text-wrapper.sc-ion-input-ios,[dir=rtl] .sc-ion-input-ios-h -no-combinator.input-label-placement-floating.sc-ion-input-ios-h .label-text-wrapper.sc-ion-input-ios,[dir=rtl].input-label-placement-floating.sc-ion-input-ios-h .label-text-wrapper.sc-ion-input-ios,[dir=rtl] .input-label-placement-floating.sc-ion-input-ios-h .label-text-wrapper.sc-ion-input-ios{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){.input-label-placement-stacked.sc-ion-input-ios-h .label-text-wrapper.sc-ion-input-ios:dir(rtl),.input-label-placement-floating.sc-ion-input-ios-h .label-text-wrapper.sc-ion-input-ios:dir(rtl){-webkit-transform-origin:right top;transform-origin:right top}}.input-label-placement-stacked.sc-ion-input-ios-h input.sc-ion-input-ios,.input-label-placement-floating.sc-ion-input-ios-h input.sc-ion-input-ios{margin-left:0;margin-right:0;margin-top:1px;margin-bottom:0}.input-label-placement-floating.sc-ion-input-ios-h .label-text-wrapper.sc-ion-input-ios{-webkit-transform:translateY(100%) scale(1);transform:translateY(100%) scale(1)}.input-label-placement-floating.sc-ion-input-ios-h input.sc-ion-input-ios{opacity:0}.has-focus.input-label-placement-floating.sc-ion-input-ios-h input.sc-ion-input-ios,.has-value.input-label-placement-floating.sc-ion-input-ios-h input.sc-ion-input-ios{opacity:1}.input-label-placement-stacked.sc-ion-input-ios-h .label-text-wrapper.sc-ion-input-ios,.has-focus.input-label-placement-floating.sc-ion-input-ios-h .label-text-wrapper.sc-ion-input-ios,.has-value.input-label-placement-floating.sc-ion-input-ios-h .label-text-wrapper.sc-ion-input-ios{-webkit-transform:translateY(50%) scale(0.75);transform:translateY(50%) scale(0.75);max-width:calc(100% / 0.75)}.sc-ion-input-ios-h{--border-width:0.55px;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, #c8c7cc)));font-size:inherit}.legacy-input.sc-ion-input-ios-h{--padding-top:10px;--padding-end:8px;--padding-bottom:10px;--padding-start:0}.item-label-stacked.sc-ion-input-ios-h,.item-label-stacked .sc-ion-input-ios-h,.item-label-floating.sc-ion-input-ios-h,.item-label-floating .sc-ion-input-ios-h{--padding-top:8px;--padding-bottom:8px;--padding-start:0px}.input-clear-icon.sc-ion-input-ios ion-icon.sc-ion-input-ios{width:18px;height:18px}.sc-ion-input-ios-h:not(.legacy-input){min-height:44px}.input-label-placement-floating.sc-ion-input-ios-h,.input-label-placement-stacked.sc-ion-input-ios-h{min-height:56px}.legacy-input.sc-ion-input-ios-h .native-input[disabled].sc-ion-input-ios,.input-disabled.sc-ion-input-ios-h{opacity:0.3}";
const inputMdCss = ".sc-ion-input-md-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:0.6;--padding-top:0px;--padding-end:0px;--padding-bottom:0px;--padding-start:0px;--background:transparent;--color:initial;--border-style:solid;--highlight-color-focused:var(--ion-color-primary, #3880ff);--highlight-color-valid:var(--ion-color-success, #2dd36f);--highlight-color-invalid:var(--ion-color-danger, #eb445a);--highlight-color:var(--highlight-color-focused);display:block;position:relative;width:100%;padding:0 !important;color:var(--color);font-family:var(--ion-font-family, inherit);z-index:2}.legacy-input.sc-ion-input-md-h{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;background:var(--background)}.legacy-input.sc-ion-input-md-h .native-input.sc-ion-input-md{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);border-radius:var(--border-radius)}ion-item.sc-ion-input-md-h:not(.item-label):not(.item-has-modern-input),ion-item:not(.item-label):not(.item-has-modern-input) .sc-ion-input-md-h{--padding-start:0}ion-item[slot=start].sc-ion-input-md-h,ion-item [slot=start].sc-ion-input-md-h,ion-item[slot=end].sc-ion-input-md-h,ion-item [slot=end].sc-ion-input-md-h{width:auto}.legacy-input.ion-color.sc-ion-input-md-h{color:var(--ion-color-base)}.ion-color.sc-ion-input-md-h{--highlight-color-focused:var(--ion-color-base)}.native-input.sc-ion-input-md{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:inline-block;position:relative;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none;z-index:1}.native-input.sc-ion-input-md::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md::-moz-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md:-webkit-autofill{background-color:transparent}.native-input.sc-ion-input-md:invalid{-webkit-box-shadow:none;box-shadow:none}.native-input.sc-ion-input-md::-ms-clear{display:none}.cloned-input.sc-ion-input-md{top:0;bottom:0;position:absolute;pointer-events:none}@supports (inset-inline-start: 0){.cloned-input.sc-ion-input-md{inset-inline-start:0}}@supports not (inset-inline-start: 0){.cloned-input.sc-ion-input-md{left:0}[dir=rtl].sc-ion-input-md-h .cloned-input.sc-ion-input-md,[dir=rtl] .sc-ion-input-md-h .cloned-input.sc-ion-input-md{left:unset;right:unset;right:0}[dir=rtl].sc-ion-input-md .cloned-input.sc-ion-input-md{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.cloned-input.sc-ion-input-md:dir(rtl){left:unset;right:unset;right:0}}}.cloned-input.sc-ion-input-md:disabled{opacity:1}.legacy-input.sc-ion-input-md-h .input-clear-icon.sc-ion-input-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}.input-clear-icon.sc-ion-input-md{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:auto;margin-bottom:auto;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;background-position:center;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:30px;height:30px;border:0;outline:none;background-color:transparent;background-repeat:no-repeat;color:var(--ion-color-step-600, #666666);visibility:hidden;-webkit-appearance:none;-moz-appearance:none;appearance:none}.in-item-color.sc-ion-input-md-h .input-clear-icon.sc-ion-input-md{color:inherit}.input-clear-icon.sc-ion-input-md:focus{opacity:0.5}.has-value.sc-ion-input-md-h .input-clear-icon.sc-ion-input-md{visibility:visible}.has-focus.sc-ion-input-md-h{pointer-events:none}.has-focus.sc-ion-input-md-h input.sc-ion-input-md,.has-focus.sc-ion-input-md-h a.sc-ion-input-md,.has-focus.sc-ion-input-md-h button.sc-ion-input-md{pointer-events:auto}.item-label-floating.item-has-placeholder.sc-ion-input-md-h:not(.item-has-value),.item-label-floating.item-has-placeholder:not(.item-has-value) .sc-ion-input-md-h{opacity:0}.item-label-floating.item-has-placeholder.sc-ion-input-md-h:not(.item-has-value).item-has-focus,.item-label-floating.item-has-placeholder:not(.item-has-value).item-has-focus .sc-ion-input-md-h{-webkit-transition:opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);opacity:1}.input-wrapper.sc-ion-input-md{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);border-radius:var(--border-radius);display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:stretch;align-items:stretch;height:inherit;min-height:inherit;-webkit-transition:background-color 15ms linear;transition:background-color 15ms linear;background:var(--background);line-height:normal}.native-wrapper.sc-ion-input-md{display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;width:100%}.ion-touched.ion-invalid.sc-ion-input-md-h{--highlight-color:var(--highlight-color-invalid)}.ion-valid.sc-ion-input-md-h{--highlight-color:var(--highlight-color-valid)}.input-bottom.sc-ion-input-md{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:5px;padding-bottom:0;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;border-top:var(--border-width) var(--border-style) var(--border-color);font-size:12px}.has-focus.ion-valid.sc-ion-input-md-h,.ion-touched.ion-invalid.sc-ion-input-md-h{--border-color:var(--highlight-color)}.input-bottom.sc-ion-input-md .error-text.sc-ion-input-md{display:none;color:var(--highlight-color-invalid)}.input-bottom.sc-ion-input-md .helper-text.sc-ion-input-md{display:block;color:var(--ion-color-step-550, #737373)}.ion-touched.ion-invalid.sc-ion-input-md-h .input-bottom.sc-ion-input-md .error-text.sc-ion-input-md{display:block}.ion-touched.ion-invalid.sc-ion-input-md-h .input-bottom.sc-ion-input-md .helper-text.sc-ion-input-md{display:none}.input-bottom.sc-ion-input-md .counter.sc-ion-input-md{-webkit-margin-start:auto;margin-inline-start:auto;color:var(--ion-color-step-550, #737373);white-space:nowrap;-webkit-padding-start:16px;padding-inline-start:16px}.has-focus.sc-ion-input-md-h input.sc-ion-input-md{caret-color:var(--highlight-color)}.label-text-wrapper.sc-ion-input-md{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;max-width:200px;-webkit-transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);pointer-events:none}.label-text.sc-ion-input-md,.sc-ion-input-md-s>[slot=label]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.label-text-wrapper-hidden.sc-ion-input-md,.input-outline-notch-hidden.sc-ion-input-md{display:none}.input-wrapper.sc-ion-input-md input.sc-ion-input-md{-webkit-transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)}.input-label-placement-start.sc-ion-input-md-h .input-wrapper.sc-ion-input-md{-ms-flex-direction:row;flex-direction:row}.input-label-placement-start.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}.input-label-placement-end.sc-ion-input-md-h .input-wrapper.sc-ion-input-md{-ms-flex-direction:row-reverse;flex-direction:row-reverse}.input-label-placement-end.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}.input-label-placement-fixed.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}.input-label-placement-fixed.sc-ion-input-md-h .label-text.sc-ion-input-md{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}.input-label-placement-stacked.sc-ion-input-md-h .input-wrapper.sc-ion-input-md,.input-label-placement-floating.sc-ion-input-md-h .input-wrapper.sc-ion-input-md{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:start}.input-label-placement-stacked.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md,.input-label-placement-floating.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md{-webkit-transform-origin:left top;transform-origin:left top;max-width:100%;z-index:2}[dir=rtl].sc-ion-input-md-h -no-combinator.input-label-placement-stacked.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md,[dir=rtl] .sc-ion-input-md-h -no-combinator.input-label-placement-stacked.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md,[dir=rtl].input-label-placement-stacked.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md,[dir=rtl] .input-label-placement-stacked.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md,[dir=rtl].sc-ion-input-md-h -no-combinator.input-label-placement-floating.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md,[dir=rtl] .sc-ion-input-md-h -no-combinator.input-label-placement-floating.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md,[dir=rtl].input-label-placement-floating.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md,[dir=rtl] .input-label-placement-floating.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){.input-label-placement-stacked.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md:dir(rtl),.input-label-placement-floating.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md:dir(rtl){-webkit-transform-origin:right top;transform-origin:right top}}.input-label-placement-stacked.sc-ion-input-md-h input.sc-ion-input-md,.input-label-placement-floating.sc-ion-input-md-h input.sc-ion-input-md{margin-left:0;margin-right:0;margin-top:1px;margin-bottom:0}.input-label-placement-floating.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md{-webkit-transform:translateY(100%) scale(1);transform:translateY(100%) scale(1)}.input-label-placement-floating.sc-ion-input-md-h input.sc-ion-input-md{opacity:0}.has-focus.input-label-placement-floating.sc-ion-input-md-h input.sc-ion-input-md,.has-value.input-label-placement-floating.sc-ion-input-md-h input.sc-ion-input-md{opacity:1}.input-label-placement-stacked.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md,.has-focus.input-label-placement-floating.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md,.has-value.input-label-placement-floating.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md{-webkit-transform:translateY(50%) scale(0.75);transform:translateY(50%) scale(0.75);max-width:calc(100% / 0.75)}.input-fill-solid.sc-ion-input-md-h{--background:var(--ion-color-step-50, #f2f2f2);--border-color:var(--ion-color-step-500, gray);--border-radius:4px;--padding-start:16px;--padding-end:16px}.input-fill-solid.sc-ion-input-md-h .input-wrapper.sc-ion-input-md{border-bottom:var(--border-width) var(--border-style) var(--border-color)}.has-focus.input-fill-solid.ion-valid.sc-ion-input-md-h,.input-fill-solid.ion-touched.ion-invalid.sc-ion-input-md-h{--border-color:var(--highlight-color)}.input-fill-solid.sc-ion-input-md-h .input-bottom.sc-ion-input-md{border-top:none}@media (any-hover: hover){.input-fill-solid.sc-ion-input-md-h:hover{--background:var(--ion-color-step-100, #e6e6e6);--border-color:var(--ion-color-step-750, #404040)}}.input-fill-solid.has-focus.sc-ion-input-md-h{--background:var(--ion-color-step-150, #d9d9d9);--border-color:var(--ion-color-step-750, #404040)}.input-fill-solid.sc-ion-input-md-h .input-wrapper.sc-ion-input-md{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0px;border-bottom-left-radius:0px}[dir=rtl].sc-ion-input-md-h -no-combinator.input-fill-solid.sc-ion-input-md-h .input-wrapper.sc-ion-input-md,[dir=rtl] .sc-ion-input-md-h -no-combinator.input-fill-solid.sc-ion-input-md-h .input-wrapper.sc-ion-input-md,[dir=rtl].input-fill-solid.sc-ion-input-md-h .input-wrapper.sc-ion-input-md,[dir=rtl] .input-fill-solid.sc-ion-input-md-h .input-wrapper.sc-ion-input-md{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0px;border-bottom-left-radius:0px}@supports selector(:dir(rtl)){.input-fill-solid.sc-ion-input-md-h .input-wrapper.sc-ion-input-md:dir(rtl){border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0px;border-bottom-left-radius:0px}}.input-fill-solid.input-label-placement-stacked.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md,.has-focus.input-fill-solid.input-label-placement-floating.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md,.has-value.input-fill-solid.input-label-placement-floating.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md{max-width:calc(100% / 0.75)}.input-fill-outline.sc-ion-input-md-h{--border-color:var(--ion-color-step-300, #b3b3b3);--border-radius:4px;--padding-start:16px;--padding-end:16px}.input-fill-outline.input-shape-round.sc-ion-input-md-h{--border-radius:28px;--padding-start:32px;--padding-end:32px}.has-focus.input-fill-outline.ion-valid.sc-ion-input-md-h,.input-fill-outline.ion-touched.ion-invalid.sc-ion-input-md-h{--border-color:var(--highlight-color)}@media (any-hover: hover){.input-fill-outline.sc-ion-input-md-h:hover{--border-color:var(--ion-color-step-750, #404040)}}.input-fill-outline.has-focus.sc-ion-input-md-h{--border-width:2px;--border-color:var(--highlight-color)}.input-fill-outline.sc-ion-input-md-h .input-bottom.sc-ion-input-md{border-top:none}.input-fill-outline.sc-ion-input-md-h .input-wrapper.sc-ion-input-md{border-bottom:none}.input-fill-outline.input-label-placement-stacked.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md,.input-fill-outline.input-label-placement-floating.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md{-webkit-transform-origin:left top;transform-origin:left top;position:absolute;max-width:calc(100% - var(--padding-start) - var(--padding-end))}[dir=rtl].sc-ion-input-md-h -no-combinator.input-fill-outline.input-label-placement-stacked.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md,[dir=rtl] .sc-ion-input-md-h -no-combinator.input-fill-outline.input-label-placement-stacked.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md,[dir=rtl].input-fill-outline.input-label-placement-stacked.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md,[dir=rtl] .input-fill-outline.input-label-placement-stacked.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md,[dir=rtl].sc-ion-input-md-h -no-combinator.input-fill-outline.input-label-placement-floating.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md,[dir=rtl] .sc-ion-input-md-h -no-combinator.input-fill-outline.input-label-placement-floating.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md,[dir=rtl].input-fill-outline.input-label-placement-floating.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md,[dir=rtl] .input-fill-outline.input-label-placement-floating.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){.input-fill-outline.input-label-placement-stacked.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md:dir(rtl),.input-fill-outline.input-label-placement-floating.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md:dir(rtl){-webkit-transform-origin:right top;transform-origin:right top}}.input-fill-outline.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md{position:relative}.has-focus.input-fill-outline.input-label-placement-floating.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md,.has-value.input-fill-outline.input-label-placement-floating.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md,.input-fill-outline.input-label-placement-stacked.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md{-webkit-transform:translateY(-32%) scale(0.75);transform:translateY(-32%) scale(0.75);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;max-width:calc((100% - var(--padding-start) - var(--padding-end) - 8px) / 0.75)}.input-fill-outline.input-label-placement-stacked.sc-ion-input-md-h input.sc-ion-input-md,.input-fill-outline.input-label-placement-floating.sc-ion-input-md-h input.sc-ion-input-md{margin-left:0;margin-right:0;margin-top:6px;margin-bottom:6px}.input-fill-outline.sc-ion-input-md-h .input-outline-container.sc-ion-input-md{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;width:100%;height:100%}.input-fill-outline.sc-ion-input-md-h .input-outline-start.sc-ion-input-md,.input-fill-outline.sc-ion-input-md-h .input-outline-end.sc-ion-input-md{pointer-events:none}.input-fill-outline.sc-ion-input-md-h .input-outline-start.sc-ion-input-md,.input-fill-outline.sc-ion-input-md-h .input-outline-notch.sc-ion-input-md,.input-fill-outline.sc-ion-input-md-h .input-outline-end.sc-ion-input-md{border-top:var(--border-width) var(--border-style) var(--border-color);border-bottom:var(--border-width) var(--border-style) var(--border-color)}.input-fill-outline.sc-ion-input-md-h .input-outline-notch.sc-ion-input-md{max-width:calc(100% - var(--padding-start) - var(--padding-end))}.input-fill-outline.sc-ion-input-md-h .notch-spacer.sc-ion-input-md{-webkit-padding-end:8px;padding-inline-end:8px;font-size:calc(1em * 0.75);opacity:0;pointer-events:none;-webkit-box-sizing:content-box;box-sizing:content-box}.input-fill-outline.sc-ion-input-md-h .input-outline-start.sc-ion-input-md{border-top-left-radius:var(--border-radius);border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:var(--border-radius);-webkit-border-start:var(--border-width) var(--border-style) var(--border-color);border-inline-start:var(--border-width) var(--border-style) var(--border-color);width:calc(var(--padding-start) - 4px)}[dir=rtl].sc-ion-input-md-h -no-combinator.input-fill-outline.sc-ion-input-md-h .input-outline-start.sc-ion-input-md,[dir=rtl] .sc-ion-input-md-h -no-combinator.input-fill-outline.sc-ion-input-md-h .input-outline-start.sc-ion-input-md,[dir=rtl].input-fill-outline.sc-ion-input-md-h .input-outline-start.sc-ion-input-md,[dir=rtl] .input-fill-outline.sc-ion-input-md-h .input-outline-start.sc-ion-input-md{border-top-left-radius:0px;border-top-right-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius);border-bottom-left-radius:0px}@supports selector(:dir(rtl)){.input-fill-outline.sc-ion-input-md-h .input-outline-start.sc-ion-input-md:dir(rtl){border-top-left-radius:0px;border-top-right-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius);border-bottom-left-radius:0px}}.input-fill-outline.sc-ion-input-md-h .input-outline-end.sc-ion-input-md{-webkit-border-end:var(--border-width) var(--border-style) var(--border-color);border-inline-end:var(--border-width) var(--border-style) var(--border-color);border-top-left-radius:0px;border-top-right-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius);border-bottom-left-radius:0px;-ms-flex-positive:1;flex-grow:1}[dir=rtl].sc-ion-input-md-h -no-combinator.input-fill-outline.sc-ion-input-md-h .input-outline-end.sc-ion-input-md,[dir=rtl] .sc-ion-input-md-h -no-combinator.input-fill-outline.sc-ion-input-md-h .input-outline-end.sc-ion-input-md,[dir=rtl].input-fill-outline.sc-ion-input-md-h .input-outline-end.sc-ion-input-md,[dir=rtl] .input-fill-outline.sc-ion-input-md-h .input-outline-end.sc-ion-input-md{border-top-left-radius:var(--border-radius);border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:var(--border-radius)}@supports selector(:dir(rtl)){.input-fill-outline.sc-ion-input-md-h .input-outline-end.sc-ion-input-md:dir(rtl){border-top-left-radius:var(--border-radius);border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:var(--border-radius)}}.has-focus.input-fill-outline.input-label-placement-floating.sc-ion-input-md-h .input-outline-notch.sc-ion-input-md,.has-value.input-fill-outline.input-label-placement-floating.sc-ion-input-md-h .input-outline-notch.sc-ion-input-md,.input-fill-outline.input-label-placement-stacked.sc-ion-input-md-h .input-outline-notch.sc-ion-input-md{border-top:none}.sc-ion-input-md-h{--border-width:1px;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))));font-size:inherit}.legacy-input.sc-ion-input-md-h{--padding-top:10px;--padding-end:0;--padding-bottom:10px;--padding-start:8px}.item-label-stacked.sc-ion-input-md-h,.item-label-stacked .sc-ion-input-md-h,.item-label-floating.sc-ion-input-md-h,.item-label-floating .sc-ion-input-md-h{--padding-top:8px;--padding-bottom:8px;--padding-start:0}.input-clear-icon.sc-ion-input-md ion-icon.sc-ion-input-md{width:22px;height:22px}.legacy-input.sc-ion-input-md-h .native-input[disabled].sc-ion-input-md,.input-disabled.sc-ion-input-md-h{opacity:0.38}.has-focus.ion-valid.sc-ion-input-md-h,.ion-touched.ion-invalid.sc-ion-input-md-h{--border-color:var(--highlight-color)}.input-bottom.sc-ion-input-md .counter.sc-ion-input-md{letter-spacing:0.0333333333em}.sc-ion-input-md-h:not(.legacy-input){min-height:56px}.input-label-placement-floating.has-focus.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md,.input-label-placement-stacked.has-focus.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md{color:var(--highlight-color)}.has-focus.input-label-placement-floating.ion-valid.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md,.input-label-placement-floating.ion-touched.ion-invalid.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md,.has-focus.input-label-placement-stacked.ion-valid.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md,.input-label-placement-stacked.ion-touched.ion-invalid.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md{color:var(--highlight-color)}.input-highlight.sc-ion-input-md{bottom:-1px;position:absolute;width:100%;height:2px;-webkit-transform:scale(0);transform:scale(0);-webkit-transition:-webkit-transform 200ms;transition:-webkit-transform 200ms;transition:transform 200ms;transition:transform 200ms, -webkit-transform 200ms;background:var(--highlight-color)}@supports (inset-inline-start: 0){.input-highlight.sc-ion-input-md{inset-inline-start:0}}@supports not (inset-inline-start: 0){.input-highlight.sc-ion-input-md{left:0}[dir=rtl].sc-ion-input-md-h .input-highlight.sc-ion-input-md,[dir=rtl] .sc-ion-input-md-h .input-highlight.sc-ion-input-md{left:unset;right:unset;right:0}[dir=rtl].sc-ion-input-md .input-highlight.sc-ion-input-md{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.input-highlight.sc-ion-input-md:dir(rtl){left:unset;right:unset;right:0}}}.has-focus.sc-ion-input-md-h .input-highlight.sc-ion-input-md{-webkit-transform:scale(1);transform:scale(1)}.in-item.sc-ion-input-md-h .input-highlight.sc-ion-input-md{bottom:0}@supports (inset-inline-start: 0){.in-item.sc-ion-input-md-h .input-highlight.sc-ion-input-md{inset-inline-start:0}}@supports not (inset-inline-start: 0){.in-item.sc-ion-input-md-h .input-highlight.sc-ion-input-md{left:0}[dir=rtl].sc-ion-input-md-h -no-combinator.in-item.sc-ion-input-md-h .input-highlight.sc-ion-input-md,[dir=rtl] .sc-ion-input-md-h -no-combinator.in-item.sc-ion-input-md-h .input-highlight.sc-ion-input-md,[dir=rtl].in-item.sc-ion-input-md-h .input-highlight.sc-ion-input-md,[dir=rtl] .in-item.sc-ion-input-md-h .input-highlight.sc-ion-input-md{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.in-item.sc-ion-input-md-h .input-highlight.sc-ion-input-md:dir(rtl){left:unset;right:unset;right:0}}}.input-shape-round.sc-ion-input-md-h{--border-radius:16px}";
const Input = class {
  constructor(hostRef) {
    (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.ionInput = (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionInput", 7);
    this.ionChange = (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionChange", 7);
    this.ionBlur = (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionBlur", 7);
    this.ionFocus = (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionFocus", 7);
    this.ionStyle = (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionStyle", 7);
    this.inputId = `ion-input-${inputIds++}`;
    this.inheritedAttributes = {};
    this.isComposing = false;
    // This flag ensures we log the deprecation warning at most once.
    this.hasLoggedDeprecationWarning = false;
    /**
     * `true` if the input was cleared as a result of the user typing
     * with `clearOnEdit` enabled.
     *
     * Resets when the input loses focus.
     */
    this.didInputClearOnEdit = false;
    this.onInput = ev => {
      const input = ev.target;
      if (input) {
        this.value = input.value || '';
      }
      this.emitInputChange(ev);
    };
    this.onChange = ev => {
      this.emitValueChange(ev);
    };
    this.onBlur = ev => {
      this.hasFocus = false;
      this.emitStyle();
      if (this.focusedValue !== this.value) {
        /**
         * Emits the `ionChange` event when the input value
         * is different than the value when the input was focused.
         */
        this.emitValueChange(ev);
      }
      this.didInputClearOnEdit = false;
      this.ionBlur.emit(ev);
    };
    this.onFocus = ev => {
      this.hasFocus = true;
      this.focusedValue = this.value;
      this.emitStyle();
      this.ionFocus.emit(ev);
    };
    this.onKeydown = ev => {
      this.checkClearOnEdit(ev);
    };
    this.onCompositionStart = () => {
      this.isComposing = true;
    };
    this.onCompositionEnd = () => {
      this.isComposing = false;
    };
    this.clearTextInput = ev => {
      if (this.clearInput && !this.readonly && !this.disabled && ev) {
        ev.preventDefault();
        ev.stopPropagation();
        // Attempt to focus input again after pressing clear button
        this.setFocus();
      }
      this.value = '';
      this.emitInputChange(ev);
    };
    this.hasFocus = false;
    this.color = undefined;
    this.accept = undefined;
    this.autocapitalize = 'off';
    this.autocomplete = 'off';
    this.autocorrect = 'off';
    this.autofocus = false;
    this.clearInput = false;
    this.clearOnEdit = undefined;
    this.counter = false;
    this.counterFormatter = undefined;
    this.debounce = undefined;
    this.disabled = false;
    this.enterkeyhint = undefined;
    this.errorText = undefined;
    this.fill = undefined;
    this.inputmode = undefined;
    this.helperText = undefined;
    this.label = undefined;
    this.labelPlacement = 'start';
    this.legacy = undefined;
    this.max = undefined;
    this.maxlength = undefined;
    this.min = undefined;
    this.minlength = undefined;
    this.multiple = undefined;
    this.name = this.inputId;
    this.pattern = undefined;
    this.placeholder = undefined;
    this.readonly = false;
    this.required = false;
    this.shape = undefined;
    this.spellcheck = false;
    this.step = undefined;
    this.size = undefined;
    this.type = 'text';
    this.value = '';
  }
  debounceChanged() {
    const {
      ionInput,
      debounce,
      originalIonInput
    } = this;
    /**
     * If debounce is undefined, we have to manually revert the ionInput emitter in case
     * debounce used to be set to a number. Otherwise, the event would stay debounced.
     */
    this.ionInput = debounce === undefined ? originalIonInput !== null && originalIonInput !== void 0 ? originalIonInput : ionInput : (0,_helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_4__.j)(ionInput, debounce);
  }
  disabledChanged() {
    this.emitStyle();
  }
  /**
   * Update the item classes when the placeholder changes
   */
  placeholderChanged() {
    this.emitStyle();
  }
  /**
   * Update the native input element when the value changes
   */
  valueChanged() {
    const nativeInput = this.nativeInput;
    const value = this.getValue();
    if (nativeInput && nativeInput.value !== value && !this.isComposing) {
      /**
       * Assigning the native input's value on attribute
       * value change, allows `ionInput` implementations
       * to override the control's value.
       *
       * Used for patterns such as input trimming (removing whitespace),
       * or input masking.
       */
      nativeInput.value = value;
    }
    this.emitStyle();
  }
  componentWillLoad() {
    this.inheritedAttributes = Object.assign(Object.assign({}, (0,_helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_4__.i)(this.el)), (0,_helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_4__.k)(this.el, ['tabindex', 'title', 'data-form-type']));
  }
  connectedCallback() {
    const {
      el
    } = this;
    this.legacyFormController = (0,_form_controller_ed77647a_js__WEBPACK_IMPORTED_MODULE_2__.c)(el);
    this.slotMutationController = (0,_input_utils_ec063df4_js__WEBPACK_IMPORTED_MODULE_6__.c)(el, 'label', () => (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.i)(this));
    this.notchController = (0,_notch_controller_8c9c0e54_js__WEBPACK_IMPORTED_MODULE_3__.c)(el, () => this.notchSpacerEl, () => this.labelSlot);
    this.emitStyle();
    this.debounceChanged();
    {
      document.dispatchEvent(new CustomEvent('ionInputDidLoad', {
        detail: this.el
      }));
    }
  }
  componentDidLoad() {
    this.originalIonInput = this.ionInput;
  }
  componentDidRender() {
    var _a;
    (_a = this.notchController) === null || _a === void 0 ? void 0 : _a.calculateNotchWidth();
  }
  disconnectedCallback() {
    {
      document.dispatchEvent(new CustomEvent('ionInputDidUnload', {
        detail: this.el
      }));
    }
    if (this.slotMutationController) {
      this.slotMutationController.destroy();
      this.slotMutationController = undefined;
    }
    if (this.notchController) {
      this.notchController.destroy();
      this.notchController = undefined;
    }
  }
  /**
   * Sets focus on the native `input` in `ion-input`. Use this method instead of the global
   * `input.focus()`.
   *
   * Developers who wish to focus an input when a page enters
   * should call `setFocus()` in the `ionViewDidEnter()` lifecycle method.
   *
   * Developers who wish to focus an input when an overlay is presented
   * should call `setFocus` after `didPresent` has resolved.
   */
  setFocus() {
    var _this = this;
    return (0,C_Users_ekt_Documents_DOMINGO_evaluationIF_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.nativeInput) {
        _this.nativeInput.focus();
      }
    })();
  }
  /**
   * Returns the native `<input>` element used under the hood.
   */
  getInputElement() {
    return Promise.resolve(this.nativeInput);
  }
  /**
   * Emits an `ionChange` event.
   *
   * This API should be called for user committed changes.
   * This API should not be used for external value changes.
   */
  emitValueChange(event) {
    const {
      value
    } = this;
    // Checks for both null and undefined values
    const newValue = value == null ? value : value.toString();
    // Emitting a value change should update the internal state for tracking the focused value
    this.focusedValue = newValue;
    this.ionChange.emit({
      value: newValue,
      event
    });
  }
  /**
   * Emits an `ionInput` event.
   */
  emitInputChange(event) {
    const {
      value
    } = this;
    // Checks for both null and undefined values
    const newValue = value == null ? value : value.toString();
    this.ionInput.emit({
      value: newValue,
      event
    });
  }
  shouldClearOnEdit() {
    const {
      type,
      clearOnEdit
    } = this;
    return clearOnEdit === undefined ? type === 'password' : clearOnEdit;
  }
  getValue() {
    return typeof this.value === 'number' ? this.value.toString() : (this.value || '').toString();
  }
  emitStyle() {
    if (this.legacyFormController.hasLegacyControl()) {
      this.ionStyle.emit({
        interactive: true,
        input: true,
        'has-placeholder': this.placeholder !== undefined,
        'has-value': this.hasValue(),
        'has-focus': this.hasFocus,
        'interactive-disabled': this.disabled
      });
    }
  }
  checkClearOnEdit(ev) {
    if (!this.shouldClearOnEdit()) {
      return;
    }
    /**
     * Clear the input if the control has not been previously cleared during focus.
     * Do not clear if the user hitting enter to submit a form.
     */
    if (!this.didInputClearOnEdit && this.hasValue() && ev.key !== 'Enter' && ev.key !== 'Tab') {
      this.value = '';
      this.emitInputChange(ev);
    }
    this.didInputClearOnEdit = true;
  }
  hasValue() {
    return this.getValue().length > 0;
  }
  /**
   * Renders the helper text or error text values
   */
  renderHintText() {
    const {
      helperText,
      errorText
    } = this;
    return [(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "helper-text"
    }, helperText), (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "error-text"
    }, errorText)];
  }
  renderCounter() {
    const {
      counter,
      maxlength,
      counterFormatter,
      value
    } = this;
    if (counter !== true || maxlength === undefined) {
      return;
    }
    return (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "counter"
    }, (0,_input_utils_ec063df4_js__WEBPACK_IMPORTED_MODULE_6__.g)(value, maxlength, counterFormatter));
  }
  /**
   * Responsible for rendering helper text,
   * error text, and counter. This element should only
   * be rendered if hint text is set or counter is enabled.
   */
  renderBottomContent() {
    const {
      counter,
      helperText,
      errorText,
      maxlength
    } = this;
    /**
     * undefined and empty string values should
     * be treated as not having helper/error text.
     */
    const hasHintText = !!helperText || !!errorText;
    const hasCounter = counter === true && maxlength !== undefined;
    if (!hasHintText && !hasCounter) {
      return;
    }
    return (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "input-bottom"
    }, this.renderHintText(), this.renderCounter());
  }
  renderLabel() {
    const {
      label
    } = this;
    return (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: {
        'label-text-wrapper': true,
        'label-text-wrapper-hidden': !this.hasLabel
      }
    }, label === undefined ? (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", {
      name: "label"
    }) : (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "label-text"
    }, label));
  }
  /**
   * Gets any content passed into the `label` slot,
   * not the <slot> definition.
   */
  get labelSlot() {
    return this.el.querySelector('[slot="label"]');
  }
  /**
   * Returns `true` if label content is provided
   * either by a prop or a content. If you want
   * to get the plaintext value of the label use
   * the `labelText` getter instead.
   */
  get hasLabel() {
    return this.label !== undefined || this.labelSlot !== null;
  }
  /**
   * Renders the border container
   * when fill="outline".
   */
  renderLabelContainer() {
    const mode = (0,_ionic_global_b3fc28dd_js__WEBPACK_IMPORTED_MODULE_9__.b)(this);
    const hasOutlineFill = mode === 'md' && this.fill === 'outline';
    if (hasOutlineFill) {
      /**
       * The outline fill has a special outline
       * that appears around the input and the label.
       * Certain stacked and floating label placements cause the
       * label to translate up and create a "cut out"
       * inside of that border by using the notch-spacer element.
       */
      return [(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
        class: "input-outline-container"
      }, (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
        class: "input-outline-start"
      }), (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
        class: {
          'input-outline-notch': true,
          'input-outline-notch-hidden': !this.hasLabel
        }
      }, (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
        class: "notch-spacer",
        "aria-hidden": "true",
        ref: el => this.notchSpacerEl = el
      }, this.label)), (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
        class: "input-outline-end"
      })), this.renderLabel()];
    }
    /**
     * If not using the outline style,
     * we can render just the label.
     */
    return this.renderLabel();
  }
  renderInput() {
    const {
      disabled,
      fill,
      readonly,
      shape,
      inputId,
      labelPlacement
    } = this;
    const mode = (0,_ionic_global_b3fc28dd_js__WEBPACK_IMPORTED_MODULE_9__.b)(this);
    const value = this.getValue();
    const inItem = (0,_theme_17531cdf_js__WEBPACK_IMPORTED_MODULE_7__.h)('ion-item', this.el);
    const shouldRenderHighlight = mode === 'md' && fill !== 'outline' && !inItem;
    return (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.H, {
      class: (0,_theme_17531cdf_js__WEBPACK_IMPORTED_MODULE_7__.c)(this.color, {
        [mode]: true,
        'has-value': this.hasValue(),
        'has-focus': this.hasFocus,
        [`input-fill-${fill}`]: fill !== undefined,
        [`input-shape-${shape}`]: shape !== undefined,
        [`input-label-placement-${labelPlacement}`]: true,
        'in-item': inItem,
        'in-item-color': (0,_theme_17531cdf_js__WEBPACK_IMPORTED_MODULE_7__.h)('ion-item.ion-color', this.el),
        'input-disabled': disabled
      })
    }, (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)("label", {
      class: "input-wrapper"
    }, this.renderLabelContainer(), (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "native-wrapper"
    }, (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)("input", Object.assign({
      class: "native-input",
      ref: input => this.nativeInput = input,
      id: inputId,
      disabled: disabled,
      accept: this.accept,
      autoCapitalize: this.autocapitalize,
      autoComplete: this.autocomplete,
      autoCorrect: this.autocorrect,
      autoFocus: this.autofocus,
      enterKeyHint: this.enterkeyhint,
      inputMode: this.inputmode,
      min: this.min,
      max: this.max,
      minLength: this.minlength,
      maxLength: this.maxlength,
      multiple: this.multiple,
      name: this.name,
      pattern: this.pattern,
      placeholder: this.placeholder || '',
      readOnly: readonly,
      required: this.required,
      spellcheck: this.spellcheck,
      step: this.step,
      size: this.size,
      type: this.type,
      value: value,
      onInput: this.onInput,
      onChange: this.onChange,
      onBlur: this.onBlur,
      onFocus: this.onFocus,
      onKeyDown: this.onKeydown,
      onCompositionstart: this.onCompositionStart,
      onCompositionend: this.onCompositionEnd
    }, this.inheritedAttributes)), this.clearInput && !readonly && !disabled && (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)("button", {
      "aria-label": "reset",
      type: "button",
      class: "input-clear-icon",
      onPointerDown: ev => {
        /**
         * This prevents mobile browsers from
         * blurring the input when the clear
         * button is activated.
         */
        ev.preventDefault();
      },
      onClick: this.clearTextInput
    }, (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-icon", {
      "aria-hidden": "true",
      icon: mode === 'ios' ? _index_ecfc2c9f_js__WEBPACK_IMPORTED_MODULE_8__.b : _index_ecfc2c9f_js__WEBPACK_IMPORTED_MODULE_8__.d
    }))), shouldRenderHighlight && (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "input-highlight"
    })), this.renderBottomContent());
  }
  // TODO FW-2764 Remove this
  renderLegacyInput() {
    if (!this.hasLoggedDeprecationWarning) {
      (0,_index_595d62c9_js__WEBPACK_IMPORTED_MODULE_5__.p)(`ion-input now requires providing a label with either the "label" property or the "aria-label" attribute. To migrate, remove any usage of "ion-label" and pass the label text to either the "label" property or the "aria-label" attribute.

Example: <ion-input label="Email"></ion-input>
Example with aria-label: <ion-input aria-label="Email"></ion-input>

For inputs that do not render the label immediately next to the input, developers may continue to use "ion-label" but must manually associate the label with the input by using "aria-labelledby".

Developers can use the "legacy" property to continue using the legacy form markup. This property will be removed in an upcoming major release of Ionic where this form control will use the modern form markup.`, this.el);
      if (this.legacy) {
        (0,_index_595d62c9_js__WEBPACK_IMPORTED_MODULE_5__.p)(`ion-input is being used with the "legacy" property enabled which will forcibly enable the legacy form markup. This property will be removed in an upcoming major release of Ionic where this form control will use the modern form markup.

Developers can dismiss this warning by removing their usage of the "legacy" property and using the new input syntax.`, this.el);
      }
      this.hasLoggedDeprecationWarning = true;
    }
    const mode = (0,_ionic_global_b3fc28dd_js__WEBPACK_IMPORTED_MODULE_9__.b)(this);
    const value = this.getValue();
    const labelId = this.inputId + '-lbl';
    const label = (0,_helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_4__.h)(this.el);
    if (label) {
      label.id = labelId;
    }
    return (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.H, {
      "aria-disabled": this.disabled ? 'true' : null,
      class: (0,_theme_17531cdf_js__WEBPACK_IMPORTED_MODULE_7__.c)(this.color, {
        [mode]: true,
        'has-value': this.hasValue(),
        'has-focus': this.hasFocus,
        'legacy-input': true,
        'in-item-color': (0,_theme_17531cdf_js__WEBPACK_IMPORTED_MODULE_7__.h)('ion-item.ion-color', this.el)
      })
    }, (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)("input", Object.assign({
      class: "native-input",
      ref: input => this.nativeInput = input,
      "aria-labelledby": label ? label.id : null,
      disabled: this.disabled,
      accept: this.accept,
      autoCapitalize: this.autocapitalize,
      autoComplete: this.autocomplete,
      autoCorrect: this.autocorrect,
      autoFocus: this.autofocus,
      enterKeyHint: this.enterkeyhint,
      inputMode: this.inputmode,
      min: this.min,
      max: this.max,
      minLength: this.minlength,
      maxLength: this.maxlength,
      multiple: this.multiple,
      name: this.name,
      pattern: this.pattern,
      placeholder: this.placeholder || '',
      readOnly: this.readonly,
      required: this.required,
      spellcheck: this.spellcheck,
      step: this.step,
      size: this.size,
      type: this.type,
      value: value,
      onInput: this.onInput,
      onChange: this.onChange,
      onBlur: this.onBlur,
      onFocus: this.onFocus,
      onKeyDown: this.onKeydown
    }, this.inheritedAttributes)), this.clearInput && !this.readonly && !this.disabled && (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)("button", {
      "aria-label": "reset",
      type: "button",
      class: "input-clear-icon",
      onPointerDown: ev => {
        /**
         * This prevents mobile browsers from
         * blurring the input when the clear
         * button is activated.
         */
        ev.preventDefault();
      },
      onClick: this.clearTextInput
    }, (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-icon", {
      "aria-hidden": "true",
      icon: mode === 'ios' ? _index_ecfc2c9f_js__WEBPACK_IMPORTED_MODULE_8__.b : _index_ecfc2c9f_js__WEBPACK_IMPORTED_MODULE_8__.d
    })));
  }
  render() {
    const {
      legacyFormController
    } = this;
    return legacyFormController.hasLegacyControl() ? this.renderLegacyInput() : this.renderInput();
  }
  get el() {
    return (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.f)(this);
  }
  static get watchers() {
    return {
      "debounce": ["debounceChanged"],
      "disabled": ["disabledChanged"],
      "placeholder": ["placeholderChanged"],
      "value": ["valueChanged"]
    };
  }
};
let inputIds = 0;
Input.style = {
  ios: inputIosCss,
  md: inputMdCss
};


/***/ })

}]);