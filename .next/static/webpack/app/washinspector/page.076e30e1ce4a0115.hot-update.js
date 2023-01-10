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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_hooks_useNftCollectionMetadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/hooks/useNftCollectionMetadata */ \"(app-client)/./src/hooks/useNftCollectionMetadata.tsx\");\n/* harmony import */ var _src_hooks_useNftMetadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/hooks/useNftMetadata */ \"(app-client)/./src/hooks/useNftMetadata.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction classNames() {\n    for(var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++){\n        classes[_key] = arguments[_key];\n    }\n    return classes.filter(Boolean).join(\" \");\n}\nfunction Home() {\n    _s();\n    const [contract, setContract] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [nftId, setNftId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // workaround for: https://github.com/vercel/next.js/issues/43585\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const queryVars = window.location.search.substring(1).split(\"&\");\n        queryVars.forEach((pair)=>{\n            const [variable, value] = pair.split(\"=\");\n            if (variable === \"address\") setContract(value);\n            else if (variable === \"nftId\") setNftId(value);\n        });\n    }, [\n        window.location.search\n    ]);\n    const nftCollectionMetadata = (0,_src_hooks_useNftCollectionMetadata__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(contract);\n    const nftMetadata = (0,_src_hooks_useNftMetadata__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(contract, nftId);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"border-b border-gray-200 py-5 -mx-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"-ml-4 -mt-2 flex flex-wrap items-center px-4 sm:px-6 justify-between sm:flex-nowrap\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"ml-4 mt-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"text-lg font-medium leading-6 text-gray-900\",\n                            children: \"Wash inspector\"\n                        }, void 0, false, {\n                            fileName: \"/Users/domen-privat/projects/OriginProtocol/wash-inspector/app/washinspector/page.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/domen-privat/projects/OriginProtocol/wash-inspector/app/washinspector/page.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/domen-privat/projects/OriginProtocol/wash-inspector/app/washinspector/page.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/domen-privat/projects/OriginProtocol/wash-inspector/app/washinspector/page.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            nftMetadata && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex mt-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        src: nftMetadata.media[0].thumbnail,\n                        alt: \"Main NFT image\",\n                        width: 400,\n                        height: 400\n                    }, void 0, false, {\n                        fileName: \"/Users/domen-privat/projects/OriginProtocol/wash-inspector/app/washinspector/page.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"asdasd\"\n                            }, void 0, false, {\n                                fileName: \"/Users/domen-privat/projects/OriginProtocol/wash-inspector/app/washinspector/page.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"asds233\"\n                            }, void 0, false, {\n                                fileName: \"/Users/domen-privat/projects/OriginProtocol/wash-inspector/app/washinspector/page.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/domen-privat/projects/OriginProtocol/wash-inspector/app/washinspector/page.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/domen-privat/projects/OriginProtocol/wash-inspector/app/washinspector/page.tsx\",\n                lineNumber: 43,\n                columnNumber: 23\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"a5KP+HbAK1FgULk8j/WcI9eAyU8=\", false, function() {\n    return [\n        _src_hooks_useNftCollectionMetadata__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        _src_hooks_useNftMetadata__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3dhc2hpbnNwZWN0b3IvcGFnZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFFcUQ7QUFFMEI7QUFDcEI7QUFFN0I7QUFFOUIsU0FBU0ssYUFBdUI7SUFBWjtRQUFHQyxRQUFILHVCQUFVO0lBQUQ7SUFDM0IsT0FBT0EsUUFBUUMsTUFBTSxDQUFDQyxTQUFTQyxJQUFJLENBQUM7QUFDdEM7QUFFZSxTQUFTQyxPQUFPOztJQUM3QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1osK0NBQVFBLENBQUMsS0FBSztJQUM5QyxNQUFNLENBQUNhLE9BQU9DLFNBQVMsR0FBR2QsK0NBQVFBLENBQUMsS0FBSztJQUV4QyxpRUFBaUU7SUFDakVDLGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNYyxZQUFZQyxPQUFPQyxRQUFRLENBQUNDLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDLEdBQUdDLEtBQUssQ0FBQztRQUM1REwsVUFBVU0sT0FBTyxDQUFDQyxDQUFBQSxPQUFRO1lBQ3hCLE1BQU0sQ0FBQ0MsVUFBVUMsTUFBTSxHQUFHRixLQUFLRixLQUFLLENBQUM7WUFDckMsSUFBSUcsYUFBYSxXQUNmWCxZQUFZWTtpQkFDVCxJQUFJRCxhQUFhLFNBQ3BCVCxTQUFTVTtRQUNiO0lBQ0YsR0FBRTtRQUFDUixPQUFPQyxRQUFRLENBQUNDLE1BQU07S0FBQztJQUUxQixNQUFNTyx3QkFBd0J2QiwrRUFBd0JBLENBQUNTO0lBQ3ZELE1BQU1lLGNBQWN2QixxRUFBY0EsQ0FBQ1EsVUFBVUU7SUFHN0MscUJBQ0U7OzBCQUNFLDhEQUFDYztnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDQzs0QkFBR0QsV0FBVTtzQ0FBOEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUlqRUYsNkJBQWUsOERBQUNDO2dCQUFJQyxXQUFVOztrQ0FDN0IsOERBQUN4QixtREFBS0E7d0JBQ0owQixLQUFLSixZQUFZSyxLQUFLLENBQUMsRUFBRSxDQUFDQyxTQUFTO3dCQUNuQ0MsS0FBSTt3QkFDSkMsT0FBTzt3QkFDUEMsUUFBUTs7Ozs7O2tDQUVWLDhEQUFDUjt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNEOzBDQUFJOzs7Ozs7MENBQ0wsOERBQUNBOzBDQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtmLENBQUM7R0EzQ3VCakI7O1FBZ0JRUiwyRUFBd0JBO1FBQ2xDQyxpRUFBY0E7OztLQWpCWk8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3dhc2hpbnNwZWN0b3IvcGFnZS50c3g/NDdmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG5pbXBvcnQgeyBGcmFnbWVudCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEdsb2JhbFN0b3JlIGZyb20gJy4uLy4uL3NyYy9zdG9yZXMvR2xvYmFsU3RvcmUnXG5pbXBvcnQgdXNlTmZ0Q29sbGVjdGlvbk1ldGFkYXRhIGZyb20gJy4uLy4uL3NyYy9ob29rcy91c2VOZnRDb2xsZWN0aW9uTWV0YWRhdGEnXG5pbXBvcnQgdXNlTmZ0TWV0YWRhdGEgZnJvbSAnLi4vLi4vc3JjL2hvb2tzL3VzZU5mdE1ldGFkYXRhJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5cbmZ1bmN0aW9uIGNsYXNzTmFtZXMoLi4uY2xhc3Nlcykge1xuICByZXR1cm4gY2xhc3Nlcy5maWx0ZXIoQm9vbGVhbikuam9pbignICcpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtjb250cmFjdCwgc2V0Q29udHJhY3RdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtuZnRJZCwgc2V0TmZ0SWRdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgLy8gd29ya2Fyb3VuZCBmb3I6IGh0dHBzOi8vZ2l0aHViLmNvbS92ZXJjZWwvbmV4dC5qcy9pc3N1ZXMvNDM1ODVcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBxdWVyeVZhcnMgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKS5zcGxpdCgnJicpXG4gICAgcXVlcnlWYXJzLmZvckVhY2gocGFpciA9PiB7XG4gICAgICBjb25zdCBbdmFyaWFibGUsIHZhbHVlXSA9IHBhaXIuc3BsaXQoJz0nKVxuICAgICAgaWYgKHZhcmlhYmxlID09PSAnYWRkcmVzcycpXG4gICAgICAgIHNldENvbnRyYWN0KHZhbHVlKVxuICAgICAgZWxzZSBpZiAodmFyaWFibGUgPT09ICduZnRJZCcpXG4gICAgICAgIHNldE5mdElkKHZhbHVlKVxuICAgIH0pXG4gIH0sW3dpbmRvdy5sb2NhdGlvbi5zZWFyY2hdKVxuXG4gIGNvbnN0IG5mdENvbGxlY3Rpb25NZXRhZGF0YSA9IHVzZU5mdENvbGxlY3Rpb25NZXRhZGF0YShjb250cmFjdClcbiAgY29uc3QgbmZ0TWV0YWRhdGEgPSB1c2VOZnRNZXRhZGF0YShjb250cmFjdCwgbmZ0SWQpXG5cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci1iIGJvcmRlci1ncmF5LTIwMCBweS01IC1teC02XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiLW1sLTQgLW10LTIgZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIHB4LTQgc206cHgtNiBqdXN0aWZ5LWJldHdlZW4gc206ZmxleC1ub3dyYXBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTQgbXQtMlwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1tZWRpdW0gbGVhZGluZy02IHRleHQtZ3JheS05MDBcIj5XYXNoIGluc3BlY3RvcjwvaDM+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7bmZ0TWV0YWRhdGEgJiYgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG10LTZcIj5cbiAgICAgICAgPEltYWdlIFxuICAgICAgICAgIHNyYz17bmZ0TWV0YWRhdGEubWVkaWFbMF0udGh1bWJuYWlsfVxuICAgICAgICAgIGFsdD1cIk1haW4gTkZUIGltYWdlXCJcbiAgICAgICAgICB3aWR0aD17NDAwfVxuICAgICAgICAgIGhlaWdodD17NDAwfVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICA8ZGl2PmFzZGFzZDwvZGl2PlxuICAgICAgICAgIDxkaXY+YXNkczIzMzwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2Pn1cbiAgICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlTmZ0Q29sbGVjdGlvbk1ldGFkYXRhIiwidXNlTmZ0TWV0YWRhdGEiLCJJbWFnZSIsImNsYXNzTmFtZXMiLCJjbGFzc2VzIiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJIb21lIiwiY29udHJhY3QiLCJzZXRDb250cmFjdCIsIm5mdElkIiwic2V0TmZ0SWQiLCJxdWVyeVZhcnMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlYXJjaCIsInN1YnN0cmluZyIsInNwbGl0IiwiZm9yRWFjaCIsInBhaXIiLCJ2YXJpYWJsZSIsInZhbHVlIiwibmZ0Q29sbGVjdGlvbk1ldGFkYXRhIiwibmZ0TWV0YWRhdGEiLCJkaXYiLCJjbGFzc05hbWUiLCJoMyIsInNyYyIsIm1lZGlhIiwidGh1bWJuYWlsIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/washinspector/page.tsx\n"));

/***/ })

});