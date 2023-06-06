import Employee from "@/database/models/employee";
import Connection from "../conectionDB/connection";

export default async function Employees(req, res) {
    try {
        await Connection();

        const employees = await Employee.findAll();
        return res.status(200).json({ employees });

    } catch (error) {

        return res.status(500).json({ mensaje: 'Error al presentar los empleados' });
    }
}