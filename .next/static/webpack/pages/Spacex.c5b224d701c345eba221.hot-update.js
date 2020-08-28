webpackHotUpdate_N_E("pages/Spacex",{

/***/ "./pages/Spacex.js":
/*!*************************!*\
  !*** ./pages/Spacex.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/filter */ \"./components/filter/index.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/header */ \"./components/header/index.js\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/footer */ \"./components/footer/index.js\");\n/* harmony import */ var _Resources_main_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Resources/main.scss */ \"./Resources/main.scss\");\n/* harmony import */ var _Resources_main_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Resources_main_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Api */ \"./Api.js\");\n/* harmony import */ var _components_core_heading_TextHeader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/core/heading/TextHeader */ \"./components/core/heading/TextHeader.js\");\n\n\n\nvar _jsxFileName = \"/home/rekha/my-next-app/pages/Spacex.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\nfunction Spacex(_ref) {\n  _s();\n\n  var _this = this;\n\n  var router = _ref.router,\n      spacex = _ref.spacex,\n      query = _ref.query,\n      history = _ref.history,\n      error = _ref.error;\n  console.log(\"props rendered\", query);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(spacex),\n      data = _useState[0],\n      setData = _useState[1]; // const { query } = router;\n\n\n  var handleApiCall = function handleApiCall(params) {\n    Object(_Api__WEBPACK_IMPORTED_MODULE_9__[\"fetchSpacex\"])(params).then(function (json) {\n      setData(json);\n    });\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    // verify props have changed to avoid an infinite loop\n    // fetch data based on the new query\n    handleApiCall(query);\n    console.log(\"handleApiCall\", query);\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (search) {\n      console.log(\"Initial query / update caught!\");\n    }\n  }, []); //   console.log(\"1111111111\", data);\n\n  if (!data) {\n    return __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 12\n      }\n    }, \"Error: \", error);\n  } else {\n    return __jsx(\"div\", {\n      className: \"row\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 7\n      }\n    }, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_6__[\"Header\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }\n    }), __jsx(\"section\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }\n    }, __jsx(\"nav\", {\n      className: \"nav\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 11\n      }\n    }, __jsx(_components_filter__WEBPACK_IMPORTED_MODULE_5__[\"FiltersComponent\"], {\n      history: history,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 13\n      }\n    })), __jsx(\"article\", {\n      className: \"column article\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 11\n      }\n    }, data.map(function (item, index) {\n      return __jsx(\"div\", {\n        key: index,\n        className: \"cards_item\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 15\n        }\n      }, __jsx(\"img\", {\n        src: item.links.mission_patch_small,\n        className: \"card_image\",\n        alt: \"User Icon\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 17\n        }\n      }), __jsx(\"div\", {\n        className: \"card_content\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 17\n        }\n      }, __jsx(\"a\", {\n        href: \"#\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 19\n        }\n      }, item.mission_name, \" #\", item.flight_number), item.mission_id.length && __jsx(\"ul\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 21\n        }\n      }, __jsx(\"b\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 23\n        }\n      }, \"Mission Ids\"), item.mission_id.map(function (id) {\n        return __jsx(\"li\", {\n          key: id,\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 25\n          }\n        }, id);\n      })), item.launch_year && __jsx(\"div\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 21\n        }\n      }, __jsx(\"b\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 23\n        }\n      }, \"Launch Year:\"), item.launch_year), __jsx(\"p\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 19\n        }\n      }, __jsx(\"b\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 21\n        }\n      }, \"Successful Launch:-\"), item.launch_success ? \"True\" : \"false\")));\n    }))), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_7__[\"Footer\"], {\n      devName: \"Rekha\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 9\n      }\n    }));\n  } // }\n\n}\n\n_s(Spacex, \"tDB2Lb00zmYuQOuIaMJ9vmyZzCw=\");\n\n_c = Spacex;\n\nSpacex.getInitialProps = /*#__PURE__*/function () {\n  var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {\n    var query, url, params, res;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            query = _ref2.query;\n            console.log(\"ctx\", query);\n            _context.prev = 2;\n            url = new URL(\"https://api.spacexdata.com/v3/launches?limit=100\");\n            params = query; // or:\n\n            url.search = new URLSearchParams(params).toString();\n            _context.next = 8;\n            return fetch(url);\n\n          case 8:\n            res = _context.sent;\n            return _context.abrupt(\"return\", {\n              spacex: res.data,\n              query: query\n            });\n\n          case 12:\n            _context.prev = 12;\n            _context.t0 = _context[\"catch\"](2);\n            return _context.abrupt(\"return\", {\n              error: _context.t0\n            });\n\n          case 15:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[2, 12]]);\n  }));\n\n  return function (_x) {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"withRouter\"])(Spacex));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Spacex\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvU3BhY2V4LmpzPzFlZTkiXSwibmFtZXMiOlsiU3BhY2V4Iiwicm91dGVyIiwic3BhY2V4IiwicXVlcnkiLCJoaXN0b3J5IiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwidXNlU3RhdGUiLCJkYXRhIiwic2V0RGF0YSIsImhhbmRsZUFwaUNhbGwiLCJwYXJhbXMiLCJmZXRjaFNwYWNleCIsInRoZW4iLCJqc29uIiwidXNlRWZmZWN0Iiwic2VhcmNoIiwibWFwIiwiaXRlbSIsImluZGV4IiwibGlua3MiLCJtaXNzaW9uX3BhdGNoX3NtYWxsIiwibWlzc2lvbl9uYW1lIiwiZmxpZ2h0X251bWJlciIsIm1pc3Npb25faWQiLCJsZW5ndGgiLCJpZCIsImxhdW5jaF95ZWFyIiwibGF1bmNoX3N1Y2Nlc3MiLCJnZXRJbml0aWFsUHJvcHMiLCJ1cmwiLCJVUkwiLCJVUkxTZWFyY2hQYXJhbXMiLCJ0b1N0cmluZyIsImZldGNoIiwicmVzIiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE1BQVQsT0FBMkQ7QUFBQTs7QUFBQTs7QUFBQSxNQUF6Q0MsTUFBeUMsUUFBekNBLE1BQXlDO0FBQUEsTUFBakNDLE1BQWlDLFFBQWpDQSxNQUFpQztBQUFBLE1BQXpCQyxLQUF5QixRQUF6QkEsS0FBeUI7QUFBQSxNQUFsQkMsT0FBa0IsUUFBbEJBLE9BQWtCO0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTO0FBQ3pEQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWixFQUE4QkosS0FBOUI7O0FBRHlELGtCQUVqQ0ssc0RBQVEsQ0FBQ04sTUFBRCxDQUZ5QjtBQUFBLE1BRWxETyxJQUZrRDtBQUFBLE1BRTVDQyxPQUY0QyxpQkFHekQ7OztBQUVBLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFB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SUFBSSxDQUFDVSxjQUFMLEdBQXNCLE1BQXRCLEdBQStCLE9BRmxDLENBbEJGLENBTkYsQ0FEUTtBQUFBLEtBQVQsQ0FESCxDQUxGLENBRkYsRUEyQ0UsTUFBQyx5REFBRDtBQUFRLGFBQU8sRUFBQyxPQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BM0NGLENBREY7QUF1RkQsR0FqSHdELENBa0h6RDs7QUFDRDs7R0FuSFE3QixNOztLQUFBQSxNOztBQW9IVEEsTUFBTSxDQUFDOEIsZUFBUDtBQUFBLCtMQUF5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBUzNCLGlCQUFULFNBQVNBLEtBQVQ7QUFDdkJHLG1CQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaLEVBQW1CSixLQUFuQjtBQUR1QjtBQUdqQjRCLGVBSGlCLEdBR1gsSUFBSUMsR0FBSixDQUFRLGtEQUFSLENBSFc7QUFJakJwQixrQkFKaUIsR0FJUlQsS0FKUSxFQUlEOztBQUNwQjRCLGVBQUcsQ0FBQ2QsTUFBSixHQUFhLElBQUlnQixlQUFKLENBQW9CckIsTUFBcEIsRUFBNEJzQixRQUE1QixFQUFiO0FBTHFCO0FBQUEsbUJBTUhDLEtBQUssQ0FBQ0osR0FBRCxDQU5GOztBQUFBO0FBTWZLLGVBTmU7QUFBQSw2Q0FPZDtBQUFFbEMsb0JBQU0sRUFBRWtDLEdBQUcsQ0FBQzNCLElBQWQ7QUFBb0JOLG1CQUFLLEVBQUxBO0FBQXBCLGFBUGM7O0FBQUE7QUFBQTtBQUFBO0FBQUEsNkNBU2Q7QUFBRUUsbUJBQUs7QUFBUCxhQVRjOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXpCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVllLHFFQUFBZ0MsOERBQVUsQ0FBQ3JDLE1BQUQsQ0FBekIiLCJmaWxlIjoiLi9wYWdlcy9TcGFjZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgRmlsdGVyc0NvbXBvbmVudCB9IGZyb20gXCIuLi9jb21wb25lbnRzL2ZpbHRlclwiO1xuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvaGVhZGVyXCI7XG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9mb290ZXJcIjtcbmltcG9ydCBcIi4uL1Jlc291cmNlcy9tYWluLnNjc3NcIjtcbmltcG9ydCB7IGZldGNoU3BhY2V4IH0gZnJvbSBcIi4uL0FwaVwiO1xuaW1wb3J0IHsgVGV4dEhlYWRlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL2NvcmUvaGVhZGluZy9UZXh0SGVhZGVyXCI7XG5cbmZ1bmN0aW9uIFNwYWNleCh7IHJvdXRlciwgc3BhY2V4LCBxdWVyeSwgaGlzdG9yeSwgZXJyb3IgfSkge1xuICBjb25zb2xlLmxvZyhcInByb3BzIHJlbmRlcmVkXCIsIHF1ZXJ5KTtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoc3BhY2V4KTtcbiAgLy8gY29uc3QgeyBxdWVyeSB9ID0gcm91dGVyO1xuXG4gIGNvbnN0IGhhbmRsZUFwaUNhbGwgPSAocGFyYW1zKSA9PiB7XG4gICAgZmV0Y2hTcGFjZXgocGFyYW1zKS50aGVuKChqc29uKSA9PiB7XG4gICAgICBzZXREYXRhKGpzb24pO1xuICAgIH0pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gdmVyaWZ5IHByb3BzIGhhdmUgY2hhbmdlZCB0byBhdm9pZCBhbiBpbmZpbml0ZSBsb29wXG4gICAgLy8gZmV0Y2ggZGF0YSBiYXNlZCBvbiB0aGUgbmV3IHF1ZXJ5XG4gICAgaGFuZGxlQXBpQ2FsbChxdWVyeSk7XG4gICAgY29uc29sZS5sb2coXCJoYW5kbGVBcGlDYWxsXCIsIHF1ZXJ5KTtcbiAgfSwgW10pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzZWFyY2gpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiSW5pdGlhbCBxdWVyeSAvIHVwZGF0ZSBjYXVnaHQhXCIpO1xuICAgIH1cbiAgfSwgW10pO1xuICAvLyAgIGNvbnNvbGUubG9nKFwiMTExMTExMTExMVwiLCBkYXRhKTtcbiAgaWYgKCFkYXRhKSB7XG4gICAgcmV0dXJuIDxkaXY+RXJyb3I6IHtlcnJvcn08L2Rpdj47XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZcIj5cbiAgICAgICAgICAgIDxGaWx0ZXJzQ29tcG9uZW50IGhpc3Rvcnk9e2hpc3Rvcnl9IC8+XG4gICAgICAgICAgPC9uYXY+XG5cbiAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJjb2x1bW4gYXJ0aWNsZVwiPlxuICAgICAgICAgICAge2RhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImNhcmRzX2l0ZW1cIj5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9e2l0ZW0ubGlua3MubWlzc2lvbl9wYXRjaF9zbWFsbH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmRfaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgYWx0PVwiVXNlciBJY29uXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5taXNzaW9uX25hbWV9ICN7aXRlbS5mbGlnaHRfbnVtYmVyfVxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAge2l0ZW0ubWlzc2lvbl9pZC5sZW5ndGggJiYgKFxuICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgPGI+TWlzc2lvbiBJZHM8L2I+XG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubWlzc2lvbl9pZC5tYXAoKGlkKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpZH0+e2lkfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAge2l0ZW0ubGF1bmNoX3llYXIgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxiPkxhdW5jaCBZZWFyOjwvYj5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5sYXVuY2hfeWVhcn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIDxiPlN1Y2Nlc3NmdWwgTGF1bmNoOi08L2I+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLmxhdW5jaF9zdWNjZXNzID8gXCJUcnVlXCIgOiBcImZhbHNlXCJ9XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgPEZvb3RlciBkZXZOYW1lPVwiUmVraGFcIiAvPlxuICAgICAgICB7LyogPEhlYWRlciAvPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4xXCI+XG4gICAgICAgICAgPEZpbHRlcnNDb21wb25lbnQgaGlzdG9yeT17aGlzdG9yeX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAge2RhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJjYXJkc19pdGVtXCI+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9e2l0ZW0ubGlua3MubWlzc2lvbl9wYXRjaF9zbWFsbH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkX2ltYWdlXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJVc2VyIEljb25cIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICB7aXRlbS5taXNzaW9uX25hbWV9ICN7aXRlbS5mbGlnaHRfbnVtYmVyfVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICB7aXRlbS5taXNzaW9uX2lkLmxlbmd0aCAmJiAoXG4gICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxiPk1pc3Npb24gSWRzPC9iPlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5taXNzaW9uX2lkLm1hcCgoaWQpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpZH0+e2lkfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHtpdGVtLmxhdW5jaF95ZWFyICYmIChcbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxiPkxhdW5jaCBZZWFyOjwvYj5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW0ubGF1bmNoX3llYXJ9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgPGI+U3VjY2Vzc2Z1bCBMYXVuY2g6LTwvYj5cbiAgICAgICAgICAgICAgICAgIHtpdGVtLmxhdW5jaF9zdWNjZXNzID8gXCJUcnVlXCIgOiBcImZhbHNlXCJ9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEZvb3RlciBkZXZOYW1lPVwiUmVraGFcIiAvPiAqL31cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgLy8gfVxufVxuU3BhY2V4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHF1ZXJ5IH0pID0+IHtcbiAgY29uc29sZS5sb2coXCJjdHhcIiwgcXVlcnkpO1xuICB0cnkge1xuICAgIHZhciB1cmwgPSBuZXcgVVJMKFwiaHR0cHM6Ly9hcGkuc3BhY2V4ZGF0YS5jb20vdjMvbGF1bmNoZXM/bGltaXQ9MTAwXCIpO1xuICAgIHZhciBwYXJhbXMgPSBxdWVyeTsgLy8gb3I6XG4gICAgdXJsLnNlYXJjaCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocGFyYW1zKS50b1N0cmluZygpO1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgcmV0dXJuIHsgc3BhY2V4OiByZXMuZGF0YSwgcXVlcnkgfTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB7IGVycm9yOiBlIH07XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKFNwYWNleCk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Spacex.js\n");

/***/ })

})