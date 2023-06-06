import Employee from "./models/employee"

// Controller

// Presentar todos los usuarios

// http://localhost:3000/api/employee/
export async function getAllEmployees(req, res) {
    try {

        const employees = await Employee.findAll();
        return res.status(200).json({ employees });

    } catch (error) {
        return res.status(404).json({
            error: "Error while fetching Data"
        })
    }
}

// Get specific employee

export async function getEmployee(req, res) {
    try {

        const { id } = req.query

        const employees = await Employee.findOne({
            where: {
                id: id
            }
        });

        return res.status(200).json({ employees });

    } catch (error) {
        return res.status(404).json({
            error: "Error while fetching Data"
        })
    }
}


// Agregar usuario

export async function createEmployee(req, res) {
    try {

        const { avatar, name, email, salary, birth_date, status } = req.body

        if (!avatar) {
            console.log("Avatar not provided")
            return res.status(404).json({ error: "Avatar not provided" })
        }
        if (!name) return res.status(404).json({ error: "Name not provided" })
        if (!email) return res.status(404).json({ error: "Email not provided" })
        if (!salary) return res.status(404).json({ error: "Salary not provided" })
        if (!birth_date) return res.status(404).json({ error: "birth_date not provided" })
        if (!status) return res.status(404).json({ error: "Status not provided" })

        const newEmployee = await Employee.create({
            name, email, salary, birth_date, status, avatar
        })

        res.status(201).json({ mensaje: 'Usuario creado exitosamente.', newEmployee });

    } catch (error) {
        return res.status(500).json({
            error: "Se ha detectado un error"
        })
    }
}

// Edit Employee

export async function editEmployee(req, res) {
    try {

        const { id, name, email, salary, birth_date, avatar, status } = req.body
        
        const employee = await Employee.findOne({
            where: { id }
        })

        if (!employee) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado.' });
        }

        await Employee.update(
            {
                name: name,
                email: email,
                salary: salary,
                birth_date: birth_date,
                avatar: avatar,
                status: status
            },
            {
                where: { id: id }
            }
        );

        res.status(200).json({ mensaje: 'Usuario actualizado exitosamente.' });

    } catch (error) {
        console.error('Error al insertar el usuario:', error);
        res.status(500).json({ mensaje: 'Error al editar el usuario en la base de datos.' });
    }
}


// Delete Employee

export async function DeleteEmployee(req, res) {
    try {
        const { id } = req.query

        const employee = await Employee.findOne({
            where: { id }
        })

        if (!employee) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado.' });
        }

        await Employee.destroy({
            where: {
                id
            }
        })

        res.status(200).json({ mensaje: 'Usuario eliminado exitosamente.' });

    } catch (error) {
        console.error('Error al insertar el usuario:', error);
        res.status(500).json({ mensaje: 'Error al eliminar el usuario en la base de datos.' });
    }
}