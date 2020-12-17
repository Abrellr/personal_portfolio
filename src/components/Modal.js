import React from 'react'
import { MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter } from 'mdbreact'
import ProjectList from '../assets/ProjectList'


export default function Modal(props) {
    console.log(props)

    const [toggle, setToggle] = useState(false);

    return (
        <MDBModal color="primary" isOpen={toggle} size="md">
                      <MDBModalHeader >
                      </MDBModalHeader>
                      
                      <MDBModalBody>
                        <br />
                        <p>Check it on Github</p>
                      </MDBModalBody>
                      <MDBModalFooter>
                      
                        <MDBBtn color="secondary" size="sm" onClick={() => setToggle(false)}>
                          Close
                        </MDBBtn>
                      </MDBModalFooter>
                    </MDBModal>
    )
}
