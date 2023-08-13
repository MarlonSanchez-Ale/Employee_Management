"use strict";
exports.id = 745;
exports.ids = [745];
exports.modules = {

/***/ 283:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const Sequelize = __webpack_require__(496);
const sequelize = new Sequelize(process.env.DATABASE, process.env.USUARIO, process.env.PASSWORD, {
    host: "localhost",
    dialect: "mysql"
});
module.exports = sequelize;


/***/ }),

/***/ 489:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const Sequelize = __webpack_require__(496);
const config = __webpack_require__(283);
const Employee = config.define("employees", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
    },
    salary: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    birth_date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    avatar: {
        type: Sequelize.STRING(100),
        allowNull: false
    }
}, {
    timestamps: false
});
module.exports = Employee;


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