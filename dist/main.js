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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n<h4>\", \" (@\", \")</h4>\\n<img src=\\\"\", \"\\\" alt=\\\"\", \"\\\" height=\\\"100\\\">\\n<dl>\\n    <dt>Location</dt>\\n    <dd>\", \"</dd>\\n    <dt>Repositories</dt>\\n    <dd>\", \"</dd>\\n</dl>\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\nfunction getUserInfo(userId) {\n  var request = new XMLHttpRequest();\n  request.open(\"GET\", \"https://api.github.com/users/atsushiishida\");\n  request.addEventListener(\"load\", function (event) {\n    if (event.target.status !== 200) {\n      console.log(\"Error: $(event.target.status):$(event.target.statusText)\");\n      return;\n    }\n\n    var userInfo = JSON.parse(event.target.responseText);\n    var view = escapeHTML(_templateObject(), userInfo.name, userInfo.login, userInfo.avatar_url, userInfo.login, userInfo.location, userInfo.public_repos);\n    window.a = view;\n    var result = document.getElementById(\"result\");\n    result.innerHTML = view;\n  });\n  request.addEventListener(\"error\", function () {\n    console.error(\"Network Error\");\n  });\n  request.send();\n} // webpackでは、globalスコープに関数を定義しないため、明示的に記載する必要がある\n\n\nwindow.getUserInfo = getUserInfo; //文字列をエスケープする関数\n\nfunction escapeSpecialChars(str) {\n  return str.replace(/&/g, \"&amp;\").replace(/</g, \"&lt;\").replace(/>/g, \"&gt;\").replace(/\"/g, \"&quot;\").replace(/'/g, \"&#039;\");\n} // templateリテラルの処理。\n// stringsには、リテラルの配列\n// ...valuesには、処理された大様式の値が入る\n\n\nfunction escapeHTML(strings) {\n  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n    values[_key - 1] = arguments[_key];\n  }\n\n  return strings.reduce(function (result, string, i) {\n    console.log(string);\n    var value = values[i - 1];\n\n    if (typeof value === \"string\") {\n      return result + escapeSpecialChars(value) + string;\n    } else {\n      return result + String(value) + string;\n    }\n  });\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });