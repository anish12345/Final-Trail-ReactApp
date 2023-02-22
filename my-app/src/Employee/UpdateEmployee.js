import {  useContext, useState } from "react";
import { Button, Form } from "react-bootstrap"
import { EmployeeContext } from "./DataContext/EmployeeContext";


const UpdateEmployee= ( {theEmployee}) =>  {
    //  setstate For UpdateEmployee
    const id = theEmployee.id
    const [first_name, firstNameFunction] = useState(theEmployee.first_name)
    const [last_name, lastNameFunction] = useState(theEmployee.last_name)
    const [email, emailFunction] = useState(theEmployee.email)
    const [avatar, avatarFunction] = useState(theEmployee.avatar)

    // Context Creator
    const {updateEmployeeContext} = useContext(EmployeeContext)
    const  updateEmployeeModel = {first_name,last_name,email,avatar} 
    

    // update functionallity 
    const HandleSubmitEvent = (e) =>{
        e.preventDefault();
        updateEmployeeContext(id, updateEmployeeModel)
    }


    return (
        <div>
            <Form onSubmit={HandleSubmitEvent}>
                <Form.Group>
                    <Form.Control type="text"
                        placeholder="First Name"
                        value={first_name}
                        name="first_name"
                        onChange={(e) => firstNameFunction(e.target.value)}

                    />
                    <Form.Control type="text"
                        placeholder="Last Name"
                        value={last_name}
                        name="last_name"
                        onChange={(e) => lastNameFunction(e.target.value)}
                    />
                    <Form.Control type="text"
                        placeholder="Email"
                        value={email}
                        name="email"
                        onChange={(e) => emailFunction(e.target.value)}
                    />
                    <Form.Control type="text"
                        placeholder="avatar"
                        value={avatar}
                        name="avatar"
                        onChange={(e) => avatarFunction(e.target.value)}
                    />
                </Form.Group>
                <Button variant="Success" type="Submit" >Update Employee</Button>
            </Form>

        </div>
    )
}
export default UpdateEmployee