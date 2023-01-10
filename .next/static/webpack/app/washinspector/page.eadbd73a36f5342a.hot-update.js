"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/washinspector/page",{

/***/ "(app-client)/./app/washinspector/page.tsx":
/*!************************************!*\
  !*** ./app/washinspector/page.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_hooks_useNftCollectionMetadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/hooks/useNftCollectionMetadata */ \"(app-client)/./src/hooks/useNftCollectionMetadata.tsx\");\n/* harmony import */ var _src_hooks_useNftMetadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/hooks/useNftMetadata */ \"(app-client)/./src/hooks/useNftMetadata.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction classNames() {\n    for(var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++){\n        classes[_key] = arguments[_key];\n    }\n    return classes.filter(Boolean).join(\" \");\n}\nfunction Home() {\n    _s();\n    const [contract, setContract] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [nftId, setNftId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // workaround for: https://github.com/vercel/next.js/issues/43585\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const queryVars = window.location.search.substring(1).split(\"&\");\n        queryVars.forEach((pair)=>{\n            const [variable, value] = pair.split(\"=\");\n            if (variable === \"address\") setContract(value);\n            else if (variable === \"nftId\") setNftId(value);\n        });\n    }, [\n        window.location.search\n    ]);\n    const nftCollectionMetadata = (0,_src_hooks_useNftCollectionMetadata__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(contract);\n    const nftMetadata = (0,_src_hooks_useNftMetadata__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(contract, nftId);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"border-b border-gray-200 py-5 -mx-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"-ml-4 -mt-2 flex flex-wrap items-center px-4 sm:px-6 justify-between sm:flex-nowrap\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"ml-4 mt-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"text-lg font-medium leading-6 text-gray-900\",\n                            children: \"Wash inspector\"\n                        }, void 0, false, {\n                            fileName: \"/Users/domen-privat/projects/OriginProtocol/wash-inspector/app/washinspector/page.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/domen-privat/projects/OriginProtocol/wash-inspector/app/washinspector/page.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/domen-privat/projects/OriginProtocol/wash-inspector/app/washinspector/page.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/domen-privat/projects/OriginProtocol/wash-inspector/app/washinspector/page.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            nftMetadata && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    src: nftMetadata.media[0].thumbnail,\n                    alt: \"Main NFT image\",\n                    width: 500,\n                    height: 500\n                }, void 0, false, {\n                    fileName: \"/Users/domen-privat/projects/OriginProtocol/wash-inspector/app/washinspector/page.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/domen-privat/projects/OriginProtocol/wash-inspector/app/washinspector/page.tsx\",\n                lineNumber: 43,\n                columnNumber: 23\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"a5KP+HbAK1FgULk8j/WcI9eAyU8=\", false, function() {\n    return [\n        _src_hooks_useNftCollectionMetadata__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        _src_hooks_useNftMetadata__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3dhc2hpbnNwZWN0b3IvcGFnZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFFcUQ7QUFFMEI7QUFDcEI7QUFFN0I7QUFFOUIsU0FBU0ssYUFBdUI7SUFBWjtRQUFHQyxRQUFILHVCQUFVO0lBQUQ7SUFDM0IsT0FBT0EsUUFBUUMsTUFBTSxDQUFDQyxTQUFTQyxJQUFJLENBQUM7QUFDdEM7QUFFZSxTQUFTQyxPQUFPOztJQUM3QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1osK0NBQVFBLENBQUMsS0FBSztJQUM5QyxNQUFNLENBQUNhLE9BQU9DLFNBQVMsR0FBR2QsK0NBQVFBLENBQUMsS0FBSztJQUV4QyxpRUFBaUU7SUFDakVDLGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNYyxZQUFZQyxPQUFPQyxRQUFRLENBQUNDLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDLEdBQUdDLEtBQUssQ0FBQztRQUM1REwsVUFBVU0sT0FBTyxDQUFDQyxDQUFBQSxPQUFRO1lBQ3hCLE1BQU0sQ0FBQ0MsVUFBVUMsTUFBTSxHQUFHRixLQUFLRixLQUFLLENBQUM7WUFDckMsSUFBSUcsYUFBYSxXQUNmWCxZQUFZWTtpQkFDVCxJQUFJRCxhQUFhLFNBQ3BCVCxTQUFTVTtRQUNiO0lBQ0YsR0FBRTtRQUFDUixPQUFPQyxRQUFRLENBQUNDLE1BQU07S0FBQztJQUUxQixNQUFNTyx3QkFBd0J2QiwrRUFBd0JBLENBQUNTO0lBQ3ZELE1BQU1lLGNBQWN2QixxRUFBY0EsQ0FBQ1EsVUFBVUU7SUFHN0MscUJBQ0U7OzBCQUNFLDhEQUFDYztnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDQzs0QkFBR0QsV0FBVTtzQ0FBOEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUlqRUYsNkJBQWUsOERBQUNDOzBCQUNmLDRFQUFDdkIsbURBQUtBO29CQUNKMEIsS0FBS0osWUFBWUssS0FBSyxDQUFDLEVBQUUsQ0FBQ0MsU0FBUztvQkFDbkNDLEtBQUk7b0JBQ0pDLE9BQU87b0JBQ1BDLFFBQVE7Ozs7Ozs7Ozs7Ozs7QUFLbEIsQ0FBQztHQXZDdUJ6Qjs7UUFnQlFSLDJFQUF3QkE7UUFDbENDLGlFQUFjQTs7O0tBakJaTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvd2FzaGluc3BlY3Rvci9wYWdlLnRzeD80N2Y0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCB7IEZyYWdtZW50LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgR2xvYmFsU3RvcmUgZnJvbSAnLi4vLi4vc3JjL3N0b3Jlcy9HbG9iYWxTdG9yZSdcbmltcG9ydCB1c2VOZnRDb2xsZWN0aW9uTWV0YWRhdGEgZnJvbSAnLi4vLi4vc3JjL2hvb2tzL3VzZU5mdENvbGxlY3Rpb25NZXRhZGF0YSdcbmltcG9ydCB1c2VOZnRNZXRhZGF0YSBmcm9tICcuLi8uLi9zcmMvaG9va3MvdXNlTmZ0TWV0YWRhdGEnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcblxuZnVuY3Rpb24gY2xhc3NOYW1lcyguLi5jbGFzc2VzKSB7XG4gIHJldHVybiBjbGFzc2VzLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJylcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2NvbnRyYWN0LCBzZXRDb250cmFjdF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW25mdElkLCBzZXROZnRJZF0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAvLyB3b3JrYXJvdW5kIGZvcjogaHR0cHM6Ly9naXRodWIuY29tL3ZlcmNlbC9uZXh0LmpzL2lzc3Vlcy80MzU4NVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHF1ZXJ5VmFycyA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpLnNwbGl0KCcmJylcbiAgICBxdWVyeVZhcnMuZm9yRWFjaChwYWlyID0+IHtcbiAgICAgIGNvbnN0IFt2YXJpYWJsZSwgdmFsdWVdID0gcGFpci5zcGxpdCgnPScpXG4gICAgICBpZiAodmFyaWFibGUgPT09ICdhZGRyZXNzJylcbiAgICAgICAgc2V0Q29udHJhY3QodmFsdWUpXG4gICAgICBlbHNlIGlmICh2YXJpYWJsZSA9PT0gJ25mdElkJylcbiAgICAgICAgc2V0TmZ0SWQodmFsdWUpXG4gICAgfSlcbiAgfSxbd2luZG93LmxvY2F0aW9uLnNlYXJjaF0pXG5cbiAgY29uc3QgbmZ0Q29sbGVjdGlvbk1ldGFkYXRhID0gdXNlTmZ0Q29sbGVjdGlvbk1ldGFkYXRhKGNvbnRyYWN0KVxuICBjb25zdCBuZnRNZXRhZGF0YSA9IHVzZU5mdE1ldGFkYXRhKGNvbnRyYWN0LCBuZnRJZClcblxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwIHB5LTUgLW14LTZcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCItbWwtNCAtbXQtMiBmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIgcHgtNCBzbTpweC02IGp1c3RpZnktYmV0d2VlbiBzbTpmbGV4LW5vd3JhcFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtNCBtdC0yXCI+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LW1lZGl1bSBsZWFkaW5nLTYgdGV4dC1ncmF5LTkwMFwiPldhc2ggaW5zcGVjdG9yPC9oMz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtuZnRNZXRhZGF0YSAmJiA8ZGl2PlxuICAgICAgICA8SW1hZ2UgXG4gICAgICAgICAgc3JjPXtuZnRNZXRhZGF0YS5tZWRpYVswXS50aHVtYm5haWx9XG4gICAgICAgICAgYWx0PVwiTWFpbiBORlQgaW1hZ2VcIlxuICAgICAgICAgIHdpZHRoPXs1MDB9XG4gICAgICAgICAgaGVpZ2h0PXs1MDB9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj59XG4gICAgPC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZU5mdENvbGxlY3Rpb25NZXRhZGF0YSIsInVzZU5mdE1ldGFkYXRhIiwiSW1hZ2UiLCJjbGFzc05hbWVzIiwiY2xhc3NlcyIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwiSG9tZSIsImNvbnRyYWN0Iiwic2V0Q29udHJhY3QiLCJuZnRJZCIsInNldE5mdElkIiwicXVlcnlWYXJzIiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJzdWJzdHJpbmciLCJzcGxpdCIsImZvckVhY2giLCJwYWlyIiwidmFyaWFibGUiLCJ2YWx1ZSIsIm5mdENvbGxlY3Rpb25NZXRhZGF0YSIsIm5mdE1ldGFkYXRhIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDMiLCJzcmMiLCJtZWRpYSIsInRodW1ibmFpbCIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/washinspector/page.tsx\n"));

/***/ })

});