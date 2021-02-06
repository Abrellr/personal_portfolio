import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBInput,
} from "mdbreact";
import "../styles/contactStyle.css";
import emailjs from "emailjs-com";

export default function Contact() {
  function handleValidation(e) {
    e.preventDefault();
    if (e.target === "") {
      alert("forms are empty");
    } else {
      emailjs
        .sendForm(
          "Gmail",
          "portfolio_template",
          e.target,
          "user_J5A3p3bAqYFHPvqtPEbdX"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  }

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form onSubmit={handleValidation}>
            <p className="h5 text-center mb-4">Write to us</p>
            <div className="grey-text">
              <MDBInput
                className="needs-validation"
                label="Your name"
                type="text"
                className="form-control"
                icon="user"
                group
                placeholder="Name"
                name="name"
              />
              <MDBInput
                className="needs-validation"
                label="Your email"
                name="email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Subject"
                icon="tag"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                name="subject"
                className="needs-validation"
              />
              <MDBInput
                className="needs-validation"
                type="textarea"
                rows="2"
                label="Your message"
                icon="pencil-alt"
                name="message"
              />

              <div className="text-center">
                <MDBBtn
                  outline
                  color="secondary"
                  type="submit"
                  className="btn btn-info"
                  value="Send Message"
                >
                  Send
                  <MDBIcon far icon="paper-plane" className="ml-1" />
                </MDBBtn>
              </div>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
