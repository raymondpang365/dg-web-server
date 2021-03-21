webpackHotUpdate_N_E("pages/shopping",{

/***/ "./components/ecommerce/SizeMenu.js":
/*!******************************************!*\
  !*** ./components/ecommerce/SizeMenu.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-instantsearch-dom */ \"./node_modules/react-instantsearch-dom/dist/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_reducers_ecommerce_sizes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/reducers/ecommerce/sizes */ \"./redux/reducers/ecommerce/sizes.js\");\n/* harmony import */ var _sizeMenu_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sizeMenu.module.scss */ \"./components/ecommerce/sizeMenu.module.scss\");\n/* harmony import */ var _sizeMenu_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_sizeMenu_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/psfr937/Development/main/dg-web-server/components/ecommerce/SizeMenu.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n\n\n\nvar namespace = 'refinementList';\n\n\nvar MySearchBox = function MySearchBox(_ref) {\n  _s();\n\n  var currentRefinement = _ref.currentRefinement,\n      refine = _ref.refine;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      selectedSizes = _useState[0],\n      setSelectedSizes = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      selectedSizeNames = _useState2[0],\n      setSelectedSizeNames = _useState2[1];\n\n  var _onClick = function onClick(d, t) {\n    var name = \"\".concat(d.physique, \" > \").concat(d.name, \" > \").concat(t.name);\n    var idx = selectedSizes.indexOf(t.id);\n    var nameIdx = selectedSizeNames.indexOf(name);\n\n    if (nameIdx < 0) {\n      setSelectedSizeNames([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(selectedSizeNames), [name]));\n      refine([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(selectedSizeNames), [name]));\n    } else {\n      var _selectedSizeNames$sl, _selectedSizeNames$sl2;\n\n      setSelectedSizeNames((_selectedSizeNames$sl = selectedSizeNames.slice(0, idx)).concat.apply(_selectedSizeNames$sl, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(selectedSizeNames.slice(idx + 1))));\n      refine((_selectedSizeNames$sl2 = selectedSizeNames.slice(0, idx)).concat.apply(_selectedSizeNames$sl2, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(selectedSizeNames.slice(idx + 1))));\n    }\n\n    if (idx < 0) {\n      setSelectedSizes([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(selectedSizes), [t.id]));\n    } else {\n      var _selectedSizes$slice;\n\n      setSelectedSizes((_selectedSizes$slice = selectedSizes.slice(0, idx)).concat.apply(_selectedSizes$slice, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(selectedSizes.slice(idx + 1))));\n    }\n  };\n\n  var sizeButtonClass = function sizeButtonClass(id) {\n    return selectedSizes.indexOf(id) >= 0 ? classnames__WEBPACK_IMPORTED_MODULE_7___default()(_sizeMenu_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.sizeItem, _sizeMenu_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.selected) : _sizeMenu_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.sizeItem;\n  }; // if(typeof window !== 'undefined' ) {\n\n\n  var sizes = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"])(function (state) {\n    return state.sizes;\n  });\n  var data = sizes.readyStatus === _redux_reducers_ecommerce_sizes__WEBPACK_IMPORTED_MODULE_5__[\"FETCH_SIZES_SUCCESS\"] ? Object.keys(sizes.data).map(function (k) {\n    return sizes.data[k];\n  }) : [];\n  return data.filter(function (d) {\n    return d.physique === 'women';\n  }).map(function (d) {\n    return __jsx(\"div\", {\n      className: _sizeMenu_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.measurementMenu,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 7\n      }\n    }, __jsx(\"div\", {\n      className: _sizeMenu_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.measurementMenuTitle,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }\n    }, __jsx(\"h4\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 11\n      }\n    }, \" \", d.name)), __jsx(\"div\", {\n      className: _sizeMenu_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.sizeList,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }\n    }, d.sizes.map(function (t) {\n      return __jsx(\"button\", {\n        className: sizeButtonClass(t.id),\n        onClick: function onClick() {\n          return _onClick(d, t);\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 29\n        }\n      }, t.name);\n    })));\n  }); // }\n  // else{\n  //   return null\n  // }\n};\n\n_s(MySearchBox, \"c4JoxL3GETPzipaTVaEOpfeoNpQ=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"]];\n});\n\n_c = MySearchBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = Object(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2__[\"connectRefinementList\"])(MySearchBox));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"MySearchBox\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9lY29tbWVyY2UvU2l6ZU1lbnUuanM/NWIwMiJdLCJuYW1lcyI6WyJuYW1lc3BhY2UiLCJNeVNlYXJjaEJveCIsImN1cnJlbnRSZWZpbmVtZW50IiwicmVmaW5lIiwidXNlU3RhdGUiLCJzZWxlY3RlZFNpemVzIiwic2V0U2VsZWN0ZWRTaXplcyIsInNlbGVjdGVkU2l6ZU5hbWVzIiwic2V0U2VsZWN0ZWRTaXplTmFtZXMiLCJvbkNsaWNrIiwiZCIsInQiLCJuYW1lIiwicGh5c2lxdWUiLCJpZHgiLCJpbmRleE9mIiwiaWQiLCJuYW1lSWR4Iiwic2xpY2UiLCJjb25jYXQiLCJzaXplQnV0dG9uQ2xhc3MiLCJjbGFzc25hbWVzIiwic3QiLCJzaXplSXRlbSIsInNlbGVjdGVkIiwic2l6ZXMiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiZGF0YSIsInJlYWR5U3RhdHVzIiwiRkVUQ0hfU0laRVNfU1VDQ0VTUyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrIiwiZmlsdGVyIiwibWVhc3VyZW1lbnRNZW51IiwibWVhc3VyZW1lbnRNZW51VGl0bGUiLCJzaXplTGlzdCIsImNvbm5lY3RSZWZpbmVtZW50TGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxTQUFTLEdBQUcsZ0JBQWxCO0FBQ0E7O0FBR0EsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBbUM7QUFBQTs7QUFBQSxNQUFoQ0MsaUJBQWdDLFFBQWhDQSxpQkFBZ0M7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7O0FBQUEsa0JBRVhDLHNEQUFRLENBQUMsRUFBRCxDQUZHO0FBQUEsTUFFOUNDLGFBRjhDO0FBQUEsTUFFL0JDLGdCQUYrQjs7QUFBQSxtQkFHSEYsc0RBQVEsQ0FBQyxFQUFELENBSEw7QUFBQSxNQUc5Q0csaUJBSDhDO0FBQUEsTUFHM0JDLG9C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O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBTTNCLENBQUMsQ0FBQ0UsSUFBUixDQURGLENBREYsRUFJRTtBQUFLLGVBQVMsRUFBRVUsNERBQUUsQ0FBQ2dCLFFBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRzVCLENBQUMsQ0FBQ2UsS0FBRixDQUFRUSxHQUFSLENBQVksVUFBQXRCLENBQUM7QUFBQSxhQUFJO0FBQ2hCLGlCQUFTLEVBQUVTLGVBQWUsQ0FBQ1QsQ0FBQyxDQUFDSyxFQUFILENBRFY7QUFDa0IsZUFBTyxFQUFFO0FBQUEsaUJBQU1QLFFBQU8sQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLENBQWI7QUFBQSxTQUQzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRWZBLENBQUMsQ0FBQ0MsSUFGYSxDQUFKO0FBQUEsS0FBYixDQURILENBSkYsQ0FEbUQ7QUFBQSxHQUE5QyxDQUFQLENBcENtRCxDQW9EckQ7QUFDQTtBQUNBO0FBQ0E7QUFDRCxDQXhERDs7R0FBTVgsVztVQWlDWXlCLHVEOzs7S0FqQ1p6QixXO0FBMERTLHFFQUFBc0MscUZBQXFCLENBQUN0QyxXQUFELENBQXBDIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9lY29tbWVyY2UvU2l6ZU1lbnUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgY29ubmVjdFJlZmluZW1lbnRMaXN0IH0gZnJvbSAncmVhY3QtaW5zdGFudHNlYXJjaC1kb20nXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgRkVUQ0hfU0laRVNfU1VDQ0VTUyB9IGZyb20gXCIuLi8uLi9yZWR1eC9yZWR1Y2Vycy9lY29tbWVyY2Uvc2l6ZXNcIjtcbmltcG9ydCBzdCBmcm9tIFwiLi9zaXplTWVudS5tb2R1bGUuc2Nzc1wiXG5jb25zdCBuYW1lc3BhY2UgPSAncmVmaW5lbWVudExpc3QnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcblxuXG5jb25zdCBNeVNlYXJjaEJveCA9ICh7IGN1cnJlbnRSZWZpbmVtZW50LCByZWZpbmUgfSkgPT4ge1xuXG4gIGNvbnN0IFtzZWxlY3RlZFNpemVzLCBzZXRTZWxlY3RlZFNpemVzXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbc2VsZWN0ZWRTaXplTmFtZXMsIHNldFNlbGVjdGVkU2l6ZU5hbWVzXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBvbkNsaWNrID0gKGQsIHQpID0+IHtcblxuICAgIGNvbnN0IG5hbWUgPSBgJHtkLnBoeXNpcXVlfSA+ICR7ZC5uYW1lfSA+ICR7dC5uYW1lfWBcbiAgICBjb25zdCBpZHggPSBzZWxlY3RlZFNpemVzLmluZGV4T2YodC5pZCk7XG4gICAgY29uc3QgbmFtZUlkeCA9IHNlbGVjdGVkU2l6ZU5hbWVzLmluZGV4T2YobmFtZSlcblxuICAgIGlmKG5hbWVJZHggPCAwKSB7XG4gICAgICBzZXRTZWxlY3RlZFNpemVOYW1lcyhbLi4uc2VsZWN0ZWRTaXplTmFtZXMsIG5hbWVdKVxuICAgICAgcmVmaW5lKCBbLi4uc2VsZWN0ZWRTaXplTmFtZXMsIG5hbWVdKVxuICAgIH1cbiAgICBlbHNle1xuICAgICAgc2V0U2VsZWN0ZWRTaXplTmFtZXMoc2VsZWN0ZWRTaXplTmFtZXMuc2xpY2UoMCwgaWR4KS5jb25jYXQoLi4uc2VsZWN0ZWRTaXplTmFtZXMuc2xpY2UoaWR4ICsgMSkpKVxuICAgICAgcmVmaW5lKHNlbGVjdGVkU2l6ZU5hbWVzLnNsaWNlKDAsIGlkeCkuY29uY2F0KC4uLnNlbGVjdGVkU2l6ZU5hbWVzLnNsaWNlKGlkeCArIDEpKSlcbiAgICB9XG5cbiAgICBpZihpZHggPCAwKSB7XG4gICAgICBzZXRTZWxlY3RlZFNpemVzKFsuLi5zZWxlY3RlZFNpemVzLCB0LmlkXSlcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIHNldFNlbGVjdGVkU2l6ZXMoc2VsZWN0ZWRTaXplcy5zbGljZSgwLCBpZHgpLmNvbmNhdCguLi5zZWxlY3RlZFNpemVzLnNsaWNlKGlkeCArIDEpKSlcbiAgICB9XG5cbiAgfTtcblxuICBjb25zdCBzaXplQnV0dG9uQ2xhc3MgPSAoaWQpID0+IHtcbiAgICByZXR1cm4gc2VsZWN0ZWRTaXplcy5pbmRleE9mKGlkKSA+PSAwID8gY2xhc3NuYW1lcyhzdC5zaXplSXRlbSwgc3Quc2VsZWN0ZWQpIDogc3Quc2l6ZUl0ZW1cbiAgfTtcblxuICAvLyBpZih0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyApIHtcbiAgICBjb25zdCBzaXplcyA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnNpemVzKVxuICAgIGNvbnN0IGRhdGEgPSBzaXplcy5yZWFkeVN0YXR1cyA9PT0gRkVUQ0hfU0laRVNfU1VDQ0VTUyA/XG4gICAgICBPYmplY3Qua2V5cyhzaXplcy5kYXRhKS5tYXAoayA9PiBzaXplcy5kYXRhW2tdKSA6IFtdXG4gICAgcmV0dXJuIGRhdGEuZmlsdGVyKGQgPT4gZC5waHlzaXF1ZSA9PT0gJ3dvbWVuJykubWFwKGQgPT4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0Lm1lYXN1cmVtZW50TWVudX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdC5tZWFzdXJlbWVudE1lbnVUaXRsZX0+XG4gICAgICAgICAgPGg0PiB7ZC5uYW1lfTwvaDQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3Quc2l6ZUxpc3R9PlxuICAgICAgICAgIHtkLnNpemVzLm1hcCh0ID0+IDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c2l6ZUJ1dHRvbkNsYXNzKHQuaWQpfSBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKGQsIHQpfT5cbiAgICAgICAgICAgIHt0Lm5hbWV9XG4gICAgICAgICAgPC9idXR0b24+KVxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgKSlcbiAgLy8gfVxuICAvLyBlbHNle1xuICAvLyAgIHJldHVybiBudWxsXG4gIC8vIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RSZWZpbmVtZW50TGlzdChNeVNlYXJjaEJveCk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ecommerce/SizeMenu.js\n");

/***/ })

})