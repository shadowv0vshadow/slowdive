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

/***/ "(app-pages-browser)/./src/components/album-grid.tsx":
/*!***************************************!*\
  !*** ./src/components/album-grid.tsx ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AlbumGrid: () => (/* binding */ AlbumGrid)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* harmony import */ var _components_album_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/album-card */ \"(app-pages-browser)/./src/components/album-card.tsx\");\n/* harmony import */ var _components_album_detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/album-detail */ \"(app-pages-browser)/./src/components/album-detail.tsx\");\n/* __next_internal_client_entry_do_not_use__ AlbumGrid auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction AlbumGrid(param) {\n    let { albums, isShuffling = false } = param;\n    _s();\n    const [selectedAlbum, setSelectedAlbum] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const gridRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    // 确保我们只显示足够填满屏幕的专辑数量\n    // 我们使用Math.ceil确保有足够的专辑填满最后一行\n    const calculateOptimalCount = ()=>{\n        if (!gridRef.current) return 50;\n        const gridWidth = gridRef.current.clientWidth;\n        const gridHeight = gridRef.current.clientHeight;\n        // 计算每张专辑的宽度（假设8列）\n        const albumWidth = gridWidth / 8;\n        // 计算需要的行数\n        const rowsNeeded = Math.ceil(gridHeight / albumWidth);\n        // 计算需要的总专辑数\n        const albumsNeeded = rowsNeeded * 8;\n        // 确保至少有48张专辑（6行8列）\n        return Math.max(albumsNeeded, 48);\n    };\n    const [optimalCount, setOptimalCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(50);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"AlbumGrid.useEffect\": ()=>{\n            // 初始计算\n            setOptimalCount(calculateOptimalCount());\n            // 监听窗口大小变化\n            const handleResize = {\n                \"AlbumGrid.useEffect.handleResize\": ()=>{\n                    setOptimalCount(calculateOptimalCount());\n                }\n            }[\"AlbumGrid.useEffect.handleResize\"];\n            window.addEventListener('resize', handleResize);\n            return ({\n                \"AlbumGrid.useEffect\": ()=>{\n                    window.removeEventListener('resize', handleResize);\n                }\n            })[\"AlbumGrid.useEffect\"];\n        }\n    }[\"AlbumGrid.useEffect\"], []);\n    // 确保我们显示足够的专辑以填满整个网格\n    const displayAlbums = albums.slice(0, optimalCount);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: gridRef,\n                className: \"album-grid\",\n                style: {\n                    width: '100%',\n                    height: 'calc(100vh - 44px)',\n                    boxSizing: 'border-box',\n                    overflow: 'hidden'\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, {\n                    children: displayAlbums.map((album, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                            initial: isShuffling ? {\n                                scale: 0.3,\n                                opacity: 0\n                            } : false,\n                            animate: {\n                                scale: 1,\n                                opacity: 1\n                            },\n                            exit: isShuffling ? {\n                                scale: 0.3,\n                                opacity: 0\n                            } : false,\n                            transition: {\n                                duration: 0.3,\n                                delay: index * 0.01,\n                                type: \"spring\",\n                                stiffness: 200\n                            },\n                            style: {\n                                margin: '0',\n                                boxShadow: 'none',\n                                overflow: 'hidden',\n                                aspectRatio: '1'\n                            },\n                            whileHover: {\n                                zIndex: 10,\n                                scale: 1.05,\n                                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',\n                                transition: {\n                                    duration: 0.2\n                                }\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_album_card__WEBPACK_IMPORTED_MODULE_2__.AlbumCard, {\n                                album: album,\n                                onClick: (album)=>setSelectedAlbum(album)\n                            }, void 0, false, {\n                                fileName: \"/Users/skywalker/Code/slowdive/src/components/album-grid.tsx\",\n                                lineNumber: 95,\n                                columnNumber: 15\n                            }, this)\n                        }, album.id, false, {\n                            fileName: \"/Users/skywalker/Code/slowdive/src/components/album-grid.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/skywalker/Code/slowdive/src/components/album-grid.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/skywalker/Code/slowdive/src/components/album-grid.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            selectedAlbum && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_album_detail__WEBPACK_IMPORTED_MODULE_3__.AlbumDetail, {\n                album: selectedAlbum,\n                onClose: ()=>setSelectedAlbum(null)\n            }, void 0, false, {\n                fileName: \"/Users/skywalker/Code/slowdive/src/components/album-grid.tsx\",\n                lineNumber: 105,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(AlbumGrid, \"BBK2xjWaP6+t53fOdxgGGUCLBjg=\");\n_c = AlbumGrid;\nvar _c;\n$RefreshReg$(_c, \"AlbumGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2FsYnVtLWdyaWQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFb0Q7QUFDSTtBQUVKO0FBQ0k7QUFPakQsU0FBU08sVUFBVSxLQUErQztRQUEvQyxFQUFFQyxNQUFNLEVBQUVDLGNBQWMsS0FBSyxFQUFrQixHQUEvQzs7SUFDeEIsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR1gsK0NBQVFBLENBQWU7SUFDakUsTUFBTVksVUFBVVYsNkNBQU1BLENBQWlCO0lBRXZDLHFCQUFxQjtJQUNyQiw4QkFBOEI7SUFDOUIsTUFBTVcsd0JBQXdCO1FBQzVCLElBQUksQ0FBQ0QsUUFBUUUsT0FBTyxFQUFFLE9BQU87UUFFN0IsTUFBTUMsWUFBWUgsUUFBUUUsT0FBTyxDQUFDRSxXQUFXO1FBQzdDLE1BQU1DLGFBQWFMLFFBQVFFLE9BQU8sQ0FBQ0ksWUFBWTtRQUUvQyxrQkFBa0I7UUFDbEIsTUFBTUMsYUFBYUosWUFBWTtRQUMvQixVQUFVO1FBQ1YsTUFBTUssYUFBYUMsS0FBS0MsSUFBSSxDQUFDTCxhQUFhRTtRQUMxQyxZQUFZO1FBQ1osTUFBTUksZUFBZUgsYUFBYTtRQUVsQyxtQkFBbUI7UUFDbkIsT0FBT0MsS0FBS0csR0FBRyxDQUFDRCxjQUFjO0lBQ2hDO0lBRUEsTUFBTSxDQUFDRSxjQUFjQyxnQkFBZ0IsR0FBRzFCLCtDQUFRQSxDQUFDO0lBRWpEQyxnREFBU0E7K0JBQUM7WUFDUixPQUFPO1lBQ1B5QixnQkFBZ0JiO1lBRWhCLFdBQVc7WUFDWCxNQUFNYztvREFBZTtvQkFDbkJELGdCQUFnQmI7Z0JBQ2xCOztZQUVBZSxPQUFPQyxnQkFBZ0IsQ0FBQyxVQUFVRjtZQUNsQzt1Q0FBTztvQkFDTEMsT0FBT0UsbUJBQW1CLENBQUMsVUFBVUg7Z0JBQ3ZDOztRQUNGOzhCQUFHLEVBQUU7SUFFTCxxQkFBcUI7SUFDckIsTUFBTUksZ0JBQWdCdkIsT0FBT3dCLEtBQUssQ0FBQyxHQUFHUDtJQUV0QyxxQkFDRTs7MEJBQ0UsOERBQUNRO2dCQUNDQyxLQUFLdEI7Z0JBQ0x1QixXQUFVO2dCQUNWQyxPQUFPO29CQUNMQyxPQUFPO29CQUNQQyxRQUFRO29CQUNSQyxXQUFXO29CQUNYQyxVQUFVO2dCQUNaOzBCQUVBLDRFQUFDcEMsMERBQWVBOzhCQUNiMkIsY0FBY1UsR0FBRyxDQUFDLENBQUNDLE9BQU9DLHNCQUN6Qiw4REFBQ3hDLGlEQUFNQSxDQUFDOEIsR0FBRzs0QkFFVFcsU0FBU25DLGNBQWM7Z0NBQUVvQyxPQUFPO2dDQUFLQyxTQUFTOzRCQUFFLElBQUk7NEJBQ3BEQyxTQUFTO2dDQUFFRixPQUFPO2dDQUFHQyxTQUFTOzRCQUFFOzRCQUNoQ0UsTUFBTXZDLGNBQWM7Z0NBQUVvQyxPQUFPO2dDQUFLQyxTQUFTOzRCQUFFLElBQUk7NEJBQ2pERyxZQUFZO2dDQUNWQyxVQUFVO2dDQUNWQyxPQUFPUixRQUFRO2dDQUNmUyxNQUFNO2dDQUNOQyxXQUFXOzRCQUNiOzRCQUNBakIsT0FBTztnQ0FDTGtCLFFBQVE7Z0NBQ1JDLFdBQVc7Z0NBQ1hmLFVBQVU7Z0NBQ1ZnQixhQUFhOzRCQUNmOzRCQUNBQyxZQUFZO2dDQUNWQyxRQUFRO2dDQUNSYixPQUFPO2dDQUNQVSxXQUFXO2dDQUNYTixZQUFZO29DQUFFQyxVQUFVO2dDQUFJOzRCQUM5QjtzQ0FFQSw0RUFBQzdDLDZEQUFTQTtnQ0FDUnFDLE9BQU9BO2dDQUNQaUIsU0FBUyxDQUFDakIsUUFBVS9CLGlCQUFpQitCOzs7Ozs7MkJBekJsQ0EsTUFBTWtCLEVBQUU7Ozs7Ozs7Ozs7Ozs7OztZQWdDcEJsRCwrQkFDQyw4REFBQ0osaUVBQVdBO2dCQUNWb0MsT0FBT2hDO2dCQUNQbUQsU0FBUyxJQUFNbEQsaUJBQWlCOzs7Ozs7OztBQUsxQztHQWxHZ0JKO0tBQUFBIiwic291cmNlcyI6WyIvVXNlcnMvc2t5d2Fsa2VyL0NvZGUvc2xvd2RpdmUvc3JjL2NvbXBvbmVudHMvYWxidW0tZ3JpZC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1vdGlvbiwgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyBBbGJ1bSB9IGZyb20gJ0AvdHlwZXMvYWxidW0nO1xuaW1wb3J0IHsgQWxidW1DYXJkIH0gZnJvbSAnQC9jb21wb25lbnRzL2FsYnVtLWNhcmQnO1xuaW1wb3J0IHsgQWxidW1EZXRhaWwgfSBmcm9tICdAL2NvbXBvbmVudHMvYWxidW0tZGV0YWlsJztcblxuaW50ZXJmYWNlIEFsYnVtR3JpZFByb3BzIHtcbiAgYWxidW1zOiBBbGJ1bVtdO1xuICBpc1NodWZmbGluZz86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBBbGJ1bUdyaWQoeyBhbGJ1bXMsIGlzU2h1ZmZsaW5nID0gZmFsc2UgfTogQWxidW1HcmlkUHJvcHMpIHtcbiAgY29uc3QgW3NlbGVjdGVkQWxidW0sIHNldFNlbGVjdGVkQWxidW1dID0gdXNlU3RhdGU8QWxidW0gfCBudWxsPihudWxsKTtcbiAgY29uc3QgZ3JpZFJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG4gIFxuICAvLyDnoa7kv53miJHku6zlj6rmmL7npLrotrPlpJ/loavmu6HlsY/luZXnmoTkuJPovpHmlbDph49cbiAgLy8g5oiR5Lus5L2/55SoTWF0aC5jZWls56Gu5L+d5pyJ6Laz5aSf55qE5LiT6L6R5aGr5ruh5pyA5ZCO5LiA6KGMXG4gIGNvbnN0IGNhbGN1bGF0ZU9wdGltYWxDb3VudCA9ICgpID0+IHtcbiAgICBpZiAoIWdyaWRSZWYuY3VycmVudCkgcmV0dXJuIDUwO1xuICAgIFxuICAgIGNvbnN0IGdyaWRXaWR0aCA9IGdyaWRSZWYuY3VycmVudC5jbGllbnRXaWR0aDtcbiAgICBjb25zdCBncmlkSGVpZ2h0ID0gZ3JpZFJlZi5jdXJyZW50LmNsaWVudEhlaWdodDtcbiAgICBcbiAgICAvLyDorqHnrpfmr4/lvKDkuJPovpHnmoTlrr3luqbvvIjlgYforr445YiX77yJXG4gICAgY29uc3QgYWxidW1XaWR0aCA9IGdyaWRXaWR0aCAvIDg7XG4gICAgLy8g6K6h566X6ZyA6KaB55qE6KGM5pWwXG4gICAgY29uc3Qgcm93c05lZWRlZCA9IE1hdGguY2VpbChncmlkSGVpZ2h0IC8gYWxidW1XaWR0aCk7XG4gICAgLy8g6K6h566X6ZyA6KaB55qE5oC75LiT6L6R5pWwXG4gICAgY29uc3QgYWxidW1zTmVlZGVkID0gcm93c05lZWRlZCAqIDg7XG4gICAgXG4gICAgLy8g56Gu5L+d6Iez5bCR5pyJNDjlvKDkuJPovpHvvIg26KGMOOWIl++8iVxuICAgIHJldHVybiBNYXRoLm1heChhbGJ1bXNOZWVkZWQsIDQ4KTtcbiAgfTtcbiAgXG4gIGNvbnN0IFtvcHRpbWFsQ291bnQsIHNldE9wdGltYWxDb3VudF0gPSB1c2VTdGF0ZSg1MCk7XG4gIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIOWIneWni+iuoeeul1xuICAgIHNldE9wdGltYWxDb3VudChjYWxjdWxhdGVPcHRpbWFsQ291bnQoKSk7XG4gICAgXG4gICAgLy8g55uR5ZCs56qX5Y+j5aSn5bCP5Y+Y5YyWXG4gICAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xuICAgICAgc2V0T3B0aW1hbENvdW50KGNhbGN1bGF0ZU9wdGltYWxDb3VudCgpKTtcbiAgICB9O1xuICAgIFxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcbiAgICB9O1xuICB9LCBbXSk7XG4gIFxuICAvLyDnoa7kv53miJHku6zmmL7npLrotrPlpJ/nmoTkuJPovpHku6Xloavmu6HmlbTkuKrnvZHmoLxcbiAgY29uc3QgZGlzcGxheUFsYnVtcyA9IGFsYnVtcy5zbGljZSgwLCBvcHRpbWFsQ291bnQpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgXG4gICAgICAgIHJlZj17Z3JpZFJlZn1cbiAgICAgICAgY2xhc3NOYW1lPVwiYWxidW0tZ3JpZFwiIFxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgaGVpZ2h0OiAnY2FsYygxMDB2aCAtIDQ0cHgpJyxcbiAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPEFuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICB7ZGlzcGxheUFsYnVtcy5tYXAoKGFsYnVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAga2V5PXthbGJ1bS5pZH1cbiAgICAgICAgICAgICAgaW5pdGlhbD17aXNTaHVmZmxpbmcgPyB7IHNjYWxlOiAwLjMsIG9wYWNpdHk6IDAgfSA6IGZhbHNlfVxuICAgICAgICAgICAgICBhbmltYXRlPXt7IHNjYWxlOiAxLCBvcGFjaXR5OiAxIH19XG4gICAgICAgICAgICAgIGV4aXQ9e2lzU2h1ZmZsaW5nID8geyBzY2FsZTogMC4zLCBvcGFjaXR5OiAwIH0gOiBmYWxzZX1cbiAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMC4zLCBcbiAgICAgICAgICAgICAgICBkZWxheTogaW5kZXggKiAwLjAxLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwic3ByaW5nXCIsXG4gICAgICAgICAgICAgICAgc3RpZmZuZXNzOiAyMDBcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBtYXJnaW46ICcwJyxcbiAgICAgICAgICAgICAgICBib3hTaGFkb3c6ICdub25lJyxcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgYXNwZWN0UmF0aW86ICcxJ1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7XG4gICAgICAgICAgICAgICAgekluZGV4OiAxMCxcbiAgICAgICAgICAgICAgICBzY2FsZTogMS4wNSxcbiAgICAgICAgICAgICAgICBib3hTaGFkb3c6ICcwIDRweCAxMnB4IHJnYmEoMCwwLDAsMC4zKScsXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogeyBkdXJhdGlvbjogMC4yIH1cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEFsYnVtQ2FyZFxuICAgICAgICAgICAgICAgIGFsYnVtPXthbGJ1bX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoYWxidW0pID0+IHNldFNlbGVjdGVkQWxidW0oYWxidW0pfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7c2VsZWN0ZWRBbGJ1bSAmJiAoXG4gICAgICAgIDxBbGJ1bURldGFpbFxuICAgICAgICAgIGFsYnVtPXtzZWxlY3RlZEFsYnVtfVxuICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFNlbGVjdGVkQWxidW0obnVsbCl9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufSAiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJtb3Rpb24iLCJBbmltYXRlUHJlc2VuY2UiLCJBbGJ1bUNhcmQiLCJBbGJ1bURldGFpbCIsIkFsYnVtR3JpZCIsImFsYnVtcyIsImlzU2h1ZmZsaW5nIiwic2VsZWN0ZWRBbGJ1bSIsInNldFNlbGVjdGVkQWxidW0iLCJncmlkUmVmIiwiY2FsY3VsYXRlT3B0aW1hbENvdW50IiwiY3VycmVudCIsImdyaWRXaWR0aCIsImNsaWVudFdpZHRoIiwiZ3JpZEhlaWdodCIsImNsaWVudEhlaWdodCIsImFsYnVtV2lkdGgiLCJyb3dzTmVlZGVkIiwiTWF0aCIsImNlaWwiLCJhbGJ1bXNOZWVkZWQiLCJtYXgiLCJvcHRpbWFsQ291bnQiLCJzZXRPcHRpbWFsQ291bnQiLCJoYW5kbGVSZXNpemUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpc3BsYXlBbGJ1bXMiLCJzbGljZSIsImRpdiIsInJlZiIsImNsYXNzTmFtZSIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJib3hTaXppbmciLCJvdmVyZmxvdyIsIm1hcCIsImFsYnVtIiwiaW5kZXgiLCJpbml0aWFsIiwic2NhbGUiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsImV4aXQiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJkZWxheSIsInR5cGUiLCJzdGlmZm5lc3MiLCJtYXJnaW4iLCJib3hTaGFkb3ciLCJhc3BlY3RSYXRpbyIsIndoaWxlSG92ZXIiLCJ6SW5kZXgiLCJvbkNsaWNrIiwiaWQiLCJvbkNsb3NlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/album-grid.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/hooks/use-albums.ts":
/*!*********************************!*\
  !*** ./src/hooks/use-albums.ts ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useAlbums: () => (/* binding */ useAlbums)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./src/lib/utils.ts\");\n\n\nfunction useAlbums() {\n    const [albums, setAlbums] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n    const [currentAlbums, setCurrentAlbums] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n    const [selectedAlbums, setSelectedAlbums] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)({\n        \"useAlbums.useEffect\": ()=>{\n            const fetchAlbums = {\n                \"useAlbums.useEffect.fetchAlbums\": async ()=>{\n                    try {\n                        setLoading(true);\n                        console.log('尝试获取专辑数据...');\n                        const response = await fetch('/albums.json');\n                        console.log('获取响应:', response.status, response.statusText);\n                        if (!response.ok) {\n                            throw new Error(\"获取专辑失败: \".concat(response.status, \" \").concat(response.statusText));\n                        }\n                        const data = await response.json();\n                        console.log(\"成功加载 \".concat(data.length, \" 张专辑\"));\n                        setAlbums(data);\n                        setCurrentAlbums((0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.shuffleArray)(data)); // 不限制专辑数量\n                    } catch (err) {\n                        console.error('加载专辑数据错误:', err);\n                        setError(err instanceof Error ? err : new Error('未知错误'));\n                    } finally{\n                        setLoading(false);\n                    }\n                }\n            }[\"useAlbums.useEffect.fetchAlbums\"];\n            fetchAlbums();\n        }\n    }[\"useAlbums.useEffect\"], []);\n    const handleShuffle = ()=>{\n        setCurrentAlbums((0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.shuffleArray)([\n            ...albums\n        ]));\n    };\n    const addToSelected = (album)=>{\n        if (!selectedAlbums.some((a)=>a.id === album.id)) {\n            setSelectedAlbums((prev)=>[\n                    ...prev,\n                    album\n                ]);\n        }\n    };\n    const removeFromSelected = (id)=>{\n        setSelectedAlbums((prev)=>prev.filter((album)=>album.id !== id));\n    };\n    const saveCustomWall = ()=>{\n        if (selectedAlbums.length === 0) return false;\n        setCurrentAlbums([\n            ...selectedAlbums\n        ]);\n        return true;\n    };\n    return {\n        albums,\n        currentAlbums,\n        selectedAlbums,\n        loading,\n        error,\n        handleShuffle,\n        addToSelected,\n        removeFromSelected,\n        saveCustomWall,\n        setCurrentAlbums\n    };\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9ob29rcy91c2UtYWxidW1zLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBNEM7QUFFRDtBQUVwQyxTQUFTRztJQUNkLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHTCwrQ0FBUUEsQ0FBVSxFQUFFO0lBQ2hELE1BQU0sQ0FBQ00sZUFBZUMsaUJBQWlCLEdBQUdQLCtDQUFRQSxDQUFVLEVBQUU7SUFDOUQsTUFBTSxDQUFDUSxnQkFBZ0JDLGtCQUFrQixHQUFHVCwrQ0FBUUEsQ0FBVSxFQUFFO0lBQ2hFLE1BQU0sQ0FBQ1UsU0FBU0MsV0FBVyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNZLE9BQU9DLFNBQVMsR0FBR2IsK0NBQVFBLENBQWU7SUFFakRDLGdEQUFTQTsrQkFBQztZQUNSLE1BQU1hO21EQUFjO29CQUNsQixJQUFJO3dCQUNGSCxXQUFXO3dCQUNYSSxRQUFRQyxHQUFHLENBQUM7d0JBQ1osTUFBTUMsV0FBVyxNQUFNQyxNQUFNO3dCQUM3QkgsUUFBUUMsR0FBRyxDQUFDLFNBQVNDLFNBQVNFLE1BQU0sRUFBRUYsU0FBU0csVUFBVTt3QkFDekQsSUFBSSxDQUFDSCxTQUFTSSxFQUFFLEVBQUU7NEJBQ2hCLE1BQU0sSUFBSUMsTUFBTSxXQUE4QkwsT0FBbkJBLFNBQVNFLE1BQU0sRUFBQyxLQUF1QixPQUFwQkYsU0FBU0csVUFBVTt3QkFDbkU7d0JBQ0EsTUFBTUcsT0FBTyxNQUFNTixTQUFTTyxJQUFJO3dCQUNoQ1QsUUFBUUMsR0FBRyxDQUFDLFFBQW9CLE9BQVpPLEtBQUtFLE1BQU0sRUFBQzt3QkFDaENwQixVQUFVa0I7d0JBQ1ZoQixpQkFBaUJMLHdEQUFZQSxDQUFDcUIsUUFBUSxVQUFVO29CQUNsRCxFQUFFLE9BQU9HLEtBQUs7d0JBQ1pYLFFBQVFILEtBQUssQ0FBQyxhQUFhYzt3QkFDM0JiLFNBQVNhLGVBQWVKLFFBQVFJLE1BQU0sSUFBSUosTUFBTTtvQkFDbEQsU0FBVTt3QkFDUlgsV0FBVztvQkFDYjtnQkFDRjs7WUFFQUc7UUFDRjs4QkFBRyxFQUFFO0lBRUwsTUFBTWEsZ0JBQWdCO1FBQ3BCcEIsaUJBQWlCTCx3REFBWUEsQ0FBQztlQUFJRTtTQUFPO0lBQzNDO0lBRUEsTUFBTXdCLGdCQUFnQixDQUFDQztRQUNyQixJQUFJLENBQUNyQixlQUFlc0IsSUFBSSxDQUFDQyxDQUFBQSxJQUFLQSxFQUFFQyxFQUFFLEtBQUtILE1BQU1HLEVBQUUsR0FBRztZQUNoRHZCLGtCQUFrQndCLENBQUFBLE9BQVE7dUJBQUlBO29CQUFNSjtpQkFBTTtRQUM1QztJQUNGO0lBRUEsTUFBTUsscUJBQXFCLENBQUNGO1FBQzFCdkIsa0JBQWtCd0IsQ0FBQUEsT0FBUUEsS0FBS0UsTUFBTSxDQUFDTixDQUFBQSxRQUFTQSxNQUFNRyxFQUFFLEtBQUtBO0lBQzlEO0lBRUEsTUFBTUksaUJBQWlCO1FBQ3JCLElBQUk1QixlQUFlaUIsTUFBTSxLQUFLLEdBQUcsT0FBTztRQUN4Q2xCLGlCQUFpQjtlQUFJQztTQUFlO1FBQ3BDLE9BQU87SUFDVDtJQUVBLE9BQU87UUFDTEo7UUFDQUU7UUFDQUU7UUFDQUU7UUFDQUU7UUFDQWU7UUFDQUM7UUFDQU07UUFDQUU7UUFDQTdCO0lBQ0Y7QUFDRiIsInNvdXJjZXMiOlsiL1VzZXJzL3NreXdhbGtlci9Db2RlL3Nsb3dkaXZlL3NyYy9ob29rcy91c2UtYWxidW1zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBbGJ1bSB9IGZyb20gJ0AvdHlwZXMvYWxidW0nO1xuaW1wb3J0IHsgc2h1ZmZsZUFycmF5IH0gZnJvbSAnQC9saWIvdXRpbHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlQWxidW1zKCkge1xuICBjb25zdCBbYWxidW1zLCBzZXRBbGJ1bXNdID0gdXNlU3RhdGU8QWxidW1bXT4oW10pO1xuICBjb25zdCBbY3VycmVudEFsYnVtcywgc2V0Q3VycmVudEFsYnVtc10gPSB1c2VTdGF0ZTxBbGJ1bVtdPihbXSk7XG4gIGNvbnN0IFtzZWxlY3RlZEFsYnVtcywgc2V0U2VsZWN0ZWRBbGJ1bXNdID0gdXNlU3RhdGU8QWxidW1bXT4oW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxFcnJvciB8IG51bGw+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hBbGJ1bXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgICBjb25zb2xlLmxvZygn5bCd6K+V6I635Y+W5LiT6L6R5pWw5o2uLi4uJyk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hbGJ1bXMuanNvbicpO1xuICAgICAgICBjb25zb2xlLmxvZygn6I635Y+W5ZON5bqUOicsIHJlc3BvbnNlLnN0YXR1cywgcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYOiOt+WPluS4k+i+keWksei0pTogJHtyZXNwb25zZS5zdGF0dXN9ICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH1gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBjb25zb2xlLmxvZyhg5oiQ5Yqf5Yqg6L29ICR7ZGF0YS5sZW5ndGh9IOW8oOS4k+i+kWApO1xuICAgICAgICBzZXRBbGJ1bXMoZGF0YSk7XG4gICAgICAgIHNldEN1cnJlbnRBbGJ1bXMoc2h1ZmZsZUFycmF5KGRhdGEpKTsgLy8g5LiN6ZmQ5Yi25LiT6L6R5pWw6YePXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcign5Yqg6L295LiT6L6R5pWw5o2u6ZSZ6K+vOicsIGVycik7XG4gICAgICAgIHNldEVycm9yKGVyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyIDogbmV3IEVycm9yKCfmnKrnn6XplJnor68nKSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmV0Y2hBbGJ1bXMoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZVNodWZmbGUgPSAoKSA9PiB7XG4gICAgc2V0Q3VycmVudEFsYnVtcyhzaHVmZmxlQXJyYXkoWy4uLmFsYnVtc10pKTtcbiAgfTtcblxuICBjb25zdCBhZGRUb1NlbGVjdGVkID0gKGFsYnVtOiBBbGJ1bSkgPT4ge1xuICAgIGlmICghc2VsZWN0ZWRBbGJ1bXMuc29tZShhID0+IGEuaWQgPT09IGFsYnVtLmlkKSkge1xuICAgICAgc2V0U2VsZWN0ZWRBbGJ1bXMocHJldiA9PiBbLi4ucHJldiwgYWxidW1dKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlRnJvbVNlbGVjdGVkID0gKGlkOiBudW1iZXIpID0+IHtcbiAgICBzZXRTZWxlY3RlZEFsYnVtcyhwcmV2ID0+IHByZXYuZmlsdGVyKGFsYnVtID0+IGFsYnVtLmlkICE9PSBpZCkpO1xuICB9O1xuXG4gIGNvbnN0IHNhdmVDdXN0b21XYWxsID0gKCkgPT4ge1xuICAgIGlmIChzZWxlY3RlZEFsYnVtcy5sZW5ndGggPT09IDApIHJldHVybiBmYWxzZTtcbiAgICBzZXRDdXJyZW50QWxidW1zKFsuLi5zZWxlY3RlZEFsYnVtc10pO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgYWxidW1zLFxuICAgIGN1cnJlbnRBbGJ1bXMsXG4gICAgc2VsZWN0ZWRBbGJ1bXMsXG4gICAgbG9hZGluZyxcbiAgICBlcnJvcixcbiAgICBoYW5kbGVTaHVmZmxlLFxuICAgIGFkZFRvU2VsZWN0ZWQsXG4gICAgcmVtb3ZlRnJvbVNlbGVjdGVkLFxuICAgIHNhdmVDdXN0b21XYWxsLFxuICAgIHNldEN1cnJlbnRBbGJ1bXNcbiAgfTtcbn0gIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic2h1ZmZsZUFycmF5IiwidXNlQWxidW1zIiwiYWxidW1zIiwic2V0QWxidW1zIiwiY3VycmVudEFsYnVtcyIsInNldEN1cnJlbnRBbGJ1bXMiLCJzZWxlY3RlZEFsYnVtcyIsInNldFNlbGVjdGVkQWxidW1zIiwibG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvciIsInNldEVycm9yIiwiZmV0Y2hBbGJ1bXMiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJmZXRjaCIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJvayIsIkVycm9yIiwiZGF0YSIsImpzb24iLCJsZW5ndGgiLCJlcnIiLCJoYW5kbGVTaHVmZmxlIiwiYWRkVG9TZWxlY3RlZCIsImFsYnVtIiwic29tZSIsImEiLCJpZCIsInByZXYiLCJyZW1vdmVGcm9tU2VsZWN0ZWQiLCJmaWx0ZXIiLCJzYXZlQ3VzdG9tV2FsbCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/hooks/use-albums.ts\n"));

/***/ })

});