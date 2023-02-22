import { createContext, useEffect, useState } from "react";

export const EmployeeContext = createContext();

const EmployeeContextProvider = (props) => {

    const [employeeState, employeeFunction] = useState([])
    useEffect(() => {
        fetch('https://reqres.in/api/users').then(res => res.json()).then(result => {
            console.log(result.data)
            employeeFunction(result.data)
        })
    }, [])

    const addNewEmployee = (first_name, last_name, email, avatar) => {
        employeeFunction([...employeeState, { first_name, last_name, email, avatar }])
    }

    const deleteEmployee = (id) => {
        employeeFunction(employeeState.filter(x=> x.id !== id))
    }

    
    const updateEmployeeContext = (id, updateEmployeeModel)=>
    {
        employeeFunction(employeeState.map((employee)  => employee.id === id ?updateEmployeeModel:employee ))
    }

    return (
        <div>
            <EmployeeContext.Provider value={{ employeeState, addNewEmployee, deleteEmployee, updateEmployeeContext}}>
                {props.children}
            </EmployeeContext.Provider>
        </div>
    )

}

export default EmployeeContextProvider
