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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Pacifico:wght@300;400;700;900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  overflow-x: hidden;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  font-size: 2em;\\r\\n  color: white;\\r\\n  margin-left: 20px;\\r\\n  font-family: \\\"Pacifico\\\", serif;\\r\\n}\\r\\n\\r\\n.Logo-2 {\\r\\n  color: red;\\r\\n}\\r\\n\\r\\n.logo-setup {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.header {\\r\\n  background-color: black;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.items {\\r\\n  color: azure;\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.item-list {\\r\\n  list-style: none;\\r\\n  display: flex;\\r\\n  gap: 3em;\\r\\n  align-items: center;\\r\\n  cursor: pointer;\\r\\n  margin-right: 1em;\\r\\n}\\r\\n\\r\\n.item-list li:hover {\\r\\n  color: red;\\r\\n}\\r\\n\\r\\n.main {\\r\\n  background-color: red;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  padding: 3%;\\r\\n}\\r\\n\\r\\n.main h1 {\\r\\n  color: azure;\\r\\n  padding: 2%;\\r\\n}\\r\\n\\r\\n.movies {\\r\\n  display: grid;\\r\\n  grid-template-columns: auto auto auto;\\r\\n  gap: 1em;\\r\\n}\\r\\n\\r\\n.movie-card {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 8px;\\r\\n  color: azure;\\r\\n}\\r\\n\\r\\n.movie-card div {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.movie-title {\\r\\n  font-size: 1em;\\r\\n  font-weight: 700;\\r\\n}\\r\\n\\r\\n.like-button {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.likes {\\r\\n  align-self: flex-end;\\r\\n}\\r\\n\\r\\n.comment-button {\\r\\n  padding: 5px;\\r\\n  border-radius: 0.5em;\\r\\n  background-color: black;\\r\\n  color: azure;\\r\\n  font-size: 1em;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.footer {\\r\\n  background-color: rgb(13, 13, 13);\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.footer-items {\\r\\n  display: flex;\\r\\n  justify-content: space-around;\\r\\n  padding: 2%;\\r\\n  align-items: center;\\r\\n  color: red;\\r\\n  font-family: sans-serif;\\r\\n}\\r\\n\\r\\n.popup {\\r\\n  background-color: red;\\r\\n  width: 100%;\\r\\n  height: 100vh;\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  bottom: 0;\\r\\n  overflow: auto;\\r\\n  z-index: 2;\\r\\n  padding: 100px 0;\\r\\n}\\r\\n\\r\\n.popup-content {\\r\\n  background-color: black;\\r\\n  width: 45%;\\r\\n  margin: auto;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  padding: 2%;\\r\\n  gap: 15px;\\r\\n  color: azure;\\r\\n}\\r\\n\\r\\n.image-container {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  gap: 30px;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.image-container img {\\r\\n  width: 90%;\\r\\n}\\r\\n\\r\\n.close-detail {\\r\\n  align-self: flex-start;\\r\\n  background-color: inherit;\\r\\n  border: none;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.close-detail i {\\r\\n  font-size: 3em;\\r\\n  font-weight: 900;\\r\\n  color: azure;\\r\\n}\\r\\n\\r\\n.movie-info {\\r\\n  display: grid;\\r\\n  grid-template-columns: auto auto;\\r\\n  column-gap: 1.5em;\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n.movie-info span {\\r\\n  color: red;\\r\\n  font-weight: 700;\\r\\n}\\r\\n\\r\\n.form {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 10px;\\r\\n}\\r\\n\\r\\n.form input {\\r\\n  width: 70%;\\r\\n  outline: none;\\r\\n  padding: 8px;\\r\\n}\\r\\n\\r\\n.form textarea {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.form button {\\r\\n  align-self: flex-start;\\r\\n  padding: 8px;\\r\\n  background-color: red;\\r\\n  color: azure;\\r\\n  border: none;\\r\\n  border-radius: 0.5rem;\\r\\n}\\r\\n\\r\\n.hide {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 765px) {\\r\\n  .movies {\\r\\n    grid-template-columns: auto auto;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 500px) {\\r\\n  .movies {\\r\\n    grid-template-columns: auto;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://afrix/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://afrix/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://afrix/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://afrix/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://afrix/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://afrix/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://afrix/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://afrix/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://afrix/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://afrix/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_store_API_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/store/API.js */ \"./src/modules/store/API.js\");\n/* harmony import */ var _modules_store_Data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/store/Data.js */ \"./src/modules/store/Data.js\");\n/* harmony import */ var _modules_popup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/popup.js */ \"./src/modules/popup.js\");\n/* harmony import */ var _modules_movieCounter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/movieCounter.js */ \"./src/modules/movieCounter.js\");\n/* harmony import */ var _modules_commentCounter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/commentCounter.js */ \"./src/modules/commentCounter.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst moviesList = document.querySelector('.movies');\r\nconst moviesCountDisplayer = document.querySelector('.movies-count');\r\n\r\nconst populateData = async (data) => {\r\n  const moviesData = await data;\r\n  moviesData.forEach((item) => {\r\n    const likeText = item.likes > 1 ? 'likes' : 'like';\r\n    const movieCard = document.createElement('div');\r\n    movieCard.className = 'movie-card';\r\n    movieCard.innerHTML = `\r\n        <img src=${item.image.medium} alt=\"Movie pic\"/>\r\n        <div>\r\n        <p class=\"movie-title\">${item.name}</p>\r\n        <i class=\"fa-regular fa-heart like-button\" id = ${item.id}></i>\r\n        </div>\r\n        <p class=\"likes\"><span id=\"likes-${item.id}\">${item.likes}</span> <span>${likeText}</span></p>\r\n        <button type='button' class=\"comment-button\" id=${item.id}>comments</button>\r\n        `;\r\n    moviesList.appendChild(movieCard);\r\n  });\r\n};\r\n\r\nconst initializeApp = async () => {\r\n  await populateData((0,_modules_store_Data_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\r\n  const totalMovies = (0,_modules_movieCounter_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n  moviesCountDisplayer.textContent = totalMovies;\r\n  const date = new Date();\r\n  document.querySelector('.date').innerHTML = `${date.getFullYear()}  `;\r\n};\r\n\r\nmoviesList.addEventListener('click', async (e) => {\r\n  if (e.target.className.includes('like-button')) {\r\n    (0,_modules_store_API_js__WEBPACK_IMPORTED_MODULE_1__.addLike)(e.target.id);\r\n    const likeCountSpan = document.querySelector(`#likes-${e.target.id}`);\r\n    likeCountSpan.textContent = Number(likeCountSpan.textContent) + 1;\r\n    likeCountSpan.nextElementSibling.textContent = Number(likeCountSpan.textContent) > 1 ? 'likes' : 'like';\r\n  }\r\n  if (e.target.className === 'comment-button') {\r\n    await (0,_modules_popup_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(e.target.id);\r\n    const totalComments = (0,_modules_commentCounter_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n    const commentText = document.querySelector('.comment-countText span');\r\n    commentText.textContent = totalComments;\r\n  }\r\n});\r\n\r\ninitializeApp();\r\n\n\n//# sourceURL=webpack://afrix/./src/index.js?");

/***/ }),

/***/ "./src/modules/commentCounter.js":
/*!***************************************!*\
  !*** ./src/modules/commentCounter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentCounter = () => {\n  const commentElement = document.querySelectorAll('.comment');\n  return commentElement.length;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentCounter);\n\n//# sourceURL=webpack://afrix/./src/modules/commentCounter.js?");

/***/ }),

/***/ "./src/modules/movieCounter.js":
/*!*************************************!*\
  !*** ./src/modules/movieCounter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst movieCounter = () => {\n  const moviesOnPage = document.querySelectorAll('.movie-card');\n  return moviesOnPage.length;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (movieCounter);\n\n//# sourceURL=webpack://afrix/./src/modules/movieCounter.js?");

/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _store_API_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store/API.js */ \"./src/modules/store/API.js\");\n\r\n\r\nconst popup = document.querySelector('.popup');\r\n\r\nconst openPopup = async (id) => {\r\n  let comments = await (0,_store_API_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(id);\r\n  const movie = await (0,_store_API_js__WEBPACK_IMPORTED_MODULE_0__.getMovieDetail)(id);\r\n  if (comments.length) {\r\n    comments = comments.map(\r\n      (item) => `<li class=\"comment\">${item.creation_date} ${item.username} : ${item.comment}</li>`,\r\n    );\r\n  }\r\n\r\n  popup.innerHTML = `\r\n    <div class=\"popup-content\">\r\n    <div class=\"image-container\">\r\n      <img\r\n        src=${movie.image.original}\r\n        alt=\"movie pic\"\r\n      />\r\n      <button type=\"button\" class=\"close-detail\">\r\n        <i class=\"fa-solid fa-x\"></i>\r\n      </button>\r\n    </div>\r\n    <h2>${movie.name}</h2>\r\n    <ul class=\"movie-info\">\r\n      <li><span>Network</span> : ${movie.network.name}</li>\r\n      <li><span>Country</span> : ${movie.network.country.name}</li>\r\n      <li><span>Genres</span> : ${movie.genres}</li>\r\n      <li><span>Status</span> : ${movie.status}</li>\r\n    </ul>\r\n    <h3 class = \"comment-countText\">Comments(<span>0</span>)</h3>\r\n    <ul class =\"comments-container\">\r\n     ${comments}\r\n    </ul>\r\n    <h3>Add Comment</h3>\r\n    <form action=\"\" class=\"form\">\r\n      <input type=\"text\" placeholder=\"Your name\" name= \"userName\"required />\r\n      <textarea name=\"commentText\" id=\"\" cols=\"30\" rows=\"10\" placeholder=\"Your Insights\" required></textarea>\r\n      <button type=\"submit\">Comment</button>\r\n    </form>\r\n    </div>\r\n    `;\r\n  popup.classList.remove('hide');\r\n\r\n  const commentsContainer = popup.querySelector('.comments-container');\r\n  const closeButton = popup.querySelector('.fa-x');\r\n  const commentForm = popup.querySelector('.form');\r\n  const { userName, commentText } = commentForm.elements;\r\n\r\n  closeButton.addEventListener('click', () => {\r\n    popup.classList.toggle('hide');\r\n  });\r\n\r\n  commentForm.addEventListener('submit', (e) => {\r\n    e.preventDefault();\r\n    (0,_store_API_js__WEBPACK_IMPORTED_MODULE_0__.addComment)(id, userName.value, commentText.value);\r\n    const date = new Date();\r\n    const createdAt = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;\r\n    const commentLi = document.createElement('li');\r\n    commentLi.innerHTML = `${createdAt} ${userName.value} : ${commentText.value}`;\r\n    commentsContainer.appendChild(commentLi);\r\n    const totalCommentsText = document.querySelector('.comment-countText span');\r\n    totalCommentsText.textContent = Number(totalCommentsText.textContent) + 1;\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (openPopup);\n\n//# sourceURL=webpack://afrix/./src/modules/popup.js?");

/***/ }),

/***/ "./src/modules/store/API.js":
/*!**********************************!*\
  !*** ./src/modules/store/API.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addComment\": () => (/* binding */ addComment),\n/* harmony export */   \"addLike\": () => (/* binding */ addLike),\n/* harmony export */   \"getComments\": () => (/* binding */ getComments),\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes),\n/* harmony export */   \"getMovieDetail\": () => (/* binding */ getMovieDetail),\n/* harmony export */   \"getMovies\": () => (/* binding */ getMovies)\n/* harmony export */ });\nconst getMovies = async () => {\n  const res = await fetch('https://api.tvmaze.com/shows');\n  const data = await res.json();\n  return data.slice(0, 9);\n};\nconst getMovieDetail = async (id) => {\n  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);\n  const data = await res.json();\n  return data;\n};\n\nconst getLikes = async () => {\n  const res = await fetch(\n    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/iO26MOgyDZzMsAn4LSwJ/likes',\n  );\n  const data = await res.json();\n  return data;\n};\n\nconst getComments = async (id) => {\n  let data = [];\n\n  const res = await fetch(\n    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/iO26MOgyDZzMsAn4LSwJ/comments?item_id=${id}`,\n  );\n  if (res.status === 200) {\n    data = await res.json();\n  }\n  return data;\n};\n\nconst addLike = async (id) => {\n  const res = await fetch(\n    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/iO26MOgyDZzMsAn4LSwJ/likes',\n    {\n      method: 'POST',\n      body: JSON.stringify({ item_id: Number(id) }),\n      headers: {\n        'Content-type': 'application/json; charset=UTF-8',\n      },\n    },\n  );\n  return res;\n};\n\nconst addComment = async (id, name, comment) => {\n  const res = await fetch(\n    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/iO26MOgyDZzMsAn4LSwJ/comments',\n    {\n      method: 'POST',\n      body: JSON.stringify({\n        item_id: id,\n        username: name,\n        comment,\n      }),\n      headers: {\n        'Content-type': 'application/json; charset=UTF-8',\n      },\n    },\n  );\n  return res;\n};\n\n//# sourceURL=webpack://afrix/./src/modules/store/API.js?");

/***/ }),

/***/ "./src/modules/store/Data.js":
/*!***********************************!*\
  !*** ./src/modules/store/Data.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _API_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./API.js */ \"./src/modules/store/API.js\");\n\n\nconst moviesDataCollection = async () => {\n  const movieLikes = await (0,_API_js__WEBPACK_IMPORTED_MODULE_0__.getLikes)();\n  let moviesData = await (0,_API_js__WEBPACK_IMPORTED_MODULE_0__.getMovies)();\n  moviesData = moviesData.map((item) => {\n    const foundMovie = movieLikes.find(\n      (element) => Number(element.item_id) === Number(item.id),\n    ) || 0;\n    return {\n      id: item.id,\n      name: item.name,\n      image: item.image,\n      network: item.network.name,\n      country: item.network.country.name,\n      genres: item.genres,\n      status: item.status,\n      likes: foundMovie.likes || 0,\n    };\n  });\n  return moviesData;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (moviesDataCollection);\n\n\n//# sourceURL=webpack://afrix/./src/modules/store/Data.js?");

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