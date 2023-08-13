"use strict";
(() => {
var exports = {};
exports.id = 859;
exports.ids = [859];
exports.modules = {

/***/ 496:
/***/ ((module) => {

module.exports = require("sequelize");

/***/ }),

/***/ 546:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Employees)
/* harmony export */ });
/* harmony import */ var _database_models_employee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(489);
/* harmony import */ var _database_models_employee__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_database_models_employee__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _conectionDB_connection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(698);


async function Employees(req, res) {
    try {
        await (0,_conectionDB_connection__WEBPACK_IMPORTED_MODULE_1__["default"])();
        const employees = await _database_models_employee__WEBPACK_IMPORTED_MODULE_0___default().findAll();
        return res.status(200).json({
            employees
        });
    } catch (error) {
        return res.status(500).json({
            mensaje: "Error al presentar los empleados"
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [745], () => (__webpack_exec__(546)));
module.exports = __webpack_exports__;

})();