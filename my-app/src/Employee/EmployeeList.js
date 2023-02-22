import { Button, Modal } from "react-bootstrap"
import Employee from "./Employee"
import { useContext, useEffect, useState } from "react"
import { EmployeeContext } from "./DataContext/EmployeeContext"
import AddEmployee from "./DataContext/AddEmployee"

export default function EmployeeList() {
    //Context 
    const { employeeState } = useContext(EmployeeContext)
   

    // PopUpOpenClose State
    const [popUpState, popUpFlage] = useState(false)
    const HandlePopUpEvent = () => popUpFlage(true)
    const handleClose = () => popUpFlage(false)


    useEffect(()=>{
        console.log("CalledEmployeeListAndAdd")
        handleClose()
        console.log("CalledWhenEmployeeListUpdate")
    },[employeeState])
   

    return (
        <>
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-6">
                        <h2>Manage <b>Employees</b></h2>
                    </div>
                    <div className="col-sm-6">
                        <Button onClick={HandlePopUpEvent} className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Employee</span></Button>
                    </div>
                </div>
            </div>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Email</th>
                        <th>Avatar</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employeeState.map(employee => (
                            <tr key={employee.id}>
                                <Employee employee={employee} />
                            </tr>
                        ))
                    }
                </tbody>
            </table>


            <Modal show={popUpState} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>
                        Add New Employee
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <AddEmployee />

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose} > Close</Button>
                </Modal.Footer>
            </Modal>

        </>
    )

}
