import React from "react";
import { MDBJumbotron, MDBContainer, MDBCol } from "mdbreact";
import '../styles/headerStyle.css'


const Header = () => {



  return (
    <MDBJumbotron fluid  id="header">
      <MDBContainer id="text">
        <h3 data-aos="fade-right" id="hello">Hello.</h3>       
        <h3 data-aos="fade-left" id="hello2">Welcome to my page!</h3>
      </MDBContainer>
    </MDBJumbotron>
  )
}

export default Header;