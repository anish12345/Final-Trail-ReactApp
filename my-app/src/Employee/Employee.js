import { useContext, useState } from "react"
import { Button, Modal } from "react-bootstrap"
import { EmployeeContext } from "./DataContext/EmployeeContext"
import UpdateEmployee from "./UpdateEmployee"

const Employee = ({employee}) => {


    // UseContext For  Delete Records Of Employee
    const {deleteEmployee} = useContext(EmployeeContext)
    //const {updateEmployee} = useContext(EmployeeContext)

    //UpdateFunctionality 
     const [popupstate, popupfunction] = useState(false)
     const HandleEditPopUp =()=> popupfunction(true)
     const HandleClosePopUp =()=> popupfunction(false)

    //  useEffect(()=>{
    //     handleClose()
    //     console.log("Called")
    // },[employeeState])
   
     
    
    return (
        <>
            <td>{employee.first_name}</td>
            <td>{employee.last_name}</td>
            <td>{employee.email}</td>
            <td>{employee.avatar}</td>
            <td>
                <Button onClick={HandleEditPopUp} className="edit" data-toggle="modal">
                    <i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i>
                </Button>
                <Button onClick={()=>deleteEmployee(employee.id)} className="btn btn-danger"
                    data-toggle="modal">
                    <i className="material-icons"
                        data-toggle="tooltip"
                        title="Delete">&#xE872;</i>
                </Button>
            </td>

            <Modal show={popupstate}>
                <Modal.Header>
                    <Modal.Title>
                        Edit New Employee
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <UpdateEmployee theEmployee ={employee} />
                </Modal.Body>
                <Modal.Footer>
                    <button variant="secondary"  onClick={HandleClosePopUp} > Close</button>
                </Modal.Footer>
            </Modal>

        </>
    )

}
export default Employee