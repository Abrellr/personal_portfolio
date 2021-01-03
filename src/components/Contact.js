import React, {Component} from "react";
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

class Contact extends Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }
  

  sendEmail = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = this.state
    emailjs
      .sendForm("Gmail", "form_template", e.target, user_J5A3p3bAqYFHPvqtPEbdX)
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }

  render() {
    return(
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form onSubmit={this.sendEmail}>
            <p className="h5 text-center mb-4">Write to us</p>
            <div className="grey-text">
              <MDBInput
                label="Your name"
                name="name"
                onChange={this.changeHandler}
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Your email"
                name="email"
                onChange={this.changeHandler}
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
                onChange={this.changeHandler}
                icon="tag"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                type="textarea"
                name="message"
                onChange={this.changeHandler}
                rows="2"
                label="Your message"
                icon="pencil-alt"
              />
            </div>
            <div className="text-center">
              <MDBBtn outline color="secondary">
                Send
                <MDBIcon far icon="paper-plane" className="ml-1" />
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
}

export default Contact;

// <div>
//         <div className="container">
//         <form onSubmit={sendEmail}>
//                 <div className="row pt-5 mx-auto">
//                     <div className="col-8 form-group mx-auto">
//                         <input type="text" className="form-control" placeholder="Name" name="name"/>
//                     </div>
//                     <div className="col-8 form-group pt-2 mx-auto">
//                         <input type="email" className="form-control" placeholder="Email Address" name="email"/>
//                     </div>
//                     <div className="col-8 form-group pt-2 mx-auto">
//                         <input type="text" className="form-control" placeholder="Subject" name="subject"/>
//                     </div>
//                     <div className="col-8 form-group pt-2 mx-auto">
//                         <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
//                     </div>
//                     <div className="col-8 pt-3 mx-auto">
//                         <input type="submit" className="btn btn-info" value="Send Message"></input>
//                     </div>
//                 </div>
//             </form>
//         </div>
//     </div>
// <>
