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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module1.js */ \"./src/js/module1.js\");\n/* harmony import */ var _module2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module2.js */ \"./src/js/module2.js\");\n/* harmony import */ var _module3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module3.js */ \"./src/js/module3.js\");\n/* harmony import */ var _module4_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module4.js */ \"./src/js/module4.js\");\n/* harmony import */ var _module_es6__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module_es6 */ \"./src/js/module_es6.js\");\n/* harmony import */ var _json_data_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../json/data.json */ \"./src/json/data.json\");\nvar _json_data_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../json/data.json */ \"./src/json/data.json\", 1);\n//导入\r\n\r\n\r\n\r\n\r\n\r\n//测试webpack不支持es6其他语法\r\n\r\nObject(_module_es6__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();//查看webpack构建后的app.js文件，箭头函数依旧保留，没有转成ES5\r\n\r\n//测试json格式的文件做默认导出引入\r\n\r\nconsole.log('json格式的文件：',_json_data_json__WEBPACK_IMPORTED_MODULE_5__);\r\n\r\n\r\n\r\nconsole.log(Object(_module1_js__WEBPACK_IMPORTED_MODULE_0__[\"sum\"])(1,2));\r\nconsole.log(Object(_module1_js__WEBPACK_IMPORTED_MODULE_0__[\"sub\"])(1,2));\r\nconsole.log(Object(_module1_js__WEBPACK_IMPORTED_MODULE_0__[\"sum\"])(_module2_js__WEBPACK_IMPORTED_MODULE_1__[\"a\"],_module2_js__WEBPACK_IMPORTED_MODULE_1__[\"xxx\"]));\r\nObject(_module3_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\nconsole.log(_module4_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"],_module4_js__WEBPACK_IMPORTED_MODULE_3__);\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/module1.js":
/*!***************************!*\
  !*** ./src/js/module1.js ***!
  \***************************/
/*! exports provided: sum, sub */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sum\", function() { return sum; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sub\", function() { return sub; });\n//分别导出\r\nconst sum = (a,b)=>{\r\n  return a+b;\r\n}\r\nconst sub = (a,b)=>{\r\n  return a-b;\r\n}\n\n//# sourceURL=webpack:///./src/js/module1.js?");

/***/ }),

/***/ "./src/js/module2.js":
/*!***************************!*\
  !*** ./src/js/module2.js ***!
  \***************************/
/*! exports provided: a, xxx */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return a; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"xxx\", function() { return b; });\n//统一导出\r\nconst a =134;\r\nconst b=23243;\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/module2.js?");

/***/ }),

/***/ "./src/js/module3.js":
/*!***************************!*\
  !*** ./src/js/module3.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//默认导出\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (()=>{\r\n  console.log('默认导出');\r\n});\n\n//# sourceURL=webpack:///./src/js/module3.js?");

/***/ }),

/***/ "./src/js/module4.js":
/*!***************************!*\
  !*** ./src/js/module4.js ***!
  \***************************/
/*! exports provided: abc, arr, default, arr2, str2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"abc\", function() { return abc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"arr\", function() { return arr; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"arr2\", function() { return arr2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"str2\", function() { return str2; });\n//混合导出\r\nconst abc='abc';\r\nconst arr=[12,3,4,5];\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  name:'BigSpinach',\r\n  age:18\r\n});\r\n\r\nlet arr2=['大','中','小'];\r\nconst str2='嘎嘎嘎嘎嘎';\r\n\n\n//# sourceURL=webpack:///./src/js/module4.js?");

/***/ }),

/***/ "./src/js/module_es6.js":
/*!******************************!*\
  !*** ./src/js/module_es6.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (()=>{\r\n  console.log('箭头函数')\r\n});\n\n//# sourceURL=webpack:///./src/js/module_es6.js?");

/***/ }),

/***/ "./src/json/data.json":
/*!****************************!*\
  !*** ./src/json/data.json ***!
  \****************************/
/*! exports provided: name, age, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"name\\\":\\\"张三丰\\\",\\\"age\\\":18}\");\n\n//# sourceURL=webpack:///./src/json/data.json?");

/***/ })

/******/ });