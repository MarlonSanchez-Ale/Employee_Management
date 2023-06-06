import Connection from "../conectionDB/connection";
import { getEmployee, editEmployee, DeleteEmployee } from "@/database/controller";

export default async function handler(req, res) {

    // Verificacion de la conexion a la base de datos
    await Connection();

    // Se obtiene el valor del metodo http que se esta consultando
    const { method } = req;

    switch (method) {
        case "GET":
            getEmployee(req, res)
            break;
        case "PUT":
            editEmployee(req, res)
            break;
        case "DELETE":
            DeleteEmployee(req, res)
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
            res.status(405).end(`Method ${method} Not Allowd`)
            break;
    }



}