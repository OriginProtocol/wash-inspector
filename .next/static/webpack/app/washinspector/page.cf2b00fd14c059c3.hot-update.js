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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_hooks_useNftCollectionMetadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/hooks/useNftCollectionMetadata */ \"(app-client)/./src/hooks/useNftCollectionMetadata.tsx\");\n/* harmony import */ var _src_hooks_useNftMetadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/hooks/useNftMetadata */ \"(app-client)/./src/hooks/useNftMetadata.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction classNames() {\n    for(var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++){\n        classes[_key] = arguments[_key];\n    }\n    return classes.filter(Boolean).join(\" \");\n}\nfunction Home() {\n    var _window_location;\n    _s();\n    const [contract, setContract] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [nftId, setNftId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const search = window === null || window === void 0 ? void 0 : (_window_location = window.location) === null || _window_location === void 0 ? void 0 : _window_location.search;\n    // workaround for: https://github.com/vercel/next.js/issues/43585\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (search) {\n            const queryVars = search.substring(1).split(\"&\");\n            queryVars.forEach((pair)=>{\n                const [variable, value] = pair.split(\"=\");\n                if (variable === \"address\") setContract(value);\n                else if (variable === \"nftId\") setNftId(value);\n            });\n        }\n    }, [\n        search\n    ]);\n    const nftCollectionMetadata = (0,_src_hooks_useNftCollectionMetadata__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(contract);\n    const nftMetadata = (0,_src_hooks_useNftMetadata__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(contract, nftId);\n    console.log(\"nftMetadata\", nftMetadata);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"border-b border-gray-200 py-5 -mx-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"-ml-4 -mt-2 flex flex-wrap items-center px-4 sm:px-6 justify-between sm:flex-nowrap\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"ml-4 mt-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"text-lg font-medium leading-6 text-gray-900\",\n                            children: \"Wash inspector\"\n                        }, void 0, false, {\n                            fileName: \"/Users/domen-privat/projects/OriginProtocol/wash-inspector/app/washinspector/page.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/domen-privat/projects/OriginProtocol/wash-inspector/app/washinspector/page.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/domen-privat/projects/OriginProtocol/wash-inspector/app/washinspector/page.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/domen-privat/projects/OriginProtocol/wash-inspector/app/washinspector/page.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            nftMetadata && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex mt-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        src: nftMetadata.media[0].thumbnail,\n                        alt: \"Main NFT image\",\n                        width: 400,\n                        height: 400\n                    }, void 0, false, {\n                        fileName: \"/Users/domen-privat/projects/OriginProtocol/wash-inspector/app/washinspector/page.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex ml-6 flex-col\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-3xl\",\n                            children: \"\".concat(nftMetadata.contract.name, \" #\").concat(nftMetadata.tokenId)\n                        }, void 0, false, {\n                            fileName: \"/Users/domen-privat/projects/OriginProtocol/wash-inspector/app/washinspector/page.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/domen-privat/projects/OriginProtocol/wash-inspector/app/washinspector/page.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/domen-privat/projects/OriginProtocol/wash-inspector/app/washinspector/page.tsx\",\n                lineNumber: 46,\n                columnNumber: 23\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"a5KP+HbAK1FgULk8j/WcI9eAyU8=\", false, function() {\n    return [\n        _src_hooks_useNftCollectionMetadata__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        _src_hooks_useNftMetadata__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3dhc2hpbnNwZWN0b3IvcGFnZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFFcUQ7QUFFMEI7QUFDcEI7QUFFN0I7QUFFOUIsU0FBU0ssYUFBdUI7SUFBWjtRQUFHQyxRQUFILHVCQUFVO0lBQUQ7SUFDM0IsT0FBT0EsUUFBUUMsTUFBTSxDQUFDQyxTQUFTQyxJQUFJLENBQUM7QUFDdEM7QUFFZSxTQUFTQyxPQUFPO1FBR2RDOztJQUZmLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHYiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzlDLE1BQU0sQ0FBQ2MsT0FBT0MsU0FBUyxHQUFHZiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ3hDLE1BQU1nQixTQUFTTCxtQkFBQUEsb0JBQUFBLEtBQUFBLElBQUFBLENBQUFBLG1CQUFBQSxPQUFRTSxRQUFRLGNBQWhCTiw4QkFBQUEsS0FBQUEsSUFBQUEsaUJBQWtCSyxNQUFGO0lBRS9CLGlFQUFpRTtJQUNqRWYsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUllLFFBQVE7WUFDVixNQUFNRSxZQUFZRixPQUFPRyxTQUFTLENBQUMsR0FBR0MsS0FBSyxDQUFDO1lBQzVDRixVQUFVRyxPQUFPLENBQUNDLENBQUFBLE9BQVE7Z0JBQ3hCLE1BQU0sQ0FBQ0MsVUFBVUMsTUFBTSxHQUFHRixLQUFLRixLQUFLLENBQUM7Z0JBQ3JDLElBQUlHLGFBQWEsV0FDZlYsWUFBWVc7cUJBQ1QsSUFBSUQsYUFBYSxTQUNwQlIsU0FBU1M7WUFDYjtRQUNGLENBQUM7SUFDSCxHQUFFO1FBQUNSO0tBQU87SUFFVixNQUFNUyx3QkFBd0J2QiwrRUFBd0JBLENBQUNVO0lBQ3ZELE1BQU1jLGNBQWN2QixxRUFBY0EsQ0FBQ1MsVUFBVUU7SUFFN0NhLFFBQVFDLEdBQUcsQ0FBQyxlQUFlRjtJQUMzQixxQkFDRTs7MEJBQ0UsOERBQUNHO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNDOzRCQUFHRCxXQUFVO3NDQUE4Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSWpFSiw2QkFBZSw4REFBQ0c7Z0JBQUlDLFdBQVU7O2tDQUM3Qiw4REFBQzFCLG1EQUFLQTt3QkFDSjRCLEtBQUtOLFlBQVlPLEtBQUssQ0FBQyxFQUFFLENBQUNDLFNBQVM7d0JBQ25DQyxLQUFJO3dCQUNKQyxPQUFPO3dCQUNQQyxRQUFROzs7Ozs7a0NBRVYsOERBQUNSO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDUTs0QkFBR1IsV0FBVTtzQ0FBWSxHQUFpQ0osT0FBOUJBLFlBQVlkLFFBQVEsQ0FBQzJCLElBQUksRUFBQyxNQUF3QixPQUFwQmIsWUFBWWMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt4RixDQUFDO0dBN0N1QjlCOztRQW1CUVIsMkVBQXdCQTtRQUNsQ0MsaUVBQWNBOzs7S0FwQlpPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC93YXNoaW5zcGVjdG9yL3BhZ2UudHN4PzQ3ZjQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IHsgRnJhZ21lbnQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBHbG9iYWxTdG9yZSBmcm9tICcuLi8uLi9zcmMvc3RvcmVzL0dsb2JhbFN0b3JlJ1xuaW1wb3J0IHVzZU5mdENvbGxlY3Rpb25NZXRhZGF0YSBmcm9tICcuLi8uLi9zcmMvaG9va3MvdXNlTmZ0Q29sbGVjdGlvbk1ldGFkYXRhJ1xuaW1wb3J0IHVzZU5mdE1ldGFkYXRhIGZyb20gJy4uLy4uL3NyYy9ob29rcy91c2VOZnRNZXRhZGF0YSdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuXG5mdW5jdGlvbiBjbGFzc05hbWVzKC4uLmNsYXNzZXMpIHtcbiAgcmV0dXJuIGNsYXNzZXMuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbY29udHJhY3QsIHNldENvbnRyYWN0XSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbbmZ0SWQsIHNldE5mdElkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBzZWFyY2ggPSB3aW5kb3c/LmxvY2F0aW9uPy5zZWFyY2hcblxuICAvLyB3b3JrYXJvdW5kIGZvcjogaHR0cHM6Ly9naXRodWIuY29tL3ZlcmNlbC9uZXh0LmpzL2lzc3Vlcy80MzU4NVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzZWFyY2gpIHtcbiAgICAgIGNvbnN0IHF1ZXJ5VmFycyA9IHNlYXJjaC5zdWJzdHJpbmcoMSkuc3BsaXQoJyYnKVxuICAgICAgcXVlcnlWYXJzLmZvckVhY2gocGFpciA9PiB7XG4gICAgICAgIGNvbnN0IFt2YXJpYWJsZSwgdmFsdWVdID0gcGFpci5zcGxpdCgnPScpXG4gICAgICAgIGlmICh2YXJpYWJsZSA9PT0gJ2FkZHJlc3MnKVxuICAgICAgICAgIHNldENvbnRyYWN0KHZhbHVlKVxuICAgICAgICBlbHNlIGlmICh2YXJpYWJsZSA9PT0gJ25mdElkJylcbiAgICAgICAgICBzZXROZnRJZCh2YWx1ZSlcbiAgICAgIH0pXG4gICAgfVxuICB9LFtzZWFyY2hdKVxuXG4gIGNvbnN0IG5mdENvbGxlY3Rpb25NZXRhZGF0YSA9IHVzZU5mdENvbGxlY3Rpb25NZXRhZGF0YShjb250cmFjdClcbiAgY29uc3QgbmZ0TWV0YWRhdGEgPSB1c2VOZnRNZXRhZGF0YShjb250cmFjdCwgbmZ0SWQpXG5cbiAgY29uc29sZS5sb2coXCJuZnRNZXRhZGF0YVwiLCBuZnRNZXRhZGF0YSlcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItYiBib3JkZXItZ3JheS0yMDAgcHktNSAtbXgtNlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIi1tbC00IC1tdC0yIGZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBweC00IHNtOnB4LTYganVzdGlmeS1iZXR3ZWVuIHNtOmZsZXgtbm93cmFwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC00IG10LTJcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtbWVkaXVtIGxlYWRpbmctNiB0ZXh0LWdyYXktOTAwXCI+V2FzaCBpbnNwZWN0b3I8L2gzPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAge25mdE1ldGFkYXRhICYmIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtdC02XCI+XG4gICAgICAgIDxJbWFnZSBcbiAgICAgICAgICBzcmM9e25mdE1ldGFkYXRhLm1lZGlhWzBdLnRodW1ibmFpbH1cbiAgICAgICAgICBhbHQ9XCJNYWluIE5GVCBpbWFnZVwiXG4gICAgICAgICAgd2lkdGg9ezQwMH1cbiAgICAgICAgICBoZWlnaHQ9ezQwMH1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1sLTYgZmxleC1jb2xcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGxcIj57YCR7bmZ0TWV0YWRhdGEuY29udHJhY3QubmFtZX0gIyR7bmZ0TWV0YWRhdGEudG9rZW5JZH1gfTwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+fVxuICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VOZnRDb2xsZWN0aW9uTWV0YWRhdGEiLCJ1c2VOZnRNZXRhZGF0YSIsIkltYWdlIiwiY2xhc3NOYW1lcyIsImNsYXNzZXMiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsIkhvbWUiLCJ3aW5kb3ciLCJjb250cmFjdCIsInNldENvbnRyYWN0IiwibmZ0SWQiLCJzZXROZnRJZCIsInNlYXJjaCIsImxvY2F0aW9uIiwicXVlcnlWYXJzIiwic3Vic3RyaW5nIiwic3BsaXQiLCJmb3JFYWNoIiwicGFpciIsInZhcmlhYmxlIiwidmFsdWUiLCJuZnRDb2xsZWN0aW9uTWV0YWRhdGEiLCJuZnRNZXRhZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJoMyIsInNyYyIsIm1lZGlhIiwidGh1bWJuYWlsIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJoMSIsIm5hbWUiLCJ0b2tlbklkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/washinspector/page.tsx\n"));

/***/ })

});