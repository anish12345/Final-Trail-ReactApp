import { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap"
import { EmployeeContext } from "./EmployeeContext";


function AddEmployee() {

    //Context 
    const { addNewEmployee } = useContext(EmployeeContext)

    //Save Recorord


    const [employeeState, employeeFunction] = useState({
        first_name: "Abhishek", last_name : "Talati",
        email : "abhishektalati91@gmail.com", avatar : "Avatar"
})
    
    
    const onImputChange = (e) => {
        employeeFunction({ ...employeeState, [e.target.name]: e.target.value })
    }

    const { first_name, last_name, email, avatar } = employeeState;

       const SaveRecords = (e) => {
        e.preventDefault();
        addNewEmployee(first_name, last_name, email, avatar)
    }


    return (
        <div>
            <Form onSubmit={SaveRecords}>
                <Form.Group>
                    <Form.Control type="text"
                        placeholder="First Name"
                        value={first_name}
                        name="first_name"
                        onChange={(e) => onImputChange(e.target.value)}

                    />
                    <Form.Control type="text"
                        placeholder="Last Name"
                        value={last_name}
                        name="last_name"
                        onChange={(e) => onImputChange(e.target.value)}
                    />
                    <Form.Control type="text"
                        placeholder="Email"
                        value={email}
                        name="email"
                        onChange={(e) => onImputChange(e.target.value)}
                    />
                    <Form.Control type="text"
                        placeholder="avatar"
                        value={avatar}
                        name="avatar"
                        onChange={(e) => onImputChange(e.target.value)}
                    />
                </Form.Group>
                <Button variant="Success" type="Submit" >Add New Employee</Button>
            </Form>

        </div>
    )
}
export default AddEmployee