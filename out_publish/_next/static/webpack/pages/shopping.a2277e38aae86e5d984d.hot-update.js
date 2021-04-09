webpackHotUpdate_N_E("pages/shopping",{

/***/ "./components/ecommerce/segmentMenu.js":
/*!*********************************************!*\
  !*** ./components/ecommerce/segmentMenu.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-instantsearch-dom */ \"./node_modules/react-instantsearch-dom/dist/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _segmentMenu_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./segmentMenu.module.scss */ \"./components/ecommerce/segmentMenu.module.scss\");\n/* harmony import */ var _segmentMenu_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_segmentMenu_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_reducers_ecommerce_ux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/reducers/ecommerce/ux */ \"./redux/reducers/ecommerce/ux.js\");\n/* harmony import */ var _redux_reducers_ecommerce_sizes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/reducers/ecommerce/sizes */ \"./redux/reducers/ecommerce/sizes.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/psfr937/Development/main/dg-web-server/components/ecommerce/segmentMenu.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nvar namespace = 'refinementList';\n\n\n\n\n\nvar SegmentMenu = function SegmentMenu(_ref) {\n  _s();\n\n  var currentRefinement = _ref.currentRefinement,\n      refine = _ref.refine;\n  var selectedSegment = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"])(function (state) {\n    return state.ux.selectedSegment;\n  });\n  var sizes = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"])(function (state) {\n    return state.sizes;\n  });\n  var segments = sizes.readyStatus !== _redux_reducers_ecommerce_sizes__WEBPACK_IMPORTED_MODULE_6__[\"FETCH_SIZES_SUCCESS\"] ? [] : Object.keys(sizes.data).map(function (k) {\n    return sizes.data[k];\n  });\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useDispatch\"])();\n\n  var _onClick = function onClick(s) {\n    dispatch({\n      type: _redux_reducers_ecommerce_ux__WEBPACK_IMPORTED_MODULE_5__[\"SET_UX_VALUE\"],\n      key: 'selectedSegment',\n      value: s.value\n    });\n    refine(s.value);\n  };\n\n  var sizeButtonClass = function sizeButtonClass(value) {\n    return selectedSegment === value ? classnames__WEBPACK_IMPORTED_MODULE_3___default()(_segmentMenu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.sizeItem, _segmentMenu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.selected) : _segmentMenu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.sizeItem;\n  };\n\n  return __jsx(\"div\", {\n    className: _segmentMenu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.sizeList,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 10\n    }\n  }, segments.map(function (s) {\n    return __jsx(\"button\", {\n      className: sizeButtonClass(s.value),\n      onClick: function onClick() {\n        return _onClick(s);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 10\n      }\n    }, s.label);\n  }));\n};\n\n_s(SegmentMenu, \"rlyj5ZlOtm/LIoHu4yvzFJBUJew=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useDispatch\"]];\n});\n\n_c = SegmentMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = Object(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_0__[\"connectRefinementList\"])(SegmentMenu));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"SegmentMenu\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9lY29tbWVyY2Uvc2VnbWVudE1lbnUuanM/MzY0OSJdLCJuYW1lcyI6WyJuYW1lc3BhY2UiLCJTZWdtZW50TWVudSIsImN1cnJlbnRSZWZpbmVtZW50IiwicmVmaW5lIiwic2VsZWN0ZWRTZWdtZW50IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInV4Iiwic2l6ZXMiLCJzZWdtZW50cyIsInJlYWR5U3RhdHVzIiwiRkVUQ0hfU0laRVNfU1VDQ0VTUyIsIk9iamVjdCIsImtleXMiLCJkYXRhIiwibWFwIiwiayIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJvbkNsaWNrIiwicyIsInR5cGUiLCJTRVRfVVhfVkFMVUUiLCJrZXkiLCJ2YWx1ZSIsInNpemVCdXR0b25DbGFzcyIsImNsYXNzbmFtZXMiLCJzdCIsInNpemVJdGVtIiwic2VsZWN0ZWQiLCJzaXplTGlzdCIsImxhYmVsIiwiY29ubmVjdFJlZmluZW1lbnRMaXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsU0FBUyxHQUFHLGdCQUFsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQW1DO0FBQUE7O0FBQUEsTUFBaENDLGlCQUFnQyxRQUFoQ0EsaUJBQWdDO0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhO0FBR3JELE1BQU1DLGVBQWUsR0FBR0MsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxFQUFOLENBQVNILGVBQWI7QUFBQSxHQUFOLENBQW5DO0FBQ0EsTUFBTUksS0FBSyxHQUFHSCwrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNFLEtBQVY7QUFBQSxHQUFOLENBQXpCO0FBQ0EsTUFBTUMsUUFBUSxHQUFJRCxLQUFLLENBQUNFLFdBQU4sS0FBc0JDLG1GQUF2QixHQUE4QyxFQUE5QyxHQUNiQyxNQUFNLENBQUNDLElBQVAsQ0FBWUwsS0FBSyxDQUFDTSxJQUFsQixFQUF3QkMsR0FBeEIsQ0FBNEIsVUFBQUMsQ0FBQztBQUFBLFdBQUlSLEtBQUssQ0FBQ00sSUFBTixDQUFXRSxDQUFYLENBQUo7QUFBQSxHQUE3QixDQURKO0FBRUEsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFDQSxNQUFNQyxRQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxDQUFELEVBQU87QUFDbkJILFlBQVEsQ0FBQztBQUFDSSxVQUFJLEVBQUVDLHlFQUFQO0FBQXFCQyxTQUFHLEVBQUUsaUJBQTFCO0FBQTZDQyxXQUFLLEVBQUVKLENBQUMsQ0FBQ0k7QUFBdEQsS0FBRCxDQUFSO0FBQ0FyQixVQUFNLENBQUNpQixDQUFDLENBQUNJLEtBQUgsQ0FBTjtBQUNILEdBSEQ7O0FBS0EsTUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDRCxLQUFELEVBQVc7QUFDakMsV0FBT3BCLGVBQWUsS0FBS29CLEtBQXBCLEdBQTRCRSxpREFBVSxDQUFDQywrREFBRSxDQUFDQyxRQUFKLEVBQWNELCtEQUFFLENBQUNFLFFBQWpCLENBQXRDLEdBQW1FRiwrREFBRSxDQUFDQyxRQUE3RTtBQUNELEdBRkQ7O0FBS0EsU0FBTztBQUFLLGFBQVMsRUFBRUQsK0RBQUUsQ0FBQ0csUUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNKckIsUUFBUSxDQUFDTSxHQUFULENBQWMsVUFBQUssQ0FBQztBQUFBLFdBQ1g7QUFDQyxlQUFTLEVBQUVLLGVBQWUsQ0FBQ0wsQ0FBQyxDQUFDSSxLQUFILENBRDNCO0FBQ3NDLGFBQU8sRUFBRTtBQUFBLGVBQU1MLFFBQU8sQ0FBQ0MsQ0FBRCxDQUFiO0FBQUEsT0FEL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUVDQSxDQUFDLENBQUNXLEtBRkgsQ0FEVztBQUFBLEdBQWYsQ0FESSxDQUFQO0FBYUQsQ0EvQkQ7O0dBQU05QixXO1VBR29CSSx1RCxFQUNWQSx1RCxFQUdHYSx1RDs7O0tBUGJqQixXO0FBaUNTLHFFQUFBK0IscUZBQXFCLENBQUMvQixXQUFELENBQXBDIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9lY29tbWVyY2Uvc2VnbWVudE1lbnUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0UmVmaW5lbWVudExpc3QgfSBmcm9tICdyZWFjdC1pbnN0YW50c2VhcmNoLWRvbSdcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgc3QgZnJvbSBcIi4vc2VnbWVudE1lbnUubW9kdWxlLnNjc3NcIlxuY29uc3QgbmFtZXNwYWNlID0gJ3JlZmluZW1lbnRMaXN0JztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBTRVRfVVhfVkFMVUUgfSBmcm9tIFwiLi4vLi4vcmVkdXgvcmVkdWNlcnMvZWNvbW1lcmNlL3V4XCI7XG5pbXBvcnQge0ZFVENIX1NJWkVTX1NVQ0NFU1N9IGZyb20gXCIuLi8uLi9yZWR1eC9yZWR1Y2Vycy9lY29tbWVyY2Uvc2l6ZXNcIjtcblxuY29uc3QgU2VnbWVudE1lbnUgPSAoeyBjdXJyZW50UmVmaW5lbWVudCwgcmVmaW5lIH0pID0+IHtcblxuXG4gIGNvbnN0IHNlbGVjdGVkU2VnbWVudCA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnV4LnNlbGVjdGVkU2VnbWVudCk7XG4gIGNvbnN0IHNpemVzID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuc2l6ZXMpO1xuICBjb25zdCBzZWdtZW50cyA9IChzaXplcy5yZWFkeVN0YXR1cyAhPT0gRkVUQ0hfU0laRVNfU1VDQ0VTUykgPyBbXVxuICAgIDogT2JqZWN0LmtleXMoc2l6ZXMuZGF0YSkubWFwKGsgPT4gc2l6ZXMuZGF0YVtrXSk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3Qgb25DbGljayA9IChzKSA9PiB7XG4gICAgICBkaXNwYXRjaCh7dHlwZTogU0VUX1VYX1ZBTFVFLCBrZXk6ICdzZWxlY3RlZFNlZ21lbnQnLCB2YWx1ZTogcy52YWx1ZX0pO1xuICAgICAgcmVmaW5lKHMudmFsdWUpXG4gIH07XG5cbiAgY29uc3Qgc2l6ZUJ1dHRvbkNsYXNzID0gKHZhbHVlKSA9PiB7XG4gICAgcmV0dXJuIHNlbGVjdGVkU2VnbWVudCA9PT0gdmFsdWUgPyBjbGFzc25hbWVzKHN0LnNpemVJdGVtLCBzdC5zZWxlY3RlZCkgOiBzdC5zaXplSXRlbVxuICB9XG5cblxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0LnNpemVMaXN0fT5cbiAgICB7c2VnbWVudHMubWFwKCBzID0+IChcbiAgICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9e3NpemVCdXR0b25DbGFzcyhzLnZhbHVlKX0gb25DbGljaz17KCkgPT4gb25DbGljayhzKX0+XG4gICAgICAgICB7cy5sYWJlbH1cbiAgICAgICAgPC9idXR0b24+XG4gICAgKSlcbiAgICB9XG5cbiAgICAgIDwvZGl2PlxuXG5cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdFJlZmluZW1lbnRMaXN0KFNlZ21lbnRNZW51KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ecommerce/segmentMenu.js\n");

/***/ })

})