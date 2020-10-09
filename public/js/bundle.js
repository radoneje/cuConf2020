/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/headerBg.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/headerBg.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@charset \"UTF-8\";\nbody {\n  padding: 0;\n  margin: 0;\n  background: white;\n  font-family: 'SB Sans Text' ,Arial,sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 24px;\n  box-sizing: border-box; }\n\n.centerCol {\n  width: 100%;\n  margin: 0 auto; }\n\n.headerRow {\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n.headerBox {\n  max-width: 1440px;\n  margin: 0  auto; }\n\n.header {\n  min-height: 100vh;\n  width: 100%;\n  padding: 117px 109px;\n  color: white;\n  box-sizing: border-box;\n  position: relative;\n  padding-top: 80px; }\n\nh1 {\n  /* Group 321 */\n  /* ExtraBig */\n  font-style: normal;\n  font-weight: bold;\n  font-size: 44px;\n  line-height: 60px;\n  /* or 136% */\n  color: #FFFFFF; }\n\n.headerMenu {\n  position: absolute;\n  bottom: 109px;\n  font-size: 16px;\n  line-height: 55px;\n  /* or 162% */ }\n\n.logoBox {\n  display: flex;\n  margin-bottom: 80px; }\n\n.logo {\n  height: 40px;\n  margin-right: 40px; }\n\n.logo img {\n  height: 100%;\n  width: auto; }\n\n.headerMenuItem {\n  color: #9C9FA6;\n  text-decoration-line: underline;\n  cursor: pointer;\n  transition: color .2s; }\n\n.headerMenuItem:hover {\n  color: #ffffff; }\n\n.descr {\n  margin-top: 80px;\n  padding: 14px 109px;\n  box-sizing: border-box;\n  display: flex;\n  font-size: 16px;\n  line-height: 24px;\n  color: #33363A;\n  max-width: 1000px; }\n\n.descrBlock {\n  width: 50%;\n  box-sizing: border-box;\n  padding-right: 50px; }\n\n.descrBlockText {\n  margin-bottom: 24px; }\n\n.section {\n  padding: 100px 109px 0 100px; }\n\n.BgGray {\n  background-color: #F5F5F5; }\n\n.sectionBgGray {\n  padding-bottom: 80px; }\n\n.sectionTitle {\n  font-size: 44px;\n  line-height: 60px;\n  color: #131313;\n  font-weight: bold; }\n\n.trItem {\n  margin: 40px 0;\n  display: flex;\n  align-items: flex-end; }\n\n.trItemImage {\n  height: 480px;\n  width: 696px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n  cursor: pointer;\n  border-radius: 10px; }\n\n.trItemDescr {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 28px;\n  padding-left: 36px; }\n\n.trItemDescrModerators {\n  font-weight: 400;\n  padding-top: 40px; }\n\n.trItemImageTime {\n  position: absolute;\n  padding: 12px;\n  background-color: white;\n  border-radius: 4px;\n  color: #33363A;\n  font-size: 12px;\n  line-height: 12px;\n  font-weight: bold;\n  top: 40px;\n  left: 50px; }\n\n.trItemImagePlay {\n  position: absolute;\n  left: 50px;\n  top: calc(50% -  (72px / 2));\n  width: 72px; }\n\n.trItemImageText {\n  position: absolute;\n  top: calc(50% - 12px);\n  left: 160px;\n  width: calc(100% - 160px - 100px);\n  height: 50%;\n  overflow-y: hidden;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 28px;\n  line-height: 40px;\n  color: #FFFFFF; }\n\n.online svg circle {\n  fill: #18b346; }\n\n.trItemImageTime.online {\n  background-color: #18b346;\n  color: white; }\n\n.ended svg circle {\n  fill: #333333; }\n\n.ended svg path {\n  fill: #F2F2F2; }\n\n.trItemImageTime.ended {\n  background-color: #333333;\n  color: #F2F2F2; }\n\n.footer {\n  background-color: #ffffff;\n  padding: 100px 109px 0 100px; }\n\n.footerTitle {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 14px;\n  text-transform: uppercase;\n  color: #9C9FA6;\n  margin-bottom: 31px; }\n\n.footerTitle span {\n  border-bottom: 1px solid #E7E7E7;\n  height: 0px;\n  width: 30%;\n  display: inline-block;\n  margin-bottom: 5px;\n  margin-left: 1em; }\n\n.footerAddress {\n  /* 43581, Московская обл., Истринский р-н, д. Аносино, ул. Университетская, вл. 11 */\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 16px;\n  color: #33363A;\n  margin-bottom: 31px; }\n\n.footerMap {\n  /* Показать на карте */\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 16px;\n  /* identical to box height, or 200% */\n  color: #131313;\n  cursor: pointer;\n  margin-bottom: 31px; }\n\n.footerMapText {\n  text-decoration-line: underline; }\n\n.footerCopyRight {\n  /* © 2012–2019 АНО ДПО «Корпоративный университет Сбербанка» Лицензия на осуществление образовательной деятельности от 2 апреля 2014 года. Регистрационный номер — 034970. */\n  font-style: normal;\n  font-weight: normal;\n  font-size: 11px;\n  line-height: 11px;\n  /* identical to box height, or 164% */\n  color: #B7B7B7;\n  margin-bottom: 80px; }\n\n.langSelector {\n  position: absolute;\n  right: 80px;\n  top: 68px;\n  cursor: pointer;\n  text-decoration-line: underline;\n  color: #9C9FA6;\n  transition: color .2s; }\n\n.langSelector:hover {\n  color: #ffffff; }\n\n@media only screen and (max-width: 1024px) {\n  .langSelector {\n    right: 20px;\n    top: 48px; }\n  .centerCol {\n    width: 100%; }\n  .header {\n    min-height: max-content;\n    padding: 50px 40px;\n    height: auto; }\n  h1 {\n    /* Group 322 */\n    max-width: 600px;\n    margin: 0;\n    font-weight: bold;\n    font-size: 24px;\n    line-height: 30px;\n    /* or 136% */\n    color: #FFFFFF; }\n  .headerMenu {\n    position: initial;\n    margin-top: 40px; }\n  .descr {\n    display: block;\n    margin-bottom: 24px;\n    padding: 14px 40px; }\n  .descrBlock {\n    width: 100%; }\n  .section {\n    padding: 40px 40px 0 40px; }\n  .trItem {\n    display: block; }\n  .trItemImage {\n    width: 100%;\n    padding-bottom: 56.25%;\n    /* 16:9 */\n    height: 0; }\n  .trItemDescr {\n    padding: 40px 0 40px 0; }\n  .footer {\n    padding: 40px 40px 0 40px; }\n  .trItemImageText {\n    top: calc(50% - 12px);\n    font-size: 28px;\n    line-height: 35px;\n    height: calc(100% - 80px); }\n  .sectionTitle {\n    font-size: 26px;\n    line-height: 28px; } }\n\n@media only screen and (max-width: 640px) {\n  .logoBox {\n    display: block;\n    margin-bottom: 40px; }\n  .logo {\n    display: inline-block;\n    height: 30px;\n    margin-bottom: 15px;\n    margin-right: 20px; }\n  .centerCol {\n    width: 100%; }\n  .header {\n    padding: 50px 20px;\n    padding-top: 40px;\n    height: auto; }\n  h1 {\n    /* Group 322 */\n    max-width: 600px;\n    margin: 0;\n    font-weight: bold;\n    font-size: 24px;\n    line-height: 30px;\n    /* or 136% */\n    color: #FFFFFF; }\n  .headerMenu {\n    position: initial;\n    margin-top: 40px; }\n  .headerMenuItem {\n    line-height: 33px; }\n  .descr {\n    display: block;\n    margin-bottom: 24px;\n    padding: 14px 20px; }\n  .descrBlock {\n    width: 100%; }\n  .section {\n    padding: 40px 20px 0 20px; }\n  .sectionTitle {\n    font-size: 26px;\n    line-height: 28px; }\n  .trItem {\n    display: block; }\n  .trItemImage {\n    width: 100%;\n    padding-bottom: 20px;\n    height: auto;\n    padding-top: 20px; }\n  .trItemImageTime {\n    position: inherit;\n    padding: 12px;\n    margin: 20px;\n    margin-top: 0;\n    height: auto;\n    width: -moz-max-content;\n    width: max-content;\n    top: unset;\n    left: unset; }\n  .trItemImagePlay {\n    position: inherit;\n    margin: 20px;\n    margin-top: 100px;\n    width: -moz-max-content;\n    width: max-content;\n    top: unset;\n    left: unset;\n    height: auto; }\n  .trItemImageText {\n    position: inherit;\n    font-size: 20px;\n    line-height: 28px;\n    margin: 20px;\n    width: calc(100% - 40px);\n    top: unset;\n    left: unset;\n    height: auto; }\n  .trItemDescr {\n    padding: 20px 0 20px 0; }\n  .footer {\n    padding: 20px 40px 0 20px; } }\n\n/* Панельная дискуссия: Расширение границ пользовательского  опыта обучения: кейс КУ Сбербанка” */\n", "",{"version":3,"sources":["webpack://src/style.scss"],"names":[],"mappings":"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","sourcesContent":["$playSize: 72px;\n$green: #18b346;\n$gray: #333333;\n\nbody {\n\n  //opacity: 1 !important;\n  padding: 0;\n  margin: 0;\n  background: white;\n  font-family: 'SB Sans Text' ,Arial,sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 24px;\n  box-sizing: border-box;\n}\n.centerCol{\n  width: 100%;\n  //max-width: 1440px;\n  margin: 0 auto;\n}\n.headerRow{\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.headerBox{\n  max-width: 1440px;\n  margin:0  auto;\n}\n.header{\n  //height: 751px;\n  min-height: 100vh;\n  width: 100%;\n\n  padding: 117px 109px;\n  color:white;\n  box-sizing: border-box;\n  position: relative;\n  padding-top: 80px;\n}\nh1{\n  /* Group 321 */\n\n  /* ExtraBig */\n  font-style: normal;\n  font-weight: bold;\n  font-size: 44px;\n  line-height: 60px;\n  /* or 136% */\n\n  color: #FFFFFF;\n\n\n}\n.headerMenu{\n  position: absolute;\n  bottom: 109px;\n  font-size: 16px;\n  line-height: 55px;\n  /* or 162% */\n}\n.logoBox{\n  display: flex;\n  margin-bottom: 80px;\n}\n.logo{\n  height: 40px;\n  margin-right: 40px;\n}\n.logo img{\n  height:100%;\n  width:auto;\n\n}\n.headerMenuItem{\n  color:#9C9FA6;\n  text-decoration-line: underline;\n  cursor: pointer;\n  transition: color .2s ;\n}\n.headerMenuItem:hover{\n  color:#ffffff;\n\n}\n.descr{\n  margin-top: 80px;\n  padding: 14px 109px;\n  box-sizing: border-box;\n  display: flex;\n  font-size: 16px;\n  line-height: 24px;\n  color: #33363A;\n  max-width: 1000px;\n}\n.descrBlock{\n  width: 50%;\n  box-sizing: border-box;\n  padding-right: 50px;\n}\n.descrBlockText{\n  margin-bottom: 24px;\n}\n.section{\n  padding: 100px 109px 0 100px;\n}\n.BgGray{\n  background-color: #F5F5F5;\n\n}\n.sectionBgGray{\n\n  padding-bottom: 80px;\n}\n.sectionTitle{\n  font-size: 44px;\n  line-height: 60px;color: #131313;\n  font-weight: bold;\n}\n.trItem{\n  margin: 40px 0;\n  display: flex;\n  align-items: flex-end;\n}\n.trItemImage{\n  height: 480px;\n  width: 696px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n  cursor: pointer;\n  border-radius: 10px;\n}\n\n.trItemDescr{\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 28px;\n  padding-left: 36px;\n}\n.trItemDescrSpeakers{\n\n}\n.trItemDescrModerators{\n  font-weight: 400;\n  padding-top: 40px;\n}\n.trItemImageTime{\n  position: absolute;\n  padding: 12px;\n  background-color: white;\n  border-radius: 4px;\n  color:#33363A;\n  font-size: 12px;\n  line-height: 12px;\n  font-weight: bold;\n  top:40px;\n  left: 50px;\n}\n.trItemImagePlay{\n  position: absolute;\n  left: 50px;\n  top:calc(50% -  (72px / 2));\n  width:72px;\n\n}\n.trItemImageText{\n  position: absolute;\n  top:calc(50% - 12px);\n  left: 160px;\n  width: calc(100% - 160px - 100px);\n  height: 50%;\n  overflow-y: hidden;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 28px;\n  line-height: 40px;\n  color: #FFFFFF;\n}\n.online svg circle{\n  fill:$green;\n}\n.trItemImageTime.online{\n  background-color: $green;\n  color: white;\n}\n\n.ended svg circle{\n  fill:$gray;\n}\n.ended svg path{\n  fill:#F2F2F2;\n}\n.trItemImageTime.ended{\n  background-color: $gray;\n  color:#F2F2F2;\n}\n\n.footer{\n  background-color: #ffffff;\n  padding: 100px 109px 0 100px;\n}\n.footerTitle{\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 14px;\n  text-transform: uppercase;\n  color: #9C9FA6;\n  margin-bottom: 31px;\n}\n.footerTitle span{\n  border-bottom: 1px solid #E7E7E7;\n  height: 0px;\n  width: 30%;\n  display: inline-block;\n  margin-bottom: 5px;\n  margin-left: 1em;\n}\n.footerAddress{\n  /* 43581, Московская обл., Истринский р-н, д. Аносино, ул. Университетская, вл. 11 */\n\n\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 16px;\n\n\n  color: #33363A;\n  margin-bottom: 31px;\n\n}\n.footerMap{\n  /* Показать на карте */\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 16px;\n  /* identical to box height, or 200% */\n\n  color: #131313;\n  cursor:pointer;\n  margin-bottom: 31px;\n}\n.footerMapText{\n  text-decoration-line: underline;\n}\n.footerCopyRight{\n  /* © 2012–2019 АНО ДПО «Корпоративный университет Сбербанка» Лицензия на осуществление образовательной деятельности от 2 апреля 2014 года. Регистрационный номер — 034970. */\n\n\n  font-style: normal;\n  font-weight: normal;\n  font-size: 11px;\n  line-height: 11px;\n  /* identical to box height, or 164% */\n\n  color: #B7B7B7;\n  margin-bottom: 80px;\n\n}\n.langSelector{\n  position: absolute;\n  right: 80px;\n  top: 68px;\n  cursor: pointer;\n  text-decoration-line: underline;\n  color: #9C9FA6;\n  transition: color .2s;\n}\n.langSelector:hover{\n  color:#ffffff;\n\n}\n@media only screen and (max-width: 1024px){\n\n.langSelector {\n  right: 20px;\n  top: 48px;\n}\n  .centerCol {\n    width: 100%;\n  }\n  .header{\n    min-height: max-content;\n    padding: 50px 40px;\n    height: auto;\n\n  }\n  h1{\n    /* Group 322 */\n  max-width: 600px;\n   margin: 0;\n    font-weight: bold;\n    font-size: 24px;\n    line-height: 30px;\n    /* or 136% */\n\n    color: #FFFFFF;\n\n\n  }\n  .headerMenu{\n    position: initial;\n    margin-top: 40px;\n  }\n  .descr{\n\n    display: block;\n    margin-bottom: 24px;\n    padding: 14px 40px;\n  }\n  .descrBlock{\n    width: 100%;\n  }\n  .section {\n    padding: 40px 40px 0 40px;\n  }\n  .trItem{\n    display: block;\n  }\n  .trItemImage{\n    width: 100%;\n    padding-bottom: 56.25%; /* 16:9 */\n    height: 0;\n  }\n  .trItemDescr{\n    padding: 40px 0 40px 0;\n  }\n  .footer {\n    padding: 40px 40px 0 40px;\n  }\n  .trItemImageText{\n    top: calc(50% - 12px);\n    font-size: 28px;\n    line-height: 35px;\n    //top: calc( 40px);\n    height: calc(100% - 80px);\n  }\n  .sectionTitle{\n    font-size: 26px;\n    line-height: 28px;\n  }\n\n}\n@media only screen and (max-width: 640px) {\n\n  .logoBox{\n    display: block;\n    margin-bottom: 40px;\n  }\n  .logo{\n    display: inline-block;\n    height: 30px;\n    margin-bottom: 15px;\n    margin-right: 20px;\n  }\n  .centerCol {\n    width: 100%;\n  }\n  .header{\n    padding: 50px 20px;\n    padding-top: 40px;\n    height: auto;\n  }\n  h1{\n    /* Group 322 */\n    max-width: 600px;\n    margin: 0;\n    font-weight: bold;\n    font-size: 24px;\n    line-height: 30px;\n    /* or 136% */\n\n    color: #FFFFFF;\n\n\n  }\n\n  .headerMenu{\n    position: initial;\n    margin-top: 40px;\n  }\n  .headerMenuItem{\n    line-height: 33px;\n  }\n  .descr{\n\n    display: block;\n    margin-bottom: 24px;\n    padding: 14px 20px;\n\n  }\n  .descrBlock{\n    width: 100%;\n  }\n  .section {\n    padding: 40px 20px 0 20px;\n  }\n  .sectionTitle{\n    font-size: 26px;\n    line-height: 28px;\n  }\n  .trItem{\n    display: block;\n  }\n  .trItemImage{\n    width: 100%;\n    padding-bottom: 20px;\n    height: auto;\n    padding-top: 20px;\n  }\n  .trItemImageTime{\n    position: inherit;\n    padding: 12px;\n    margin: 20px;\n    margin-top: 0;\n    height: auto;\n    width: -moz-max-content;\n    width: max-content;\n    top: unset;\n    left: unset;\n  }\n  .trItemImagePlay{\n    position: inherit;\n    margin: 20px;\n    margin-top: 100px;\n    width: -moz-max-content;\n    width: max-content;\n    top: unset;\n    left: unset;\n    height: auto;\n  }\n  .trItemImageText{\n    position: inherit;\n    font-size: 20px;\n    line-height: 28px;\n    margin: 20px;\n    width:calc(100% - 40px);\n    top: unset;\n    left: unset;\n    height: auto;\n  }\n  .trItemDescr{\n    padding: 20px 0 20px 0;\n  }\n  .footer {\n    padding: 20px 40px 0 20px;\n  }\n}\n\n\n\n\n\n\n\n\n/* Панельная дискуссия: Расширение границ пользовательского  опыта обучения: кейс КУ Сбербанка” */\n\n\n\n\n\n\n\n\n\n\n\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/headerBg.scss":
/*!***************************!*\
  !*** ./src/headerBg.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./headerBg.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/headerBg.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headerBg_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./headerBg.scss */ "./src/headerBg.scss");
/* harmony import */ var _headerBg_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_headerBg_scss__WEBPACK_IMPORTED_MODULE_1__);


setTimeout(function () {
  document.body.style.opacity = 1;
}, 200);

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index.js */"./src/index.js");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map