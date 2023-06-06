
const BASE_URL = "http://localhost:3000/"

export const getAllEmployees = async () => {
    const res = await fetch(`${BASE_URL}api/employee`)
    const json = await res.json();

    return json;
}

export const getEmployee = async (id) => {
    const res = await fetch(`${BASE_URL}api/employee/${id}`)
    const json = await res.json();

    if (json) return json;
    return {};
}

export const addEmployee = async (formData) => {
    try {
        console.log("Imprimiendo formDATA DESDE EL HELPER")
        console.log(formData)
        const Options = {
            method: 'POST',
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify(formData)
        }

        const res = await fetch(`${BASE_URL}api/employee`, Options)

        const json = await res.json();

        return json;

    } catch (error) {
        return error;
    }
}


// Update a new user

export async function updateEmployee(id, formData) {

    const Options = {
        method: 'PUT',
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify(formData)
    }

    const res = await fetch(`${BASE_URL}api/employee/${id}`, Options)

    const json = await res.json();

    return json;
}


// Deleted a employee

export async function deleteEmployee(id) {
    const Options = {
        method: 'DELETE',
        headers: { 'Content-Type': "application/json" }
    }

    const res = await fetch(`${BASE_URL}api/employee/${id}`, Options)

    const json = await res.json();

    return json;
}