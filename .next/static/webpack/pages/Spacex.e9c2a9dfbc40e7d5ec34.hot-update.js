webpackHotUpdate_N_E("pages/Spacex",{

/***/ "./pages/Spacex.js":
/*!*************************!*\
  !*** ./pages/Spacex.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/filter */ \"./components/filter/index.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/header */ \"./components/header/index.js\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/footer */ \"./components/footer/index.js\");\n/* harmony import */ var _Resources_main_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Resources/main.scss */ \"./Resources/main.scss\");\n/* harmony import */ var _Resources_main_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Resources_main_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Api */ \"./Api.js\");\n/* harmony import */ var _components_core_heading_TextHeader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/core/heading/TextHeader */ \"./components/core/heading/TextHeader.js\");\n\n\n\nvar _jsxFileName = \"/home/rekha/my-next-app/pages/Spacex.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\nfunction Spacex(_ref) {\n  _s();\n\n  var _this = this;\n\n  var router = _ref.router,\n      spacex = _ref.spacex,\n      query = _ref.query,\n      history = _ref.history,\n      error = _ref.error;\n  console.log(\"props rendered\", query);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(spacex),\n      data = _useState[0],\n      setData = _useState[1]; // const { query } = router;\n\n\n  var handleApiCall = function handleApiCall(params) {\n    Object(_Api__WEBPACK_IMPORTED_MODULE_9__[\"fetchSpacex\"])(params).then(function (json) {\n      setData(json);\n    });\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    // verify props have changed to avoid an infinite loop\n    // fetch data based on the new query\n    handleApiCall(query);\n    console.log(\"handleApiCall\", query);\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (1) {\n      console.log(\"Initial query / update caught!\");\n    }\n  }, []); //   console.log(\"1111111111\", data);\n\n  if (!data) {\n    return __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 12\n      }\n    }, \"Error: \", error);\n  } else {\n    return __jsx(\"div\", {\n      className: \"row\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 7\n      }\n    }, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_6__[\"Header\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }\n    }), __jsx(\"section\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }\n    }, __jsx(\"nav\", {\n      className: \"nav\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 11\n      }\n    }, __jsx(_components_filter__WEBPACK_IMPORTED_MODULE_5__[\"FiltersComponent\"], {\n      history: history,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 13\n      }\n    })), __jsx(\"article\", {\n      className: \"column article\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 11\n      }\n    }, data.map(function (item, index) {\n      return __jsx(\"div\", {\n        key: index,\n        className: \"cards_item\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 15\n        }\n      }, __jsx(\"img\", {\n        src: item.links.mission_patch_small,\n        className: \"card_image\",\n        alt: \"User Icon\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 17\n        }\n      }), __jsx(\"div\", {\n        className: \"card_content\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 17\n        }\n      }, __jsx(\"a\", {\n        href: \"#\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 19\n        }\n      }, item.mission_name, \" #\", item.flight_number), item.mission_id.length && __jsx(\"ul\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 21\n        }\n      }, __jsx(\"b\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 23\n        }\n      }, \"Mission Ids\"), item.mission_id.map(function (id) {\n        return __jsx(\"li\", {\n          key: id,\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 25\n          }\n        }, id);\n      })), item.launch_year && __jsx(\"div\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 21\n        }\n      }, __jsx(\"b\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 23\n        }\n      }, \"Launch Year:\"), item.launch_year), __jsx(\"p\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 19\n        }\n      }, __jsx(\"b\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 21\n        }\n      }, \"Successful Launch:-\"), item.launch_success ? \"True\" : \"false\")));\n    }))), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_7__[\"Footer\"], {\n      devName: \"Rekha\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 9\n      }\n    }));\n  } // }\n\n}\n\n_s(Spacex, \"tDB2Lb00zmYuQOuIaMJ9vmyZzCw=\");\n\n_c = Spacex;\n\nSpacex.getInitialProps = /*#__PURE__*/function () {\n  var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {\n    var query, url, params, res;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            query = _ref2.query;\n            console.log(\"ctx\", query);\n            _context.prev = 2;\n            url = new URL(\"https://api.spacexdata.com/v3/launches?limit=100\");\n            params = query; // or:\n\n            url.search = new URLSearchParams(params).toString();\n            _context.next = 8;\n            return fetch(url);\n\n          case 8:\n            res = _context.sent;\n            return _context.abrupt(\"return\", {\n              spacex: res.data,\n              query: query\n            });\n\n          case 12:\n            _context.prev = 12;\n            _context.t0 = _context[\"catch\"](2);\n            return _context.abrupt(\"return\", {\n              error: _context.t0\n            });\n\n          case 15:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[2, 12]]);\n  }));\n\n  return function (_x) {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"withRouter\"])(Spacex));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Spacex\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvU3BhY2V4LmpzPzFlZTkiXSwibmFtZXMiOlsiU3BhY2V4Iiwicm91dGVyIiwic3BhY2V4IiwicXVlcnkiLCJoaXN0b3J5IiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwidXNlU3RhdGUiLCJkYXRhIiwic2V0RGF0YSIsImhhbmRsZUFwaUNhbGwiLCJwYXJhbXMiLCJmZXRjaFNwYWNleCIsInRoZW4iLCJqc29uIiwidXNlRWZmZWN0IiwibWFwIiwiaXRlbSIsImluZGV4IiwibGlua3MiLCJtaXNzaW9uX3BhdGNoX3NtYWxsIiwibWlzc2lvbl9uYW1lIiwiZmxpZ2h0X251bWJlciIsIm1pc3Npb25faWQiLCJsZW5ndGgiLCJpZCIsImxhdW5jaF95ZWFyIiwibGF1bmNoX3N1Y2Nlc3MiLCJnZXRJbml0aWFsUHJvcHMiLCJ1cmwiLCJVUkwiLCJzZWFyY2giLCJVUkxTZWFyY2hQYXJhbXMiLCJ0b1N0cmluZyIsImZldGNoIiwicmVzIiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE1BQVQsT0FBMkQ7QUFBQTs7QUFBQTs7QUFBQSxNQUF6Q0MsTUFBeUMsUUFBekNBLE1BQXlDO0FBQUEsTUFBakNDLE1BQWlDLFFBQWpDQSxNQUFpQztBQUFBLE1BQXpCQyxLQUF5QixRQUF6QkEsS0FBeUI7QUFBQSxNQUFsQkMsT0FBa0IsUUFBbEJBLE9BQWtCO0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTO0FBQ3pEQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWixFQUE4QkosS0FBOUI7O0FBRHlELGtCQUVqQ0ssc0RBQVEsQ0FBQ04sTUFBRCxDQUZ5QjtBQUFBLE1BRWxETyxJQUZrRDtBQUFBLE1BRTVDQyxPQUY0QyxpQkFHekQ7OztBQUVBLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFB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QUFJLENBQUNVLGNBQUwsR0FBc0IsTUFBdEIsR0FBK0IsT0FGbEMsQ0FsQkYsQ0FORixDQURRO0FBQUEsS0FBVCxDQURILENBTEYsQ0FGRixFQTJDRSxNQUFDLHlEQUFEO0FBQVEsYUFBTyxFQUFDLE9BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUEzQ0YsQ0FERjtBQXVGRCxHQWpId0QsQ0FrSHpEOztBQUNEOztHQW5IUTVCLE07O0tBQUFBLE07O0FBb0hUQSxNQUFNLENBQUM2QixlQUFQO0FBQUEsK0xBQXlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFTMUIsaUJBQVQsU0FBU0EsS0FBVDtBQUN2QkcsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVosRUFBbUJKLEtBQW5CO0FBRHVCO0FBR2pCMkIsZUFIaUIsR0FHWCxJQUFJQyxHQUFKLENBQVEsa0RBQVIsQ0FIVztBQUlqQm5CLGtCQUppQixHQUlSVCxLQUpRLEVBSUQ7O0FBQ3BCMkIsZUFBRyxDQUFDRSxNQUFKLEdBQWEsSUFBSUMsZUFBSixDQUFvQnJCLE1BQXBCLEVBQTRCc0IsUUFBNUIsRUFBYjtBQUxxQjtBQUFBLG1CQU1IQyxLQUFLLENBQUNMLEdBQUQsQ0FORjs7QUFBQTtBQU1mTSxlQU5lO0FBQUEsNkNBT2Q7QUFBRWxDLG9CQUFNLEVBQUVrQyxHQUFHLENBQUMzQixJQUFkO0FBQW9CTixtQkFBSyxFQUFMQTtBQUFwQixhQVBjOztBQUFBO0FBQUE7QUFBQTtBQUFBLDZDQVNkO0FBQUVFLG1CQUFLO0FBQVAsYUFUYzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF6Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFZZSxxRUFBQWdDLDhEQUFVLENBQUNyQyxNQUFELENBQXpCIiwiZmlsZSI6Ii4vcGFnZXMvU3BhY2V4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IEZpbHRlcnNDb21wb25lbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9maWx0ZXJcIjtcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRlclwiO1xuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9vdGVyXCI7XG5pbXBvcnQgXCIuLi9SZXNvdXJjZXMvbWFpbi5zY3NzXCI7XG5pbXBvcnQgeyBmZXRjaFNwYWNleCB9IGZyb20gXCIuLi9BcGlcIjtcbmltcG9ydCB7IFRleHRIZWFkZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9jb3JlL2hlYWRpbmcvVGV4dEhlYWRlclwiO1xuXG5mdW5jdGlvbiBTcGFjZXgoeyByb3V0ZXIsIHNwYWNleCwgcXVlcnksIGhpc3RvcnksIGVycm9yIH0pIHtcbiAgY29uc29sZS5sb2coXCJwcm9wcyByZW5kZXJlZFwiLCBxdWVyeSk7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHNwYWNleCk7XG4gIC8vIGNvbnN0IHsgcXVlcnkgfSA9IHJvdXRlcjtcblxuICBjb25zdCBoYW5kbGVBcGlDYWxsID0gKHBhcmFtcykgPT4ge1xuICAgIGZldGNoU3BhY2V4KHBhcmFtcykudGhlbigoanNvbikgPT4ge1xuICAgICAgc2V0RGF0YShqc29uKTtcbiAgICB9KTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIHZlcmlmeSBwcm9wcyBoYXZlIGNoYW5nZWQgdG8gYXZvaWQgYW4gaW5maW5pdGUgbG9vcFxuICAgIC8vIGZldGNoIGRhdGEgYmFzZWQgb24gdGhlIG5ldyBxdWVyeVxuICAgIGhhbmRsZUFwaUNhbGwocXVlcnkpO1xuICAgIGNvbnNvbGUubG9nKFwiaGFuZGxlQXBpQ2FsbFwiLCBxdWVyeSk7XG4gIH0sIFtdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoMSkge1xuICAgICAgY29uc29sZS5sb2coXCJJbml0aWFsIHF1ZXJ5IC8gdXBkYXRlIGNhdWdodCFcIik7XG4gICAgfVxuICB9LCBbXSk7XG4gIC8vICAgY29uc29sZS5sb2coXCIxMTExMTExMTExXCIsIGRhdGEpO1xuICBpZiAoIWRhdGEpIHtcbiAgICByZXR1cm4gPGRpdj5FcnJvcjoge2Vycm9yfTwvZGl2PjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdlwiPlxuICAgICAgICAgICAgPEZpbHRlcnNDb21wb25lbnQgaGlzdG9yeT17aGlzdG9yeX0gLz5cbiAgICAgICAgICA8L25hdj5cblxuICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cImNvbHVtbiBhcnRpY2xlXCI+XG4gICAgICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiY2FyZHNfaXRlbVwiPlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz17aXRlbS5saW5rcy5taXNzaW9uX3BhdGNoX3NtYWxsfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZF9pbWFnZVwiXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJVc2VyIEljb25cIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLm1pc3Npb25fbmFtZX0gI3tpdGVtLmZsaWdodF9udW1iZXJ9XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICB7aXRlbS5taXNzaW9uX2lkLmxlbmd0aCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICA8Yj5NaXNzaW9uIElkczwvYj5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5taXNzaW9uX2lkLm1hcCgoaWQpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2lkfT57aWR9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICB7aXRlbS5sYXVuY2hfeWVhciAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGI+TGF1bmNoIFllYXI6PC9iPlxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmxhdW5jaF95ZWFyfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgPGI+U3VjY2Vzc2Z1bCBMYXVuY2g6LTwvYj5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW0ubGF1bmNoX3N1Y2Nlc3MgPyBcIlRydWVcIiA6IFwiZmFsc2VcIn1cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICA8Rm9vdGVyIGRldk5hbWU9XCJSZWtoYVwiIC8+XG4gICAgICAgIHsvKiA8SGVhZGVyIC8+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbjFcIj5cbiAgICAgICAgICA8RmlsdGVyc0NvbXBvbmVudCBoaXN0b3J5PXtoaXN0b3J5fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImNhcmRzX2l0ZW1cIj5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz17aXRlbS5saW5rcy5taXNzaW9uX3BhdGNoX3NtYWxsfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmRfaW1hZ2VcIlxuICAgICAgICAgICAgICAgIGFsdD1cIlVzZXIgSWNvblwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgIHtpdGVtLm1pc3Npb25fbmFtZX0gI3tpdGVtLmZsaWdodF9udW1iZXJ9XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIHtpdGVtLm1pc3Npb25faWQubGVuZ3RoICYmIChcbiAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGI+TWlzc2lvbiBJZHM8L2I+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLm1pc3Npb25faWQubWFwKChpZCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2lkfT57aWR9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAge2l0ZW0ubGF1bmNoX3llYXIgJiYgKFxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGI+TGF1bmNoIFllYXI6PC9iPlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5sYXVuY2hfeWVhcn1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICA8Yj5TdWNjZXNzZnVsIExhdW5jaDotPC9iPlxuICAgICAgICAgICAgICAgICAge2l0ZW0ubGF1bmNoX3N1Y2Nlc3MgPyBcIlRydWVcIiA6IFwiZmFsc2VcIn1cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Rm9vdGVyIGRldk5hbWU9XCJSZWtoYVwiIC8+ICovfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuICAvLyB9XG59XG5TcGFjZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcXVlcnkgfSkgPT4ge1xuICBjb25zb2xlLmxvZyhcImN0eFwiLCBxdWVyeSk7XG4gIHRyeSB7XG4gICAgdmFyIHVybCA9IG5ldyBVUkwoXCJodHRwczovL2FwaS5zcGFjZXhkYXRhLmNvbS92My9sYXVuY2hlcz9saW1pdD0xMDBcIik7XG4gICAgdmFyIHBhcmFtcyA9IHF1ZXJ5OyAvLyBvcjpcbiAgICB1cmwuc2VhcmNoID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhwYXJhbXMpLnRvU3RyaW5nKCk7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICByZXR1cm4geyBzcGFjZXg6IHJlcy5kYXRhLCBxdWVyeSB9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHsgZXJyb3I6IGUgfTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoU3BhY2V4KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Spacex.js\n");

/***/ })

})