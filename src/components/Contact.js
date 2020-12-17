import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";
import '../styles/contactStyle.css';

const Contact = () => {
  return (
    <MDBContainer fluid id="contactContainer">
      <h2 className="h1-responsive font-weight-bold text-center my-5 white-text">
        Contact me
      </h2>
      <p className="text-center w-responsive mx-auto pb-5 white-text">
        I'm looking forward to collaborating with you!
      </p>
      <MDBRow className="justify-content-center">
        <MDBCol lg="5" className="lg-0 mb-4 ">
          <MDBCard>
            <MDBCardBody>
              <div style={{ display: "flex", justifyContent: "center"}}>
                  <MDBIcon icon="envelope" size="2x" className="blue-text pr-3"/> 
              </div>
              <div className="md-form">
                <MDBInput
                  icon="user"
                  label="Your name"
                  iconClass="grey-text"
                  type="text"
                  id="form-name"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="envelope"
                  label="Your email"
                  iconClass="grey-text"
                  type="text"
                  id="form-email"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="tag"
                  label="Subject"
                  iconClass="grey-text"
                  type="text"
                  id="form-subject"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="pencil-alt"
                  label="Your message"
                  iconClass="grey-text"
                  type="textarea"
                  id="form-text"
                />
              </div>
              <div className="text-center">
                <MDBBtn color="primary">Submit</MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>  
  );
}

export default Contact;