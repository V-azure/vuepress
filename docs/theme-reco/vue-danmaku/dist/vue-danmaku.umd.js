(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["vue"], factory);
	else if(typeof exports === 'object')
		exports["vue-danmaku"] = factory(require("vue"));
	else
		root["vue-danmaku"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "14ef":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8775");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "24fb":
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

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesClient; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "8775":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("9dd0");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("16e18eaa", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "9dd0":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".vue-danmaku{position:relative;overflow:hidden}.vue-danmaku .danmus{position:absolute;left:0;top:0;width:100%;height:100%;opacity:0;transition:all .3s}.vue-danmaku .danmus.show{opacity:1}.vue-danmaku .danmus.paused .dm.move{-webkit-animation-play-state:paused;animation-play-state:paused}.vue-danmaku .danmus .dm{position:absolute;right:0;font-size:20px;color:#ddd;white-space:pre;transform:translateX(100%);transform-style:preserve-3d}.vue-danmaku .danmus .dm.move{will-change:transform;-webkit-animation-name:moveLeft;animation-name:moveLeft;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-play-state:running;animation-play-state:running}.vue-danmaku .danmus .dm.pause{-webkit-animation-play-state:paused;animation-play-state:paused;z-index:10}@keyframes moveLeft{0%{transform:translateX(100%)}to{transform:translateX(var(--dm-left-offset))}}@-webkit-keyframes moveLeft{0%{-webkit-transform:translateX(100%)}to{-webkit-transform:translateX(var(--dm-left-offset))}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"681bb61a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib/main.vue?vue&type=template&id=10e049f0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"container",staticClass:"vue-danmaku"},[_c('div',{ref:"dmContainer",class:['danmus', { show: !_vm.hidden }, { paused: _vm.paused }]}),_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/lib/main.vue?vue&type=template&id=10e049f0&

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue","amd":"vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib/main.vue?vue&type=script&lang=js&
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//

/* harmony default export */ var mainvue_type_script_lang_js_ = ({
  props: {
    // 弹幕列表数据
    danmus: {
      type: Array,
      required: true,
      "default": function _default() {
        return [];
      }
    },
    // 轨道数
    channels: {
      type: Number,
      "default": 0
    },
    // 自动播放
    autoplay: {
      type: Boolean,
      "default": true
    },
    // 循环播放
    loop: {
      type: Boolean,
      "default": false
    },
    // 开启弹幕插槽
    useSlot: {
      type: Boolean,
      "default": false
    },
    // 弹幕刷新频率(ms)
    debounce: {
      type: Number,
      "default": 100
    },
    // 弹幕速度
    speeds: {
      type: Number,
      "default": 200
    },
    // 随机轨道注入弹幕
    randomChannel: {
      type: Boolean,
      "default": false
    },
    // 弹幕字号（仅文本模式）
    fontSize: {
      type: Number,
      "default": 18
    },
    // 弹幕垂直间距
    top: {
      type: Number,
      "default": 4
    },
    // 弹幕水平间距
    right: {
      type: Number,
      "default": 0
    },
    // 是否开启悬浮暂停
    isSuspend: {
      type: Boolean,
      "default": false
    },
    // 弹幕样式
    extraStyle: {
      type: String,
      "default": ''
    }
  },
  data: function data() {
    return {
      $container: null,
      $dmContainer: null,
      container: {
        width: 0,
        // 容器宽度
        height: 0 // 容器高度

      },
      calcChannels: 0,
      danmuHeight: 0,
      // 弹幕元素高度
      danmuList: [],
      timer: null,
      index: 0,
      hidden: false,
      paused: false,
      danChannel: {}
    };
  },
  computed: {
    danmu: function danmu() {
      return {
        height: this.danmuHeight,
        fontSize: this.fontSize,
        speeds: this.speeds,
        top: this.top,
        right: this.right
      };
    },
    danmaku: function danmaku() {
      return {
        channels: this.channels || this.calcChannels,
        autoplay: this.autoplay,
        loop: this.loop,
        useSlot: this.useSlot,
        debounce: this.debounce,
        randomChannel: this.randomChannel
      };
    }
  },
  watch: {
    danmus: {
      handler: function handler() {
        this.initDanmuList();
      },
      deep: true
    }
  },
  created: function created() {},
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      _this.init();
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.clear();
  },
  methods: {
    init: function init() {
      this.initCore();
      this.initDanmuList();
      this.isSuspend && this.initSuspendEvents();

      if (this.danmaku.autoplay) {
        this.play();
      }
    },
    initCore: function initCore() {
      this.$container = this.$refs.container;
      this.$dmContainer = this.$refs.dmContainer;
      this.container = {
        width: this.$container.offsetWidth,
        height: this.$container.offsetHeight
      };
    },
    initDanmuList: function initDanmuList() {
      this.danmuList = _toConsumableArray(this.danmus);
    },
    play: function play() {
      var _this2 = this;

      this.paused = false;

      if (!this.timer) {
        this.timer = setInterval(function () {
          return _this2.draw();
        }, this.danmaku.debounce);
      }
    },
    draw: function draw() {
      if (!this.paused && this.danmuList.length) {
        if (this.index > this.danmuList.length - 1) {
          var screenDanmus = this.$refs.dmContainer.children.length;

          if (this.danmaku.loop && screenDanmus < this.index) {
            // 一轮弹幕插入完毕
            this.$emit('list-end');
            this.index = 0;
            this.insert();
          }
        } else {
          this.insert();
        }
      }
    },
    insert: function insert() {
      var _this3 = this;

      var index = this.danmaku.loop ? this.index % this.danmuList.length : this.index;
      var el = document.createElement("div");

      if (this.danmaku.useSlot) {
        el = this.getSlotComponent(index).$el;
      } else {
        el.innerHTML = this.danmuList[index];
        el.setAttribute('style', this.extraStyle);
        el.style.fontSize = "".concat(this.danmu.fontSize, "px");
        el.style.lineHeight = "".concat(this.danmu.fontSize, "px");
      }

      el.classList.add('dm');
      this.$dmContainer.appendChild(el);
      el.style.opacity = 0;
      this.$nextTick(function () {
        if (!_this3.danmu.height) {
          _this3.danmuHeight = el.offsetHeight;
        } // 如果没有设置轨道数，则在获取到所有高度后计算出最大轨道数


        if (!_this3.channels) {
          _this3.calcChannels = Math.floor(_this3.container.height / (_this3.danmu.height + _this3.danmu.top));
        }

        var channelIndex = _this3.getChannelIndex(el);

        if (channelIndex >= 0) {
          var width = el.offsetWidth;
          var height = _this3.danmu.height;
          el.classList.add('move');
          el.style.opacity = 1; // 匀速
          // const speeds = (this.container.width + width) / this.danmu.speeds

          var speeds = _this3.container.width / _this3.danmu.speeds;
          el.style.animationDuration = "".concat(speeds, "s");
          el.style.top = channelIndex * (height + _this3.danmu.top) + 'px';
          el.style.width = width + _this3.danmu.right + 'px';
          el.style.setProperty('--dm-left-offset', "-".concat(_this3.container.width, "px"));
          el.dataset.index = _this3.index;
          el.addEventListener('animationend', function () {
            if (Number(el.dataset.index) === _this3.danmuList.length - 1 && !_this3.danmaku.loop) {
              _this3.$emit('play-end', el.dataset.index);
            }

            _this3.$dmContainer.removeChild(el);
          });

          if (el.classList.length > 0) {
            _this3.index++;
          }
        } else {
          if (el.classList.length > 0) {
            _this3.$dmContainer.removeChild(el);
          }
        }
      });
    },
    getSlotComponent: function getSlotComponent(index) {
      var that = this;
      var DmComponent = external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_default.a.extend({
        props: {
          danmu: [String, Object],
          index: Number
        },
        render: function render(createElement) {
          return createElement('div', [that.$scopedSlots.dm({
            danmu: this.danmu,
            index: this.index
          })]);
        }
      });
      var ele = new DmComponent({
        propsData: {
          danmu: this.danmuList[index],
          index: index
        }
      }).$mount(document.createElement('div'));
      return ele;
    },
    getChannelIndex: function getChannelIndex(el) {
      var _this4 = this;

      var channels = _toConsumableArray(Array(this.danmaku.channels).keys());

      if (this.danmaku.randomChannel) {
        channels = channels.sort(function () {
          return 0.5 - Math.random();
        });
      }

      var _iterator = _createForOfIteratorHelper(channels),
          _step;

      try {
        var _loop = function _loop() {
          var i = _step.value;
          var items = _this4.danChannel[i];

          if (items && items.length) {
            for (var j = 0; j < items.length; j++) {
              var danRight = _this4.getDanRight(items[j]) - 10; // 安全距离判断

              if (danRight <= (el.offsetWidth - items[j].offsetWidth) * 0.88 || danRight <= 0) {
                break;
              }

              if (j === items.length - 1) {
                _this4.danChannel[i].push(el);

                el.addEventListener('animationend', function () {
                  return _this4.danChannel[i].splice(0, 1);
                });
                return {
                  v: i % _this4.danmaku.channels
                };
              }
            }
          } else {
            _this4.danChannel[i] = [el];
            el.addEventListener('animationend', function () {
              return _this4.danChannel[i].splice(0, 1);
            });
            return {
              v: i % _this4.danmaku.channels
            };
          }
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _ret = _loop();

          if (_typeof(_ret) === "object") return _ret.v;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return -1;
    },
    // 弹幕右侧到屏幕右侧的距离
    getDanRight: function getDanRight(el) {
      var eleWidth = el.offsetWidth || parseInt(el.style.width);
      var eleRight = el.getBoundingClientRect().right || this.$dmContainer.getBoundingClientRect().right + eleWidth;
      return this.$dmContainer.getBoundingClientRect().right - eleRight;
    },
    clearTimer: function clearTimer() {
      clearInterval(this.timer);
      this.timer = null;
    },
    // 弹幕悬浮事件
    initSuspendEvents: function initSuspendEvents() {
      var suspendDanmus = [];
      this.$refs.dmContainer.addEventListener('mousemove', function (e) {
        var target = e.target;

        if (!target.className.includes('dm')) {
          target = target.closest('.dm') || e.target;
        }

        if (!target.className.includes('dm')) return;
        target.classList.add('pause');
        suspendDanmus.push(target);
      });
      this.$refs.dmContainer.addEventListener('mouseout', function (e) {
        var target = e.target;

        if (!target.className.includes('dm')) {
          target = target.closest('.dm') || e.target;
        }

        if (!target.className.includes('dm')) return;
        target.classList.remove('pause');
        suspendDanmus.forEach(function (item) {
          item.classList.remove('pause');
        });
        suspendDanmus = [];
      });
    },
    clear: function clear() {
      this.clearTimer();
      this.index = 0;
    },
    reset: function reset() {
      this.$container = null;
      this.$dmContainer = null;
      this.danmuHeight = 0;
      this.init();
    },
    stop: function stop() {
      this.danChannel = {};
      this.$dmContainer.innerHTML = '';
      this.paused = true;
      this.hidden = false;
      this.clear();
      this.initDanmuList();
    },
    pause: function pause() {
      this.paused = true;
    },
    // 添加弹幕（插入到当前播放的弹幕位置）
    add: function add(danmu) {
      if (this.index === this.danmuList.length) {
        // 如果当前弹幕已经播放完了，那么仍然走 push
        this.push(danmu);
        return this.danmuList.length - 1;
      } else {
        var index = this.index % this.danmuList.length;
        this.danmuList.splice(index, 0, danmu);
        return index + 1;
      }
    },
    // 添加弹幕（插入到弹幕末尾）
    push: function push(danmu) {
      this.danmuList.push(danmu);
      return this.danmuList.length - 1;
    },
    getPlayState: function getPlayState() {
      return !this.paused;
    },
    show: function show() {
      this.hidden = false;
    },
    hide: function hide() {
      this.hidden = true;
    },
    resize: function resize() {
      this.initCore();
      var items = this.$dmContainer.getElementsByClassName('dm');

      for (var i = 0; i < items.length; i++) {
        items[i].style.setProperty('--dm-left-offset', "-".concat(this.container.width, "px"));
      }
    }
  }
});
// CONCATENATED MODULE: ./src/lib/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_mainvue_type_script_lang_js_ = (mainvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/lib/main.vue?vue&type=style&index=0&lang=scss&
var mainvue_type_style_index_0_lang_scss_ = __webpack_require__("14ef");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/lib/main.vue






/* normalize component */

var component = normalizeComponent(
  lib_mainvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var main = (component.exports);
// CONCATENATED MODULE: ./src/lib/index.js


main.install = function (Vue) {
  Vue.component('vueDanmaku', main);
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(main);
}

/* harmony default export */ var lib = (main);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (lib);



/***/ })

/******/ })["default"];
});
//# sourceMappingURL=vue-danmaku.umd.js.map