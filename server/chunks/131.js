"use strict";
exports.id = 131;
exports.ids = [131];
exports.modules = {

/***/ 131:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Jf": () => (/* binding */ getEmployee),
/* harmony export */   "XA": () => (/* binding */ getAllEmployees),
/* harmony export */   "aw": () => (/* binding */ DeleteEmployee),
/* harmony export */   "r8": () => (/* binding */ createEmployee),
/* harmony export */   "to": () => (/* binding */ editEmployee)
/* harmony export */ });
/* harmony import */ var _models_employee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(489);
/* harmony import */ var _models_employee__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_models_employee__WEBPACK_IMPORTED_MODULE_0__);

// Controller
// Presentar todos los usuarios
// http://localhost:3000/api/employee/
async function getAllEmployees(req, res) {
    try {
        const employees = await _models_employee__WEBPACK_IMPORTED_MODULE_0___default().findAll();
        return res.status(200).json({
            employees
        });
    } catch (error) {
        return res.status(404).json({
            error: "Error while fetching Data"
        });
    }
}
// Get specific employee
async function getEmployee(req, res) {
    try {
        const { id  } = req.query;
        const employees = await _models_employee__WEBPACK_IMPORTED_MODULE_0___default().findOne({
            where: {
                id: id
            }
        });
        return res.status(200).json({
            employees
        });
    } catch (error) {
        return res.status(404).json({
            error: "Error while fetching Data"
        });
    }
}
// Agregar usuario
async function createEmployee(req, res) {
    try {
        const { avatar , name , email , salary , birth_date , status  } = req.body;
        if (!avatar) {
            console.log("Avatar not provided");
            return res.status(404).json({
                error: "Avatar not provided"
            });
        }
        if (!name) return res.status(404).json({
            error: "Name not provided"
        });
        if (!email) return res.status(404).json({
            error: "Email not provided"
        });
        if (!salary) return res.status(404).json({
            error: "Salary not provided"
        });
        if (!birth_date) return res.status(404).json({
            error: "birth_date not provided"
        });
        if (!status) return res.status(404).json({
            error: "Status not provided"
        });
        const newEmployee = await _models_employee__WEBPACK_IMPORTED_MODULE_0___default().create({
            name,
            email,
            salary,
            birth_date,
            status,
            avatar
        });
        res.status(201).json({
            mensaje: "Usuario creado exitosamente.",
            newEmployee
        });
    } catch (error) {
        return res.status(500).json({
            error: "Se ha detectado un error"
        });
    }
}
// Edit Employee
async function editEmployee(req, res) {
    try {
        const { id , name , email , salary , birth_date , avatar , status  } = req.body;
        const employee = await _models_employee__WEBPACK_IMPORTED_MODULE_0___default().findOne({
            where: {
                id
            }
        });
        if (!employee) {
            return res.status(404).json({
                mensaje: "Usuario no encontrado."
            });
        }
        await _models_employee__WEBPACK_IMPORTED_MODULE_0___default().update({
            name: name,
            email: email,
            salary: salary,
            birth_date: birth_date,
            avatar: avatar,
            status: status
        }, {
            where: {
                id: id
            }
        });
        res.status(200).json({
            mensaje: "Usuario actualizado exitosamente."
        });
    } catch (error) {
        console.error("Error al insertar el usuario:", error);
        res.status(500).json({
            mensaje: "Error al editar el usuario en la base de datos."
        });
    }
}
// Delete Employee
async function DeleteEmployee(req, res) {
    try {
        const { id  } = req.query;
        const employee = await _models_employee__WEBPACK_IMPORTED_MODULE_0___default().findOne({
            where: {
                id
            }
        });
        if (!employee) {
            return res.status(404).json({
                mensaje: "Usuario no encontrado."
            });
        }
        await _models_employee__WEBPACK_IMPORTED_MODULE_0___default().destroy({
            where: {
                id
            }
        });
        res.status(200).json({
            mensaje: "Usuario eliminado exitosamente."
        });
    } catch (error) {
        console.error("Error al insertar el usuario:", error);
        res.status(500).json({
            mensaje: "Error al eliminar el usuario en la base de datos."
        });
    }
}


/***/ })

};
;