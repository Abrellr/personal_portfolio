import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBMask, MDBNavbarToggler, MDBCollapse } from "mdbreact";
import '../styles/navbarStyle.css'

class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
      <MDBNavbar className="fixed-top" id="navbar" light expand="md">
        <MDBNavbarBrand>
          <h3 id="logo" href="#home">Rosmalina Abrell</h3>
        </MDBNavbarBrand>
        <MDBNavbarToggler id="toggle" onClick={this.toggleCollapse} />
        <MDBCollapse  id="navbarCollapse" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem>
                <a id="nav" href="#header">home</a>
            </MDBNavItem>
            <MDBNavItem>
                <a id="nav" href="#aboutContain">about</a>
            </MDBNavItem>
            <MDBNavItem>
                <a id="nav" href="#!">CV</a>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default NavbarPage;