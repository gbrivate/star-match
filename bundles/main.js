/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "/Fcd":
/*!****************************************************!*\
  !*** ./src/components/game/stars-display/index.js ***!
  \****************************************************/
/*! exports provided: StarsDisplay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _StarsDisplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StarsDisplay */ \"jbC0\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"StarsDisplay\", function() { return _StarsDisplay__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL0ZjZC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2dhbWUvc3RhcnMtZGlzcGxheS9pbmRleC5qcz9mYzU3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IGRlZmF1bHQgYXMgU3RhcnNEaXNwbGF5IH0gIGZyb20gJy4vU3RhcnNEaXNwbGF5JzsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:////Fcd\n");

/***/ }),

/***/ 0:
/*!************************************!*\
  !*** multi ./src/renderers/dom.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/renderers/dom.js */"4qhl");


/***/ }),

/***/ "3js7":
/*!***********************************************!*\
  !*** ./src/components/game/play/PlayAgain.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar PlayAgain = function PlayAgain(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"game-done\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"message\",\n    style: {\n      color: props.gameStatus === 'lost' ? 'red' : 'green'\n    }\n  }, props.gameStatus === 'lost' ? 'Game Over' : 'Nice'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: props.onClick\n  }, \"Play Again\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlayAgain);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiM2pzNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2dhbWUvcGxheS9QbGF5QWdhaW4uanM/ZGUzYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBQbGF5QWdhaW4gPSBwcm9wcyA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiZ2FtZS1kb25lXCI+XG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPVwibWVzc2FnZVwiXG4gICAgICBzdHlsZT17e2NvbG9yOiBwcm9wcy5nYW1lU3RhdHVzID09PSAnbG9zdCcgPyAncmVkJyA6ICdncmVlbid9fT5cbiAgICAgIHtwcm9wcy5nYW1lU3RhdHVzID09PSAnbG9zdCcgPyAnR2FtZSBPdmVyJyA6ICdOaWNlJ31cbiAgICA8L2Rpdj5cbiAgICA8YnV0dG9uIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlBsYXkgQWdhaW48L2J1dHRvbj5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5QWdhaW47Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBS0E7QUFBQTtBQVBBO0FBQ0E7QUFVQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3js7\n");

/***/ }),

/***/ "3kBI":
/*!*************************************!*\
  !*** ./src/components/game/Game.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _math_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../math-utils */ \"e+oM\");\n/* harmony import */ var _UseGameState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UseGameState */ \"GeiK\");\n/* harmony import */ var _play__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./play */ \"vMNz\");\n/* harmony import */ var _stars_display__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stars-display */ \"/Fcd\");\n\n\n\n\n\n\nvar Game = function Game(props) {\n  var _useGameState = Object(_UseGameState__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(),\n      stars = _useGameState.stars,\n      availableNums = _useGameState.availableNums,\n      candidateNums = _useGameState.candidateNums,\n      secondsLeft = _useGameState.secondsLeft,\n      setGameState = _useGameState.setGameState;\n\n  var candidatesAreWrong = _math_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sum(candidateNums) > stars;\n  var gameStatus = availableNums.length === 0 ? 'won' : secondsLeft === 0 ? 'lost' : 'active';\n\n  var numberStatus = function numberStatus(number) {\n    if (!availableNums.includes(number)) {\n      return 'used';\n    }\n\n    if (candidateNums.includes(number)) {\n      return candidatesAreWrong ? 'wrong' : 'candidate';\n    }\n\n    return 'available';\n  };\n\n  var onNumberClick = function onNumberClick(number, currentStatus) {\n    if (currentStatus === 'used' || secondsLeft === 0) {\n      return;\n    }\n\n    var newCandidateNums = currentStatus === 'available' ? candidateNums.concat(number) : candidateNums.filter(function (cn) {\n      return cn !== number;\n    });\n    setGameState(newCandidateNums);\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"game\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"help\"\n  }, \"Pick 1 or more numbers that sum to the number of stars\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"body\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"left\"\n  }, gameStatus !== 'active' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_play__WEBPACK_IMPORTED_MODULE_3__[\"PlayAgain\"], {\n    onClick: props.startNewGame,\n    gameStatus: gameStatus\n  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_stars_display__WEBPACK_IMPORTED_MODULE_4__[\"StarsDisplay\"], {\n    count: stars\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"right\"\n  }, _math_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].range(1, 9).map(function (number) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_play__WEBPACK_IMPORTED_MODULE_3__[\"PlayNumber\"], {\n      key: number,\n      status: numberStatus(number),\n      number: number,\n      onClick: onNumberClick\n    });\n  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"timer\"\n  }, \"Time Remaining: \", secondsLeft));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiM2tCSS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2dhbWUvR2FtZS5qcz9kZTQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLi8uLi9tYXRoLXV0aWxzJztcbmltcG9ydCB1c2VHYW1lU3RhdGUgZnJvbSAnLi9Vc2VHYW1lU3RhdGUnO1xuaW1wb3J0IHsgUGxheUFnYWluLCBQbGF5TnVtYmVyIH0gZnJvbSAnLi9wbGF5JztcbmltcG9ydCB7IFN0YXJzRGlzcGxheSB9IGZyb20gJy4vc3RhcnMtZGlzcGxheSc7XG5cbmNvbnN0IEdhbWUgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHtcbiAgICBzdGFycyxcbiAgICBhdmFpbGFibGVOdW1zLFxuICAgIGNhbmRpZGF0ZU51bXMsXG4gICAgc2Vjb25kc0xlZnQsXG4gICAgc2V0R2FtZVN0YXRlLFxuICB9ID0gdXNlR2FtZVN0YXRlKCk7XG5cbiAgY29uc3QgY2FuZGlkYXRlc0FyZVdyb25nID0gdXRpbHMuc3VtKGNhbmRpZGF0ZU51bXMpID4gc3RhcnM7XG4gIGNvbnN0IGdhbWVTdGF0dXMgPSBhdmFpbGFibGVOdW1zLmxlbmd0aCA9PT0gMFxuICAgID8gJ3dvbidcbiAgICA6IHNlY29uZHNMZWZ0ID09PSAwID8gJ2xvc3QnIDogJ2FjdGl2ZSc7XG5cbiAgY29uc3QgbnVtYmVyU3RhdHVzID0gbnVtYmVyID0+IHtcbiAgICBpZiAoIWF2YWlsYWJsZU51bXMuaW5jbHVkZXMobnVtYmVyKSkge1xuICAgICAgcmV0dXJuICd1c2VkJztcbiAgICB9XG5cbiAgICBpZiAoY2FuZGlkYXRlTnVtcy5pbmNsdWRlcyhudW1iZXIpKSB7XG4gICAgICByZXR1cm4gY2FuZGlkYXRlc0FyZVdyb25nID8gJ3dyb25nJyA6ICdjYW5kaWRhdGUnO1xuICAgIH1cblxuICAgIHJldHVybiAnYXZhaWxhYmxlJztcbiAgfTtcblxuICBjb25zdCBvbk51bWJlckNsaWNrID0gKG51bWJlciwgY3VycmVudFN0YXR1cykgPT4ge1xuICAgIGlmIChjdXJyZW50U3RhdHVzID09PSAndXNlZCcgfHwgc2Vjb25kc0xlZnQgPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBuZXdDYW5kaWRhdGVOdW1zID1cbiAgICAgIGN1cnJlbnRTdGF0dXMgPT09ICdhdmFpbGFibGUnXG4gICAgICAgID8gY2FuZGlkYXRlTnVtcy5jb25jYXQobnVtYmVyKVxuICAgICAgICA6IGNhbmRpZGF0ZU51bXMuZmlsdGVyKGNuID0+IGNuICE9PSBudW1iZXIpO1xuXG4gICAgc2V0R2FtZVN0YXRlKG5ld0NhbmRpZGF0ZU51bXMpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJnYW1lXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlbHBcIj5cbiAgICAgICAgUGljayAxIG9yIG1vcmUgbnVtYmVycyB0aGF0IHN1bSB0byB0aGUgbnVtYmVyIG9mIHN0YXJzXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRcIj5cbiAgICAgICAgICB7Z2FtZVN0YXR1cyAhPT0gJ2FjdGl2ZScgPyAoXG4gICAgICAgICAgICA8UGxheUFnYWluIG9uQ2xpY2s9e3Byb3BzLnN0YXJ0TmV3R2FtZX0gZ2FtZVN0YXR1cz17Z2FtZVN0YXR1c30vPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8U3RhcnNEaXNwbGF5IGNvdW50PXtzdGFyc30vPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+XG4gICAgICAgICAge3V0aWxzLnJhbmdlKDEsIDkpLm1hcChudW1iZXIgPT4gKFxuICAgICAgICAgICAgPFBsYXlOdW1iZXJcbiAgICAgICAgICAgICAga2V5PXtudW1iZXJ9XG4gICAgICAgICAgICAgIHN0YXR1cz17bnVtYmVyU3RhdHVzKG51bWJlcil9XG4gICAgICAgICAgICAgIG51bWJlcj17bnVtYmVyfVxuICAgICAgICAgICAgICBvbkNsaWNrPXtvbk51bWJlckNsaWNrfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZXJcIj5UaW1lIFJlbWFpbmluZzoge3NlY29uZHNMZWZ0fTwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQURBO0FBVUE7QUFBQTtBQUdBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3kBI\n");

/***/ }),

/***/ "4qhl":
/*!******************************!*\
  !*** ./src/renderers/dom.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"i8i4\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/index.scss */ \"sg+I\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/App */ \"r8ck\");\n\n\n\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n  initialData: window.__R_DATA.initialData\n}), document.getElementById('root'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNHFobC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvZG9tLmpzP2UyYTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbXBvcnQgJy4uL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCBBcHAgZnJvbSAnLi4vY29tcG9uZW50cy9BcHAnO1xuXG5SZWFjdERPTS5oeWRyYXRlKFxuICA8QXBwIGluaXRpYWxEYXRhPXt3aW5kb3cuX19SX0RBVEEuaW5pdGlhbERhdGF9Lz4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JyksXG4pO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4qhl\n");

/***/ }),

/***/ "GeiK":
/*!*********************************************!*\
  !*** ./src/components/game/UseGameState.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"J4zp\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _math_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../math-utils */ \"e+oM\");\n\n\n\n\nvar useGameState = function useGameState() {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(_math_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"].random(1, 9)),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      stars = _useState2[0],\n      setStars = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(_math_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"].range(1, 9)),\n      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),\n      availableNums = _useState4[0],\n      setAvailableNums = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),\n      candidateNums = _useState6[0],\n      setCandidateNums = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(10),\n      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState7, 2),\n      secondsLeft = _useState8[0],\n      setSecondsLeft = _useState8[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (secondsLeft > 0 && availableNums.length > 0) {\n      var timerId = setTimeout(function () {\n        return setSecondsLeft(secondsLeft - 1);\n      }, 1000);\n      return function () {\n        return clearTimeout(timerId);\n      };\n    }\n  });\n\n  var setGameState = function setGameState(newCandidateNums) {\n    if (_math_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sum(newCandidateNums) !== stars) {\n      setCandidateNums(newCandidateNums);\n    } else {\n      var newAvailableNums = availableNums.filter(function (n) {\n        return !newCandidateNums.includes(n);\n      });\n      setStars(_math_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"].randomSumIn(newAvailableNums, 9));\n      setAvailableNums(newAvailableNums);\n      setCandidateNums([]);\n    }\n  };\n\n  return {\n    stars: stars,\n    availableNums: availableNums,\n    candidateNums: candidateNums,\n    secondsLeft: secondsLeft,\n    setGameState: setGameState\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useGameState);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2VpSy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2dhbWUvVXNlR2FtZVN0YXRlLmpzPzE5ZTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4uLy4uL21hdGgtdXRpbHMnO1xuXG5jb25zdCB1c2VHYW1lU3RhdGUgPSAoKSA9PiB7XG4gIGNvbnN0IFtzdGFycywgc2V0U3RhcnNdID0gdXNlU3RhdGUodXRpbHMucmFuZG9tKDEsIDkpKTtcbiAgY29uc3QgW2F2YWlsYWJsZU51bXMsIHNldEF2YWlsYWJsZU51bXNdID0gdXNlU3RhdGUodXRpbHMucmFuZ2UoMSwgOSkpO1xuICBjb25zdCBbY2FuZGlkYXRlTnVtcywgc2V0Q2FuZGlkYXRlTnVtc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzZWNvbmRzTGVmdCwgc2V0U2Vjb25kc0xlZnRdID0gdXNlU3RhdGUoMTApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNlY29uZHNMZWZ0ID4gMCAmJiBhdmFpbGFibGVOdW1zLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHRpbWVySWQgPSBzZXRUaW1lb3V0KCgpID0+IHNldFNlY29uZHNMZWZ0KHNlY29uZHNMZWZ0IC0gMSksIDEwMDApO1xuICAgICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IHNldEdhbWVTdGF0ZSA9IChuZXdDYW5kaWRhdGVOdW1zKSA9PiB7XG4gICAgaWYgKHV0aWxzLnN1bShuZXdDYW5kaWRhdGVOdW1zKSAhPT0gc3RhcnMpIHtcbiAgICAgIHNldENhbmRpZGF0ZU51bXMobmV3Q2FuZGlkYXRlTnVtcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5ld0F2YWlsYWJsZU51bXMgPSBhdmFpbGFibGVOdW1zLmZpbHRlcihcbiAgICAgICAgbiA9PiAhbmV3Q2FuZGlkYXRlTnVtcy5pbmNsdWRlcyhuKSxcbiAgICAgICk7XG4gICAgICBzZXRTdGFycyh1dGlscy5yYW5kb21TdW1JbihuZXdBdmFpbGFibGVOdW1zLCA5KSk7XG4gICAgICBzZXRBdmFpbGFibGVOdW1zKG5ld0F2YWlsYWJsZU51bXMpO1xuICAgICAgc2V0Q2FuZGlkYXRlTnVtcyhbXSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7c3RhcnMsIGF2YWlsYWJsZU51bXMsIGNhbmRpZGF0ZU51bXMsIHNlY29uZHNMZWZ0LCBzZXRHYW1lU3RhdGV9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlR2FtZVN0YXRlOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///GeiK\n");

/***/ }),

/***/ "e+oM":
/*!***************************!*\
  !*** ./src/math-utils.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Math science\nvar utils = {\n  // Sum an array\n  sum: function sum(arr) {\n    return arr.reduce(function (acc, curr) {\n      return acc + curr;\n    }, 0);\n  },\n  // create an array of numbers between min and max (edges included)\n  range: function range(min, max) {\n    return Array.from({\n      length: max - min + 1\n    }, function (_, i) {\n      return min + i;\n    });\n  },\n  // pick a random number between min and max (edges included)\n  random: function random(min, max) {\n    return min + Math.floor(max * Math.random());\n  },\n  // Given an array of numbers and a max...\n  // Pick a random sum (< max) from the set of all available sums in arr\n  randomSumIn: function randomSumIn(arr, max) {\n    var sets = [[]];\n    var sums = [];\n\n    for (var i = 0; i < arr.length; i++) {\n      for (var j = 0, len = sets.length; j < len; j++) {\n        var candidateSet = sets[j].concat(arr[i]);\n        var candidateSum = utils.sum(candidateSet);\n\n        if (candidateSum <= max) {\n          sets.push(candidateSet);\n          sums.push(candidateSum);\n        }\n      }\n    }\n\n    return sums[utils.random(0, sums.length)];\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (utils);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZStvTS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tYXRoLXV0aWxzLmpzPzdiZWEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTWF0aCBzY2llbmNlXG5jb25zdCB1dGlscyA9IHtcbiAgLy8gU3VtIGFuIGFycmF5XG4gIHN1bTogYXJyID0+IGFyci5yZWR1Y2UoKGFjYywgY3VycikgPT4gYWNjICsgY3VyciwgMCksXG5cbiAgLy8gY3JlYXRlIGFuIGFycmF5IG9mIG51bWJlcnMgYmV0d2VlbiBtaW4gYW5kIG1heCAoZWRnZXMgaW5jbHVkZWQpXG4gIHJhbmdlOiAobWluLCBtYXgpID0+IEFycmF5LmZyb20oe2xlbmd0aDogbWF4IC0gbWluICsgMX0sIChfLCBpKSA9PiBtaW4gKyBpKSxcblxuICAvLyBwaWNrIGEgcmFuZG9tIG51bWJlciBiZXR3ZWVuIG1pbiBhbmQgbWF4IChlZGdlcyBpbmNsdWRlZClcbiAgcmFuZG9tOiAobWluLCBtYXgpID0+IG1pbiArIE1hdGguZmxvb3IobWF4ICogTWF0aC5yYW5kb20oKSksXG5cbiAgLy8gR2l2ZW4gYW4gYXJyYXkgb2YgbnVtYmVycyBhbmQgYSBtYXguLi5cbiAgLy8gUGljayBhIHJhbmRvbSBzdW0gKDwgbWF4KSBmcm9tIHRoZSBzZXQgb2YgYWxsIGF2YWlsYWJsZSBzdW1zIGluIGFyclxuICByYW5kb21TdW1JbjogKGFyciwgbWF4KSA9PiB7XG4gICAgY29uc3Qgc2V0cyA9IFtbXV07XG4gICAgY29uc3Qgc3VtcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMCwgbGVuID0gc2V0cy5sZW5ndGg7IGogPCBsZW47IGorKykge1xuICAgICAgICBjb25zdCBjYW5kaWRhdGVTZXQgPSBzZXRzW2pdLmNvbmNhdChhcnJbaV0pO1xuICAgICAgICBjb25zdCBjYW5kaWRhdGVTdW0gPSB1dGlscy5zdW0oY2FuZGlkYXRlU2V0KTtcbiAgICAgICAgaWYgKGNhbmRpZGF0ZVN1bSA8PSBtYXgpIHtcbiAgICAgICAgICBzZXRzLnB1c2goY2FuZGlkYXRlU2V0KTtcbiAgICAgICAgICBzdW1zLnB1c2goY2FuZGlkYXRlU3VtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3Vtc1t1dGlscy5yYW5kb20oMCwgc3Vtcy5sZW5ndGgpXTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHV0aWxzOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQTFCQTtBQTZCQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///e+oM\n");

/***/ }),

/***/ "j4qG":
/*!************************************************!*\
  !*** ./src/components/game/play/PlayNumber.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar PlayNumber = function PlayNumber(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"number\",\n    style: {\n      backgroundColor: colors[props.status]\n    },\n    onClick: function onClick() {\n      return props.onClick(props.number, props.status);\n    }\n  }, props.number);\n}; // Color Theme\n\n\nvar colors = {\n  available: 'lightgray',\n  used: 'lightgreen',\n  wrong: 'lightcoral',\n  candidate: 'deepskyblue'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlayNumber);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiajRxRy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2dhbWUvcGxheS9QbGF5TnVtYmVyLmpzPzhmOGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgUGxheU51bWJlciA9IHByb3BzID0+IChcbiAgPGJ1dHRvblxuICAgIGNsYXNzTmFtZT1cIm51bWJlclwiXG4gICAgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yc1twcm9wcy5zdGF0dXNdfX1cbiAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkNsaWNrKHByb3BzLm51bWJlciwgcHJvcHMuc3RhdHVzKX1cbiAgPlxuICAgIHtwcm9wcy5udW1iZXJ9XG4gIDwvYnV0dG9uPlxuKTtcblxuLy8gQ29sb3IgVGhlbWVcbmNvbnN0IGNvbG9ycyA9IHtcbiAgYXZhaWxhYmxlOiAnbGlnaHRncmF5JyxcbiAgdXNlZDogJ2xpZ2h0Z3JlZW4nLFxuICB3cm9uZzogJ2xpZ2h0Y29yYWwnLFxuICBjYW5kaWRhdGU6ICdkZWVwc2t5Ymx1ZScsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5TnVtYmVyOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBREE7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///j4qG\n");

/***/ }),

/***/ "jbC0":
/*!***********************************************************!*\
  !*** ./src/components/game/stars-display/StarsDisplay.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _math_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../math-utils */ \"e+oM\");\n\n\n\nvar StarsDisplay = function StarsDisplay(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, _math_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].range(1, props.count).map(function (starId) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      key: starId,\n      className: \"star\"\n    });\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (StarsDisplay);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamJDMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2dhbWUvc3RhcnMtZGlzcGxheS9TdGFyc0Rpc3BsYXkuanM/OGRiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vLi4vLi4vbWF0aC11dGlscyc7XG5cbmNvbnN0IFN0YXJzRGlzcGxheSA9IHByb3BzID0+IChcbiAgPGRpdj5cbiAgICB7dXRpbHMucmFuZ2UoMSwgcHJvcHMuY291bnQpLm1hcChzdGFySWQgPT4gKFxuICAgICAgPGRpdiBrZXk9e3N0YXJJZH0gY2xhc3NOYW1lPVwic3RhclwiLz5cbiAgICApKX1cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBTdGFyc0Rpc3BsYXk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBRkE7QUFDQTtBQU9BIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///jbC0\n");

/***/ }),

/***/ "lNdS":
/*!**************************************!*\
  !*** ./src/components/game/index.js ***!
  \**************************************/
/*! exports provided: Game, PlayAgain, PlayNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ \"3kBI\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Game\", function() { return _Game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _play__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./play */ \"vMNz\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PlayAgain\", function() { return _play__WEBPACK_IMPORTED_MODULE_1__[\"PlayAgain\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PlayNumber\", function() { return _play__WEBPACK_IMPORTED_MODULE_1__[\"PlayNumber\"]; });\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibE5kUy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2dhbWUvaW5kZXguanM/OTRkNyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBkZWZhdWx0IGFzIEdhbWUgfSAgZnJvbSAnLi9HYW1lJztcblxuZXhwb3J0ICogZnJvbSAnLi9wbGF5JzsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///lNdS\n");

/***/ }),

/***/ "r8ck":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"J4zp\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ \"lNdS\");\n\n\n\n\nvar StarMatch = function StarMatch() {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(1),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      gameId = _useState2[0],\n      setGameId = _useState2[1];\n\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_game__WEBPACK_IMPORTED_MODULE_2__[\"Game\"], {\n    key: gameId,\n    startNewGame: function startNewGame() {\n      return setGameId(gameId + 1);\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (StarMatch);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicjhjay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0FwcC5qcz9hZmM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEdhbWUgfSBmcm9tICcuL2dhbWUnO1xuXG5jb25zdCBTdGFyTWF0Y2ggPSAoKSA9PiB7XG4gIGNvbnN0IFtnYW1lSWQsIHNldEdhbWVJZF0gPSB1c2VTdGF0ZSgxKTtcbiAgcmV0dXJuIDxHYW1lIGtleT17Z2FtZUlkfSBzdGFydE5ld0dhbWU9eygpID0+IHNldEdhbWVJZChnYW1lSWQgKyAxKX0vPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXJNYXRjaDtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///r8ck\n");

/***/ }),

/***/ "sg+I":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2crSS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz8zNWMxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///sg+I\n");

/***/ }),

/***/ "vMNz":
/*!*******************************************!*\
  !*** ./src/components/game/play/index.js ***!
  \*******************************************/
/*! exports provided: PlayAgain, PlayNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _PlayAgain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlayAgain */ \"3js7\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PlayAgain\", function() { return _PlayAgain__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _PlayNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlayNumber */ \"j4qG\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PlayNumber\", function() { return _PlayNumber__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidk1Oei5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2dhbWUvcGxheS9pbmRleC5qcz9iY2MzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IGRlZmF1bHQgYXMgUGxheUFnYWluIH0gIGZyb20gJy4vUGxheUFnYWluJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUGxheU51bWJlciB9ICBmcm9tICcuL1BsYXlOdW1iZXInOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///vMNz\n");

/***/ })

/******/ });