"use strict";
(() => {
var exports = {};
exports.id = 246;
exports.ids = [246];
exports.modules = {

/***/ 496:
/***/ ((module) => {

module.exports = require("sequelize");

/***/ }),

/***/ 283:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const Sequelize = __webpack_require__(496);
const sequelize = new Sequelize(process.env.DATABASE, process.env.USUARIO, process.env.PASSWORD, {
    host: "localhost",
    dialect: "mysql"
});
module.exports = sequelize;


/***/ }),

/***/ 698:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Connection)
/* harmony export */ });
/* harmony import */ var _database_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(283);
/* harmony import */ var _database_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_database_config__WEBPACK_IMPORTED_MODULE_0__);

async function Connection() {
    try {
        await _database_config__WEBPACK_IMPORTED_MODULE_0___default().authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(698));
module.exports = __webpack_exports__;

})();