webpackHotUpdate_N_E("pages/Spacex",{

/***/ "./pages/Spacex.js":
/*!*************************!*\
  !*** ./pages/Spacex.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/filter */ \"./components/filter/index.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/header */ \"./components/header/index.js\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/footer */ \"./components/footer/index.js\");\n/* harmony import */ var _Resources_main_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Resources/main.scss */ \"./Resources/main.scss\");\n/* harmony import */ var _Resources_main_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Resources_main_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Api */ \"./Api.js\");\n/* harmony import */ var _components_core_heading_TextHeader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/core/heading/TextHeader */ \"./components/core/heading/TextHeader.js\");\n\n\n\nvar _jsxFileName = \"/home/rekha/my-next-app/pages/Spacex.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\nfunction Spacex(_ref) {\n  _s();\n\n  var _this = this;\n\n  var router = _ref.router,\n      spacex = _ref.spacex,\n      query = _ref.query,\n      history = _ref.history,\n      error = _ref.error;\n  var land_success = query.land_success,\n      launch_success = query.launch_success,\n      launch_year = query.launch_year;\n  console.log(\"props rendered\", query);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(spacex),\n      data = _useState[0],\n      setData = _useState[1];\n\n  var handleApiCall = function handleApiCall(params) {\n    Object(_Api__WEBPACK_IMPORTED_MODULE_9__[\"fetchSpacex\"])(params).then(function (json) {\n      setData(json);\n    });\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    // verify props have changed to avoid an infinite loop\n    // fetch data based on the new query\n    handleApiCall(query);\n    console.log(\"handleApiCall\", query);\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (1) {\n      console.log(\"Initial query / update caught!\");\n    }\n  }, []); //   console.log(\"1111111111\", data);\n\n  if (!data) {\n    return __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 12\n      }\n    }, \"Error: \", error);\n  } else {\n    return __jsx(\"div\", {\n      className: \"row\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 7\n      }\n    }, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_6__[\"Header\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }\n    }), __jsx(\"section\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }\n    }, __jsx(\"nav\", {\n      className: \"nav\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 11\n      }\n    }, __jsx(_components_filter__WEBPACK_IMPORTED_MODULE_5__[\"FiltersComponent\"], {\n      history: history,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 13\n      }\n    })), __jsx(\"article\", {\n      className: \"column article\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 11\n      }\n    }, data.map(function (item, index) {\n      return __jsx(\"div\", {\n        key: index,\n        className: \"cards_item\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 15\n        }\n      }, __jsx(\"img\", {\n        src: item.links.mission_patch_small,\n        className: \"card_image\",\n        alt: \"User Icon\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 17\n        }\n      }), __jsx(\"div\", {\n        className: \"card_content\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 17\n        }\n      }, __jsx(\"a\", {\n        href: \"#\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 19\n        }\n      }, item.mission_name, \" #\", item.flight_number), item.mission_id.length && __jsx(\"ul\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 21\n        }\n      }, __jsx(\"b\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 23\n        }\n      }, \"Mission Ids\"), item.mission_id.map(function (id) {\n        return __jsx(\"li\", {\n          key: id,\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 25\n          }\n        }, id);\n      })), item.launch_year && __jsx(\"div\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 21\n        }\n      }, __jsx(\"b\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 23\n        }\n      }, \"Launch Year:\"), item.launch_year), __jsx(\"p\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 19\n        }\n      }, __jsx(\"b\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 21\n        }\n      }, \"Successful Launch:-\"), item.launch_success ? \"True\" : \"false\")));\n    }))), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_7__[\"Footer\"], {\n      devName: \"Rekha\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 9\n      }\n    }));\n  } // }\n\n}\n\n_s(Spacex, \"tDB2Lb00zmYuQOuIaMJ9vmyZzCw=\");\n\n_c = Spacex;\n\nSpacex.getInitialProps = /*#__PURE__*/function () {\n  var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {\n    var query, url, params, res;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            query = _ref2.query;\n            console.log(\"ctx\", query);\n            _context.prev = 2;\n            url = new URL(\"https://api.spacexdata.com/v3/launches?limit=100\");\n            params = query; // or:\n\n            url.search = new URLSearchParams(params).toString();\n            _context.next = 8;\n            return fetch(url);\n\n          case 8:\n            res = _context.sent;\n            return _context.abrupt(\"return\", {\n              spacex: res.data,\n              query: query\n            });\n\n          case 12:\n            _context.prev = 12;\n            _context.t0 = _context[\"catch\"](2);\n            return _context.abrupt(\"return\", {\n              error: _context.t0\n            });\n\n          case 15:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[2, 12]]);\n  }));\n\n  return function (_x) {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"withRouter\"])(Spacex));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Spacex\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvU3BhY2V4LmpzPzFlZTkiXSwibmFtZXMiOlsiU3BhY2V4Iiwicm91dGVyIiwic3BhY2V4IiwicXVlcnkiLCJoaXN0b3J5IiwiZXJyb3IiLCJsYW5kX3N1Y2Nlc3MiLCJsYXVuY2hfc3VjY2VzcyIsImxhdW5jaF95ZWFyIiwiY29uc29sZSIsImxvZyIsInVzZVN0YXRlIiwiZGF0YSIsInNldERhdGEiLCJoYW5kbGVBcGlDYWxsIiwicGFyYW1zIiwiZmV0Y2hTcGFjZXgiLCJ0aGVuIiwianNvbiIsInVzZUVmZmVjdCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImxpbmtzIiwibWlzc2lvbl9wYXRjaF9zbWFsbCIsIm1pc3Npb25fbmFtZSIsImZsaWdodF9udW1iZXIiLCJtaXNzaW9uX2lkIiwibGVuZ3RoIiwiaWQiLCJnZXRJbml0aWFsUHJvcHMiLCJ1cmwiLCJVUkwiLCJzZWFyY2giLCJVUkxTZWFyY2hQYXJhbXMiLCJ0b1N0cmluZyIsImZldGNoIiwicmVzIiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE1BQVQsT0FBMkQ7QUFBQTs7QUFBQTs7QUFBQSxNQUF6Q0MsTUFBeUMsUUFBekNBLE1BQXlDO0FBQUEsTUFBakNDLE1BQWlDLFFBQWpDQSxNQUFpQztBQUFBLE1BQXpCQyxLQUF5QixRQUF6QkEsS0FBeUI7QUFBQSxNQUFsQkMsT0FBa0IsUUFBbEJBLE9BQWtCO0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTO0FBQUEsTUFDakRDLFlBRGlELEdBQ0hILEtBREcsQ0FDakRHLFlBRGlEO0FBQUEsTUFDbkNDLGNBRG1DLEdBQ0hKLEtBREcsQ0FDbkNJLGNBRG1DO0FBQUEsTUFDbkJDLFdBRG1CLEdBQ0hMLEtBREcsQ0FDbkJLLFdBRG1CO0FBRXpEQyxTQUFPLENBQUNDLEdB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Q0FBQ3RDLE1BQUQsQ0FBekIiLCJmaWxlIjoiLi9wYWdlcy9TcGFjZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgRmlsdGVyc0NvbXBvbmVudCB9IGZyb20gXCIuLi9jb21wb25lbnRzL2ZpbHRlclwiO1xuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvaGVhZGVyXCI7XG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9mb290ZXJcIjtcbmltcG9ydCBcIi4uL1Jlc291cmNlcy9tYWluLnNjc3NcIjtcbmltcG9ydCB7IGZldGNoU3BhY2V4IH0gZnJvbSBcIi4uL0FwaVwiO1xuaW1wb3J0IHsgVGV4dEhlYWRlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL2NvcmUvaGVhZGluZy9UZXh0SGVhZGVyXCI7XG5cbmZ1bmN0aW9uIFNwYWNleCh7IHJvdXRlciwgc3BhY2V4LCBxdWVyeSwgaGlzdG9yeSwgZXJyb3IgfSkge1xuICBjb25zdCB7IGxhbmRfc3VjY2VzcywgbGF1bmNoX3N1Y2Nlc3MsIGxhdW5jaF95ZWFyIH0gPSBxdWVyeTtcbiAgY29uc29sZS5sb2coXCJwcm9wcyByZW5kZXJlZFwiLCBxdWVyeSk7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHNwYWNleCk7XG4gIGNvbnN0IGhhbmRsZUFwaUNhbGwgPSAocGFyYW1zKSA9PiB7XG4gICAgZmV0Y2hTcGFjZXgocGFyYW1zKS50aGVuKChqc29uKSA9PiB7XG4gICAgICBzZXREYXRhKGpzb24pO1xuICAgIH0pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gdmVyaWZ5IHByb3BzIGhhdmUgY2hhbmdlZCB0byBhdm9pZCBhbiBpbmZpbml0ZSBsb29wXG4gICAgLy8gZmV0Y2ggZGF0YSBiYXNlZCBvbiB0aGUgbmV3IHF1ZXJ5XG4gICAgaGFuZGxlQXBpQ2FsbChxdWVyeSk7XG4gICAgY29uc29sZS5sb2coXCJoYW5kbGVBcGlDYWxsXCIsIHF1ZXJ5KTtcbiAgfSwgW10pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICgxKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkluaXRpYWwgcXVlcnkgLyB1cGRhdGUgY2F1Z2h0IVwiKTtcbiAgICB9XG4gIH0sIFtdKTtcbiAgLy8gICBjb25zb2xlLmxvZyhcIjExMTExMTExMTFcIiwgZGF0YSk7XG4gIGlmICghZGF0YSkge1xuICAgIHJldHVybiA8ZGl2PkVycm9yOiB7ZXJyb3J9PC9kaXY+O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2XCI+XG4gICAgICAgICAgICA8RmlsdGVyc0NvbXBvbmVudCBoaXN0b3J5PXtoaXN0b3J5fSAvPlxuICAgICAgICAgIDwvbmF2PlxuXG4gICAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwiY29sdW1uIGFydGljbGVcIj5cbiAgICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJjYXJkc19pdGVtXCI+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgc3JjPXtpdGVtLmxpbmtzLm1pc3Npb25fcGF0Y2hfc21hbGx9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkX2ltYWdlXCJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIlVzZXIgSWNvblwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW0ubWlzc2lvbl9uYW1lfSAje2l0ZW0uZmxpZ2h0X251bWJlcn1cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIHtpdGVtLm1pc3Npb25faWQubGVuZ3RoICYmIChcbiAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxiPk1pc3Npb24gSWRzPC9iPlxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLm1pc3Npb25faWQubWFwKChpZCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aWR9PntpZH08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIHtpdGVtLmxhdW5jaF95ZWFyICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8Yj5MYXVuY2ggWWVhcjo8L2I+XG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubGF1bmNoX3llYXJ9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICA8Yj5TdWNjZXNzZnVsIExhdW5jaDotPC9iPlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5sYXVuY2hfc3VjY2VzcyA/IFwiVHJ1ZVwiIDogXCJmYWxzZVwifVxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIDxGb290ZXIgZGV2TmFtZT1cIlJla2hhXCIgLz5cbiAgICAgICAgey8qIDxIZWFkZXIgLz5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uMVwiPlxuICAgICAgICAgIDxGaWx0ZXJzQ29tcG9uZW50IGhpc3Rvcnk9e2hpc3Rvcnl9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiY2FyZHNfaXRlbVwiPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPXtpdGVtLmxpbmtzLm1pc3Npb25fcGF0Y2hfc21hbGx9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZF9pbWFnZVwiXG4gICAgICAgICAgICAgICAgYWx0PVwiVXNlciBJY29uXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAge2l0ZW0ubWlzc2lvbl9uYW1lfSAje2l0ZW0uZmxpZ2h0X251bWJlcn1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAge2l0ZW0ubWlzc2lvbl9pZC5sZW5ndGggJiYgKFxuICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8Yj5NaXNzaW9uIElkczwvYj5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW0ubWlzc2lvbl9pZC5tYXAoKGlkKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aWR9PntpZH08L2xpPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7aXRlbS5sYXVuY2hfeWVhciAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8Yj5MYXVuY2ggWWVhcjo8L2I+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLmxhdW5jaF95ZWFyfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIDxiPlN1Y2Nlc3NmdWwgTGF1bmNoOi08L2I+XG4gICAgICAgICAgICAgICAgICB7aXRlbS5sYXVuY2hfc3VjY2VzcyA/IFwiVHJ1ZVwiIDogXCJmYWxzZVwifVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxGb290ZXIgZGV2TmFtZT1cIlJla2hhXCIgLz4gKi99XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4gIC8vIH1cbn1cblNwYWNleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBxdWVyeSB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKFwiY3R4XCIsIHF1ZXJ5KTtcbiAgdHJ5IHtcbiAgICB2YXIgdXJsID0gbmV3IFVSTChcImh0dHBzOi8vYXBpLnNwYWNleGRhdGEuY29tL3YzL2xhdW5jaGVzP2xpbWl0PTEwMFwiKTtcbiAgICB2YXIgcGFyYW1zID0gcXVlcnk7IC8vIG9yOlxuICAgIHVybC5zZWFyY2ggPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykudG9TdHJpbmcoKTtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIHJldHVybiB7IHNwYWNleDogcmVzLmRhdGEsIHF1ZXJ5IH07XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4geyBlcnJvcjogZSB9O1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihTcGFjZXgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Spacex.js\n");

/***/ })

})