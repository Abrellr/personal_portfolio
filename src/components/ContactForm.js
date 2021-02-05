import React, { Component } from "react";
import * as emailjs from "emailjs-com";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBInput,
} from "mdbreact";

class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  handleSubmit(e) {
    e.preventDefault();
    const { name, email, subject, message } = this.state;
    let templateParams = {
      from_name: email,
      to_name: "<YOUR_EMAIL_ID>",
      subject: subject,
      message_html: message,
    };
    if (templateParams !== "") {
      emailjs.send(
        "Gmail",
        "portfolio_template",
        templateParams,
        "user_J5A3p3bAqYFHPvqtPEbdX"
      );
      this.resetForm();
    } else {
      alert("Please fill the form");
    }
  }
  resetForm() {
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };

  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form onSubmit={this.handleSubmit.bind(this)}>
              <p className="h5 text-center mb-4">Write to us</p>
              <div className="grey-text">
                <MDBInput
                  label="Your name"
                  type="text"
                  value={this.state.name}
                  onChange={this.handleChange.bind(this, "name")}
                  icon="user"
                  group
                  name="name"
                />
                <MDBInput
                  label="Your email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange.bind(this, "email")}
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Subject"
                  name="subject"
                  value={this.state.subject}
                  onChange={this.handleChange.bind(this, "subject")}
                  icon="tag"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Your message"
                  name="message"
                  value={this.state.message}
                  onChange={this.handleChange.bind(this, "message")}
                  type="textarea"
                  rows="2"
                  icon="pencil-alt"
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
}
export default ContactForm;
