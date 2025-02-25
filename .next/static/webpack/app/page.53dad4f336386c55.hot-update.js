"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _components_album_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/album-grid */ \"(app-pages-browser)/./src/components/album-grid.tsx\");\n/* harmony import */ var _hooks_use_albums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/hooks/use-albums */ \"(app-pages-browser)/./src/hooks/use-albums.ts\");\n/* harmony import */ var _components_slowdive_logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/slowdive-logo */ \"(app-pages-browser)/./src/components/slowdive-logo.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams)();\n    const { albums, currentAlbums, loading, error, handleShuffle, setCurrentAlbums } = (0,_hooks_use_albums__WEBPACK_IMPORTED_MODULE_4__.useAlbums)();\n    const [isShuffling, setIsShuffling] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // 从URL加载分享的专辑\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Home.useEffect\": ()=>{\n            const albumParam = searchParams.get('albums');\n            if (albumParam && albums.length > 0) {\n                const albumIds = albumParam.split(',').map({\n                    \"Home.useEffect.albumIds\": (id)=>parseInt(id)\n                }[\"Home.useEffect.albumIds\"]);\n                const albumsToLoad = albums.filter({\n                    \"Home.useEffect.albumsToLoad\": (album)=>albumIds.includes(album.id)\n                }[\"Home.useEffect.albumsToLoad\"]);\n                if (albumsToLoad.length > 0) {\n                    setCurrentAlbums(albumsToLoad);\n                // 可以添加提示加载成功\n                }\n            }\n        }\n    }[\"Home.useEffect\"], [\n        albums,\n        searchParams,\n        setCurrentAlbums\n    ]);\n    const triggerShuffle = ()=>{\n        setIsShuffling(true);\n        handleShuffle();\n        setTimeout(()=>setIsShuffling(false), 800);\n    };\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"h-screen flex items-center justify-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin\"\n                }, void 0, false, {\n                    fileName: \"/Users/skywalker/Code/slowdive/src/app/page.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"ml-4\",\n                    children: \"正在加载专辑...\"\n                }, void 0, false, {\n                    fileName: \"/Users/skywalker/Code/slowdive/src/app/page.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/skywalker/Code/slowdive/src/app/page.tsx\",\n            lineNumber: 44,\n            columnNumber: 12\n        }, this);\n    }\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"h-screen flex items-center justify-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"加载专辑数据出错\"\n            }, void 0, false, {\n                fileName: \"/Users/skywalker/Code/slowdive/src/app/page.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/skywalker/Code/slowdive/src/app/page.tsx\",\n            lineNumber: 51,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        style: {\n            minHeight: '100vh',\n            backgroundColor: '#121212',\n            padding: 0,\n            margin: 0,\n            overflowY: 'auto',\n            display: 'flex',\n            flexDirection: 'column'\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                style: {\n                    backgroundColor: 'rgba(0,0,0,0.9)',\n                    padding: '8px 12px',\n                    display: 'flex',\n                    justifyContent: 'space-between',\n                    alignItems: 'center',\n                    flexWrap: 'wrap',\n                    height: '44px',\n                    boxSizing: 'border-box',\n                    borderBottom: '1px solid rgba(255,255,255,0.05)'\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_slowdive_logo__WEBPACK_IMPORTED_MODULE_5__.SlowdiveLogo, {}, void 0, false, {\n                        fileName: \"/Users/skywalker/Code/slowdive/src/app/page.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: 'flex',\n                            gap: '8px'\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: triggerShuffle,\n                                disabled: isShuffling,\n                                style: {\n                                    padding: '6px 12px',\n                                    fontSize: '14px',\n                                    backgroundColor: '#10b981',\n                                    color: 'white',\n                                    border: 'none',\n                                    borderRadius: '4px',\n                                    cursor: isShuffling ? 'not-allowed' : 'pointer',\n                                    opacity: isShuffling ? 0.5 : 1\n                                },\n                                children: \"随机专辑\"\n                            }, void 0, false, {\n                                fileName: \"/Users/skywalker/Code/slowdive/src/app/page.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>window.location.href = '/customize',\n                                style: {\n                                    padding: '6px 12px',\n                                    fontSize: '14px',\n                                    backgroundColor: '#2563eb',\n                                    color: 'white',\n                                    border: 'none',\n                                    borderRadius: '4px',\n                                    cursor: 'pointer'\n                                },\n                                children: \"自定义海报墙\"\n                            }, void 0, false, {\n                                fileName: \"/Users/skywalker/Code/slowdive/src/app/page.tsx\",\n                                lineNumber: 96,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/skywalker/Code/slowdive/src/app/page.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/skywalker/Code/slowdive/src/app/page.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    flex: '1',\n                    overflow: 'hidden',\n                    width: '100%',\n                    display: 'flex',\n                    flexDirection: 'column'\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_album_grid__WEBPACK_IMPORTED_MODULE_3__.AlbumGrid, {\n                    albums: currentAlbums,\n                    isShuffling: isShuffling\n                }, void 0, false, {\n                    fileName: \"/Users/skywalker/Code/slowdive/src/app/page.tsx\",\n                    lineNumber: 120,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/skywalker/Code/slowdive/src/app/page.tsx\",\n                lineNumber: 113,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/skywalker/Code/slowdive/src/app/page.tsx\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"pZqvXsqEMfcXIvjfwu5urNMPIVA=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams,\n        _hooks_use_albums__WEBPACK_IMPORTED_MODULE_4__.useAlbums\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRQztvQkFBZUssYUFBYUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXZEO0dBbEh3QlI7O1FBQ0RKLDREQUFlQTtRQVFoQ0Usd0RBQVNBOzs7S0FUU0UiLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3l3YWxrZXIvQ29kZS9zbG93ZGl2ZS9zcmMvYXBwL3BhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tICduZXh0L25hdmlnYXRpb24nXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBBbGJ1bUdyaWQgfSBmcm9tICdAL2NvbXBvbmVudHMvYWxidW0tZ3JpZCdcbmltcG9ydCB7IHVzZUFsYnVtcyB9IGZyb20gJ0AvaG9va3MvdXNlLWFsYnVtcydcbmltcG9ydCB7IFNsb3dkaXZlTG9nbyB9IGZyb20gJ0AvY29tcG9uZW50cy9zbG93ZGl2ZS1sb2dvJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBzZWFyY2hQYXJhbXMgPSB1c2VTZWFyY2hQYXJhbXMoKVxuICBjb25zdCB7XG4gICAgYWxidW1zLFxuICAgIGN1cnJlbnRBbGJ1bXMsXG4gICAgbG9hZGluZyxcbiAgICBlcnJvcixcbiAgICBoYW5kbGVTaHVmZmxlLFxuICAgIHNldEN1cnJlbnRBbGJ1bXNcbiAgfSA9IHVzZUFsYnVtcygpXG4gIFxuICBjb25zdCBbaXNTaHVmZmxpbmcsIHNldElzU2h1ZmZsaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIC8vIOS7jlVSTOWKoOi9veWIhuS6q+eahOS4k+i+kVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGFsYnVtUGFyYW0gPSBzZWFyY2hQYXJhbXMuZ2V0KCdhbGJ1bXMnKVxuICAgIGlmIChhbGJ1bVBhcmFtICYmIGFsYnVtcy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBhbGJ1bUlkcyA9IGFsYnVtUGFyYW0uc3BsaXQoJywnKS5tYXAoaWQgPT4gcGFyc2VJbnQoaWQpKVxuICAgICAgY29uc3QgYWxidW1zVG9Mb2FkID0gYWxidW1zLmZpbHRlcihhbGJ1bSA9PiBhbGJ1bUlkcy5pbmNsdWRlcyhhbGJ1bS5pZCkpXG4gICAgICBcbiAgICAgIGlmIChhbGJ1bXNUb0xvYWQubGVuZ3RoID4gMCkge1xuICAgICAgICBzZXRDdXJyZW50QWxidW1zKGFsYnVtc1RvTG9hZClcbiAgICAgICAgLy8g5Y+v5Lul5re75Yqg5o+Q56S65Yqg6L295oiQ5YqfXG4gICAgICB9XG4gICAgfVxuICB9LCBbYWxidW1zLCBzZWFyY2hQYXJhbXMsIHNldEN1cnJlbnRBbGJ1bXNdKVxuXG4gIGNvbnN0IHRyaWdnZXJTaHVmZmxlID0gKCkgPT4ge1xuICAgIHNldElzU2h1ZmZsaW5nKHRydWUpXG4gICAgaGFuZGxlU2h1ZmZsZSgpXG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXRJc1NodWZmbGluZyhmYWxzZSksIDgwMClcbiAgfVxuXG4gIGlmIChsb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMiBoLTEyIGJvcmRlci00IGJvcmRlci1lbWVyYWxkLTUwMCBib3JkZXItdC10cmFuc3BhcmVudCByb3VuZGVkLWZ1bGwgYW5pbWF0ZS1zcGluXCI+PC9kaXY+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtbC00XCI+5q2j5Zyo5Yqg6L295LiT6L6RLi4uPC9wPlxuICAgIDwvZGl2PlxuICB9XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDxwPuWKoOi9veS4k+i+keaVsOaNruWHuumUmTwvcD5cbiAgICA8L2Rpdj5cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPG1haW4gc3R5bGU9e3sgXG4gICAgICBtaW5IZWlnaHQ6ICcxMDB2aCcsIFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzEyMTIxMicsXG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgbWFyZ2luOiAwLFxuICAgICAgb3ZlcmZsb3dZOiAnYXV0bycsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ1xuICAgIH19PlxuICAgICAgPGhlYWRlciBzdHlsZT17e1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsMCwwLDAuOSknLFxuICAgICAgICBwYWRkaW5nOiAnOHB4IDEycHgnLFxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICBmbGV4V3JhcDogJ3dyYXAnLFxuICAgICAgICBoZWlnaHQ6ICc0NHB4JyxcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDUpJ1xuICAgICAgfX0+XG4gICAgICAgIDxTbG93ZGl2ZUxvZ28gLz5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICc4cHgnIH19PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e3RyaWdnZXJTaHVmZmxlfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2lzU2h1ZmZsaW5nfVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcGFkZGluZzogJzZweCAxMnB4JyxcbiAgICAgICAgICAgICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzEwYjk4MScsXG4gICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNHB4JyxcbiAgICAgICAgICAgICAgY3Vyc29yOiBpc1NodWZmbGluZyA/ICdub3QtYWxsb3dlZCcgOiAncG9pbnRlcicsXG4gICAgICAgICAgICAgIG9wYWNpdHk6IGlzU2h1ZmZsaW5nID8gMC41IDogMVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICDpmo/mnLrkuJPovpFcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvY3VzdG9taXplJ31cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBhZGRpbmc6ICc2cHggMTJweCcsXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAnMTRweCcsXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMyNTYzZWInLFxuICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzRweCcsXG4gICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIOiHquWumuS5iea1t+aKpeWimVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuXG4gICAgICA8ZGl2IHN0eWxlPXt7IFxuICAgICAgICBmbGV4OiAnMScsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ1xuICAgICAgfX0+XG4gICAgICAgIDxBbGJ1bUdyaWQgYWxidW1zPXtjdXJyZW50QWxidW1zfSBpc1NodWZmbGluZz17aXNTaHVmZmxpbmd9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gIClcbn0gIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlU2VhcmNoUGFyYW1zIiwiQWxidW1HcmlkIiwidXNlQWxidW1zIiwiU2xvd2RpdmVMb2dvIiwiSG9tZSIsInNlYXJjaFBhcmFtcyIsImFsYnVtcyIsImN1cnJlbnRBbGJ1bXMiLCJsb2FkaW5nIiwiZXJyb3IiLCJoYW5kbGVTaHVmZmxlIiwic2V0Q3VycmVudEFsYnVtcyIsImlzU2h1ZmZsaW5nIiwic2V0SXNTaHVmZmxpbmciLCJhbGJ1bVBhcmFtIiwiZ2V0IiwibGVuZ3RoIiwiYWxidW1JZHMiLCJzcGxpdCIsIm1hcCIsImlkIiwicGFyc2VJbnQiLCJhbGJ1bXNUb0xvYWQiLCJmaWx0ZXIiLCJhbGJ1bSIsImluY2x1ZGVzIiwidHJpZ2dlclNodWZmbGUiLCJzZXRUaW1lb3V0IiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsIm1haW4iLCJzdHlsZSIsIm1pbkhlaWdodCIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmciLCJtYXJnaW4iLCJvdmVyZmxvd1kiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImhlYWRlciIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImZsZXhXcmFwIiwiaGVpZ2h0IiwiYm94U2l6aW5nIiwiYm9yZGVyQm90dG9tIiwiZ2FwIiwiYnV0dG9uIiwib25DbGljayIsImRpc2FibGVkIiwiZm9udFNpemUiLCJjb2xvciIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsImN1cnNvciIsIm9wYWNpdHkiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJmbGV4Iiwib3ZlcmZsb3ciLCJ3aWR0aCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/album-grid.tsx":
/*!***************************************!*\
  !*** ./src/components/album-grid.tsx ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AlbumGrid: () => (/* binding */ AlbumGrid)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* harmony import */ var _components_album_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/album-card */ \"(app-pages-browser)/./src/components/album-card.tsx\");\n/* harmony import */ var _components_album_detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/album-detail */ \"(app-pages-browser)/./src/components/album-detail.tsx\");\n/* __next_internal_client_entry_do_not_use__ AlbumGrid auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction AlbumGrid(param) {\n    let { albums, isShuffling = false } = param;\n    _s();\n    const [selectedAlbum, setSelectedAlbum] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    // 展示所有专辑，不再计算最佳数量\n    const displayAlbums = albums;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"album-grid\",\n                style: {\n                    width: '100%',\n                    // 不再固定高度为视口高度减去header\n                    // 改为auto使其可以滚动\n                    maxHeight: 'calc(100vh - 44px)',\n                    overflowY: 'auto',\n                    overflowX: 'hidden',\n                    boxSizing: 'border-box'\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, {\n                    children: displayAlbums.map((album, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                            initial: isShuffling ? {\n                                scale: 0.3,\n                                opacity: 0\n                            } : false,\n                            animate: {\n                                scale: 1,\n                                opacity: 1\n                            },\n                            exit: isShuffling ? {\n                                scale: 0.3,\n                                opacity: 0\n                            } : false,\n                            transition: {\n                                duration: 0.3,\n                                delay: index * 0.01,\n                                type: \"spring\",\n                                stiffness: 200\n                            },\n                            style: {\n                                margin: '0',\n                                boxShadow: 'none',\n                                overflow: 'hidden',\n                                aspectRatio: '1'\n                            },\n                            whileHover: {\n                                zIndex: 10,\n                                scale: 1.05,\n                                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',\n                                transition: {\n                                    duration: 0.2\n                                }\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_album_card__WEBPACK_IMPORTED_MODULE_2__.AlbumCard, {\n                                album: album,\n                                onClick: (album)=>setSelectedAlbum(album)\n                            }, void 0, false, {\n                                fileName: \"/Users/skywalker/Code/slowdive/src/components/album-grid.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 15\n                            }, this)\n                        }, album.id, false, {\n                            fileName: \"/Users/skywalker/Code/slowdive/src/components/album-grid.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/skywalker/Code/slowdive/src/components/album-grid.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/skywalker/Code/slowdive/src/components/album-grid.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            selectedAlbum && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_album_detail__WEBPACK_IMPORTED_MODULE_3__.AlbumDetail, {\n                album: selectedAlbum,\n                onClose: ()=>setSelectedAlbum(null)\n            }, void 0, false, {\n                fileName: \"/Users/skywalker/Code/slowdive/src/components/album-grid.tsx\",\n                lineNumber: 70,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(AlbumGrid, \"8DhJSHHv76fFCsRk5KaRfGTJTDU=\");\n_c = AlbumGrid;\nvar _c;\n$RefreshReg$(_c, \"AlbumGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2FsYnVtLWdyaWQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFaUM7QUFDdUI7QUFFSjtBQUNJO0FBT2pELFNBQVNLLFVBQVUsS0FBK0M7UUFBL0MsRUFBRUMsTUFBTSxFQUFFQyxjQUFjLEtBQUssRUFBa0IsR0FBL0M7O0lBQ3hCLE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdULCtDQUFRQSxDQUFlO0lBRWpFLGtCQUFrQjtJQUNsQixNQUFNVSxnQkFBZ0JKO0lBRXRCLHFCQUNFOzswQkFDRSw4REFBQ0s7Z0JBQ0NDLFdBQVU7Z0JBQ1ZDLE9BQU87b0JBQ0xDLE9BQU87b0JBQ1Asc0JBQXNCO29CQUN0QixlQUFlO29CQUNmQyxXQUFXO29CQUNYQyxXQUFXO29CQUNYQyxXQUFXO29CQUNYQyxXQUFXO2dCQUNiOzBCQUVBLDRFQUFDaEIsMERBQWVBOzhCQUNiUSxjQUFjUyxHQUFHLENBQUMsQ0FBQ0MsT0FBT0Msc0JBQ3pCLDhEQUFDcEIsaURBQU1BLENBQUNVLEdBQUc7NEJBRVRXLFNBQVNmLGNBQWM7Z0NBQUVnQixPQUFPO2dDQUFLQyxTQUFTOzRCQUFFLElBQUk7NEJBQ3BEQyxTQUFTO2dDQUFFRixPQUFPO2dDQUFHQyxTQUFTOzRCQUFFOzRCQUNoQ0UsTUFBTW5CLGNBQWM7Z0NBQUVnQixPQUFPO2dDQUFLQyxTQUFTOzRCQUFFLElBQUk7NEJBQ2pERyxZQUFZO2dDQUNWQyxVQUFVO2dDQUNWQyxPQUFPUixRQUFRO2dDQUNmUyxNQUFNO2dDQUNOQyxXQUFXOzRCQUNiOzRCQUNBbEIsT0FBTztnQ0FDTG1CLFFBQVE7Z0NBQ1JDLFdBQVc7Z0NBQ1hDLFVBQVU7Z0NBQ1ZDLGFBQWE7NEJBQ2Y7NEJBQ0FDLFlBQVk7Z0NBQ1ZDLFFBQVE7Z0NBQ1JkLE9BQU87Z0NBQ1BVLFdBQVc7Z0NBQ1hOLFlBQVk7b0NBQUVDLFVBQVU7Z0NBQUk7NEJBQzlCO3NDQUVBLDRFQUFDekIsNkRBQVNBO2dDQUNSaUIsT0FBT0E7Z0NBQ1BrQixTQUFTLENBQUNsQixRQUFVWCxpQkFBaUJXOzs7Ozs7MkJBekJsQ0EsTUFBTW1CLEVBQUU7Ozs7Ozs7Ozs7Ozs7OztZQWdDcEIvQiwrQkFDQyw4REFBQ0osaUVBQVdBO2dCQUNWZ0IsT0FBT1o7Z0JBQ1BnQyxTQUFTLElBQU0vQixpQkFBaUI7Ozs7Ozs7O0FBSzFDO0dBL0RnQko7S0FBQUEiLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3l3YWxrZXIvQ29kZS9zbG93ZGl2ZS9zcmMvY29tcG9uZW50cy9hbGJ1bS1ncmlkLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtb3Rpb24sIEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgQWxidW0gfSBmcm9tICdAL3R5cGVzL2FsYnVtJztcbmltcG9ydCB7IEFsYnVtQ2FyZCB9IGZyb20gJ0AvY29tcG9uZW50cy9hbGJ1bS1jYXJkJztcbmltcG9ydCB7IEFsYnVtRGV0YWlsIH0gZnJvbSAnQC9jb21wb25lbnRzL2FsYnVtLWRldGFpbCc7XG5cbmludGVyZmFjZSBBbGJ1bUdyaWRQcm9wcyB7XG4gIGFsYnVtczogQWxidW1bXTtcbiAgaXNTaHVmZmxpbmc/OiBib29sZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQWxidW1HcmlkKHsgYWxidW1zLCBpc1NodWZmbGluZyA9IGZhbHNlIH06IEFsYnVtR3JpZFByb3BzKSB7XG4gIGNvbnN0IFtzZWxlY3RlZEFsYnVtLCBzZXRTZWxlY3RlZEFsYnVtXSA9IHVzZVN0YXRlPEFsYnVtIHwgbnVsbD4obnVsbCk7XG4gIFxuICAvLyDlsZXnpLrmiYDmnInkuJPovpHvvIzkuI3lho3orqHnrpfmnIDkvbPmlbDph49cbiAgY29uc3QgZGlzcGxheUFsYnVtcyA9IGFsYnVtcztcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IFxuICAgICAgICBjbGFzc05hbWU9XCJhbGJ1bS1ncmlkXCIgXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAvLyDkuI3lho3lm7rlrprpq5jluqbkuLrop4blj6Ppq5jluqblh4/ljrtoZWFkZXJcbiAgICAgICAgICAvLyDmlLnkuLphdXRv5L2/5YW25Y+v5Lul5rua5YqoXG4gICAgICAgICAgbWF4SGVpZ2h0OiAnY2FsYygxMDB2aCAtIDQ0cHgpJyxcbiAgICAgICAgICBvdmVyZmxvd1k6ICdhdXRvJyxcbiAgICAgICAgICBvdmVyZmxvd1g6ICdoaWRkZW4nLFxuICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxBbmltYXRlUHJlc2VuY2U+XG4gICAgICAgICAge2Rpc3BsYXlBbGJ1bXMubWFwKChhbGJ1bSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgIGtleT17YWxidW0uaWR9XG4gICAgICAgICAgICAgIGluaXRpYWw9e2lzU2h1ZmZsaW5nID8geyBzY2FsZTogMC4zLCBvcGFjaXR5OiAwIH0gOiBmYWxzZX1cbiAgICAgICAgICAgICAgYW5pbWF0ZT17eyBzY2FsZTogMSwgb3BhY2l0eTogMSB9fVxuICAgICAgICAgICAgICBleGl0PXtpc1NodWZmbGluZyA/IHsgc2NhbGU6IDAuMywgb3BhY2l0eTogMCB9IDogZmFsc2V9XG4gICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDAuMywgXG4gICAgICAgICAgICAgICAgZGVsYXk6IGluZGV4ICogMC4wMSxcbiAgICAgICAgICAgICAgICB0eXBlOiBcInNwcmluZ1wiLFxuICAgICAgICAgICAgICAgIHN0aWZmbmVzczogMjAwXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAnMCcsXG4gICAgICAgICAgICAgICAgYm94U2hhZG93OiAnbm9uZScsXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgIGFzcGVjdFJhdGlvOiAnMSdcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgd2hpbGVIb3Zlcj17e1xuICAgICAgICAgICAgICAgIHpJbmRleDogMTAsXG4gICAgICAgICAgICAgICAgc2NhbGU6IDEuMDUsXG4gICAgICAgICAgICAgICAgYm94U2hhZG93OiAnMCA0cHggMTJweCByZ2JhKDAsMCwwLDAuMyknLFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHsgZHVyYXRpb246IDAuMiB9XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxBbGJ1bUNhcmRcbiAgICAgICAgICAgICAgICBhbGJ1bT17YWxidW19XG4gICAgICAgICAgICAgICAgb25DbGljaz17KGFsYnVtKSA9PiBzZXRTZWxlY3RlZEFsYnVtKGFsYnVtKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgICA8L2Rpdj5cblxuICAgICAge3NlbGVjdGVkQWxidW0gJiYgKFxuICAgICAgICA8QWxidW1EZXRhaWxcbiAgICAgICAgICBhbGJ1bT17c2VsZWN0ZWRBbGJ1bX1cbiAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRTZWxlY3RlZEFsYnVtKG51bGwpfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn0gIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwibW90aW9uIiwiQW5pbWF0ZVByZXNlbmNlIiwiQWxidW1DYXJkIiwiQWxidW1EZXRhaWwiLCJBbGJ1bUdyaWQiLCJhbGJ1bXMiLCJpc1NodWZmbGluZyIsInNlbGVjdGVkQWxidW0iLCJzZXRTZWxlY3RlZEFsYnVtIiwiZGlzcGxheUFsYnVtcyIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwid2lkdGgiLCJtYXhIZWlnaHQiLCJvdmVyZmxvd1kiLCJvdmVyZmxvd1giLCJib3hTaXppbmciLCJtYXAiLCJhbGJ1bSIsImluZGV4IiwiaW5pdGlhbCIsInNjYWxlIiwib3BhY2l0eSIsImFuaW1hdGUiLCJleGl0IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZGVsYXkiLCJ0eXBlIiwic3RpZmZuZXNzIiwibWFyZ2luIiwiYm94U2hhZG93Iiwib3ZlcmZsb3ciLCJhc3BlY3RSYXRpbyIsIndoaWxlSG92ZXIiLCJ6SW5kZXgiLCJvbkNsaWNrIiwiaWQiLCJvbkNsb3NlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/album-grid.tsx\n"));

/***/ })

});