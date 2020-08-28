webpackHotUpdate_N_E("pages/Spacex",{

/***/ "./pages/Spacex.js":
/*!*************************!*\
  !*** ./pages/Spacex.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/filter */ \"./components/filter/index.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/header */ \"./components/header/index.js\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/footer */ \"./components/footer/index.js\");\n/* harmony import */ var _Resources_main_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Resources/main.scss */ \"./Resources/main.scss\");\n/* harmony import */ var _Resources_main_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Resources_main_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Api */ \"./Api.js\");\n/* harmony import */ var _components_core_heading_TextHeader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/core/heading/TextHeader */ \"./components/core/heading/TextHeader.js\");\n\n\n\nvar _jsxFileName = \"/home/rekha/my-next-app/pages/Spacex.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\nfunction Spacex(props) {\n  _s();\n\n  console.log(\"props rendered\", props);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(props.data),\n      data = _useState[0],\n      setData = _useState[1];\n\n  var query = props.router.query;\n\n  var handleApiCall = function handleApiCall(params) {\n    Object(_Api__WEBPACK_IMPORTED_MODULE_9__[\"fetchSpacex\"])(params).then(function (json) {\n      setData(json);\n    });\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    // verify props have changed to avoid an infinite loop\n    // fetch data based on the new query\n    handleApiCall(query);\n    console.log(\"handleApiCall\", query);\n  }, []);\n  var history = props.history; //   console.log(\"1111111111\", data);\n\n  if (!data) {\n    return __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 12\n      }\n    }, \"Error: \", props.error);\n  } else {\n    return __jsx(\"div\", {\n      className: \"row\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 7\n      }\n    }, __jsx(\"section\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }\n    }, __jsx(\"nav\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 11\n      }\n    }, __jsx(\"ul\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 13\n      }\n    }, __jsx(\"li\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 15\n      }\n    }, __jsx(\"a\", {\n      href: \"#\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 17\n      }\n    }, \"London\")), __jsx(\"li\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 15\n      }\n    }, __jsx(\"a\", {\n      href: \"#\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 17\n      }\n    }, \"Paris\")), __jsx(\"li\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 15\n      }\n    }, __jsx(\"a\", {\n      href: \"#\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 17\n      }\n    }, \"Tokyo\")))), __jsx(\"article\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 11\n      }\n    }, __jsx(\"h1\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 13\n      }\n    }, \"London\"), __jsx(\"p\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 13\n      }\n    }, \"London is the capital city of England. It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants.\"), __jsx(\"p\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 13\n      }\n    }, \"Standing on the River Thames, London has been a major settlement for two millennia, its history going back to its founding by the Romans, who named it Londinium.\"))), __jsx(\"footer\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 9\n      }\n    }, __jsx(\"p\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 11\n      }\n    }, \"Footer\")));\n  } // }\n\n}\n\n_s(Spacex, \"HjtP0LvW2qfNexmiGaAPFGvnseU=\");\n\n_c = Spacex;\n\nSpacex.getInitialProps = /*#__PURE__*/function () {\n  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {\n    var url, params, res;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            console.log(\"ctx\", ctx);\n            _context.prev = 1;\n            url = new URL(\"https://api.spacexdata.com/v3/launches?limit=100\");\n            params = ctx.query; // or:\n\n            url.search = new URLSearchParams(params).toString();\n            _context.next = 7;\n            return fetch(url);\n\n          case 7:\n            res = _context.sent;\n            return _context.abrupt(\"return\", {\n              data: res.data\n            });\n\n          case 11:\n            _context.prev = 11;\n            _context.t0 = _context[\"catch\"](1);\n            return _context.abrupt(\"return\", {\n              error: _context.t0\n            });\n\n          case 14:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[1, 11]]);\n  }));\n\n  return function (_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"withRouter\"])(Spacex));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Spacex\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvU3BhY2V4LmpzPzFlZTkiXSwibmFtZXMiOlsiU3BhY2V4IiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwidXNlU3RhdGUiLCJkYXRhIiwic2V0RGF0YSIsInF1ZXJ5Iiwicm91dGVyIiwiaGFuZGxlQXBpQ2FsbCIsInBhcmFtcyIsImZldGNoU3BhY2V4IiwidGhlbiIsImpzb24iLCJ1c2VFZmZlY3QiLCJoaXN0b3J5IiwiZXJyb3IiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJ1cmwiLCJVUkwiLCJzZWFyY2giLCJVUkxTZWFyY2hQYXJhbXMiLCJ0b1N0cmluZyIsImZldGNoIiwicmVzIiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE1BQVQsQ0FBZ0JDLEtBQWhCLEVBQXVCO0FBQUE7O0FBQ3JCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWixFQUE4QkYsS0FBOUI7O0FBRHFCLGtCQUVHRyxzREFBUSxDQUFDSCxLQUFLLENBQUNJLElBQVAsQ0FGWDtBQUFBLE1BRWRBLElBRmM7QUFBQSxNQUVSQyxPQUZROztBQUFBLE1BR2JDLEtBSGEsR0FHSE4sS0FBSyxDQUFDTyxNQUhILENBR2JELEtBSGE7O0FBS3JCLE1BQU1FLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsTUFBRCxFQUFZO0FBQ2hDQyw0REFBVyxDQUFDRCxNQUFELENBQVgsQ0FBb0JFLElBQXBCLENBQXlCLFVBQUNDLElBQUQsRUFBVTtBQUNqQ1AsYUFBTyxDQUFDTyxJQUFELENBQVA7QUFDRCxLQUZEO0FBR0QsR0FKRDs7QUFNQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2Q7QUFDQTtBQUNBTCxpQkFBYSxDQUFDRixLQUFELENBQWI7QUFDQUwsV0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWixFQUE2QkksS0FBN0I7QUFDRCxHQUxRLEVBS04sRUFMTSxDQUFUO0FBWHFCLE1BaUJiUSxPQWpCYSxHQWlCRGQsS0FqQkMsQ0FpQmJjLE9BakJhLEVBa0JyQjs7QUFDQSxNQUFJLENBQUNWLElBQUwsRUFBVztBQUNULFdBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBYUosS0FBSyxDQUFDZSxLQUFuQixDQUFQO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsV0FDRTtBQUFLLGVBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBRyxVQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLENBREYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBRyxVQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsQ0FKRixFQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFHLFVBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixDQVBGLENBREYsQ0FERixFQWVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2SkFGRixFQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMktBUEYsQ0FmRixDQURGLEVBK0JFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLENBL0JGLENBREY7QUE2RUQsR0FuR29CLENBb0dyQjs7QUFDRDs7R0FyR1FoQixNOztLQUFBQSxNOztBQXNHVEEsTUFBTSxDQUFDaUIsZUFBUDtBQUFBLDhMQUF5QixpQkFBT0MsR0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDdkJoQixtQkFBTyxDQUFDQyxHQUFSLENBQVksS0FBWixFQUFtQmUsR0FBbkI7QUFEdUI7QUFHakJDLGVBSGlCLEdBR1gsSUFBSUMsR0FBSixDQUFRLGtEQUFSLENBSFc7QUFJakJWLGtCQUppQixHQUlSUSxHQUFHLENBQUNYLEtBSkksRUFJRzs7QUFDeEJZLGVBQUcsQ0FBQ0UsTUFBSixHQUFhLElBQUlDLGVBQUosQ0FBb0JaLE1BQXBCLEVBQTRCYSxRQUE1QixFQUFiO0FBTHFCO0FBQUEsbUJBTUhDLEtBQUssQ0FBQ0wsR0FBRCxDQU5GOztBQUFBO0FBTWZNLGVBTmU7QUFBQSw2Q0FPZDtBQUFFcEIsa0JBQUksRUFBRW9CLEdBQUcsQ0FBQ3BCO0FBQVosYUFQYzs7QUFBQTtBQUFBO0FBQUE7QUFBQSw2Q0FTZDtBQUFFVyxtQkFBSztBQUFQLGFBVGM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBekI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBWWUscUVBQUFVLDhEQUFVLENBQUMxQixNQUFELENBQXpCIiwiZmlsZSI6Ii4vcGFnZXMvU3BhY2V4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IEZpbHRlcnNDb21wb25lbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9maWx0ZXJcIjtcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRlclwiO1xuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9vdGVyXCI7XG5pbXBvcnQgXCIuLi9SZXNvdXJjZXMvbWFpbi5zY3NzXCI7XG5pbXBvcnQgeyBmZXRjaFNwYWNleCB9IGZyb20gXCIuLi9BcGlcIjtcbmltcG9ydCB7IFRleHRIZWFkZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9jb3JlL2hlYWRpbmcvVGV4dEhlYWRlclwiO1xuXG5mdW5jdGlvbiBTcGFjZXgocHJvcHMpIHtcbiAgY29uc29sZS5sb2coXCJwcm9wcyByZW5kZXJlZFwiLCBwcm9wcyk7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHByb3BzLmRhdGEpO1xuICBjb25zdCB7IHF1ZXJ5IH0gPSBwcm9wcy5yb3V0ZXI7XG5cbiAgY29uc3QgaGFuZGxlQXBpQ2FsbCA9IChwYXJhbXMpID0+IHtcbiAgICBmZXRjaFNwYWNleChwYXJhbXMpLnRoZW4oKGpzb24pID0+IHtcbiAgICAgIHNldERhdGEoanNvbik7XG4gICAgfSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyB2ZXJpZnkgcHJvcHMgaGF2ZSBjaGFuZ2VkIHRvIGF2b2lkIGFuIGluZmluaXRlIGxvb3BcbiAgICAvLyBmZXRjaCBkYXRhIGJhc2VkIG9uIHRoZSBuZXcgcXVlcnlcbiAgICBoYW5kbGVBcGlDYWxsKHF1ZXJ5KTtcbiAgICBjb25zb2xlLmxvZyhcImhhbmRsZUFwaUNhbGxcIiwgcXVlcnkpO1xuICB9LCBbXSk7XG4gIGNvbnN0IHsgaGlzdG9yeSB9ID0gcHJvcHM7XG4gIC8vICAgY29uc29sZS5sb2coXCIxMTExMTExMTExXCIsIGRhdGEpO1xuICBpZiAoIWRhdGEpIHtcbiAgICByZXR1cm4gPGRpdj5FcnJvcjoge3Byb3BzLmVycm9yfTwvZGl2PjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgPG5hdj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+TG9uZG9uPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5QYXJpczwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+VG9reW88L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvbmF2PlxuXG4gICAgICAgICAgPGFydGljbGU+XG4gICAgICAgICAgICA8aDE+TG9uZG9uPC9oMT5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBMb25kb24gaXMgdGhlIGNhcGl0YWwgY2l0eSBvZiBFbmdsYW5kLiBJdCBpcyB0aGUgbW9zdCBwb3B1bG91c1xuICAgICAgICAgICAgICBjaXR5IGluIHRoZSBVbml0ZWQgS2luZ2RvbSwgd2l0aCBhIG1ldHJvcG9saXRhbiBhcmVhIG9mIG92ZXIgMTNcbiAgICAgICAgICAgICAgbWlsbGlvbiBpbmhhYml0YW50cy5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBTdGFuZGluZyBvbiB0aGUgUml2ZXIgVGhhbWVzLCBMb25kb24gaGFzIGJlZW4gYSBtYWpvciBzZXR0bGVtZW50XG4gICAgICAgICAgICAgIGZvciB0d28gbWlsbGVubmlhLCBpdHMgaGlzdG9yeSBnb2luZyBiYWNrIHRvIGl0cyBmb3VuZGluZyBieSB0aGVcbiAgICAgICAgICAgICAgUm9tYW5zLCB3aG8gbmFtZWQgaXQgTG9uZGluaXVtLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIDxmb290ZXI+XG4gICAgICAgICAgPHA+Rm9vdGVyPC9wPlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgey8qIDxIZWFkZXIgLz5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uMVwiPlxuICAgICAgICAgIDxGaWx0ZXJzQ29tcG9uZW50IGhpc3Rvcnk9e2hpc3Rvcnl9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiY2FyZHNfaXRlbVwiPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPXtpdGVtLmxpbmtzLm1pc3Npb25fcGF0Y2hfc21hbGx9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZF9pbWFnZVwiXG4gICAgICAgICAgICAgICAgYWx0PVwiVXNlciBJY29uXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAge2l0ZW0ubWlzc2lvbl9uYW1lfSAje2l0ZW0uZmxpZ2h0X251bWJlcn1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAge2l0ZW0ubWlzc2lvbl9pZC5sZW5ndGggJiYgKFxuICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8Yj5NaXNzaW9uIElkczwvYj5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW0ubWlzc2lvbl9pZC5tYXAoKGlkKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aWR9PntpZH08L2xpPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7aXRlbS5sYXVuY2hfeWVhciAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8Yj5MYXVuY2ggWWVhcjo8L2I+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLmxhdW5jaF95ZWFyfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIDxiPlN1Y2Nlc3NmdWwgTGF1bmNoOi08L2I+XG4gICAgICAgICAgICAgICAgICB7aXRlbS5sYXVuY2hfc3VjY2VzcyA/IFwiVHJ1ZVwiIDogXCJmYWxzZVwifVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxGb290ZXIgZGV2TmFtZT1cIlJla2hhXCIgLz4gKi99XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4gIC8vIH1cbn1cblNwYWNleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XG4gIGNvbnNvbGUubG9nKFwiY3R4XCIsIGN0eCk7XG4gIHRyeSB7XG4gICAgdmFyIHVybCA9IG5ldyBVUkwoXCJodHRwczovL2FwaS5zcGFjZXhkYXRhLmNvbS92My9sYXVuY2hlcz9saW1pdD0xMDBcIik7XG4gICAgdmFyIHBhcmFtcyA9IGN0eC5xdWVyeTsgLy8gb3I6XG4gICAgdXJsLnNlYXJjaCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocGFyYW1zKS50b1N0cmluZygpO1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgcmV0dXJuIHsgZGF0YTogcmVzLmRhdGEgfTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB7IGVycm9yOiBlIH07XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKFNwYWNleCk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Spacex.js\n");

/***/ })

})