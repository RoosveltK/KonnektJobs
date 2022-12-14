(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/roosvelt/Documents/Dev/Perso/KonnektJobs/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "6B5W":
    /*!**************************************************!*\
      !*** ./src/app/pages/index2/index2.component.ts ***!
      \**************************************************/

    /*! exports provided: Index2Component */

    /***/
    function B5W(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Index2Component", function () {
        return Index2Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_dash_lang_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/dash-lang.service */
      "MijJ");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @nicky-lenaers/ngx-scroll-to */
      "KZTq");
      /* harmony import */


      var _shared_scrollspy_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../shared/scrollspy.directive */
      "BmFD");
      /* harmony import */


      var _shared_services_services_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../shared/services/services.component */
      "viZE");
      /* harmony import */


      var _shared_features_features_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../shared/features/features.component */
      "ODCV");
      /* harmony import */


      var _shared_clients_clients_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../shared/clients/clients.component */
      "eX6T");
      /* harmony import */


      var _shared_plans_plans_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../shared/plans/plans.component */
      "gt6D");
      /* harmony import */


      var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../shared/footer/footer.component */
      "jQpT");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      function Index2Component_button_30_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "French");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function Index2Component_button_30_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Anglais");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function Index2Component_button_30_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function Index2Component_button_30_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r5);

            var lang_r1 = ctx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r4.changeLanguage(lang_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, Index2Component_button_30_span_1_Template, 2, 0, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, Index2Component_button_30_span_2_Template, 2, 0, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var lang_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", lang_r1.value !== ctx_r0.selected && ctx_r0.selected == "en");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", lang_r1.value !== ctx_r0.selected && ctx_r0.selected == "fr");
        }
      }

      var _c0 = function _c0(a0) {
        return {
          active: a0
        };
      };

      var _c1 = function _c1() {
        return ["SECTION"];
      };
      /**
       * Index-2 component
       */


      var Index2Component = /*#__PURE__*/function () {
        function Index2Component(langService) {
          _classCallCheck(this, Index2Component);

          this.langService = langService;
          this.languages = [];
          this.selected = "";
          this.currentSection = "home";
        }

        _createClass(Index2Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.languages = this.langService.getLanguages();
            this.selected = this.langService.langSelected;

            if (this.selected == "" || this.selected == "en") {
              this.selected = "en";
              this.fullNameLang = "English";
            } else this.fullNameLang = "Fran??ais";
          }
        }, {
          key: "changeLanguage",
          value: function changeLanguage(elt) {
            this.langService.setLanguage(elt.value);
            this.selected = this.langService.langSelected;

            if (this.selected == "en") {
              this.selected = "en";
              this.fullNameLang = "English";
            } else this.fullNameLang = "Fran??ais";
          }
          /**
           * Window scroll method
           */

        }, {
          key: "windowScroll",
          value: function windowScroll() {
            var navbar = document.getElementById("navbar");

            if (document.body.scrollTop >= 50 || document.documentElement.scrollTop > 50) {
              navbar.classList.add("nav-sticky");
            } else {
              navbar.classList.remove("nav-sticky");
            }
          }
          /**
           * Section changed method
           * @param sectionId specify the current sectionID
           */

        }, {
          key: "onSectionChange",
          value: function onSectionChange(sectionId) {
            this.currentSection = sectionId;
          }
          /**
           * Toggle navbar
           */

        }, {
          key: "toggleMenu",
          value: function toggleMenu() {
            document.getElementById("navbarCollapse").classList.toggle("show");
          }
        }]);

        return Index2Component;
      }();

      Index2Component.??fac = function Index2Component_Factory(t) {
        return new (t || Index2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_dash_lang_service__WEBPACK_IMPORTED_MODULE_1__["DashLangService"]));
      };

      Index2Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: Index2Component,
        selectors: [["app-index2"]],
        decls: 81,
        vars: 36,
        consts: [["id", "navbar", 1, "navbar", "navbar-expand-lg", "fixed-top", "navbar-custom", "sticky", "sticky-dark", 3, "scroll"], [1, "container"], ["href", "/", 1, "logo", "text-uppercase"], ["src", "assets/images/logo-dash.png", "alt", "", "height", "50", 1, "logo-dark"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarCollapse", "aria-controls", "navbarCollapse", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], [1, "mdi", "mdi-menu"], ["id", "navbarCollapse", 1, "collapse", "navbar-collapse"], ["id", "mySidenav", 1, "navbar-nav", "ml-auto", "navbar-center"], [1, "nav-item", 3, "ngClass"], ["href", "javascript: void(0);", 1, "nav-link", 3, "ngxScrollTo"], ["ngbDropdown", "", 1, "nav-item", 2, "cursor", "pointer"], ["id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "dropdown-language", "nav-link"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1"], ["ngbDropdownItem", "", 3, "click", 4, "ngFor", "ngForOf"], ["href", "https://partner.mydashs.com", 1, "btn", "btn-success", "btn-rounded", "navbar-btn"], ["appScrollspy", "", 3, "spiedTags", "sectionChange"], ["id", "home", 1, "hero-section-2", 2, "background", "url(assets/images/bg-1.png) center center"], [1, "row", "vertical-content", "justify-content-center"], [1, "col-lg-6"], [1, "hero-wrapper", "mb-4"], [1, "font-16", "text-uppercase"], [1, "hero-title", "mb-4"], [1, "text-primary"], [1, "mt-4"], ["href", "https://partner.mydashs.com", 1, "btn", "btn-primary", "mt-2", "mr-2"], ["href", "javascript: void(0);", 1, "btn", "btn-success", "mt-2", "mr-2"], [1, "col-lg-4", "offset-lg-2"], [1, "card", "mx-auto", "p-4", "rounded", "mt-5", "mt-lg-0"], [1, "text-center"], [1, "text-muted", "mb-2", "font-13", "text-uppercase"], [1, "form-title", "mb-4"], [1, "registration-form"], [1, "form-group", "mb-4"], [1, "font-15"], ["type", "text", "id", "name", "placeholder", "", 1, "form-control"], ["type", "email", "id", "email", "placeholder", "", 1, "form-control"], [1, "form-group", "mb-3"], ["type", "password", "id", "password", "placeholder", "", 1, "form-control"], ["type", "button", 1, "btn", "btn-primary", "btn-block", "btn-sm"], [1, "mdi", "mdi-telegram", "ml-2"], ["ngbDropdownItem", "", 3, "click"], [4, "ngIf"]],
        template: function Index2Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("scroll", function Index2Component_Template_nav_scroll_0_listener() {
              return ctx.windowScroll();
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resolveWindow"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function Index2Component_Template_button_click_4_listener() {
              return ctx.toggleMenu();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "ul", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](11, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Services");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](18, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Clients");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](25, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](30, Index2Component_button_30_Template, 3, 2, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](33, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("sectionChange", function Index2Component_Template_div_sectionChange_34_listener($event) {
              return ctx.onSectionChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "section", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "p", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Discover MyDash Today");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "h1", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, " Make your Site Amazing & Unique with ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "MyDash");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, " To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine occidental ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Get Started");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "a", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Learn more");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "p", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, " Welcome To MyDash ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "h5", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "Get 30 Days Free Trial");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "form", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "label", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Your Name*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](64, "input", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "label", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "Your Email*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](68, "input", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "label", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "Password*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](72, "input", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "button", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, " Get Started ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](75, "i", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](76, "app-services");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](77, "app-features");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](78, "app-clients");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](79, "app-plans");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](80, "app-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](25, _c0, ctx.currentSection === "home"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngxScrollTo", "#home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](11, 17, "MENU.home"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](27, _c0, ctx.currentSection === "services"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngxScrollTo", "#services");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](29, _c0, ctx.currentSection === "features"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngxScrollTo", "#features");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](18, 19, "MENU.features"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](31, _c0, ctx.currentSection === "clients"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngxScrollTo", "#clients");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](33, _c0, ctx.currentSection === "partner"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngxScrollTo", "#partner");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](25, 21, "MENU.partnerM"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.fullNameLang, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.languages);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](33, 23, "MENU.partner"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("spiedTags", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](35, _c1));
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavbar"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_4__["ScrollToDirective"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _shared_scrollspy_directive__WEBPACK_IMPORTED_MODULE_5__["ScrollspyDirective"], _shared_services_services_component__WEBPACK_IMPORTED_MODULE_6__["ServicesComponent"], _shared_features_features_component__WEBPACK_IMPORTED_MODULE_7__["FeaturesComponent"], _shared_clients_clients_component__WEBPACK_IMPORTED_MODULE_8__["ClientsComponent"], _shared_plans_plans_component__WEBPACK_IMPORTED_MODULE_9__["PlansComponent"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownItem"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luZGV4Mi9pbmRleDIuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Index2Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-index2",
            templateUrl: "./index2.component.html",
            styleUrls: ["./index2.component.scss"]
          }]
        }], function () {
          return [{
            type: src_app_services_dash_lang_service__WEBPACK_IMPORTED_MODULE_1__["DashLangService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "BTgX":
    /*!**************************************!*\
      !*** ./src/app/shared/plans/data.ts ***!
      \**************************************/

    /*! exports provided: pricingData */

    /***/
    function BTgX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "pricingData", function () {
        return pricingData;
      });

      var pricingData = [{
        title: 'Economy',
        price: 19,
        bandwidth: '1GB',
        onlinespace: '50MB',
        support: 'No'
      }, {
        title: 'Premium',
        price: 29,
        bandwidth: '2GB',
        onlinespace: '1GB',
        support: 'No'
      }, {
        title: 'Developer',
        price: 39,
        bandwidth: '3GB',
        onlinespace: '2GB',
        support: 'Yes'
      }];
      /***/
    },

    /***/
    "BmFD":
    /*!***********************************************!*\
      !*** ./src/app/shared/scrollspy.directive.ts ***!
      \***********************************************/

    /*! exports provided: ScrollspyDirective */

    /***/
    function BmFD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScrollspyDirective", function () {
        return ScrollspyDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var ScrollspyDirective = /*#__PURE__*/function () {
        // tslint:disable-next-line: variable-name
        function ScrollspyDirective(_el, document) {
          _classCallCheck(this, ScrollspyDirective);

          this._el = _el;
          this.document = document;
          this.spiedTags = [];
          this.sectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }
        /**
         * Window scroll method
         */


        _createClass(ScrollspyDirective, [{
          key: "onScroll",
          value: function onScroll(event) {
            var _this = this;

            var currentSection;

            var children = this._el.nativeElement.querySelectorAll('section');

            var scrollTop = this.document.documentElement.scrollTop;
            var parentOffset = this.document.documentElement.offsetTop; // tslint:disable-next-line: prefer-for-of

            var _loop = function _loop(i) {
              var element = children[i];

              if (_this.spiedTags.some(function (spiedTag) {
                return spiedTag === element.tagName;
              })) {
                if (element.offsetTop - parentOffset <= scrollTop) {
                  currentSection = element.id;
                }
              }
            };

            for (var i = 0; i < children.length; i++) {
              _loop(i);
            }

            if (currentSection !== this.currentSection) {
              this.currentSection = currentSection;
              this.sectionChange.emit(this.currentSection);
            }
          }
        }]);

        return ScrollspyDirective;
      }();

      ScrollspyDirective.??fac = function ScrollspyDirective_Factory(t) {
        return new (t || ScrollspyDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
      };

      ScrollspyDirective.??dir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({
        type: ScrollspyDirective,
        selectors: [["", "appScrollspy", ""]],
        hostBindings: function ScrollspyDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("scroll", function ScrollspyDirective_scroll_HostBindingHandler($event) {
              return ctx.onScroll($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resolveWindow"]);
          }
        },
        inputs: {
          spiedTags: "spiedTags"
        },
        outputs: {
          sectionChange: "sectionChange"
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ScrollspyDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[appScrollspy]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: Document,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }]
          }];
        }, {
          spiedTags: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          sectionChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],

          /**
           * Window scroll method
           */
          onScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', ['$event']]
          }]
        });
      })();
      /***/

    },

    /***/
    "EnRu":
    /*!**************************************************!*\
      !*** ./src/app/pages/index4/index4.component.ts ***!
      \**************************************************/

    /*! exports provided: Index4Component */

    /***/
    function EnRu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Index4Component", function () {
        return Index4Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_dash_lang_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/dash-lang.service */
      "MijJ");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @nicky-lenaers/ngx-scroll-to */
      "KZTq");
      /* harmony import */


      var _shared_scrollspy_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../shared/scrollspy.directive */
      "BmFD");
      /* harmony import */


      var _shared_services_services_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../shared/services/services.component */
      "viZE");
      /* harmony import */


      var _shared_features_features_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../shared/features/features.component */
      "ODCV");
      /* harmony import */


      var _shared_clients_clients_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../shared/clients/clients.component */
      "eX6T");
      /* harmony import */


      var _shared_plans_plans_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../shared/plans/plans.component */
      "gt6D");
      /* harmony import */


      var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../shared/footer/footer.component */
      "jQpT");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      function Index4Component_button_30_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "French");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function Index4Component_button_30_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Anglais");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function Index4Component_button_30_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function Index4Component_button_30_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r5);

            var lang_r1 = ctx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r4.changeLanguage(lang_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, Index4Component_button_30_span_1_Template, 2, 0, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, Index4Component_button_30_span_2_Template, 2, 0, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var lang_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", lang_r1.value !== ctx_r0.selected && ctx_r0.selected == "en");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", lang_r1.value !== ctx_r0.selected && ctx_r0.selected == "fr");
        }
      }

      var _c0 = function _c0(a0) {
        return {
          active: a0
        };
      };

      var _c1 = function _c1() {
        return ["SECTION"];
      };
      /**
       * Index-4 component
       */


      var Index4Component = /*#__PURE__*/function () {
        function Index4Component(langService) {
          _classCallCheck(this, Index4Component);

          this.langService = langService;
          this.languages = [];
          this.selected = "";
          this.currentSection = "home";
        }

        _createClass(Index4Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.languages = this.langService.getLanguages();
            this.selected = this.langService.langSelected;

            if (this.selected == "" || this.selected == "en") {
              this.selected = "en";
              this.fullNameLang = "English";
            } else this.fullNameLang = "Fran??ais";
          }
        }, {
          key: "changeLanguage",
          value: function changeLanguage(elt) {
            this.langService.setLanguage(elt.value);
            this.selected = this.langService.langSelected;

            if (this.selected == "en") {
              this.selected = "en";
              this.fullNameLang = "English";
            } else this.fullNameLang = "Fran??ais";
          }
          /**
           * Window scroll method
           */

        }, {
          key: "windowScroll",
          value: function windowScroll() {
            var navbar = document.getElementById("navbar");

            if (document.body.scrollTop >= 50 || document.documentElement.scrollTop > 50) {
              navbar.classList.add("nav-sticky");
            } else {
              navbar.classList.remove("nav-sticky");
            }
          }
          /**
           * Section changed method
           * @param sectionId specify the current sectionID
           */

        }, {
          key: "onSectionChange",
          value: function onSectionChange(sectionId) {
            this.currentSection = sectionId;
          }
          /**
           * Toggle navbar
           */

        }, {
          key: "toggleMenu",
          value: function toggleMenu() {
            document.getElementById("navbarCollapse").classList.toggle("show");
          }
        }]);

        return Index4Component;
      }();

      Index4Component.??fac = function Index4Component_Factory(t) {
        return new (t || Index4Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_dash_lang_service__WEBPACK_IMPORTED_MODULE_1__["DashLangService"]));
      };

      Index4Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: Index4Component,
        selectors: [["app-index4"]],
        decls: 61,
        vars: 36,
        consts: [["id", "navbar", 1, "navbar", "navbar-expand-lg", "fixed-top", "navbar-custom", "sticky", "sticky-dark", 3, "scroll"], [1, "container"], ["href", "/", 1, "logo", "text-uppercase"], ["src", "assets/images/logo-dash.png", "alt", "", "height", "50", 1, "logo-dark"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarCollapse", "aria-controls", "navbarCollapse", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], [1, "mdi", "mdi-menu"], ["id", "navbarCollapse", 1, "collapse", "navbar-collapse"], ["id", "mySidenav", 1, "navbar-nav", "ml-auto", "navbar-center"], [1, "nav-item", 3, "ngClass"], ["href", "javascript: void(0);", 1, "nav-link", 3, "ngxScrollTo"], ["ngbDropdown", "", 1, "nav-item", 2, "cursor", "pointer"], ["id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "dropdown-language", "nav-link"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1"], ["ngbDropdownItem", "", 3, "click", 4, "ngFor", "ngForOf"], ["href", "https://partner.mydashs.com", 1, "btn", "btn-success", "btn-rounded", "navbar-btn"], ["appScrollspy", "", 3, "spiedTags", "sectionChange"], ["id", "home", 1, "hero-section", 2, "background", "url(assets/images/bg-1.png) center center"], [1, "row", "justify-content-center"], [1, "col-lg-6"], [1, "hero-wrapper", "mb-4"], [1, "font-16", "text-uppercase"], [1, "hero-title", "mb-4"], [1, "text-primary"], [1, "mt-4"], ["href", "https://partner.mydashs.com", 1, "btn", "btn-primary", "mt-2", "mr-2"], ["href", "javascript: void(0);", 1, "btn", "btn-success", "mt-2", "mr-2"], [1, "col-lg-6", "col-sm-8"], [1, "mt-5", "mt-lg-0"], ["src", "assets/images/home-img.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["ngbDropdownItem", "", 3, "click"], [4, "ngIf"]],
        template: function Index4Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("scroll", function Index4Component_Template_nav_scroll_0_listener() {
              return ctx.windowScroll();
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resolveWindow"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function Index4Component_Template_button_click_4_listener() {
              return ctx.toggleMenu();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "ul", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](11, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Services");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](18, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Clients");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](25, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](30, Index4Component_button_30_Template, 3, 2, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](33, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("sectionChange", function Index4Component_Template_div_sectionChange_34_listener($event) {
              return ctx.onSectionChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "section", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "p", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Discover MyDash Today");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "h1", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, " Make your Site Amazing & Unique with ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "MyDash");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, " To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine occidental ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Get Started");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "a", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Learn more");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "img", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](56, "app-services");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](57, "app-features");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](58, "app-clients");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](59, "app-plans");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](60, "app-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](25, _c0, ctx.currentSection === "home"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngxScrollTo", "#home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](11, 17, "MENU.home"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](27, _c0, ctx.currentSection === "services"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngxScrollTo", "#services");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](29, _c0, ctx.currentSection === "features"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngxScrollTo", "#features");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](18, 19, "MENU.features"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](31, _c0, ctx.currentSection === "clients"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngxScrollTo", "#clients");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](33, _c0, ctx.currentSection === "partner"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngxScrollTo", "#partner");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](25, 21, "MENU.partnerM"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.fullNameLang, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.languages);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](33, 23, "MENU.partner"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("spiedTags", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](35, _c1));
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavbar"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_4__["ScrollToDirective"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _shared_scrollspy_directive__WEBPACK_IMPORTED_MODULE_5__["ScrollspyDirective"], _shared_services_services_component__WEBPACK_IMPORTED_MODULE_6__["ServicesComponent"], _shared_features_features_component__WEBPACK_IMPORTED_MODULE_7__["FeaturesComponent"], _shared_clients_clients_component__WEBPACK_IMPORTED_MODULE_8__["ClientsComponent"], _shared_plans_plans_component__WEBPACK_IMPORTED_MODULE_9__["PlansComponent"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownItem"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luZGV4NC9pbmRleDQuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Index4Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-index4",
            templateUrl: "./index4.component.html",
            styleUrls: ["./index4.component.scss"]
          }]
        }], function () {
          return [{
            type: src_app_services_dash_lang_service__WEBPACK_IMPORTED_MODULE_1__["DashLangService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Lzvh":
    /*!**********************************************!*\
      !*** ./src/app/pages/page-routing.module.ts ***!
      \**********************************************/

    /*! exports provided: PagesRoutingModule */

    /***/
    function Lzvh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function () {
        return PagesRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _index1_index1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./index1/index1.component */
      "bxJz");
      /* harmony import */


      var _index2_index2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./index2/index2.component */
      "6B5W");
      /* harmony import */


      var _index3_index3_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./index3/index3.component */
      "juQj");
      /* harmony import */


      var _index4_index4_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./index4/index4.component */
      "EnRu");
      /* harmony import */


      var _index5_index5_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./index5/index5.component */
      "SQH6");
      /* harmony import */


      var _index6_index6_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./index6/index6.component */
      "Vug0");

      var routes = [{
        path: "",
        component: _index6_index6_component__WEBPACK_IMPORTED_MODULE_7__["Index6Component"]
      }, {
        path: "index6",
        component: _index6_index6_component__WEBPACK_IMPORTED_MODULE_7__["Index6Component"]
      }, {
        path: "index-1",
        component: _index1_index1_component__WEBPACK_IMPORTED_MODULE_2__["Index1Component"]
      }, {
        path: "index-2",
        component: _index2_index2_component__WEBPACK_IMPORTED_MODULE_3__["Index2Component"]
      }, {
        path: "index-3",
        component: _index3_index3_component__WEBPACK_IMPORTED_MODULE_4__["Index3Component"]
      }, {
        path: "index-4",
        component: _index4_index4_component__WEBPACK_IMPORTED_MODULE_5__["Index4Component"]
      }, {
        path: "index-5",
        component: _index5_index5_component__WEBPACK_IMPORTED_MODULE_6__["Index5Component"]
      }];

      var PagesRoutingModule = function PagesRoutingModule() {
        _classCallCheck(this, PagesRoutingModule);
      };

      PagesRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: PagesRoutingModule
      });
      PagesRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function PagesRoutingModule_Factory(t) {
          return new (t || PagesRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](PagesRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PagesRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "MijJ":
    /*!***********************************************!*\
      !*** ./src/app/services/dash-lang.service.ts ***!
      \***********************************************/

    /*! exports provided: LANG_KEY, DashLangService */

    /***/
    function MijJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LANG_KEY", function () {
        return LANG_KEY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashLangService", function () {
        return DashLangService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var LANG_KEY = "LANG_KEY";

      var DashLangService = /*#__PURE__*/function () {
        function DashLangService(translate) {
          var _this2 = this;

          _classCallCheck(this, DashLangService);

          this.translate = translate;

          this.translateInstant = function (word) {
            return _this2.translate.get(word);
          };
        }

        _createClass(DashLangService, [{
          key: "setInitialAppLanguage",
          value: function setInitialAppLanguage() {
            var language = this.translate.getBrowserLang();
            this.translate.setDefaultLang(language);
            this.langSelected = this.getLanguages().find(function (item) {
              return item.value == language;
            });
            var langSave = localStorage.getItem(LANG_KEY);

            if (langSave != null) {
              this.setLanguage(langSave);
              this.langSelected = this.getLanguages().find(function (item) {
                return item.value === langSave;
              });
            }
          }
        }, {
          key: "getLanguages",
          value: function getLanguages() {
            return [{
              text: "LANG.deu",
              value: "deu",
              flag: "assets/images/lang/deu.png"
            }, {
              text: "LANG.fr",
              value: "fr",
              flag: "assets/images/lang/fr.png"
            }];
          }
        }, {
          key: "setLanguage",
          value: function setLanguage(lang) {
            this.translate.use(lang);
            this.langSelected = this.getLanguages().find(function (item) {
              return item.value == lang;
            });
            localStorage.setItem(LANG_KEY, lang);
          }
        }]);

        return DashLangService;
      }();

      DashLangService.??fac = function DashLangService_Factory(t) {
        return new (t || DashLangService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]));
      };

      DashLangService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: DashLangService,
        factory: DashLangService.??fac,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DashLangService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: "root"
          }]
        }], function () {
          return [{
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "O83A":
    /*!*****************************************************!*\
      !*** ./src/app/shared/partner/partner.component.ts ***!
      \*****************************************************/

    /*! exports provided: PartnerComponent */

    /***/
    function O83A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PartnerComponent", function () {
        return PartnerComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var PartnerComponent = /*#__PURE__*/function () {
        function PartnerComponent() {
          _classCallCheck(this, PartnerComponent);
        }

        _createClass(PartnerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PartnerComponent;
      }();

      PartnerComponent.??fac = function PartnerComponent_Factory(t) {
        return new (t || PartnerComponent)();
      };

      PartnerComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: PartnerComponent,
        selectors: [["app-partner"]],
        decls: 30,
        vars: 6,
        consts: [["id", "partner", 1, "section"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-8"], [1, "text-center", "mb-5"], [1, "text-primary", "text-uppercase", "small-title"], [1, "mb-3"], [1, "row"], [1, "col-lg-12"], [1, "row", "mt-5", 2, "background-color", "white"], [1, "col-xl-4", "col-sm-4"], [1, "client-images"], ["src", "assets/images/partner/dovv.png", "alt", "client-img", 1, "mx-auto", "img-fluid", "d-block"], ["src", "assets/images/partner/alibaba.png", "alt", "client-img", 1, "mx-auto", "img-fluid", "d-block"], ["src", "assets/images/partner/logo.png", "alt", "client-img", 1, "mx-auto", "img-fluid", "d-block"], ["src", "assets/images/partner/cocacola.png", "alt", "client-img", 1, "mx-auto", "img-fluid", "d-block", 2, "height", "57px"], ["src", "assets/images/partner/redbull.png", "alt", "client-img", 1, "mx-auto", "img-fluid", "d-block", 2, "height", "57px"]],
        template: function PartnerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h5", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](7, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h4", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](10, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "img", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](7, 2, "PARTNER.ourPartner"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](10, 4, "PARTNER.trustedUs"));
          }
        },
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9wYXJ0bmVyL3BhcnRuZXIuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PartnerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-partner',
            templateUrl: './partner.component.html',
            styleUrls: ['./partner.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "ODCV":
    /*!*******************************************************!*\
      !*** ./src/app/shared/features/features.component.ts ***!
      \*******************************************************/

    /*! exports provided: FeaturesComponent */

    /***/
    function ODCV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeaturesComponent", function () {
        return FeaturesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var angular_feather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! angular-feather */
      "8mtn");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /**
       * Features component
       */


      var FeaturesComponent = /*#__PURE__*/function () {
        function FeaturesComponent() {
          _classCallCheck(this, FeaturesComponent);
        }

        _createClass(FeaturesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FeaturesComponent;
      }();

      FeaturesComponent.??fac = function FeaturesComponent_Factory(t) {
        return new (t || FeaturesComponent)();
      };

      FeaturesComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: FeaturesComponent,
        selectors: [["app-features"]],
        decls: 205,
        vars: 6,
        consts: [["id", "features", 1, "section", 2, "text-align", "center"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-8"], [1, "text-center", "mb-5"], [1, "text-primary", "text-uppercase", "small-title"], [1, "mb-3"], [1, "row"], [1, "col-lg-3", "col-mb-6", "mb-pr"], [1, "container", "product-list"], ["src", "assets/images/feature-product-coca1.png"], [1, "row", 2, "width", "200px", "margin", "0 auto"], [1, "col-7", "product-name"], [1, "col-2"], ["name", "heart", 1, "icon-dual-primary"], [1, "row", "promotion-during"], [1, "col"], ["name", "calendar", 1, "icon-dual-primary"], ["name", "shopping-bag", 1, "icon-dual-primary"], ["src", "assets/images/feature-product-juice1.png"]],
        template: function FeaturesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h5", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](7, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h4", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](10, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Coca cola \xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "i-feather", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "i-feather", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, " \xA0Du: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "1 Sept ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, " \xA0 Au: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "21 Juil");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "i-feather", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, " \xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, " 3 sachets = 1 offert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "M\xE9m\xE9 cass\xE9 \xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](44, "i-feather", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](47, "i-feather", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, " \xA0Du: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "1 Sept ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, " \xA0 Au: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "21 Juil");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](56, "i-feather", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, " \xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, " 3 sachets = 1 offert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](62, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "Coca cola \xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](68, "i-feather", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](71, "i-feather", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, " \xA0Du: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "1 Sept ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, " \xA0 Au: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "21 Juil");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](80, "i-feather", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, " \xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, " 3 sachets = 1 offert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](86, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "M\xE9m\xE9 cass\xE9 \xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](92, "i-feather", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](95, "i-feather", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, " \xA0Du: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "1 Sept ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, " \xA0 Au: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "21 Juil");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](104, "i-feather", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, " \xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, " 3 sachets = 1 offert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](111, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, "Coca cola \xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](117, "i-feather", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](120, "i-feather", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, " \xA0Du: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "1 Sept ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](124, " \xA0 Au: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, "21 Juil");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](129, "i-feather", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, " \xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132, " 3 sachets = 1 offert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](135, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](139, "M\xE9m\xE9 cass\xE9 \xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](141, "i-feather", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](144, "i-feather", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, " \xA0Du: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, "1 Sept ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](148, " \xA0 Au: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](150, "21 Juil");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](153, "i-feather", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](154, " \xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](156, " 3 sachets = 1 offert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](159, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](163, "Coca cola \xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](165, "i-feather", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](168, "i-feather", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](169, " \xA0Du: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](171, "1 Sept ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](172, " \xA0 Au: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](174, "21 Juil");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](177, "i-feather", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](178, " \xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](180, " 3 sachets = 1 offert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](183, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](186, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](187, "M\xE9m\xE9 cass\xE9 \xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](189, "i-feather", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](191, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](192, "i-feather", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](193, " \xA0Du: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](195, "1 Sept ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](196, " \xA0 Au: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](197, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](198, "21 Juil");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](199, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](200, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](201, "i-feather", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](202, " \xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](203, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](204, " 3 sachets = 1 offert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](7, 2, "FEATURE.feature"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](10, 4, "FEATURE.featureProduct"));
          }
        },
        directives: [angular_feather__WEBPACK_IMPORTED_MODULE_1__["FeatherComponent"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]],
        styles: [".icon-dual-primary[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: gray !important;\n  fill: white !important;\n}\n\ni-feather[_ngcontent-%COMP%] {\n  width: 17px;\n  height: 17px;\n}\n\n.product-list[_ngcontent-%COMP%] {\n  background-color: #f3fdfb;\n  width: 222px;\n  border-radius: 15px;\n  height: 258px;\n  padding-top: 15px;\n}\n\n.product-list[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding-bottom: 10px;\n}\n\n.product-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: black;\n  font-weight: 600;\n  margin-left: 20px;\n  padding-bottom: 15px;\n}\n\n.promotion-during[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.promotion-during[_ngcontent-%COMP%]   i-feather[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n}\n\n.promotion-during[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.mb-pr[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2ZlYXR1cmVzL2ZlYXR1cmVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxvQkFBQTtBQUNKOztBQUdBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7QUFBRjs7QUFDRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0U7RUFDRSxZQUFBO0FBQ0o7O0FBR0E7RUFDRSxtQkFBQTtBQUFGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2ZlYXR1cmVzL2ZlYXR1cmVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb24tZHVhbC1wcmltYXJ5IHN2ZyB7XG4gIGNvbG9yOiBncmF5ICFpbXBvcnRhbnQ7XG4gIGZpbGw6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbmktZmVhdGhlciB7XG4gIHdpZHRoOiAxN3B4O1xuICBoZWlnaHQ6IDE3cHg7XG59XG5cbi5wcm9kdWN0LWxpc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmZGZiO1xuICB3aWR0aDogMjIycHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGhlaWdodDogMjU4cHg7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuXG4gIGltZyB7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIH1cbn1cblxuLnByb2R1Y3QtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG5cbi5wcm9tb3Rpb24tZHVyaW5nIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBpLWZlYXRoZXIge1xuICAgIHdpZHRoOiAxNXB4O1xuICAgIGhlaWdodDogMTVweDtcbiAgfVxuICBzcGFuIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cbn1cblxuLm1iLXByIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FeaturesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-features',
            templateUrl: './features.component.html',
            styleUrls: ['./features.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "PCNd":
    /*!*****************************************!*\
      !*** ./src/app/shared/shared.module.ts ***!
      \*****************************************/

    /*! exports provided: SharedModule */

    /***/
    function PCNd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _scrollspy_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./scrollspy.directive */
      "BmFD");
      /* harmony import */


      var angular_feather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! angular-feather */
      "8mtn");
      /* harmony import */


      var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-owl-carousel-o */
      "bhfF");
      /* harmony import */


      var angular_count_to__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! angular-count-to */
      "a5BO");
      /* harmony import */


      var angular_feather_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! angular-feather/icons */
      "q7zL");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _services_services_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./services/services.component */
      "viZE");
      /* harmony import */


      var _features_features_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./features/features.component */
      "ODCV");
      /* harmony import */


      var _clients_clients_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./clients/clients.component */
      "eX6T");
      /* harmony import */


      var _plans_plans_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./plans/plans.component */
      "gt6D");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./footer/footer.component */
      "jQpT");
      /* harmony import */


      var _partner_partner_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./partner/partner.component */
      "O83A");
      /* harmony import */


      var _about_about_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./about/about.component */
      "sOmp");
      /* harmony import */


      var _our_vision_our_vision_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./our-vision/our-vision.component */
      "TRAK");
      /* harmony import */


      var _our_procedure_our_procedure_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./our-procedure/our-procedure.component */
      "jXNv");
      /* harmony import */


      var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./contact-us/contact-us.component */
      "k3qx");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var icons = {
        Grid: angular_feather_icons__WEBPACK_IMPORTED_MODULE_6__["Grid"],
        Edit: angular_feather_icons__WEBPACK_IMPORTED_MODULE_6__["Edit"],
        Headphones: angular_feather_icons__WEBPACK_IMPORTED_MODULE_6__["Headphones"],
        Layers: angular_feather_icons__WEBPACK_IMPORTED_MODULE_6__["Layers"],
        Code: angular_feather_icons__WEBPACK_IMPORTED_MODULE_6__["Code"],
        Tablet: angular_feather_icons__WEBPACK_IMPORTED_MODULE_6__["Tablet"],
        BarChart2: angular_feather_icons__WEBPACK_IMPORTED_MODULE_6__["BarChart2"],
        Check: angular_feather_icons__WEBPACK_IMPORTED_MODULE_6__["Check"],
        PieChart: angular_feather_icons__WEBPACK_IMPORTED_MODULE_6__["PieChart"],
        ArrowRight: angular_feather_icons__WEBPACK_IMPORTED_MODULE_6__["ArrowRight"],
        Bookmark: angular_feather_icons__WEBPACK_IMPORTED_MODULE_6__["Bookmark"],
        UserPlus: angular_feather_icons__WEBPACK_IMPORTED_MODULE_6__["UserPlus"],
        Coffee: angular_feather_icons__WEBPACK_IMPORTED_MODULE_6__["Coffee"],
        Award: angular_feather_icons__WEBPACK_IMPORTED_MODULE_6__["Award"],
        MapPin: angular_feather_icons__WEBPACK_IMPORTED_MODULE_6__["MapPin"],
        Mail: angular_feather_icons__WEBPACK_IMPORTED_MODULE_6__["Mail"],
        Phone: angular_feather_icons__WEBPACK_IMPORTED_MODULE_6__["Phone"],
        Gift: angular_feather_icons__WEBPACK_IMPORTED_MODULE_6__["Gift"],
        Percent: angular_feather_icons__WEBPACK_IMPORTED_MODULE_6__["Percent"],
        CreditCard: angular_feather_icons__WEBPACK_IMPORTED_MODULE_6__["CreditCard"],
        Heart: angular_feather_icons__WEBPACK_IMPORTED_MODULE_6__["Heart"],
        Calendar: angular_feather_icons__WEBPACK_IMPORTED_MODULE_6__["Calendar"],
        ShoppingBag: angular_feather_icons__WEBPACK_IMPORTED_MODULE_6__["ShoppingBag"]
      };

      var SharedModule = function SharedModule() {
        _classCallCheck(this, SharedModule);
      };

      SharedModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: SharedModule
      });
      SharedModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function SharedModule_Factory(t) {
          return new (t || SharedModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], angular_feather__WEBPACK_IMPORTED_MODULE_3__["FeatherModule"].pick(icons), ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"], angular_count_to__WEBPACK_IMPORTED_MODULE_5__["CountToModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"]], angular_feather__WEBPACK_IMPORTED_MODULE_3__["FeatherModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](SharedModule, {
          declarations: [_services_services_component__WEBPACK_IMPORTED_MODULE_8__["ServicesComponent"], _features_features_component__WEBPACK_IMPORTED_MODULE_9__["FeaturesComponent"], _clients_clients_component__WEBPACK_IMPORTED_MODULE_10__["ClientsComponent"], _plans_plans_component__WEBPACK_IMPORTED_MODULE_11__["PlansComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"], _scrollspy_directive__WEBPACK_IMPORTED_MODULE_2__["ScrollspyDirective"], _partner_partner_component__WEBPACK_IMPORTED_MODULE_13__["PartnerComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_14__["AboutComponent"], _our_vision_our_vision_component__WEBPACK_IMPORTED_MODULE_15__["OurVisionComponent"], _our_procedure_our_procedure_component__WEBPACK_IMPORTED_MODULE_16__["OurProcedureComponent"], _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_17__["ContactUsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], angular_feather__WEBPACK_IMPORTED_MODULE_3__["FeatherModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"], angular_count_to__WEBPACK_IMPORTED_MODULE_5__["CountToModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"]],
          exports: [_services_services_component__WEBPACK_IMPORTED_MODULE_8__["ServicesComponent"], _features_features_component__WEBPACK_IMPORTED_MODULE_9__["FeaturesComponent"], _clients_clients_component__WEBPACK_IMPORTED_MODULE_10__["ClientsComponent"], _plans_plans_component__WEBPACK_IMPORTED_MODULE_11__["PlansComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"], _scrollspy_directive__WEBPACK_IMPORTED_MODULE_2__["ScrollspyDirective"], angular_feather__WEBPACK_IMPORTED_MODULE_3__["FeatherModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _partner_partner_component__WEBPACK_IMPORTED_MODULE_13__["PartnerComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_14__["AboutComponent"], _our_vision_our_vision_component__WEBPACK_IMPORTED_MODULE_15__["OurVisionComponent"], _our_procedure_our_procedure_component__WEBPACK_IMPORTED_MODULE_16__["OurProcedureComponent"], _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_17__["ContactUsComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SharedModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_services_services_component__WEBPACK_IMPORTED_MODULE_8__["ServicesComponent"], _features_features_component__WEBPACK_IMPORTED_MODULE_9__["FeaturesComponent"], _clients_clients_component__WEBPACK_IMPORTED_MODULE_10__["ClientsComponent"], _plans_plans_component__WEBPACK_IMPORTED_MODULE_11__["PlansComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"], _scrollspy_directive__WEBPACK_IMPORTED_MODULE_2__["ScrollspyDirective"], _partner_partner_component__WEBPACK_IMPORTED_MODULE_13__["PartnerComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_14__["AboutComponent"], _our_vision_our_vision_component__WEBPACK_IMPORTED_MODULE_15__["OurVisionComponent"], _our_procedure_our_procedure_component__WEBPACK_IMPORTED_MODULE_16__["OurProcedureComponent"], _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_17__["ContactUsComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], angular_feather__WEBPACK_IMPORTED_MODULE_3__["FeatherModule"].pick(icons), ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"], angular_count_to__WEBPACK_IMPORTED_MODULE_5__["CountToModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"]],
            exports: [_services_services_component__WEBPACK_IMPORTED_MODULE_8__["ServicesComponent"], _features_features_component__WEBPACK_IMPORTED_MODULE_9__["FeaturesComponent"], _clients_clients_component__WEBPACK_IMPORTED_MODULE_10__["ClientsComponent"], _plans_plans_component__WEBPACK_IMPORTED_MODULE_11__["PlansComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"], _scrollspy_directive__WEBPACK_IMPORTED_MODULE_2__["ScrollspyDirective"], angular_feather__WEBPACK_IMPORTED_MODULE_3__["FeatherModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _partner_partner_component__WEBPACK_IMPORTED_MODULE_13__["PartnerComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_14__["AboutComponent"], _our_vision_our_vision_component__WEBPACK_IMPORTED_MODULE_15__["OurVisionComponent"], _our_procedure_our_procedure_component__WEBPACK_IMPORTED_MODULE_16__["OurProcedureComponent"], _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_17__["ContactUsComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "SQH6":
    /*!**************************************************!*\
      !*** ./src/app/pages/index5/index5.component.ts ***!
      \**************************************************/

    /*! exports provided: Index5Component */

    /***/
    function SQH6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Index5Component", function () {
        return Index5Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_dash_lang_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../services/dash-lang.service */
      "MijJ");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @nicky-lenaers/ngx-scroll-to */
      "KZTq");
      /* harmony import */


      var _shared_scrollspy_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../shared/scrollspy.directive */
      "BmFD");
      /* harmony import */


      var _shared_services_services_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../shared/services/services.component */
      "viZE");
      /* harmony import */


      var _shared_features_features_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../shared/features/features.component */
      "ODCV");
      /* harmony import */


      var _shared_clients_clients_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../shared/clients/clients.component */
      "eX6T");
      /* harmony import */


      var _shared_partner_partner_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../shared/partner/partner.component */
      "O83A");
      /* harmony import */


      var _shared_plans_plans_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../shared/plans/plans.component */
      "gt6D");
      /* harmony import */


      var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../shared/footer/footer.component */
      "jQpT");
      /* harmony import */


      var ngx_youtube_player__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ngx-youtube-player */
      "B1r6");

      function Index5Component_button_31_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "French");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function Index5Component_button_31_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Anglais");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function Index5Component_button_31_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function Index5Component_button_31_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r6);

            var lang_r2 = ctx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r5.changeLanguage(lang_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, Index5Component_button_31_span_1_Template, 2, 0, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, Index5Component_button_31_span_2_Template, 2, 0, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var lang_r2 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", lang_r2.value !== ctx_r0.selected && ctx_r0.selected == "en");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", lang_r2.value !== ctx_r0.selected && ctx_r0.selected == "fr");
        }
      }

      function Index5Component_ngb_carousel_37_1_ng_template_0_ng_template_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function Index5Component_ngb_carousel_37_1_ng_template_0_ng_template_30_Template_button_click_1_listener() {
            var modal_r12 = ctx.$implicit;
            return modal_r12.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "youtube-player", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("videoId", "JlvxDa7Sges");
        }
      }

      function Index5Component_ngb_carousel_37_1_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "p", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](10, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "h1", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](13, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "MyDash");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "p", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](18, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](22, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "a", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](25, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function Index5Component_ngb_carousel_37_1_ng_template_0_Template_a_click_26_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r15);

            var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](31);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

            return ctx_r14.openWindowCustomClass(_r10);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](28, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](30, Index5Component_ngb_carousel_37_1_ng_template_0_ng_template_30_Template, 6, 1, "ng-template", 40, 41, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var slide_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", slide_r8.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"])("alt", slide_r8.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](10, 8, "HOME.discover"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](13, 10, "HOME.promotMessage"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](18, 12, "HOME.promotMessage1"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](22, 14, "HOME.start"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](25, 16, "HOME.learn"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](28, 18, "HOME.demo"));
        }
      }

      function Index5Component_ngb_carousel_37_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, Index5Component_ngb_carousel_37_1_ng_template_0_Template, 32, 20, "ng-template", 23);
        }
      }

      function Index5Component_ngb_carousel_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ngb-carousel", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, Index5Component_ngb_carousel_37_1_Template, 1, 0, undefined, 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r1.slidesStore);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          active: a0
        };
      };

      var _c1 = function _c1() {
        return ["SECTION"];
      };
      /**
       * Index-5 component
       */


      var Index5Component = /*#__PURE__*/function () {
        function Index5Component(langService, translatetor, modalService) {
          _classCallCheck(this, Index5Component);

          this.langService = langService;
          this.translatetor = translatetor;
          this.modalService = modalService;
          this.currentSection = "home";
          this.images = [944, 1011, 984].map(function (n) {
            return "https://picsum.photos/id/".concat(n, "/900/500");
          });
          this.languages = [];
          this.selected = "";
          this.customOptions = {
            margin: 10,
            loop: true,
            responsive: {
              0: {
                items: 1
              },
              576: {
                items: 2
              }
            },
            nav: true,
            navText: ["<i class='mdi mdi-chevron-left'></i>", "<i class='mdi mdi-chevron-right'></i>"]
          };
          this.options = {
            navText: ['<i class="mdi mdi-chevron-left"></i>', '<i class="mdi mdi-chevron-right"></i>']
          };
          this.slidesStore = [{
            id: 1,
            alt: "image_1",
            title: "dash",
            link: "assets/images/Home.png"
          }, {
            id: 2,
            alt: "image_2",
            title: "default",
            link: "assets/images/bg.png"
          }, {
            id: 2,
            alt: "image_3",
            title: "home",
            link: "assets/images/home-img.png"
          }];
        }

        _createClass(Index5Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.languages = this.langService.getLanguages();
            this.selected = this.langService.langSelected;

            if (this.selected == "" || this.selected == "en") {
              this.selected = "en";
              this.fullNameLang = "English";
            } else this.fullNameLang = "Fran??ais";
          }
        }, {
          key: "changeLanguage",
          value: function changeLanguage(elt) {
            this.langService.setLanguage(elt.value);
            this.selected = this.langService.langSelected;

            if (this.selected == "en") {
              this.selected = "en";
              this.fullNameLang = "English";
            } else this.fullNameLang = "Fran??ais";
          }
          /**
           * Window scroll method
           */

        }, {
          key: "windowScroll",
          value: function windowScroll() {
            var navbar = document.getElementById("navbar");

            if (document.body.scrollTop >= 50 || document.documentElement.scrollTop > 50) {
              navbar.classList.add("nav-sticky");
            } else {
              navbar.classList.remove("nav-sticky");
            }
          }
          /**
           * Section changed method
           * @param sectionId specify the current sectionID
           */

        }, {
          key: "onSectionChange",
          value: function onSectionChange(sectionId) {
            this.currentSection = sectionId;
          }
          /**
           * Toggle navbar
           */

        }, {
          key: "toggleMenu",
          value: function toggleMenu() {
            document.getElementById("navbarCollapse").classList.toggle("show");
          }
        }, {
          key: "openWindowCustomClass",
          value: function openWindowCustomClass(videocontent) {
            this.modalService.open(videocontent, {
              windowClass: "dark-modal",
              centered: true
            });
          }
        }, {
          key: "setStyles",
          value: function setStyles(imgUrl) {
            return {
              "background-image": "url('".concat(imgUrl, "')"),
              "max-height": "672px"
            };
          }
        }]);

        return Index5Component;
      }();

      Index5Component.??fac = function Index5Component_Factory(t) {
        return new (t || Index5Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_dash_lang_service__WEBPACK_IMPORTED_MODULE_1__["DashLangService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]));
      };

      Index5Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: Index5Component,
        selectors: [["app-index5"]],
        decls: 44,
        vars: 37,
        consts: [["id", "navbar", 1, "navbar", "navbar-expand-lg", "fixed-top", "navbar-custom", "sticky", "sticky-dark", "navbar-light", 3, "scroll"], [1, "container"], ["href", "/", 1, "logo", "text-uppercase"], ["src", "assets/images/logo-dash-big.png", "alt", "", "height", "50", 1, "logo-light"], ["src", "assets/images/logo-dash-big.png", "alt", "", "height", "50", 1, "logo-dark"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarCollapse", "aria-controls", "navbarCollapse", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], [1, "mdi", "mdi-menu"], ["id", "navbarCollapse", 1, "collapse", "navbar-collapse"], ["id", "mySidenav", 1, "navbar-nav", "ml-auto", "navbar-center"], [1, "nav-item", 3, "ngClass"], ["href", "javascript: void(0);", 1, "nav-link", 3, "ngxScrollTo"], ["ngbDropdown", "", 1, "nav-item", 2, "cursor", "pointer"], ["id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "dropdown-language", "nav-link"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1"], ["ngbDropdownItem", "", 3, "click", 4, "ngFor", "ngForOf"], ["href", "https://partner.mydashs.com", 1, "btn", "btn-success", "btn-rounded", "navbar-btn"], ["appScrollspy", "", 3, "spiedTags", "sectionChange"], ["id", "home"], ["interval", "500000", 4, "ngIf"], ["ngbDropdownItem", "", 3, "click"], [4, "ngIf"], ["interval", "500000"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "picsum-img-wrapper"], [1, "img-review"], [1, "h-100", "w-100", 3, "src", "alt"], [1, "carousel-caption"], [1, "row", "justify-content-center"], [1, "col-lg-8"], [1, "hero-wrapper", "text-center", "mb-4"], [1, "font-16", "text-uppercase", "text-white-50"], [1, "hero-title", "text-white", "mb-4"], [1, "text-primary"], [1, "text-white-50"], [1, "mt-4"], ["href", "https://partner.mydashs.com", 1, "btn", "btn-primary", "mt-2", "mr-2"], ["href", "javascript: void(0);", 1, "btn", "btn-success", "mt-2", "mr-2"], ["href", "javascript: void(0);", 1, "btn", "btn-primary", "mt-2", "mr-2", 3, "click"], [1, "watch-video", "pt-5"], ["class", "video-modal"], ["videocontent", ""], [1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body", "p-0"], ["height", "450", "width", "780", 3, "videoId"]],
        template: function Index5Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("scroll", function Index5Component_Template_nav_scroll_0_listener() {
              return ctx.windowScroll();
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resolveWindow"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function Index5Component_Template_button_click_5_listener() {
              return ctx.toggleMenu();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "i", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "ul", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](12, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Services");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](19, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Clients");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](26, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](31, Index5Component_button_31_Template, 3, 2, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](34, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("sectionChange", function Index5Component_Template_div_sectionChange_35_listener($event) {
              return ctx.onSectionChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "section", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](37, Index5Component_ngb_carousel_37_Template, 2, 1, "ngb-carousel", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "app-services");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "app-features");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "app-clients");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "app-partner");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "app-plans");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "app-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](26, _c0, ctx.currentSection === "home"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngxScrollTo", "#home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](12, 18, "MENU.home"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](28, _c0, ctx.currentSection === "services"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngxScrollTo", "#services");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](30, _c0, ctx.currentSection === "features"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngxScrollTo", "#features");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](19, 20, "MENU.features"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](32, _c0, ctx.currentSection === "clients"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngxScrollTo", "#clients");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](34, _c0, ctx.currentSection === "partner"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngxScrollTo", "#partner");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](26, 22, "MENU.partnerM"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.fullNameLang, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.languages);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](34, 24, "MENU.partner"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("spiedTags", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](36, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.slidesStore);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavbar"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_5__["ScrollToDirective"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _shared_scrollspy_directive__WEBPACK_IMPORTED_MODULE_6__["ScrollspyDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _shared_services_services_component__WEBPACK_IMPORTED_MODULE_7__["ServicesComponent"], _shared_features_features_component__WEBPACK_IMPORTED_MODULE_8__["FeaturesComponent"], _shared_clients_clients_component__WEBPACK_IMPORTED_MODULE_9__["ClientsComponent"], _shared_partner_partner_component__WEBPACK_IMPORTED_MODULE_10__["PartnerComponent"], _shared_plans_plans_component__WEBPACK_IMPORTED_MODULE_11__["PlansComponent"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCarousel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbSlide"], ngx_youtube_player__WEBPACK_IMPORTED_MODULE_13__["YoutubePlayerComponent"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]],
        styles: ["@import url(\"https://fonts.googleapis.com/css?family=Rubik:400,500,700&display=swap\");\n.text-color {\n  color: #001b3b !important;\n}\n.dropdown-language {\n  color: #f60f4f !important;\n}\n.bg-overlay {\n  height: 672px !important;\n}\n.dark-modal .modal-content {\n  background-color: #000000;\n  color: white;\n  background: none;\n  border: none;\n}\n.dark-modal .modal-header {\n  border: none;\n}\n.dark-modal .close {\n  color: white;\n}\n.dark-modal .modal-dialog {\n  max-width: 800px;\n}\n.img-review {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc2Nzcy9fdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2luZGV4NS9pbmRleDUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEscUZBQUE7QUEwRFI7RUFDRSx5QkFBQTtBQ3hERjtBQURBO0VBQ0UseUJBQUE7QUFJRjtBQUZBO0VBQ0Usd0JBQUE7QUFLRjtBQUZBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBS0Y7QUFIQTtFQUNFLFlBQUE7QUFNRjtBQUpBO0VBQ0UsWUFBQTtBQU9GO0FBTEE7RUFDRSxnQkFBQTtBQVFGO0FBVUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7QUFQRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luZGV4NS9pbmRleDUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1SdWJpazo0MDAsNTAwLDcwMCZkaXNwbGF5PXN3YXBcIik7XHJcblxyXG4kcHJpbWFyeTogIzFiNTk5NjtcclxuJHN1Y2Nlc3M6ICNlMGEyYzc7XHJcbiRpbmZvOiAjNTdiOGZmO1xyXG4kd2FybmluZzogI2ZiYjEzYztcclxuJGRhbmdlcjogI2ZlNjg0NztcclxuJHB1cnBsZTogIzkyNjFjNjtcclxuJHBpbms6ICNmZjdhYTM7XHJcbiR3aGl0ZTogI2ZmZjtcclxuJGRhcms6ICMzNDNhNDA7XHJcbiRsaWdodDogI2Y4ZmFmZTtcclxuJG11dGVkOiAjYTBhOWIxO1xyXG4kY3VzdG9tOiAjZTVlNWU1O1xyXG4kY3VzdG9tMTogI2JlYzVlZjtcclxuXHJcbi8vIHN0eWxlbGludC1kaXNhYmxlXHJcbiRncmF5LTEwMDogI2Y4ZjlmYTtcclxuJGdyYXktMjAwOiAjZTllY2VmO1xyXG4kZ3JheS0zMDA6ICNlZmVmZWY7XHJcbiRncmF5LTQwMDogI2NlZDRkYTtcclxuJGdyYXktNTAwOiAjYWRiNWJkO1xyXG4kZ3JheS02MDA6ICM2Yzc1N2Q7XHJcbiRncmF5LTcwMDogIzQ5NTA1NztcclxuJGdyYXktODAwOiAjMzQzYTQwO1xyXG4kZ3JheS05MDA6ICMyMTI1Mjk7XHJcblxyXG4kY29sb3JzOiAoXHJcbiAgXCJwcmltYXJ5XCI6ICRwcmltYXJ5LFxyXG4gIFwic3VjY2Vzc1wiOiAkc3VjY2VzcyxcclxuICBcImluZm9cIjogJGluZm8sXHJcbiAgXCJ3YXJuaW5nXCI6ICR3YXJuaW5nLFxyXG4gIFwiZGFuZ2VyXCI6ICRkYW5nZXIsXHJcbiAgXCJkYXJrXCI6ICRkYXJrLFxyXG4gIFwibXV0ZWRcIjogJG11dGVkLFxyXG4gIFwicHVycGxlXCI6ICRwdXJwbGUsXHJcbiAgXCJwaW5rXCI6ICRwaW5rLFxyXG4gIFwid2hpdGVcIjogJHdoaXRlLFxyXG4gIFwibGlnaHRcIjogJGxpZ2h0LFxyXG4pO1xyXG5cclxuJGJvZHktY29sb3I6ICNmMmYwZjE7XHJcblxyXG4kZm9vdGVyLWJnOiAjMTQ0MjI0O1xyXG5cclxuJGZvbnQtc2l6ZS1iYXNlOiAwLjlyZW07XHJcblxyXG4kYm94LXNoYWRvdzogMHB4IDhweCAzNXB4IDBweCByZ2JhKCRncmF5LTcwMCwgMC4wNSk7XHJcblxyXG4kZm9udC1mYW1pbHktcHJpbWFyeTogXCJSdWJpa1wiLCBzYW5zLXNlcmlmO1xyXG5cclxuLy8gU2Vjb25kYXJ5IGZvbnRcclxuJGZvbnQtZmFtaWx5LXNlY29uZGFyeTogXCJSdWJpa1wiLCBzYW5zLXNlcmlmO1xyXG5cclxuJGZvbnQtd2VpZ2h0LW1lZGl1bTogNTAwO1xyXG4kZm9udC13ZWlnaHQtc2VtaWJvbGQ6IDYwMDtcclxuJGZvbnQtd2VpZ2h0LWJvbGQ6IDcwMDtcclxuXHJcbi50ZXh0LWNvbG9yIHtcclxuICBjb2xvcjogIzAwMWIzYiAhaW1wb3J0YW50O1xyXG59XHJcbiIsIkBpbXBvcnQgXCJzcmMvYXNzZXRzL3Njc3MvX3ZhcmlhYmxlc1wiO1xuXG4uZHJvcGRvd24tbGFuZ3VhZ2Uge1xuICBjb2xvcjogI2Y2MGY0ZiAhaW1wb3J0YW50O1xufVxuLmJnLW92ZXJsYXkge1xuICBoZWlnaHQ6IDY3MnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kYXJrLW1vZGFsIC5tb2RhbC1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG59XG4uZGFyay1tb2RhbCAubW9kYWwtaGVhZGVyIHtcbiAgYm9yZGVyOiBub25lO1xufVxuLmRhcmstbW9kYWwgLmNsb3NlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmRhcmstbW9kYWwgLm1vZGFsLWRpYWxvZyB7XG4gIG1heC13aWR0aDogODAwcHg7XG59XG5cbi8vIC5sb2dpbi1jYXJvdXNlbC1pdGVtIGltZyB7XG4vLyAgIG1hcmdpbjogM3JlbSAwO1xuLy8gICBoZWlnaHQ6IDEwcmVtO1xuLy8gfVxuXG4vLyA6Om5nLWRlZXAge1xuLy8gICAuY2Fyb3VzZWwtaW5uZXIsXG4vLyAgIC5jYXJvdXNlbC1pdGVtIHtcbi8vICAgICBoZWlnaHQ6IDEwMCU7XG4vLyAgIH1cbi8vICAgLmNhcm91c2VsLWlubmVyIHtcbi8vICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudGl6ZSgkcHJpbWFyeSwgMC41KTtcbi8vICAgfVxuLy8gfVxuXG4uaW1nLXJldmlldyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuIl19 */"],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Index5Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-index5",
            templateUrl: "./index5.component.html",
            styleUrls: ["./index5.component.scss"],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
          }]
        }], function () {
          return [{
            type: _services_dash_lang_service__WEBPACK_IMPORTED_MODULE_1__["DashLangService"]
          }, {
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
          }, {
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_dash_lang_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./services/dash-lang.service */
      "MijJ");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent(languageService) {
        _classCallCheck(this, AppComponent);

        this.title = "KonnektJobs";
        languageService.setInitialAppLanguage();
      };

      AppComponent.??fac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_dash_lang_service__WEBPACK_IMPORTED_MODULE_1__["DashLangService"]));
      };

      AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-root",
            templateUrl: "./app.component.html",
            styleUrls: ["./app.component.scss"]
          }]
        }], function () {
          return [{
            type: _services_dash_lang_service__WEBPACK_IMPORTED_MODULE_1__["DashLangService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "TRAK":
    /*!***********************************************************!*\
      !*** ./src/app/shared/our-vision/our-vision.component.ts ***!
      \***********************************************************/

    /*! exports provided: OurVisionComponent */

    /***/
    function TRAK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OurVisionComponent", function () {
        return OurVisionComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var OurVisionComponent = /*#__PURE__*/function () {
        function OurVisionComponent() {
          _classCallCheck(this, OurVisionComponent);
        }

        _createClass(OurVisionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return OurVisionComponent;
      }();

      OurVisionComponent.??fac = function OurVisionComponent_Factory(t) {
        return new (t || OurVisionComponent)();
      };

      OurVisionComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: OurVisionComponent,
        selectors: [["app-our-vision"]],
        decls: 19,
        vars: 9,
        consts: [[1, "section", 2, "background", "#bec5ef"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-6"], [1, "hero-wrapper", "mb-4"], [1, "font-16", "text-uppercase", "text-color"], [1, "subttitle-separtor"], [1, "hero-title", "mb-4", "mt-2"], [1, "text-success"], [1, "text-color"], [1, "col-lg-6", "col-sm-8"], [1, "home-img", "mt-5", "mt-lg-0", "rounded"], ["src", "assets/img/img1.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"]],
        template: function OurVisionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](7, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "h1", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](12, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](15, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](7, 3, "VISION.subtitle"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](12, 5, "VISION.title"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](15, 7, "VISION.description"), " ");
          }
        },
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]],
        styles: [".subttitle-separtor[_ngcontent-%COMP%] {\n  width: 35px;\n  border: 1px solid #001b3b;\n  margin-top: -15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL291ci12aXNpb24vb3VyLXZpc2lvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvb3VyLXZpc2lvbi9vdXItdmlzaW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1YnR0aXRsZS1zZXBhcnRvciB7XG4gIHdpZHRoOiAzNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAxYjNiO1xuICBtYXJnaW4tdG9wOiAtMTVweDtcbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](OurVisionComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-our-vision',
            templateUrl: './our-vision.component.html',
            styleUrls: ['./our-vision.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "VuXi":
    /*!****************************************!*\
      !*** ./src/app/shared/clients/data.ts ***!
      \****************************************/

    /*! exports provided: testimonialData */

    /***/
    function VuXi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "testimonialData", function () {
        return testimonialData;
      });

      var testimonialData = [{
        // tslint:disable-next-line: max-line-length
        message: '" To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages of the resulting language "',
        username: 'Timothy Fairley'
      }, {
        // tslint:disable-next-line: max-line-length
        message: '" To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is languages are members "',
        username: 'James Brown'
      }, {
        // tslint:disable-next-line: max-line-length
        message: '" To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is languages are members "',
        username: 'James Brown'
      }, {
        // tslint:disable-next-line: max-line-length
        message: '" Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this it would be necessary "',
        username: 'Jason Davis'
      }, {
        // tslint:disable-next-line: max-line-length
        message: '" Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their most common words. "',
        username: 'Rodney Tyler'
      }, {
        // tslint:disable-next-line: max-line-length
        message: '" For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. "',
        username: 'Henry McElyea'
      }];
      /***/
    },

    /***/
    "Vug0":
    /*!**************************************************!*\
      !*** ./src/app/pages/index6/index6.component.ts ***!
      \**************************************************/

    /*! exports provided: Index6Component */

    /***/
    function Vug0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Index6Component", function () {
        return Index6Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var src_app_services_dash_lang_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/dash-lang.service */
      "MijJ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @nicky-lenaers/ngx-scroll-to */
      "KZTq");
      /* harmony import */


      var _shared_scrollspy_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../shared/scrollspy.directive */
      "BmFD");
      /* harmony import */


      var _shared_our_vision_our_vision_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../shared/our-vision/our-vision.component */
      "TRAK");
      /* harmony import */


      var _shared_our_procedure_our_procedure_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../shared/our-procedure/our-procedure.component */
      "jXNv");
      /* harmony import */


      var _shared_plans_plans_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../shared/plans/plans.component */
      "gt6D");
      /* harmony import */


      var _shared_services_services_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../shared/services/services.component */
      "viZE");
      /* harmony import */


      var _shared_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../shared/contact-us/contact-us.component */
      "k3qx");
      /* harmony import */


      var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../shared/footer/footer.component */
      "jQpT");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      function Index6Component_button_28_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function Index6Component_button_28_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r3);

            var lang_r1 = ctx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r2.changeLanguage(lang_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "lowercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var lang_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](4, 4, lang_r1.text)), " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", lang_r1.flag, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          active: a0
        };
      };

      var _c1 = function _c1() {
        return ["SECTION"];
      };
      /**
       * Index-6 component
       */


      var Index6Component = /*#__PURE__*/function () {
        function Index6Component(modalService, langService) {
          _classCallCheck(this, Index6Component);

          this.modalService = modalService;
          this.langService = langService;
          this.currentSection = "home";
          this.languages = [];
          this.selected = "";
          this.customOptions = {
            margin: 10,
            loop: true,
            responsive: {
              0: {
                items: 1
              },
              576: {
                items: 2
              }
            },
            nav: true,
            navText: ["<i class='mdi mdi-chevron-left'></i>", "<i class='mdi mdi-chevron-right'></i>"]
          };
          this.options = {
            navText: ['<i class="mdi mdi-chevron-left"></i>', '<i class="mdi mdi-chevron-right"></i>']
          };
          this.slidesStore = [{
            id: 1,
            alt: "image_1",
            title: "Pick1",
            link: "assets/images/assets/photo1.jpg"
          }, {
            id: 2,
            alt: "image_3",
            title: "home",
            link: "assets/images/assets/photo3.jpg"
          }, {
            id: 3,
            alt: "image_4",
            title: "end",
            link: "assets/images/assets/photo4.jpg"
          }];
        }

        _createClass(Index6Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.languages = this.langService.getLanguages();
            this.fullNameLang = this.langService.langSelected;
            this.selected = this.fullNameLang.value;
          }
        }, {
          key: "changeLanguage",
          value: function changeLanguage(elt) {
            this.langService.setLanguage(elt.value);
            this.fullNameLang = this.langService.langSelected;
            this.selected = this.fullNameLang.value;
          }
          /**
           * Window scroll method
           */

        }, {
          key: "windowScroll",
          value: function windowScroll() {
            var navbar = document.getElementById("navbar");

            if (document.body.scrollTop >= 50 || document.documentElement.scrollTop > 50) {
              navbar.classList.add("nav-sticky");
            } else {
              navbar.classList.remove("nav-sticky");
            }
          }
          /**
           * Section changed method
           * @param sectionId specify the current sectionID
           */

        }, {
          key: "onSectionChange",
          value: function onSectionChange(sectionId) {
            this.currentSection = sectionId;
          }
          /**
           * Toggle navbar
           */

        }, {
          key: "toggleMenu",
          value: function toggleMenu() {
            document.getElementById("navbarCollapse").classList.toggle("show");
          }
          /**
           * Open modal for show the video
           * @param content content of modal
           */

        }, {
          key: "openWindowCustomClass",
          value: function openWindowCustomClass(videocontent) {
            this.modalService.open(videocontent, {
              windowClass: "dark-modal",
              centered: true
            });
          }
        }]);

        return Index6Component;
      }();

      Index6Component.??fac = function Index6Component_Factory(t) {
        return new (t || Index6Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_dash_lang_service__WEBPACK_IMPORTED_MODULE_2__["DashLangService"]));
      };

      Index6Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: Index6Component,
        selectors: [["app-index6"]],
        decls: 44,
        vars: 34,
        consts: [["id", "navbar", 1, "navbar", "navbar-expand-lg", "fixed-top", "navbar-custom", "sticky", "sticky-dark", "navbar-light", 3, "scroll"], [1, "container"], ["href", "/", 1, "logo", "text-uppercase"], ["src", "assets/img/logo.png", "alt", "", "height", "50", 1, "logo-light"], ["src", "assets/img/logo.png", "alt", "", "height", "50", 1, "logo-dark"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarCollapse", "aria-controls", "navbarCollapse", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], [1, "mdi", "mdi-menu"], ["id", "navbarCollapse", 1, "collapse", "navbar-collapse"], ["id", "mySidenav", 1, "navbar-nav", "ml-auto", "navbar-center"], [1, "nav-item", 3, "ngClass"], ["href", "javascript: void(0);", 1, "nav-link", 3, "ngxScrollTo"], ["ngbDropdown", "", 1, "nav-item", 2, "cursor", "pointer"], ["id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "dropdown-language", "nav-link"], [1, "flag", 3, "src"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1"], ["ngbDropdownItem", "", 3, "click", 4, "ngFor", "ngForOf"], ["href", "javascript: void(0);", 1, "btn", "btn-primary", "btn-rounded", "btn-link", 3, "ngxScrollTo"], ["appScrollspy", "", 3, "spiedTags", "sectionChange"], ["id", "home"], [1, "picsum-img-wrapper"], [1, "img-review"], ["src", "assets/images/assets/photo4.jpg", "alt", "bg", 1, "h-100", "w-100"], ["id", "about"], ["ngbDropdownItem", "", 3, "click"]],
        template: function Index6Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("scroll", function Index6Component_Template_nav_scroll_0_listener() {
              return ctx.windowScroll();
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resolveWindow"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function Index6Component_Template_button_click_5_listener() {
              return ctx.toggleMenu();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "i", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "ul", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](12, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](16, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](20, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](24, "lowercase");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](25, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "img", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](28, Index6Component_button_28_Template, 6, 6, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](31, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("sectionChange", function Index6Component_Template_div_sectionChange_32_listener($event) {
              return ctx.onSectionChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "section", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "img", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "section", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "app-our-vision");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "app-our-procedure");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "app-plans");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "app-services");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "app-contact-us");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "app-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](27, _c0, ctx.currentSection === "home"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngxScrollTo", "#home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](12, 15, "MENU.home"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](29, _c0, ctx.currentSection === "about"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngxScrollTo", "#about");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](16, 17, "MENU.about"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](31, _c0, ctx.currentSection === "services"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngxScrollTo", "#services");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](20, 19, "MENU.service"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](24, 21, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](25, 23, ctx.fullNameLang.text)), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx.fullNameLang.flag, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.languages);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngxScrollTo", "#contact");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](31, 25, "MENU.contact_us"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("spiedTags", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](33, _c1));
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_4__["ScrollToDirective"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _shared_scrollspy_directive__WEBPACK_IMPORTED_MODULE_5__["ScrollspyDirective"], _shared_our_vision_our_vision_component__WEBPACK_IMPORTED_MODULE_6__["OurVisionComponent"], _shared_our_procedure_our_procedure_component__WEBPACK_IMPORTED_MODULE_7__["OurProcedureComponent"], _shared_plans_plans_component__WEBPACK_IMPORTED_MODULE_8__["PlansComponent"], _shared_services_services_component__WEBPACK_IMPORTED_MODULE_9__["ServicesComponent"], _shared_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_10__["ContactUsComponent"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownItem"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LowerCasePipe"]],
        styles: [".active {\n  border-bottom: 3px solid #e0a2c7 !important;\n  color: #e0a2c7 !important;\n}\n.active a {\n  color: #e0a2c7 !important;\n}\n.nav-sticky .app-title {\n  color: rgba(52, 58, 64, 0.9) !important;\n}\n.navbar-light .navbar-nav .nav-item .nav-link {\n  color: white;\n}\n@media (max-width: 991px) {\n  .navbar-light .navbar-nav .nav-item .nav-link {\n    color: rgba(52, 58, 64, 0.9) !important;\n  }\n\n  .app-title {\n    color: rgba(52, 58, 64, 0.9) !important;\n  }\n}\n.dropdown-language {\n  color: white !important;\n}\n.btn-link {\n  padding: 0.5rem 0.75rem !important;\n}\n.flag {\n  max-width: 30px;\n}\n.img-review {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5kZXg2L2luZGV4Ni5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJDQUFBO0VBQ0EseUJBQUE7QUFDRjtBQUFFO0VBQ0UseUJBQUE7QUFFSjtBQUVBO0VBQ0UsdUNBQUE7QUFDRjtBQUVBO0VBQ0UsWUFBQTtBQUNGO0FBRUE7RUFDRTtJQUNFLHVDQUFBO0VBQ0Y7O0VBQ0E7SUFDRSx1Q0FBQTtFQUVGO0FBQ0Y7QUFDQTtFQUNFLHVCQUFBO0FBQ0Y7QUFFQTtFQUNFLGtDQUFBO0FBQ0Y7QUFFQTtFQUNFLGVBQUE7QUFDRjtBQUVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbmRleDYvaW5kZXg2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGl2ZSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNlMGEyYzcgIWltcG9ydGFudDtcclxuICBjb2xvcjogI2UwYTJjNyAhaW1wb3J0YW50O1xyXG4gIGEge1xyXG4gICAgY29sb3I6ICNlMGEyYzcgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5uYXYtc3RpY2t5IC5hcHAtdGl0bGUge1xyXG4gIGNvbG9yOiByZ2JhKDUyLCA1OCwgNjQsIDAuOSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWl0ZW0gLm5hdi1saW5rIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gIC5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1pdGVtIC5uYXYtbGluayB7XHJcbiAgICBjb2xvcjogcmdiYSg1MiwgNTgsIDY0LCAwLjkpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5hcHAtdGl0bGUge1xyXG4gICAgY29sb3I6IHJnYmEoNTIsIDU4LCA2NCwgMC45KSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLmRyb3Bkb3duLWxhbmd1YWdlIHtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bi1saW5rIHtcclxuICBwYWRkaW5nOiAwLjVyZW0gMC43NXJlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxhZyB7XHJcbiAgbWF4LXdpZHRoOiAzMHB4O1xyXG59XHJcblxyXG4uaW1nLXJldmlldyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuIl19 */", "\n      .dark-modal .modal-content {\n        background-color: #000000;\n        color: white;\n        background: none;\n        border: none;\n      }\n      .dark-modal .modal-header {\n        border: none;\n      }\n      .dark-modal .close {\n        color: white;\n      }\n      .dark-modal .modal-dialog {\n        max-width: 800px;\n      }\n    "],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Index6Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-index6",
            templateUrl: "./index6.component.html",
            styleUrls: ["./index6.component.scss"],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: ["\n      .dark-modal .modal-content {\n        background-color: #000000;\n        color: white;\n        background: none;\n        border: none;\n      }\n      .dark-modal .modal-header {\n        border: none;\n      }\n      .dark-modal .close {\n        color: white;\n      }\n      .dark-modal .modal-dialog {\n        max-width: 800px;\n      }\n    "]
          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]
          }, {
            type: src_app_services_dash_lang_service__WEBPACK_IMPORTED_MODULE_2__["DashLangService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: createTranslateLoader, AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function () {
        return createTranslateLoader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _pages_pages_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pages/pages.module */
      "dgmN");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngx-translate/http-loader */
      "mqiu");

      function createTranslateLoader(http) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__["TranslateHttpLoader"](http, "../assets/i18n/", ".json");
      }

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
      });
      AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _pages_pages_module__WEBPACK_IMPORTED_MODULE_3__["PagesModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forRoot({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
            useFactory: createTranslateLoader,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]]
          }
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["????setNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _pages_pages_module__WEBPACK_IMPORTED_MODULE_3__["PagesModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["??setClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _pages_pages_module__WEBPACK_IMPORTED_MODULE_3__["PagesModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forRoot({
              loader: {
                provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
                useFactory: createTranslateLoader,
                deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]]
              }
            })],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "bxJz":
    /*!**************************************************!*\
      !*** ./src/app/pages/index1/index1.component.ts ***!
      \**************************************************/

    /*! exports provided: Index1Component */

    /***/
    function bxJz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Index1Component", function () {
        return Index1Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_dash_lang_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/dash-lang.service */
      "MijJ");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @nicky-lenaers/ngx-scroll-to */
      "KZTq");
      /* harmony import */


      var _shared_scrollspy_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../shared/scrollspy.directive */
      "BmFD");
      /* harmony import */


      var _shared_services_services_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../shared/services/services.component */
      "viZE");
      /* harmony import */


      var _shared_features_features_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../shared/features/features.component */
      "ODCV");
      /* harmony import */


      var _shared_clients_clients_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../shared/clients/clients.component */
      "eX6T");
      /* harmony import */


      var _shared_plans_plans_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../shared/plans/plans.component */
      "gt6D");
      /* harmony import */


      var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../shared/footer/footer.component */
      "jQpT");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      function Index1Component_button_30_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "French");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function Index1Component_button_30_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Anglais");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function Index1Component_button_30_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function Index1Component_button_30_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r5);

            var lang_r1 = ctx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r4.changeLanguage(lang_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, Index1Component_button_30_span_1_Template, 2, 0, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, Index1Component_button_30_span_2_Template, 2, 0, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var lang_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", lang_r1.value !== ctx_r0.selected && ctx_r0.selected == "en");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", lang_r1.value !== ctx_r0.selected && ctx_r0.selected == "fr");
        }
      }

      var _c0 = function _c0(a0) {
        return {
          active: a0
        };
      };

      var _c1 = function _c1() {
        return ["SECTION"];
      };
      /**
       * Index-1 component
       */


      var Index1Component = /*#__PURE__*/function () {
        function Index1Component(langService) {
          _classCallCheck(this, Index1Component);

          this.langService = langService;
          this.currentSection = "home";
          this.languages = [];
          this.selected = "";
        }

        _createClass(Index1Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.languages = this.langService.getLanguages();
            this.selected = this.langService.langSelected;

            if (this.selected == "" || this.selected == "en") {
              this.selected = "en";
              this.fullNameLang = "English";
            } else this.fullNameLang = "Fran??ais";
          }
        }, {
          key: "changeLanguage",
          value: function changeLanguage(elt) {
            this.langService.setLanguage(elt.value);
            this.selected = this.langService.langSelected;

            if (this.selected == "en") {
              this.selected = "en";
              this.fullNameLang = "English";
            } else this.fullNameLang = "Fran??ais";
          }
          /**
           * Window scroll method
           */

        }, {
          key: "windowScroll",
          value: function windowScroll() {
            var navbar = document.getElementById("navbar");

            if (document.body.scrollTop >= 50 || document.documentElement.scrollTop > 50) {
              navbar.classList.add("nav-sticky");
            } else {
              navbar.classList.remove("nav-sticky");
            }
          }
          /**
           * Section changed method
           * @param sectionId specify the current sectionID
           */

        }, {
          key: "onSectionChange",
          value: function onSectionChange(sectionId) {
            this.currentSection = sectionId;
          }
          /**
           * Toggle navbar
           */

        }, {
          key: "toggleMenu",
          value: function toggleMenu() {
            document.getElementById("navbarCollapse").classList.toggle("show");
          }
        }]);

        return Index1Component;
      }();

      Index1Component.??fac = function Index1Component_Factory(t) {
        return new (t || Index1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_dash_lang_service__WEBPACK_IMPORTED_MODULE_1__["DashLangService"]));
      };

      Index1Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: Index1Component,
        selectors: [["app-index1"]],
        decls: 61,
        vars: 36,
        consts: [["id", "navbar", 1, "navbar", "navbar-expand-lg", "fixed-top", "navbar-custom", "sticky", "sticky-dark", 3, "scroll"], [1, "container"], ["href", "/", 1, "logo", "text-uppercase"], ["src", "assets/images/logo-dash.png", "alt", "", "height", "50", 1, "logo-dark"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarCollapse", "aria-controls", "navbarCollapse", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], [1, "mdi", "mdi-menu"], ["id", "navbarCollapse", 1, "collapse", "navbar-collapse"], ["id", "mySidenav", 1, "navbar-nav", "ml-auto", "navbar-center"], [1, "nav-item", 3, "ngClass"], ["href", "javascript: void(0);", 1, "nav-link", 3, "ngxScrollTo"], ["ngbDropdown", "", 1, "nav-item", 2, "cursor", "pointer"], ["id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "dropdown-language", "nav-link"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1"], ["ngbDropdownItem", "", 3, "click", 4, "ngFor", "ngForOf"], ["href", "https://partner.mydashs.com", 1, "btn", "btn-success", "btn-rounded", "navbar-btn"], ["appScrollspy", "", 3, "spiedTags", "sectionChange"], ["id", "home", 1, "hero-section"], [1, "row", "justify-content-center"], [1, "col-lg-6"], [1, "hero-wrapper", "mb-4"], [1, "font-16", "text-uppercase"], [1, "hero-title", "mb-4"], [1, "text-primary"], [1, "mt-4"], ["href", "https://partner.mydashs.com", 1, "btn", "btn-primary", "mt-2", "mr-2"], ["href", "javascript: void(0);", 1, "btn", "btn-success", "mt-2", "mr-2"], [1, "col-lg-6", "col-sm-8"], [1, "home-img", "mt-5", "mt-lg-0"], ["src", "assets/images/home-img.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["ngbDropdownItem", "", 3, "click"], [4, "ngIf"]],
        template: function Index1Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("scroll", function Index1Component_Template_nav_scroll_0_listener() {
              return ctx.windowScroll();
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resolveWindow"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function Index1Component_Template_button_click_4_listener() {
              return ctx.toggleMenu();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "ul", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](11, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Services");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](18, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Clients");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](25, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](30, Index1Component_button_30_Template, 3, 2, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](33, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("sectionChange", function Index1Component_Template_div_sectionChange_34_listener($event) {
              return ctx.onSectionChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "section", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "p", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Discover MyDash Today");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "h1", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, " The Right Address For Promotion Anyday ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "MyDash");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Get Started");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "a", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Learn more");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "img", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](56, "app-services");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](57, "app-features");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](58, "app-clients");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](59, "app-plans");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](60, "app-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](25, _c0, ctx.currentSection === "home"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngxScrollTo", "#home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](11, 17, "MENU.home"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](27, _c0, ctx.currentSection === "services"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngxScrollTo", "#services");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](29, _c0, ctx.currentSection === "features"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngxScrollTo", "#features");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](18, 19, "MENU.features"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](31, _c0, ctx.currentSection === "clients"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngxScrollTo", "#clients");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](33, _c0, ctx.currentSection === "partner"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngxScrollTo", "#partner");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](25, 21, "MENU.partnerM"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.fullNameLang, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.languages);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](33, 23, "MENU.partner"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("spiedTags", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](35, _c1));
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavbar"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_4__["ScrollToDirective"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _shared_scrollspy_directive__WEBPACK_IMPORTED_MODULE_5__["ScrollspyDirective"], _shared_services_services_component__WEBPACK_IMPORTED_MODULE_6__["ServicesComponent"], _shared_features_features_component__WEBPACK_IMPORTED_MODULE_7__["FeaturesComponent"], _shared_clients_clients_component__WEBPACK_IMPORTED_MODULE_8__["ClientsComponent"], _shared_plans_plans_component__WEBPACK_IMPORTED_MODULE_9__["PlansComponent"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownItem"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luZGV4MS9pbmRleDEuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Index1Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-index1",
            templateUrl: "./index1.component.html",
            styleUrls: ["./index1.component.scss"]
          }]
        }], function () {
          return [{
            type: src_app_services_dash_lang_service__WEBPACK_IMPORTED_MODULE_1__["DashLangService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "dgmN":
    /*!***************************************!*\
      !*** ./src/app/pages/pages.module.ts ***!
      \***************************************/

    /*! exports provided: PagesModule */

    /***/
    function dgmN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PagesModule", function () {
        return PagesModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _page_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./page-routing.module */
      "Lzvh");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared/shared.module */
      "PCNd");
      /* harmony import */


      var ngx_youtube_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-youtube-player */
      "B1r6");
      /* harmony import */


      var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @nicky-lenaers/ngx-scroll-to */
      "KZTq");
      /* harmony import */


      var _index1_index1_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./index1/index1.component */
      "bxJz");
      /* harmony import */


      var _index2_index2_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./index2/index2.component */
      "6B5W");
      /* harmony import */


      var _index3_index3_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./index3/index3.component */
      "juQj");
      /* harmony import */


      var _index4_index4_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./index4/index4.component */
      "EnRu");
      /* harmony import */


      var _index5_index5_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./index5/index5.component */
      "SQH6");
      /* harmony import */


      var _index6_index6_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./index6/index6.component */
      "Vug0");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ngx-owl-carousel-o */
      "bhfF"); // NgBootstrap


      var PagesModule = function PagesModule() {
        _classCallCheck(this, PagesModule);
      };

      PagesModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: PagesModule
      });
      PagesModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function PagesModule_Factory(t) {
          return new (t || PagesModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_5__["ScrollToModule"].forRoot(), _page_routing_module__WEBPACK_IMPORTED_MODULE_2__["PagesRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModalModule"], ngx_youtube_player__WEBPACK_IMPORTED_MODULE_4__["NgxYoutubePlayerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_13__["CarouselModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](PagesModule, {
          declarations: [_index1_index1_component__WEBPACK_IMPORTED_MODULE_6__["Index1Component"], _index2_index2_component__WEBPACK_IMPORTED_MODULE_7__["Index2Component"], _index3_index3_component__WEBPACK_IMPORTED_MODULE_8__["Index3Component"], _index4_index4_component__WEBPACK_IMPORTED_MODULE_9__["Index4Component"], _index5_index5_component__WEBPACK_IMPORTED_MODULE_10__["Index5Component"], _index6_index6_component__WEBPACK_IMPORTED_MODULE_11__["Index6Component"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_5__["ScrollToModule"], _page_routing_module__WEBPACK_IMPORTED_MODULE_2__["PagesRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModalModule"], ngx_youtube_player__WEBPACK_IMPORTED_MODULE_4__["NgxYoutubePlayerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_13__["CarouselModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PagesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_index1_index1_component__WEBPACK_IMPORTED_MODULE_6__["Index1Component"], _index2_index2_component__WEBPACK_IMPORTED_MODULE_7__["Index2Component"], _index3_index3_component__WEBPACK_IMPORTED_MODULE_8__["Index3Component"], _index4_index4_component__WEBPACK_IMPORTED_MODULE_9__["Index4Component"], _index5_index5_component__WEBPACK_IMPORTED_MODULE_10__["Index5Component"], _index6_index6_component__WEBPACK_IMPORTED_MODULE_11__["Index6Component"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_5__["ScrollToModule"].forRoot(), _page_routing_module__WEBPACK_IMPORTED_MODULE_2__["PagesRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModalModule"], ngx_youtube_player__WEBPACK_IMPORTED_MODULE_4__["NgxYoutubePlayerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_13__["CarouselModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "eX6T":
    /*!*****************************************************!*\
      !*** ./src/app/shared/clients/clients.component.ts ***!
      \*****************************************************/

    /*! exports provided: ClientsComponent */

    /***/
    function eX6T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClientsComponent", function () {
        return ClientsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./data */
      "VuXi");
      /* harmony import */


      var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-owl-carousel-o */
      "bhfF");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      function ClientsComponent_19_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "h5", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](14, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r1.message);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", item_r1.username.charAt(0), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r1.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("- ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](14, 4, "CLIENT.userDash"), "");
        }
      }

      function ClientsComponent_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, ClientsComponent_19_ng_template_0_Template, 21, 6, "ng-template", 13);
        }
      }
      /**
       * Clients component
       */


      var ClientsComponent = /*#__PURE__*/function () {
        function ClientsComponent() {
          _classCallCheck(this, ClientsComponent);

          this.testimonialOptions = {
            margin: 10,
            loop: true,
            responsive: {
              0: {
                items: 1
              },
              576: {
                items: 2
              }
            },
            nav: true,
            navText: ['<i class=\'mdi mdi-chevron-left\'></i>', '<i class=\'mdi mdi-chevron-right\'></i>']
          };
        }

        _createClass(ClientsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this._fetchData();
          }
        }, {
          key: "_fetchData",
          value: function _fetchData() {
            this.testimonialData = _data__WEBPACK_IMPORTED_MODULE_1__["testimonialData"];
          }
        }]);

        return ClientsComponent;
      }();

      ClientsComponent.??fac = function ClientsComponent_Factory(t) {
        return new (t || ClientsComponent)();
      };

      ClientsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ClientsComponent,
        selectors: [["app-clients"]],
        decls: 20,
        vars: 11,
        consts: [["id", "clients", 1, "section", "bg-light"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-8"], [1, "text-center", "mb-5"], [1, "text-primary", "text-uppercase", "small-title"], [1, "mb-3"], [1, "row"], [1, "col-lg-12"], [1, "mb-4"], [1, "mdi", "mdi-format-quote-open", "text-primary", "h1", "mr-1"], [1, "testi-carousel", 3, "options"], [4, "ngFor", "ngForOf"], ["carouselSlide", ""], [1, "item"], [1, "card"], [1, "card-body", "p-4"], [1, "media", "pt-3"], [1, "avatar-md", "mr-3"], [1, "avatar-title", "rounded-circle", "bg-soft-primary", "text-primary", "font-16"], [1, "media-body", "align-self-center"], [1, "font-16"], [1, "text-muted", "ml-2", "align-self-end", "d-none", "d-lg-block"], [1, "mdi", "mdi-star", "text-warning"], [1, "mdi", "mdi-star"]],
        template: function ClientsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h5", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](7, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h4", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](10, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "h5", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](17, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "owl-carousel-o", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, ClientsComponent_19_Template, 1, 0, undefined, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](7, 5, "CLIENT.testimonial"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](10, 7, "CLIENT.clientSays"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" 3,500 + ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](17, 9, "CLIENT.clientSatisfied"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", ctx.testimonialOptions);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.testimonialData);
          }
        },
        directives: [ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__["CarouselSlideDirective"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jbGllbnRzL2NsaWVudHMuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ClientsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-clients',
            templateUrl: './clients.component.html',
            styleUrls: ['./clients.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "gt6D":
    /*!*************************************************!*\
      !*** ./src/app/shared/plans/plans.component.ts ***!
      \*************************************************/

    /*! exports provided: PlansComponent */

    /***/
    function gt6D(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlansComponent", function () {
        return PlansComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./data */
      "BTgX");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /**
       * Plans component
       */


      var PlansComponent = /*#__PURE__*/function () {
        function PlansComponent() {
          _classCallCheck(this, PlansComponent);
        }

        _createClass(PlansComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // fetches the data
            this._fetchData();
          }
          /**
           * Pricing data
           */

        }, {
          key: "_fetchData",
          value: function _fetchData() {
            this.pricingData = _data__WEBPACK_IMPORTED_MODULE_1__["pricingData"];
          }
        }]);

        return PlansComponent;
      }();

      PlansComponent.??fac = function PlansComponent_Factory(t) {
        return new (t || PlansComponent)();
      };

      PlansComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: PlansComponent,
        selectors: [["app-plans"]],
        decls: 17,
        vars: 9,
        consts: [[1, "section", "bg-img"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-12"], [1, "card"], [1, "card-body", "p-4"], [1, "text-center", "p-4", "mt-3"], [1, "font-16", "text-uppercase", "text-color"], [1, "hero-title", "mb-4"], [1, "text-success"], [1, "mb-0", "text-center", "text-color"]],
        template: function PlansComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](9, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "h1", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](13, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "p", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](16, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](9, 3, "BUT.subtitle"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](13, 5, "BUT.title"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](16, 7, "BUT.description"), " ");
          }
        },
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]],
        styles: [".app-logo[_ngcontent-%COMP%] {\n  height: 134px;\n}\n.app-logo[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.bg-img[_ngcontent-%COMP%] {\n  background-image: url('img3.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3BsYW5zL3BsYW5zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQUNGO0FBQUU7RUFDRSxlQUFBO0FBRUo7QUFFQTtFQUNFLGlDQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvcGxhbnMvcGxhbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLWxvZ28ge1xuICBoZWlnaHQ6IDEzNHB4O1xuICAmOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cblxuLmJnLWltZyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL2ltZzMucG5nKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PlansComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-plans',
            templateUrl: './plans.component.html',
            styleUrls: ['./plans.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "jQpT":
    /*!***************************************************!*\
      !*** ./src/app/shared/footer/footer.component.ts ***!
      \***************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function jQpT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /**
       * Footer component
       */


      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);

          this.year = new Date().getFullYear();
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.??fac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        decls: 28,
        vars: 14,
        consts: [[1, "footer", "bg-success"], [1, "container"], [1, "row"], [1, "col-lg-6", "col-sm-6"], [1, "mb-4", "footer-list-title", "text-primary"], [1, "text-color", 3, "innerHTML"], [1, "text-color"], [1, "bg-primary", "py-3"], [1, "col-lg-12"], [1, "float-sm-center", "mt-4", "mt-sm-0"], [1, "copyright-desc", "text-white", "text-center", "mb-0"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "footer", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h2", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](7, "uppercase");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](8, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](10, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "h2", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](15, "uppercase");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](16, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, " ANTOINE BOUE ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, " DIRECTEUR G\xC9N\xC9RAL ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "section", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "p", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](7, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](8, 6, "ABOUT.title")), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](10, 8, "ABOUT.description"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](15, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](16, 12, "FOOTER.mention")), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.year, " Copyright KonnektJobs ");
          }
        },
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["UpperCasePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FooterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-footer',
            templateUrl: './footer.component.html',
            styleUrls: ['./footer.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "jXNv":
    /*!*****************************************************************!*\
      !*** ./src/app/shared/our-procedure/our-procedure.component.ts ***!
      \*****************************************************************/

    /*! exports provided: OurProcedureComponent */

    /***/
    function jXNv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OurProcedureComponent", function () {
        return OurProcedureComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var OurProcedureComponent = /*#__PURE__*/function () {
        function OurProcedureComponent() {
          _classCallCheck(this, OurProcedureComponent);
        }

        _createClass(OurProcedureComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return OurProcedureComponent;
      }();

      OurProcedureComponent.??fac = function OurProcedureComponent_Factory(t) {
        return new (t || OurProcedureComponent)();
      };

      OurProcedureComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: OurProcedureComponent,
        selectors: [["app-our-procedure"]],
        decls: 34,
        vars: 24,
        consts: [[1, "section", "bg-white"], [1, "container"], [1, "row", "justify-content-center", "mt-4"], [1, "col-lg-6", "col-sm-8"], [1, "home-img", "mt-5", "mt-lg-0", "rounded"], ["src", "assets/img/img2.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], [1, "col-lg-6"], [1, "hero-wrapper", "mb-4"], [1, "font-16", "text-uppercase", "text-color"], [1, "subttitle-separtor"], [1, "hero-title", "mb-4", "mt-2"], [1, "text-success"], [1, "text-color"]],
        template: function OurProcedureComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](10, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "h1", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](15, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](18, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](22, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](25, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](28, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](31, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](33, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](10, 8, "PROCEDURE.subtitle"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](15, 10, "PROCEDURE.title"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](18, 12, "PROCEDURE.step"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](22, 14, "PROCEDURE.step1"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](25, 16, "PROCEDURE.step2"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](28, 18, "PROCEDURE.step3"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](31, 20, "PROCEDURE.step4"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](33, 22, "PROCEDURE.step5"), " ");
          }
        },
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]],
        styles: [".subttitle-separtor[_ngcontent-%COMP%] {\n  width: 35px;\n  border: 1px solid #001b3b;\n  margin-top: -15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL291ci1wcm9jZWR1cmUvb3VyLXByb2NlZHVyZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvb3VyLXByb2NlZHVyZS9vdXItcHJvY2VkdXJlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1YnR0aXRsZS1zZXBhcnRvciB7XG4gIHdpZHRoOiAzNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAxYjNiO1xuICBtYXJnaW4tdG9wOiAtMTVweDtcbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](OurProcedureComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-our-procedure',
            templateUrl: './our-procedure.component.html',
            styleUrls: ['./our-procedure.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "jfdD":
    /*!*****************************************!*\
      !*** ./src/app/shared/services/data.ts ***!
      \*****************************************/

    /*! exports provided: serviceData */

    /***/
    function jfdD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "serviceData", function () {
        return serviceData;
      });

      var serviceData = [{
        id: 1,
        title: "SERVICES.recherche",
        text: "SERVICES.rechercheText"
      }, {
        id: 2,
        title: "SERVICES.selection",
        text: "SERVICES.selectionText"
      }, {
        id: 3,
        title: "SERVICES.accompagnement",
        text: "SERVICES.accompagnementText"
      }];
      /***/
    },

    /***/
    "juQj":
    /*!**************************************************!*\
      !*** ./src/app/pages/index3/index3.component.ts ***!
      \**************************************************/

    /*! exports provided: Index3Component */

    /***/
    function juQj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Index3Component", function () {
        return Index3Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_dash_lang_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/dash-lang.service */
      "MijJ");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @nicky-lenaers/ngx-scroll-to */
      "KZTq");
      /* harmony import */


      var _shared_scrollspy_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../shared/scrollspy.directive */
      "BmFD");
      /* harmony import */


      var _shared_services_services_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../shared/services/services.component */
      "viZE");
      /* harmony import */


      var _shared_features_features_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../shared/features/features.component */
      "ODCV");
      /* harmony import */


      var _shared_clients_clients_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../shared/clients/clients.component */
      "eX6T");
      /* harmony import */


      var _shared_plans_plans_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../shared/plans/plans.component */
      "gt6D");
      /* harmony import */


      var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../shared/footer/footer.component */
      "jQpT");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      function Index3Component_button_30_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "French");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function Index3Component_button_30_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Anglais");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function Index3Component_button_30_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function Index3Component_button_30_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r5);

            var lang_r1 = ctx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r4.changeLanguage(lang_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, Index3Component_button_30_span_1_Template, 2, 0, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, Index3Component_button_30_span_2_Template, 2, 0, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var lang_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", lang_r1.value !== ctx_r0.selected && ctx_r0.selected == "en");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", lang_r1.value !== ctx_r0.selected && ctx_r0.selected == "fr");
        }
      }

      var _c0 = function _c0(a0) {
        return {
          active: a0
        };
      };

      var _c1 = function _c1() {
        return ["SECTION"];
      };
      /**
       * Index-3 component
       */


      var Index3Component = /*#__PURE__*/function () {
        function Index3Component(langService) {
          _classCallCheck(this, Index3Component);

          this.langService = langService;
          this.languages = [];
          this.selected = "";
          this.currentSection = "home";
        }

        _createClass(Index3Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.languages = this.langService.getLanguages();
            this.selected = this.langService.langSelected;

            if (this.selected == "" || this.selected == "en") {
              this.selected = "en";
              this.fullNameLang = "English";
            } else this.fullNameLang = "Fran??ais";
          }
        }, {
          key: "changeLanguage",
          value: function changeLanguage(elt) {
            this.langService.setLanguage(elt.value);
            this.selected = this.langService.langSelected;

            if (this.selected == "en") {
              this.selected = "en";
              this.fullNameLang = "English";
            } else this.fullNameLang = "Fran??ais";
          }
          /**
           * Window scroll method
           */

        }, {
          key: "windowScroll",
          value: function windowScroll() {
            var navbar = document.getElementById("navbar");

            if (document.body.scrollTop >= 50 || document.documentElement.scrollTop > 50) {
              navbar.classList.add("nav-sticky");
            } else {
              navbar.classList.remove("nav-sticky");
            }
          }
          /**
           * Section changed method
           * @param sectionId specify the current sectionID
           */

        }, {
          key: "onSectionChange",
          value: function onSectionChange(sectionId) {
            this.currentSection = sectionId;
          }
          /**
           * Toggle navbar
           */

        }, {
          key: "toggleMenu",
          value: function toggleMenu() {
            document.getElementById("navbarCollapse").classList.toggle("show");
          }
        }]);

        return Index3Component;
      }();

      Index3Component.??fac = function Index3Component_Factory(t) {
        return new (t || Index3Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_dash_lang_service__WEBPACK_IMPORTED_MODULE_1__["DashLangService"]));
      };

      Index3Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: Index3Component,
        selectors: [["app-index3"]],
        decls: 64,
        vars: 36,
        consts: [["id", "navbar", 1, "navbar", "navbar-expand-lg", "fixed-top", "navbar-custom", "sticky", "sticky-dark", 3, "scroll"], [1, "container"], ["href", "/", 1, "logo", "text-uppercase"], ["src", "assets/images/logo-dash.png", "alt", "", "height", "50", 1, "logo-dark"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarCollapse", "aria-controls", "navbarCollapse", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], [1, "mdi", "mdi-menu"], ["id", "navbarCollapse", 1, "collapse", "navbar-collapse"], ["id", "mySidenav", 1, "navbar-nav", "ml-auto", "navbar-center"], [1, "nav-item", 3, "ngClass"], ["href", "javascript: void(0);", 1, "nav-link", 3, "ngxScrollTo"], ["ngbDropdown", "", 1, "nav-item", 2, "cursor", "pointer"], ["id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "dropdown-language", "nav-link"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1"], ["ngbDropdownItem", "", 3, "click", 4, "ngFor", "ngForOf"], ["href", "https://partner.mydashs.com", 1, "btn", "btn-success", "btn-rounded", "navbar-btn"], ["appScrollspy", "", 3, "spiedTags", "sectionChange"], ["id", "home", 1, "hero-section-5", 2, "background", "url(assets/images/bg-2.png) center center"], [1, "row", "justify-content-center"], [1, "col-lg-8"], [1, "hero-wrapper", "text-center", "mb-4"], [1, "font-16", "text-uppercase"], [1, "hero-title", "mb-4"], [1, "text-success"], [1, "text-center", "mt-4"], [1, "subscribe"], [1, "row"], [1, "col-md-9"], ["type", "text", "placeholder", "Enter your E-mail address", 1, "form-control"], [1, "col-md-3"], [1, "mt-3", "mt-md-0"], ["type", "button", 1, "btn", "btn-success", "btn-block"], ["ngbDropdownItem", "", 3, "click"], [4, "ngIf"]],
        template: function Index3Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("scroll", function Index3Component_Template_nav_scroll_0_listener() {
              return ctx.windowScroll();
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resolveWindow"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function Index3Component_Template_button_click_4_listener() {
              return ctx.toggleMenu();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "ul", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](11, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Services");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](18, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Clients");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](25, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](30, Index3Component_button_30_Template, 3, 2, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](33, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("sectionChange", function Index3Component_Template_div_sectionChange_34_listener($event) {
              return ctx.onSectionChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "section", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "p", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Discover MyDash Today");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "h1", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, " Make your Site Amazing & Unique with ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "MyDash");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, " To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine occidental ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](54, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, " Subscribe Us ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](59, "app-services");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](60, "app-features");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](61, "app-clients");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](62, "app-plans");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](63, "app-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](25, _c0, ctx.currentSection === "home"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngxScrollTo", "#home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](11, 17, "MENU.home"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](27, _c0, ctx.currentSection === "services"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngxScrollTo", "#services");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](29, _c0, ctx.currentSection === "features"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngxScrollTo", "#features");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](18, 19, "MENU.features"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](31, _c0, ctx.currentSection === "clients"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngxScrollTo", "#clients");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](33, _c0, ctx.currentSection === "partner"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngxScrollTo", "#partner");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](25, 21, "MENU.partnerM"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.fullNameLang, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.languages);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](33, 23, "MENU.partner"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("spiedTags", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](35, _c1));
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavbar"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_4__["ScrollToDirective"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _shared_scrollspy_directive__WEBPACK_IMPORTED_MODULE_5__["ScrollspyDirective"], _shared_services_services_component__WEBPACK_IMPORTED_MODULE_6__["ServicesComponent"], _shared_features_features_component__WEBPACK_IMPORTED_MODULE_7__["FeaturesComponent"], _shared_clients_clients_component__WEBPACK_IMPORTED_MODULE_8__["ClientsComponent"], _shared_plans_plans_component__WEBPACK_IMPORTED_MODULE_9__["PlansComponent"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownItem"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luZGV4My9pbmRleDMuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Index3Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-index3",
            templateUrl: "./index3.component.html",
            styleUrls: ["./index3.component.scss"]
          }]
        }], function () {
          return [{
            type: src_app_services_dash_lang_service__WEBPACK_IMPORTED_MODULE_1__["DashLangService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "k3qx":
    /*!***********************************************************!*\
      !*** ./src/app/shared/contact-us/contact-us.component.ts ***!
      \***********************************************************/

    /*! exports provided: ContactUsComponent */

    /***/
    function k3qx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function () {
        return ContactUsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var angular_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! angular-feather */
      "8mtn");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var ContactUsComponent = /*#__PURE__*/function () {
        function ContactUsComponent(fb) {
          _classCallCheck(this, ContactUsComponent);

          this.fb = fb;
        }

        _createClass(ContactUsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.form = this.fb.group({
              name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
              message: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
            });
          }
        }, {
          key: "contactUs",
          value: function contactUs() {
            console.log(this.form.value);
          }
        }]);

        return ContactUsComponent;
      }();

      ContactUsComponent.??fac = function ContactUsComponent_Factory(t) {
        return new (t || ContactUsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
      };

      ContactUsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ContactUsComponent,
        selectors: [["app-contact-us"]],
        decls: 56,
        vars: 27,
        consts: [["id", "contact", 1, "section"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-6"], [1, "hero-wrapper", "mb-4"], [1, "hero-title", "mb-4", "mt-2", "title-section"], [1, "text-white"], [1, "text-color"], [1, "text-success", 2, "font-size", "25px"], [1, "col-lg-4", "offset-lg-2"], [1, "hero-title", "mb-4", "mt-2"], [1, "media", "mb-4"], [1, "icon", "mx-2"], ["name", "phone", 1, "text-primary"], [1, "media-body", "text-color"], [1, "text-primary", 2, "font-size", "18px"], ["name", "mail", 1, "text-primary"], ["name", "map-pin", 1, "text-primary"]],
        template: function ContactUsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h1", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](8, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](12, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](16, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](19, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](22, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](25, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "i-feather", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](35, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "(0049)17684140032");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "i-feather", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](44, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "info@konnektjobs.de");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](49, "i-feather", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](53, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "Krimpelweg 5, 28277 Bremen, Allemagne");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](8, 9, "CONTACT.title"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](12, 11, "CONTACT.subtitle"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](16, 13, "CONTACT.role1"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](19, 15, "CONTACT.role2"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](22, 17, "CONTACT.role4"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](25, 19, "CONTACT.role5"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](35, 21, "CONTACT.appelle"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](44, 23, "CONTACT.boiteMail"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](53, 25, "CONTACT.adresse"));
          }
        },
        directives: [angular_feather__WEBPACK_IMPORTED_MODULE_2__["FeatherComponent"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]],
        styles: [".title-section[_ngcontent-%COMP%] {\n  background: #1b5996;\n  border-radius: 0px 45px 45px 0;\n  padding: 10px;\n}\n\n.section[_ngcontent-%COMP%] {\n  padding-top: 40px;\n  padding-bottom: 45px;\n}\n\n.btn-custom[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  padding: 0.7rem 1.4rem;\n  font-weight: 500;\n  transition: all 0.4s;\n  border-radius: 7px;\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n}\n\n.btn-custom[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  outline: none;\n  text-decoration: none;\n}\n\n.icon[_ngcontent-%COMP%] {\n  border: 1px solid #1b5996;\n  border-radius: 50%;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUNFO0VBQ0UsMkJBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFHQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBQUYiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlLXNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiAjMWI1OTk2O1xuICBib3JkZXItcmFkaXVzOiAwcHggNDVweCA0NXB4IDA7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5zZWN0aW9uIHtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA0NXB4O1xufVxuXG4uYnRuLWN1c3RvbSB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBwYWRkaW5nOiAwLjdyZW0gMS40cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcblxuICAuYnRuOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbn1cblxuLmljb24ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMWI1OTk2O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ContactUsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-contact-us",
            templateUrl: "./contact-us.component.html",
            styleUrls: ["./contact-us.component.scss"]
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "sOmp":
    /*!*************************************************!*\
      !*** ./src/app/shared/about/about.component.ts ***!
      \*************************************************/

    /*! exports provided: AboutComponent */

    /***/
    function sOmp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
        return AboutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var AboutComponent = /*#__PURE__*/function () {
        function AboutComponent() {
          _classCallCheck(this, AboutComponent);
        }

        _createClass(AboutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AboutComponent;
      }();

      AboutComponent.??fac = function AboutComponent_Factory(t) {
        return new (t || AboutComponent)();
      };

      AboutComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: AboutComponent,
        selectors: [["app-about"]],
        decls: 43,
        vars: 11,
        consts: [["id", "about", 1, "section", "bg-success"], [1, "container"], [1, "row", "justify-content-flex-start"], [1, "col-lg-8"], [1, "text-left", "mb-5"], [1, "text-primary", "text-uppercase"], [1, "row", "justify-content-center"], [1, "col-lg-6"], [1, "hero-wrapper", "mb-4"], [1, "font-16", "text-uppercase", "text-color"], [1, "hero-title", "mb-4"], [1, "text-primary"], [1, "text-color"], [1, "mt-4"], ["href", "https://partner.mydashs.com", 1, "btn", "btn-primary", "mt-2", "mr-2", "btn-rounded"], [1, "col-lg-6", "col-sm-8"], [1, "home-img", "mt-5", "mt-lg-0", "rounded"], ["src", "assets/images/home-img.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], [1, "row", "justify-content-center", "mt-4"]],
        template: function AboutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h2", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](7, "titlecase");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](8, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "VIEW");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "h1", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Our vision");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "p", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nunc morbi accumsan donec. Molestie amet faucibus venenatis sit nibh. Quis mattis egestas habitant vitae. Hendrerit accumsan risus mi, ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](22, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "img", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "img", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "EXPERIENCE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "h1", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Our process");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "p", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nunc morbi accumsan donec. Molestie amet faucibus venenatis sit nibh. Quis mattis egestas habitant vitae. Hendrerit accumsan risus mi, ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](42, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](7, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](8, 5, "ABOUT.title")), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](22, 7, "SERVICES.viewMore"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](42, 9, "SERVICES.viewMore"));
          }
        },
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["TitleCasePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]],
        styles: ["img[_ngcontent-%COMP%] {\n  max-width: 300px !important;\n  border: 1px solid #1b5996;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xuICBtYXgtd2lkdGg6IDMwMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxYjU5OTY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AboutComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-about',
            templateUrl: './about.component.html',
            styleUrls: ['./about.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var routes = [{
        path: "",
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ./pages/pages.module */
          "dgmN")).then(function (m) {
            return m.PagesModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "viZE":
    /*!*******************************************************!*\
      !*** ./src/app/shared/services/services.component.ts ***!
      \*******************************************************/

    /*! exports provided: ServicesComponent */

    /***/
    function viZE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServicesComponent", function () {
        return ServicesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./data */
      "jfdD");
      /* harmony import */


      var src_app_services_dash_lang_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/dash-lang.service */
      "MijJ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      function ServicesComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h4", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](10, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](11, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](14, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r1.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](10, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](11, 5, item_r1.title)), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](14, 7, item_r1.text), " ");
        }
      }
      /**
       * Services component
       */


      var ServicesComponent = /*#__PURE__*/function () {
        function ServicesComponent(serviceLanguege) {
          _classCallCheck(this, ServicesComponent);

          this.serviceLanguege = serviceLanguege;
        }

        _createClass(ServicesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // fetches the data
            this._fetchData(); // this.viewMin();

          }
          /**
           * Service data
           */

        }, {
          key: "_fetchData",
          value: function _fetchData() {
            this.serviceData = _data__WEBPACK_IMPORTED_MODULE_1__["serviceData"]; // this.allServiceData = serviceData;
          }
        }, {
          key: "viewAll",
          value: function viewAll() {
            this.serviceData = _toConsumableArray(this.allServiceData);
          }
        }, {
          key: "viewMin",
          value: function viewMin() {
            for (var index = 0; index < 3; index++) {
              this.serviceData.push(this.allServiceData[index]);
            }
          }
        }]);

        return ServicesComponent;
      }();

      ServicesComponent.??fac = function ServicesComponent_Factory(t) {
        return new (t || ServicesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_dash_lang_service__WEBPACK_IMPORTED_MODULE_2__["DashLangService"]));
      };

      ServicesComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ServicesComponent,
        selectors: [["app-services"]],
        decls: 13,
        vars: 7,
        consts: [["id", "services", 1, "section"], [1, "container"], [1, "row", "justify-content-flex-start"], [1, "col-lg-8"], [1, "text-left", "mb-5"], [1, "font-16", "text-uppercase", "text-color"], [1, "text-success", "text-uppercase"], [1, "row"], ["class", "col-xl-4 col-sm-6", 4, "ngFor", "ngForOf"], [1, "col-xl-4", "col-sm-6"], [1, "card", "shadow", 2, "height", "370px"], [1, "card-body", "p-4"], [1, "text-center", "p-4", "mt-3"], [1, "avatar-md", "mx-auto", "mb-2"], [1, "avatar-title", "rounded-circle", "bg-soft-primary"], [1, "text-primary"], [1, "font-18", "text-success"], [1, "mb-0", "text-center", "text-color"]],
        template: function ServicesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](7, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h2", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](10, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, ServicesComponent_div_12_Template, 15, 9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](7, 3, "SERVICES.subtitle"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](10, 5, "SERVICES.title"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.serviceData);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zZXJ2aWNlcy9zZXJ2aWNlcy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ServicesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-services",
            templateUrl: "./services.component.html",
            styleUrls: ["./services.component.scss"]
          }]
        }], function () {
          return [{
            type: src_app_services_dash_lang_service__WEBPACK_IMPORTED_MODULE_2__["DashLangService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map