import React from 'react'
import { MDBContainer, MDBRow, MDBIcon } from 'mdbreact'
import '../styles/footerStyle.css'

export default function Footer() {
    return (
        <MDBContainer fluid id="footerContainer">
            <MDBRow id="socialRow">
                <a id="socialIcon" href="https://www.xing.com/profile/Rosmalina_Abrell"><MDBIcon id="socialIcon" fab icon="xing-square" size="2x" ></MDBIcon></a>
                <a id="socialIcon" href="https://github.com/Abrellr"><MDBIcon id="socialIcon" fab icon="github" size="2x" ></MDBIcon></a>
                <a id="socialIcon" href="https://linkedin.com/in/rosmalina-abrell"><MDBIcon id="socialIcon" fab icon="linkedin" size="2x" ></MDBIcon></a>
            </MDBRow>
            <MDBRow id="closingRow">
            <p>Joyfully built on a react application</p>
            </MDBRow>
            <MDBRow id="copyRow">
            <p>© Copyright 2020</p>
            </MDBRow> 
        </MDBContainer>
    )
}
