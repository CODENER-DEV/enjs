"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[433],{

/***/ 433:
/*!************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-datetime-button.entry.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ion_datetime_button: () => (/* binding */ DatetimeButton)
/* harmony export */ });
/* harmony import */ var C_Users_ekt_Documents_DOMINGO_evaluationIF_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 5861);
/* harmony import */ var _index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-2d388930.js */ 2364);
/* harmony import */ var _helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-3379ba19.js */ 839);
/* harmony import */ var _index_595d62c9_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index-595d62c9.js */ 6710);
/* harmony import */ var _theme_17531cdf_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme-17531cdf.js */ 3567);
/* harmony import */ var _ionic_global_b3fc28dd_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ionic-global-b3fc28dd.js */ 152);
/* harmony import */ var _data_009dbf15_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data-009dbf15.js */ 4121);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */






const iosDatetimeButtonCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host button{border-radius:8px;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:6px;padding-bottom:6px;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;margin-top:0px;margin-bottom:0px;position:relative;-webkit-transition:150ms color ease-in-out;transition:150ms color ease-in-out;border:none;background:var(--ion-color-step-300, #edeef0);color:var(--ion-text-color, #000);font-family:inherit;font-size:inherit;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;overflow:hidden}:host(.time-active) #time-button,:host(.date-active) #date-button{color:var(--ion-color-base)}:host(.datetime-button-disabled){pointer-events:none}:host(.datetime-button-disabled) button{opacity:0.4}";
const mdDatetimeButtonCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host button{border-radius:8px;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:6px;padding-bottom:6px;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;margin-top:0px;margin-bottom:0px;position:relative;-webkit-transition:150ms color ease-in-out;transition:150ms color ease-in-out;border:none;background:var(--ion-color-step-300, #edeef0);color:var(--ion-text-color, #000);font-family:inherit;font-size:inherit;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;overflow:hidden}:host(.time-active) #time-button,:host(.date-active) #date-button{color:var(--ion-color-base)}:host(.datetime-button-disabled){pointer-events:none}:host(.datetime-button-disabled) button{opacity:0.4}";
const DatetimeButton = class {
  constructor(hostRef) {
    var _this = this;
    (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.datetimeEl = null;
    this.overlayEl = null;
    /**
     * Accepts one or more string values and converts
     * them to DatetimeParts. This is done so datetime-button
     * can work with an array internally and not need
     * to keep checking if the datetime value is `string` or `string[]`.
     */
    this.getParsedDateValues = value => {
      if (value === undefined || value === null) {
        return [];
      }
      if (Array.isArray(value)) {
        return value;
      }
      return [value];
    };
    /**
     * Check the value property on the linked
     * ion-datetime and then format it according
     * to the locale specified on ion-datetime.
     */
    this.setDateTimeText = () => {
      const {
        datetimeEl,
        datetimePresentation
      } = this;
      if (!datetimeEl) {
        return;
      }
      const {
        value,
        locale,
        hourCycle,
        preferWheel,
        multiple,
        titleSelectedDatesFormatter
      } = datetimeEl;
      const parsedValues = this.getParsedDateValues(value);
      /**
       * Both ion-datetime and ion-datetime-button default
       * to today's date and time if no value is set.
       */
      const parsedDatetimes = (0,_data_009dbf15_js__WEBPACK_IMPORTED_MODULE_6__.q)(parsedValues.length > 0 ? parsedValues : [(0,_data_009dbf15_js__WEBPACK_IMPORTED_MODULE_6__.t)()]);
      if (!parsedDatetimes) {
        return;
      }
      /**
       * If developers incorrectly use multiple="true"
       * with non "date" datetimes, then just select
       * the first value so the interface does
       * not appear broken. Datetime will provide a
       * warning in the console.
       */
      const firstParsedDatetime = parsedDatetimes[0];
      const use24Hour = (0,_data_009dbf15_js__WEBPACK_IMPORTED_MODULE_6__.J)(locale, hourCycle);
      this.dateText = this.timeText = undefined;
      switch (datetimePresentation) {
        case 'date-time':
        case 'time-date':
          const dateText = (0,_data_009dbf15_js__WEBPACK_IMPORTED_MODULE_6__.T)(locale, firstParsedDatetime);
          const timeText = (0,_data_009dbf15_js__WEBPACK_IMPORTED_MODULE_6__.K)(locale, firstParsedDatetime, use24Hour);
          if (preferWheel) {
            this.dateText = `${dateText} ${timeText}`;
          } else {
            this.dateText = dateText;
            this.timeText = timeText;
          }
          break;
        case 'date':
          if (multiple && parsedValues.length !== 1) {
            let headerText = `${parsedValues.length} days`; // default/fallback for multiple selection
            if (titleSelectedDatesFormatter !== undefined) {
              try {
                headerText = titleSelectedDatesFormatter(parsedValues);
              } catch (e) {
                (0,_index_595d62c9_js__WEBPACK_IMPORTED_MODULE_3__.a)('Exception in provided `titleSelectedDatesFormatter`: ', e);
              }
            }
            this.dateText = headerText;
          } else {
            this.dateText = (0,_data_009dbf15_js__WEBPACK_IMPORTED_MODULE_6__.T)(locale, firstParsedDatetime);
          }
          break;
        case 'time':
          this.timeText = (0,_data_009dbf15_js__WEBPACK_IMPORTED_MODULE_6__.K)(locale, firstParsedDatetime, use24Hour);
          break;
        case 'month-year':
          this.dateText = (0,_data_009dbf15_js__WEBPACK_IMPORTED_MODULE_6__.G)(locale, firstParsedDatetime);
          break;
        case 'month':
          this.dateText = (0,_data_009dbf15_js__WEBPACK_IMPORTED_MODULE_6__.S)(locale, firstParsedDatetime, {
            month: 'long'
          });
          break;
        case 'year':
          this.dateText = (0,_data_009dbf15_js__WEBPACK_IMPORTED_MODULE_6__.S)(locale, firstParsedDatetime, {
            year: 'numeric'
          });
          break;
      }
    };
    /**
     * Waits for the ion-datetime to re-render.
     * This is needed in order to correctly position
     * a popover relative to the trigger element.
     */
    this.waitForDatetimeChanges = /*#__PURE__*/(0,C_Users_ekt_Documents_DOMINGO_evaluationIF_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        datetimeEl
      } = _this;
      if (!datetimeEl) {
        return Promise.resolve();
      }
      return new Promise(resolve => {
        (0,_helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_2__.a)(datetimeEl, 'ionRender', resolve, {
          once: true
        });
      });
    });
    this.handleDateClick = /*#__PURE__*/function () {
      var _ref2 = (0,C_Users_ekt_Documents_DOMINGO_evaluationIF_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (ev) {
        const {
          datetimeEl,
          datetimePresentation
        } = _this;
        if (!datetimeEl) {
          return;
        }
        let needsPresentationChange = false;
        /**
         * When clicking the date button,
         * we need to make sure that only a date
         * picker is displayed. For presentation styles
         * that display content other than a date picker,
         * we need to update the presentation style.
         */
        switch (datetimePresentation) {
          case 'date-time':
          case 'time-date':
            const needsChange = datetimeEl.presentation !== 'date';
            /**
             * The date+time wheel picker
             * shows date and time together,
             * so do not adjust the presentation
             * in that case.
             */
            if (!datetimeEl.preferWheel && needsChange) {
              datetimeEl.presentation = 'date';
              needsPresentationChange = true;
            }
            break;
        }
        /**
         * Track which button was clicked
         * so that it can have the correct
         * activated styles applied when
         * the modal/popover containing
         * the datetime is opened.
         */
        _this.selectedButton = 'date';
        _this.presentOverlay(ev, needsPresentationChange, _this.dateTargetEl);
      });
      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }();
    this.handleTimeClick = ev => {
      const {
        datetimeEl,
        datetimePresentation
      } = this;
      if (!datetimeEl) {
        return;
      }
      let needsPresentationChange = false;
      /**
       * When clicking the time button,
       * we need to make sure that only a time
       * picker is displayed. For presentation styles
       * that display content other than a time picker,
       * we need to update the presentation style.
       */
      switch (datetimePresentation) {
        case 'date-time':
        case 'time-date':
          const needsChange = datetimeEl.presentation !== 'time';
          if (needsChange) {
            datetimeEl.presentation = 'time';
            needsPresentationChange = true;
          }
          break;
      }
      /**
       * Track which button was clicked
       * so that it can have the correct
       * activated styles applied when
       * the modal/popover containing
       * the datetime is opened.
       */
      this.selectedButton = 'time';
      this.presentOverlay(ev, needsPresentationChange, this.timeTargetEl);
    };
    /**
     * If the datetime is presented in an
     * overlay, the datetime and overlay
     * should be appropriately sized.
     * These classes provide default sizing values
     * that developers can customize.
     * The goal is to provide an overlay that is
     * reasonably sized with a datetime that
     * fills the entire container.
     */
    this.presentOverlay = /*#__PURE__*/function () {
      var _ref3 = (0,C_Users_ekt_Documents_DOMINGO_evaluationIF_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (ev, needsPresentationChange, triggerEl) {
        const {
          overlayEl
        } = _this;
        if (!overlayEl) {
          return;
        }
        if (overlayEl.tagName === 'ION-POPOVER') {
          /**
           * When the presentation on datetime changes,
           * we need to wait for the component to re-render
           * otherwise the computed width/height of the
           * popover content will be wrong, causing
           * the popover to not align with the trigger element.
           */
          if (needsPresentationChange) {
            yield _this.waitForDatetimeChanges();
          }
          /**
           * We pass the trigger button element
           * so that the popover aligns with the individual
           * button that was clicked, not the component container.
           */
          overlayEl.present(Object.assign(Object.assign({}, ev), {
            detail: {
              ionShadowTarget: triggerEl
            }
          }));
        } else {
          overlayEl.present();
        }
      });
      return function (_x2, _x3, _x4) {
        return _ref3.apply(this, arguments);
      };
    }();
    this.datetimePresentation = 'date-time';
    this.dateText = undefined;
    this.timeText = undefined;
    this.datetimeActive = false;
    this.selectedButton = undefined;
    this.color = 'primary';
    this.disabled = false;
    this.datetime = undefined;
  }
  componentWillLoad() {
    var _this2 = this;
    return (0,C_Users_ekt_Documents_DOMINGO_evaluationIF_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        datetime
      } = _this2;
      if (!datetime) {
        (0,_index_595d62c9_js__WEBPACK_IMPORTED_MODULE_3__.a)('An ID associated with an ion-datetime instance is required for ion-datetime-button to function properly.', _this2.el);
        return;
      }
      const datetimeEl = _this2.datetimeEl = document.getElementById(datetime);
      if (!datetimeEl) {
        (0,_index_595d62c9_js__WEBPACK_IMPORTED_MODULE_3__.a)(`No ion-datetime instance found for ID '${datetime}'.`, _this2.el);
        return;
      }
      /**
       * The element reference must be an ion-datetime. Print an error
       * if a non-datetime element was provided.
       */
      if (datetimeEl.tagName !== 'ION-DATETIME') {
        (0,_index_595d62c9_js__WEBPACK_IMPORTED_MODULE_3__.a)(`Expected an ion-datetime instance for ID '${datetime}' but received '${datetimeEl.tagName.toLowerCase()}' instead.`, datetimeEl);
        return;
      }
      /**
       * Since the datetime can be used in any context (overlays, accordion, etc)
       * we track when it is visible to determine when it is active.
       * This informs which button is highlighted as well as the
       * aria-expanded state.
       */
      const io = new IntersectionObserver(entries => {
        const ev = entries[0];
        _this2.datetimeActive = ev.isIntersecting;
      }, {
        threshold: 0.01
      });
      io.observe(datetimeEl);
      /**
       * Get a reference to any modal/popover
       * the datetime is being used in so we can
       * correctly size it when it is presented.
       */
      const overlayEl = _this2.overlayEl = datetimeEl.closest('ion-modal, ion-popover');
      /**
       * The .ion-datetime-button-overlay class contains
       * styles that allow any modal/popover to be
       * sized according to the dimensions of the datetime.
       * If developers want a smaller/larger overlay all they need
       * to do is change the width/height of the datetime.
       * Additionally, this lets us avoid having to set
       * explicit widths on each variant of datetime.
       */
      if (overlayEl) {
        overlayEl.classList.add('ion-datetime-button-overlay');
      }
      (0,_helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_2__.c)(datetimeEl, () => {
        const datetimePresentation = _this2.datetimePresentation = datetimeEl.presentation || 'date-time';
        /**
         * Set the initial display
         * in the rendered buttons.
         *
         * From there, we need to listen
         * for ionChange to be emitted
         * from datetime so we know when
         * to re-render the displayed
         * text in the buttons.
         */
        _this2.setDateTimeText();
        (0,_helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_2__.a)(datetimeEl, 'ionValueChange', _this2.setDateTimeText);
        /**
         * Configure the initial selected button
         * in the event that the datetime is displayed
         * without clicking one of the datetime buttons.
         * For example, a datetime could be expanded
         * in an accordion. In this case users only
         * need to click the accordion header to show
         * the datetime.
         */
        switch (datetimePresentation) {
          case 'date-time':
          case 'date':
          case 'month-year':
          case 'month':
          case 'year':
            _this2.selectedButton = 'date';
            break;
          case 'time-date':
          case 'time':
            _this2.selectedButton = 'time';
            break;
        }
      });
    })();
  }
  render() {
    const {
      color,
      dateText,
      timeText,
      selectedButton,
      datetimeActive,
      disabled
    } = this;
    const mode = (0,_ionic_global_b3fc28dd_js__WEBPACK_IMPORTED_MODULE_5__.b)(this);
    return (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.H, {
      class: (0,_theme_17531cdf_js__WEBPACK_IMPORTED_MODULE_4__.c)(color, {
        [mode]: true,
        [`${selectedButton}-active`]: datetimeActive,
        ['datetime-button-disabled']: disabled
      })
    }, dateText && (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)("button", {
      class: "ion-activatable",
      id: "date-button",
      "aria-expanded": datetimeActive ? 'true' : 'false',
      onClick: this.handleDateClick,
      disabled: disabled,
      part: "native",
      ref: el => this.dateTargetEl = el
    }, (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", {
      name: "date-target"
    }, dateText), mode === 'md' && (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-ripple-effect", null)), timeText && (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)("button", {
      class: "ion-activatable",
      id: "time-button",
      "aria-expanded": datetimeActive ? 'true' : 'false',
      onClick: this.handleTimeClick,
      disabled: disabled,
      part: "native",
      ref: el => this.timeTargetEl = el
    }, (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", {
      name: "time-target"
    }, timeText), mode === 'md' && (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-ripple-effect", null)));
  }
  get el() {
    return (0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_1__.f)(this);
  }
};
DatetimeButton.style = {
  ios: iosDatetimeButtonCss,
  md: mdDatetimeButtonCss
};


/***/ })

}]);