module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/querytest.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/querytest.js":
/*!****************************!*\
  !*** ./pages/querytest.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/rekha/my-next-app/pages/querytest.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction QuerySample({\n  query: {\n    search\n  }\n}) {\n  const updateQuery = newQuery => {\n    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push({\n      pathname: \"/querytest\",\n      query: {\n        search: encodeURI(newQuery)\n      }\n    });\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    if (search) {\n      console.log(\"Initial query / update caught!\");\n    }\n  }, [search]);\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 5\n    }\n  }, __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }, \"Current query is \", search), __jsx(\"button\", {\n    onClick: () => {\n      updateQuery(Math.random());\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }, \"Update query\"));\n}\n\nQuerySample.getInitialProps = ({\n  query\n}) => {\n  return {\n    query\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (QuerySample);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9xdWVyeXRlc3QuanM/OWFhNyJdLCJuYW1lcyI6WyJRdWVyeVNhbXBsZSIsInF1ZXJ5Iiwic2VhcmNoIiwidXBkYXRlUXVlcnkiLCJuZXdRdWVyeSIsIlJvdXRlciIsInB1c2giLCJwYXRobmFtZSIsImVuY29kZVVSSSIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJNYXRoIiwicmFuZG9tIiwiZ2V0SW5pdGlhbFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsV0FBVCxDQUFxQjtBQUFFQyxPQUFLLEVBQUU7QUFBRUM7QUFBRjtBQUFULENBQXJCLEVBQTRDO0FBQzFDLFFBQU1DLFdBQVcsR0FBSUMsUUFBRCxJQUFjO0FBQ2hDQyxzREFBTSxDQUFDQyxJQUFQLENBQVk7QUFDVkMsY0FBUSxFQUFFLFlBREE7QUFFVk4sV0FBSyxFQUFFO0FBQUVDLGNBQU0sRUFBRU0sU0FBUyxDQUFDSixRQUFEO0FBQW5CO0FBRkcsS0FBWjtBQUlELEdBTEQ7O0FBT0FLLHlEQUFTLENBQUMsTUFBTTtBQUNkLFFBQUlQLE1BQUosRUFBWTtBQUNWUSxhQUFPLENBQUNDLEdBQVIsQ0FBWSxnQ0FBWjtBQUNEO0FBQ0YsR0FKUSxFQUlOLENBQUNULE1BQUQsQ0FKTSxDQUFUO0FBTUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBc0JBLE1BQXRCLENBREYsRUFFRTtBQUNFLFdBQU8sRUFBRSxNQUFNO0FBQ2JDLGlCQUFXLENBQUNTLElBQUksQ0FBQ0MsTUFBTCxFQUFELENBQVg7QUFDRCxLQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkYsQ0FERjtBQVlEOztBQUVEYixXQUFXLENBQUNjLGVBQVosR0FBOEIsQ0FBQztBQUFFYjtBQUFGLENBQUQsS0FBZTtBQUMzQyxTQUFPO0FBQUVBO0FBQUYsR0FBUDtBQUNELENBRkQ7O0FBSWVELDBFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcXVlcnl0ZXN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBRdWVyeVNhbXBsZSh7IHF1ZXJ5OiB7IHNlYXJjaCB9IH0pIHtcbiAgY29uc3QgdXBkYXRlUXVlcnkgPSAobmV3UXVlcnkpID0+IHtcbiAgICBSb3V0ZXIucHVzaCh7XG4gICAgICBwYXRobmFtZTogXCIvcXVlcnl0ZXN0XCIsXG4gICAgICBxdWVyeTogeyBzZWFyY2g6IGVuY29kZVVSSShuZXdRdWVyeSkgfSxcbiAgICB9KTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzZWFyY2gpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiSW5pdGlhbCBxdWVyeSAvIHVwZGF0ZSBjYXVnaHQhXCIpO1xuICAgIH1cbiAgfSwgW3NlYXJjaF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMj5DdXJyZW50IHF1ZXJ5IGlzIHtzZWFyY2h9PC9oMj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIHVwZGF0ZVF1ZXJ5KE1hdGgucmFuZG9tKCkpO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICBVcGRhdGUgcXVlcnlcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5RdWVyeVNhbXBsZS5nZXRJbml0aWFsUHJvcHMgPSAoeyBxdWVyeSB9KSA9PiB7XG4gIHJldHVybiB7IHF1ZXJ5IH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBRdWVyeVNhbXBsZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/querytest.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });