/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: \"Oxygen\", sans-serif;\n    background: linear-gradient(135deg, #1e3a5f 0%, #2c5282 100%);\n    color: white;\n    min-height: 100vh;\n    padding: 20px;\n}\n\n#container {\n    max-width: 1200px;\n    margin: 0 auto;\n    position: relative;\n}\n\n/* Temperature Toggle Switch */\n#tempToggle {\n    position: absolute;\n    top: 0;\n    right: 0;\n    display: flex;\n    align-items: center;\n    gap: 15px;\n    background: rgba(59, 130, 246, 0.15);\n    padding: 10px 20px;\n    border-radius: 25px;\n    border: 2px solid #3b82f6;\n    box-shadow: 0 0 15px rgba(59, 130, 246, 0.3);\n}\n\n.temp-label {\n    font-size: 1.1rem;\n    font-weight: 400;\n    color: rgba(255, 255, 255, 0.7);\n    transition: color 0.3s ease;\n}\n\n.temp-label.active {\n    color: white;\n    text-shadow: 0 0 10px rgba(96, 165, 250, 0.8);\n}\n\n.toggle-switch {\n    position: relative;\n    display: inline-block;\n    width: 60px;\n    height: 30px;\n}\n\n.toggle-switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}\n\n.slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: rgba(255, 255, 255, 0.2);\n    border: 2px solid #60a5fa;\n    transition: all 0.3s ease;\n    border-radius: 30px;\n    box-shadow: 0 0 10px rgba(96, 165, 250, 0.3);\n}\n\n.slider:before {\n    position: absolute;\n    content: \"\";\n    height: 20px;\n    width: 20px;\n    left: 2px;\n    bottom: 2px;\n    background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);\n    transition: all 0.3s ease;\n    border-radius: 50%;\n    box-shadow: 0 0 8px rgba(96, 165, 250, 0.5);\n}\n\ninput:checked + .slider {\n    background: rgba(96, 165, 250, 0.3);\n    border-color: #93c5fd;\n    box-shadow: 0 0 15px rgba(147, 197, 253, 0.4);\n}\n\ninput:checked + .slider:before {\n    transform: translateX(26px);\n    background: linear-gradient(135deg, #93c5fd 0%, #60a5fa 100%);\n    box-shadow: 0 0 12px rgba(147, 197, 253, 0.6);\n}\n\n#header {\n    text-align: center;\n    margin-bottom: 40px;\n    margin-top: 60px; /* Add space for toggle switch */\n}\n\n#header h1 {\n    font-size: 3rem;\n    font-weight: 300;\n    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);\n    margin-bottom: 10px;\n}\n\n#search {\n    text-align: center;\n    margin-bottom: 40px;\n    background: rgba(59, 130, 246, 0.1);\n    padding: 30px;\n    border-radius: 15px;\n    border: 2px solid #3b82f6;\n    box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);\n}\n\n#search p {\n    font-size: 1.2rem;\n    margin-bottom: 20px;\n    font-weight: 300;\n}\n\n#cityInput {\n    padding: 12px 20px;\n    font-size: 1.1rem;\n    border: 2px solid #3b82f6;\n    border-radius: 25px;\n    background: rgba(255, 255, 255, 0.1);\n    color: white;\n    margin-right: 15px;\n    min-width: 250px;\n    outline: none;\n    transition: all 0.3s ease;\n}\n\n#cityInput::placeholder {\n    color: rgba(255, 255, 255, 0.7);\n}\n\n#cityInput:focus {\n    border-color: #60a5fa;\n    box-shadow: 0 0 15px rgba(96, 165, 250, 0.4);\n    background: rgba(255, 255, 255, 0.15);\n}\n\n#getWeatherBtn {\n    padding: 12px 30px;\n    font-size: 1.1rem;\n    font-family: \"Oxygen\", sans-serif;\n    font-weight: 400;\n    background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);\n    color: white;\n    border: 2px solid #60a5fa;\n    border-radius: 25px;\n    cursor: pointer;\n    transition: all 0.3s ease;\n    box-shadow: 0 0 15px rgba(59, 130, 246, 0.3);\n}\n\n#getWeatherBtn:hover {\n    background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);\n    box-shadow: 0 0 25px rgba(96, 165, 250, 0.5);\n    transform: translateY(-2px);\n}\n\n#currentWeather {\n    text-align: center;\n    margin-bottom: 50px;\n    background: rgba(59, 130, 246, 0.15);\n    padding: 40px;\n    border-radius: 20px;\n    border: 2px solid #3b82f6;\n    box-shadow: 0 0 30px rgba(59, 130, 246, 0.4);\n}\n\n#currentWeather h2 {\n    font-size: 2rem;\n    font-weight: 400;\n    margin-bottom: 20px;\n    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\n}\n\n#currentWeather p {\n    font-size: 1.5rem;\n    font-weight: 300;\n    margin-bottom: 20px;\n}\n\n#currentWeather img {\n    width: 80px;\n    height: 80px;\n    filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.3));\n}\n\n#forecastWeather {\n    text-align: center;\n}\n\n#forecastWeather h2 {\n    font-size: 2rem;\n    font-weight: 400;\n    margin-bottom: 30px;\n    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\n}\n\n#forecastCards {\n    display: flex;\n    justify-content: center;\n    gap: 20px;\n    flex-wrap: wrap;\n}\n\n.forecast-day {\n    flex: 1 1 auto;\n    max-width: 160px;\n    min-width: 140px;\n    background: rgba(59, 130, 246, 0.2);\n    border: 2px solid #60a5fa;\n    border-radius: 15px;\n    padding: 20px 15px;\n    transition: all 0.3s ease;\n    box-shadow: 0 0 20px rgba(96, 165, 250, 0.3);\n}\n\n.forecast-day:hover {\n    transform: translateY(-5px);\n    box-shadow: 0 0 30px rgba(96, 165, 250, 0.5);\n    border-color: #93c5fd;\n}\n\n.forecast-day p {\n    margin-bottom: 10px;\n    font-weight: 300;\n}\n\n.forecast-day p:first-child {\n    font-weight: 400;\n    font-size: 1.1rem;\n    margin-bottom: 15px;\n    color: #93c5fd;\n}\n\n.forecast-day img {\n    width: 40px;\n    height: 40px;\n    margin-top: 10px;\n    filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.2));\n}\n\n/* Responsive design */\n@media (max-width: 768px) {\n    #tempToggle {\n        position: static;\n        justify-content: center;\n        margin-bottom: 20px;\n    }\n    \n    #header {\n        margin-top: 20px;\n    }\n    \n    #header h1 {\n        font-size: 2.5rem;\n    }\n    \n    #cityInput {\n        min-width: 200px;\n        margin-right: 10px;\n        margin-bottom: 15px;\n    }\n    \n    #forecastCards {\n        gap: 15px;\n    }\n    \n    .forecast-day {\n        max-width: 120px;\n        min-width: 100px;\n        padding: 15px 10px;\n    }\n}\n\n@media (max-width: 480px) {\n    body {\n        padding: 10px;\n    }\n    \n    #search {\n        padding: 20px;\n    }\n    \n    #cityInput {\n        display: block;\n        margin: 0 auto 15px auto;\n    }\n    \n    #forecastCards {\n        flex-direction: column;\n        align-items: center;\n    }\n    \n    .forecast-day {\n        max-width: 200px;\n        width: 100%;\n    }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ }),

/***/ "./src/assets/icons/wi-day-cloudy.svg":
/*!********************************************!*\
  !*** ./src/assets/icons/wi-day-cloudy.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"d3602df8f1e9ba231925.svg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/icons/wi-day-cloudy.svg?\n}");

/***/ }),

/***/ "./src/assets/icons/wi-day-sunny.svg":
/*!*******************************************!*\
  !*** ./src/assets/icons/wi-day-sunny.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"c23e7855e1cb8ac7c36d.svg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/icons/wi-day-sunny.svg?\n}");

/***/ }),

/***/ "./src/assets/icons/wi-rain.svg":
/*!**************************************!*\
  !*** ./src/assets/icons/wi-rain.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"90fd14198e4b9af0dd81.svg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/icons/wi-rain.svg?\n}");

/***/ }),

/***/ "./src/assets/icons/wi-snow.svg":
/*!**************************************!*\
  !*** ./src/assets/icons/wi-snow.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"41a01da10b2c84abde09.svg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/icons/wi-snow.svg?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _assets_icons_wi_day_cloudy_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/icons/wi-day-cloudy.svg */ \"./src/assets/icons/wi-day-cloudy.svg\");\n/* harmony import */ var _assets_icons_wi_day_sunny_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/icons/wi-day-sunny.svg */ \"./src/assets/icons/wi-day-sunny.svg\");\n/* harmony import */ var _assets_icons_wi_rain_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/icons/wi-rain.svg */ \"./src/assets/icons/wi-rain.svg\");\n/* harmony import */ var _assets_icons_wi_snow_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/icons/wi-snow.svg */ \"./src/assets/icons/wi-snow.svg\");\nfunction _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = \"function\" == typeof Symbol ? Symbol : {}, n = r.iterator || \"@@iterator\", o = r.toStringTag || \"@@toStringTag\"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, \"_invoke\", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError(\"Generator is already running\"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = \"next\"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError(\"iterator result is not an object\"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i[\"return\"]) && t.call(i), c < 2 && (u = TypeError(\"The iterator does not provide a '\" + o + \"' method\"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, \"GeneratorFunction\")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, \"constructor\", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, \"constructor\", GeneratorFunction), GeneratorFunction.displayName = \"GeneratorFunction\", _regeneratorDefine2(GeneratorFunctionPrototype, o, \"GeneratorFunction\"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, \"Generator\"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, \"toString\", function () { return \"[object Generator]\"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }\nfunction _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, \"\", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o(\"next\", 0), o(\"throw\", 1), o(\"return\", 2); } }, _regeneratorDefine2(e, r, n, t); }\nfunction asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }\nfunction _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, \"next\", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, \"throw\", n); } _next(void 0); }); }; }\n // Importing the CSS file to apply styles\n\n\n\n\n\n// Global variable to track current temperature unit and weather data\nvar isCelsius = false;\nvar currentWeatherData = null;\nfunction getWeatherData(_x) {\n  return _getWeatherData.apply(this, arguments);\n} // Function to process JSON data and return object with relevant data\nfunction _getWeatherData() {\n  _getWeatherData = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(city) {\n    var response, data, processed, _t;\n    return _regenerator().w(function (_context) {\n      while (1) switch (_context.p = _context.n) {\n        case 0:\n          _context.p = 0;\n          _context.n = 1;\n          return fetch(\"https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/\".concat(city, \"?key=HSLWYUPP5G5KM5CS3FCF8EBTM\"));\n        case 1:\n          response = _context.v;\n          if (response.ok) {\n            _context.n = 2;\n            break;\n          }\n          throw new Error(\"HTTP Error: \" + response.status);\n        case 2:\n          _context.n = 3;\n          return response.json();\n        case 3:\n          data = _context.v;\n          processed = processWeatherData(data); // Store the weather data globally so we can convert units without re-fetching\n          currentWeatherData = processed;\n          displayWeatherData(processed);\n          _context.n = 5;\n          break;\n        case 4:\n          _context.p = 4;\n          _t = _context.v;\n          console.error(\"Error fetching weather data:\", _t);\n        case 5:\n          return _context.a(2);\n      }\n    }, _callee, null, [[0, 4]]);\n  }));\n  return _getWeatherData.apply(this, arguments);\n}\nfunction processWeatherData(data) {\n  // Current weather data\n  var location = data.resolvedAddress;\n  var currentConditions = data.currentConditions;\n  var currentTemp = currentConditions.temp;\n  var currentCond = currentConditions.conditions;\n\n  // Get data for the next 7 days\n  var forecast = data.days.slice(0, 7).map(function (day) {\n    return {\n      date: day.datetime,\n      tempHigh: day.tempmax,\n      tempLow: day.tempmin,\n      conditions: day.conditions\n    };\n  });\n  return {\n    location: location,\n    currentTemp: currentTemp,\n    currentCond: currentCond,\n    forecast: forecast\n  };\n}\n\n// Function to convert Fahrenheit to Celsius\nfunction fahrenheitToCelsius(fahrenheit) {\n  return Math.round((fahrenheit - 32) * 5 / 9);\n}\n\n// Function to convert Celsius to Fahrenheit\nfunction celsiusToFahrenheit(celsius) {\n  return Math.round(celsius * 9 / 5 + 32);\n}\n\n// Function to get temperature with correct unit\nfunction getTemperatureWithUnit(tempF) {\n  if (isCelsius) {\n    return \"\".concat(fahrenheitToCelsius(tempF), \"\\xB0C\");\n  } else {\n    return \"\".concat(Math.round(tempF), \"\\xB0F\");\n  }\n}\n\n// Function to display weather data on the page\nfunction displayWeatherData(weather) {\n  var currentDiv = document.getElementById(\"currentWeather\");\n  var forecastDiv = document.getElementById(\"forecastCards\");\n\n  // Clear previous content\n  currentDiv.innerHTML = \"\";\n  forecastDiv.innerHTML = \"\";\n  var currentIconPath = mapWeatherIcons(weather.currentCond);\n\n  // Display current weather with correct temperature unit\n  var currentHTML = \"\\n        <h2>Current Weather for \".concat(weather.location, \"</h2>\\n        <p>Temperature: \").concat(getTemperatureWithUnit(weather.currentTemp), \"</p>\\n        <img src=\\\"\").concat(currentIconPath, \"\\\" alt=\\\"\").concat(weather.currentCond, \"\\\">\\n    \");\n  currentDiv.innerHTML = currentHTML;\n\n  // 7-day Forecast with correct temperature units\n  var forecastHTML = weather.forecast.map(function (day) {\n    var iconPath = mapWeatherIcons(day.conditions);\n    return \"\\n            <div class=\\\"forecast-day\\\">\\n                <p>\".concat(day.date, \"</p>\\n                <p>High: \").concat(getTemperatureWithUnit(day.tempHigh), \"</p>\\n                <p>Low: \").concat(getTemperatureWithUnit(day.tempLow), \"</p>\\n                <img src=\\\"\").concat(iconPath, \"\\\" alt=\\\"\").concat(day.conditions, \"\\\">\\n            </div>\\n        \");\n  }).join(\"\"); // Take the new array of strings and combine into one string\n\n  forecastDiv.innerHTML = forecastHTML;\n}\nfunction mapWeatherIcons(condition) {\n  // Map conditions from api to icons in assets\n  var lowerCondition = condition.toLowerCase(); // Convert to lowercase once\n\n  if (lowerCondition.includes(\"clear\")) {\n    return _assets_icons_wi_day_sunny_svg__WEBPACK_IMPORTED_MODULE_2__;\n  }\n  if (lowerCondition.includes(\"cloudy\")) {\n    return _assets_icons_wi_day_cloudy_svg__WEBPACK_IMPORTED_MODULE_1__;\n  }\n  if (lowerCondition.includes(\"rain\")) {\n    return _assets_icons_wi_rain_svg__WEBPACK_IMPORTED_MODULE_3__;\n  }\n  if (lowerCondition.includes(\"snow\")) {\n    return _assets_icons_wi_snow_svg__WEBPACK_IMPORTED_MODULE_4__;\n  }\n  return _assets_icons_wi_day_sunny_svg__WEBPACK_IMPORTED_MODULE_2__; // Default icon if no match found\n}\n\n// Function to update temperature unit labels\nfunction updateTempLabels() {\n  var labels = document.querySelectorAll('.temp-label');\n  labels.forEach(function (label) {\n    return label.classList.remove('active');\n  });\n  if (isCelsius) {\n    labels[1].classList.add('active'); // °C label\n  } else {\n    labels[0].classList.add('active'); // °F label\n  }\n}\n\n// Event listeners\nvar city_button = document.getElementById(\"getWeatherBtn\");\ncity_button.addEventListener(\"click\", function () {\n  var city = document.getElementById(\"cityInput\").value.toLowerCase();\n  getWeatherData(city);\n});\n\n// Temperature toggle functionality\nvar tempToggle = document.getElementById(\"tempUnit\");\ntempToggle.addEventListener(\"change\", function () {\n  isCelsius = tempToggle.checked;\n  updateTempLabels();\n\n  // If we have weather data, re-display it with new units\n  if (currentWeatherData) {\n    displayWeatherData(currentWeatherData);\n  }\n});\n\n// Initialize temperature labels on page load\nupdateTempLabels();\n\n//# sourceURL=webpack://weather-app/./src/index.js?\n}");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather-app/./src/style.css?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;