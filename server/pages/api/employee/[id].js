"use strict";
(() => {
var exports = {};
exports.id = 442;
exports.ids = [442];
exports.modules = {

/***/ 496:
/***/ ((module) => {

module.exports = require("sequelize");

/***/ }),

/***/ 212:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _conectionDB_connection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(698);
/* harmony import */ var _database_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(131);


async function handler(req, res) {
    // Verificacion de la conexion a la base de datos
    await (0,_conectionDB_connection__WEBPACK_IMPORTED_MODULE_0__["default"])();
    // Se obtiene el valor del metodo http que se esta consultando
    const { method  } = req;
    switch(method){
        case "GET":
            (0,_database_controller__WEBPACK_IMPORTED_MODULE_1__/* .getEmployee */ .Jf)(req, res);
            break;
        case "PUT":
            (0,_database_controller__WEBPACK_IMPORTED_MODULE_1__/* .editEmployee */ .to)(req, res);
            break;
        case "DELETE":
            (0,_database_controller__WEBPACK_IMPORTED_MODULE_1__/* .DeleteEmployee */ .aw)(req, res);
            break;
        default:
            res.setHeader("Allow", [
                "GET",
                "POST",
                "PUT",
                "DELETE"
            ]);
            res.status(405).end(`Method ${method} Not Allowd`);
            break;
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [745,131], () => (__webpack_exec__(212)));
module.exports = __webpack_exports__;

})();