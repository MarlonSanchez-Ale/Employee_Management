(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 86:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ App)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(893);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(764);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(175);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(184);
// EXTERNAL MODULE: ./redux/reducer.js
var reducer = __webpack_require__(877);
;// CONCATENATED MODULE: ./redux/listener.js


const listenerMiddleware = (0,toolkit_.createListenerMiddleware)();
listenerMiddleware.startListening({
    actionCreator: reducer/* toggleChangeAction */.A1,
    effect: async (action, listenerApi)=>{
        listenerApi.dispatch((0,reducer/* updateAction */.Gx)(action.payload));
    }
});
/* harmony default export */ const listener = (listenerMiddleware);

;// CONCATENATED MODULE: ./redux/store.js



const store = (0,toolkit_.configureStore)({
    reducer: {
        app: reducer/* default */.ZP
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().prepend(listener.middleware)
});

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(22);
;// CONCATENATED MODULE: ./pages/_app.js






// Create a client
const queryClient = new external_react_query_.QueryClient();
function App({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime.jsx(external_react_query_.QueryClientProvider, {
        client: queryClient,
        children: /*#__PURE__*/ jsx_runtime.jsx(external_react_redux_.Provider, {
            store: store,
            children: /*#__PURE__*/ jsx_runtime.jsx(Component, {
                ...pageProps
            })
        })
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js&preferredRegion=!

        // Next.js Route Loader
        
        
    

/***/ }),

/***/ 877:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A1": () => (/* binding */ toggleChangeAction),
/* harmony export */   "Gx": () => (/* binding */ updateAction),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "mn": () => (/* binding */ deleteAction)
/* harmony export */ });
/* unused harmony export ReducerSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    client: {
        toggleForm: false,
        formId: undefined,
        deleteId: null
    }
};
const ReducerSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "crudapp",
    initialState,
    reducers: {
        toggleChangeAction: (state)=>{
            state.client.toggleForm = !state.client.toggleForm;
        },
        updateAction: (state, action)=>{
            state.client.formId = action.payload;
        },
        deleteAction: (state, action)=>{
            state.client.deleteId = action.payload;
        }
    }
});
const { toggleChangeAction , updateAction , deleteAction  } = ReducerSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReducerSlice.reducer);


/***/ }),

/***/ 764:
/***/ (() => {



/***/ }),

/***/ 184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 175:
/***/ ((module) => {

"use strict";
module.exports = require("react-query");

/***/ }),

/***/ 22:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893], () => (__webpack_exec__(86)));
module.exports = __webpack_exports__;

})();