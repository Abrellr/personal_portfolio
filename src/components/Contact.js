import React, { useState } from "react";
// import {
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBCard,
//   MDBCardBody,
//   MDBIcon,
//   MDBBtn,
//   MDBInput,
// } from "mdbreact";
import "../styles/contactStyle.css";
import emailjs from "emailjs-com";

const { REACT_APP_USER_ID }  = process.env;
console.log(REACT_APP_USER_ID);

const Contact = () => {

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm('Gmail', 'form_template', e.target, userID)
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

  return (
    <div>
            <div className="container">
            <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send Message"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    // <>
    //   <MDBContainer>
    //     <MDBRow>
    //       <MDBCol md="6">
    //         <form onSubmit={sendEmail}>
    //           <p className="h5 text-center mb-4">Write to us</p>
    //           <div className="grey-text">
    //             <MDBInput
    //               label="Your name"
    //               icon="user"
    //               group
    //               type="text"
    //               error="wrong"
    //               success="right"
    //               id="name"
    //               name="name"
    //             />
    //             <MDBInput
    //               label="Your email"
    //               icon="envelope"
    //               group
    //               type="email"
    //               error="wrong"
    //               success="right"
    //               id="email"
    //               name="email"
    //             />
    //             <MDBInput
    //               label="Subject"
    //               icon="tag"
    //               group
    //               type="text"
    //               error="wrong"
    //               success="right"
    //               id="subject"
    //               name="subject"
    //             />
    //             <MDBInput
    //               type="textarea"
    //               rows="2"
    //               label="Your message"
    //               icon="pencil-alt"
    //               id="message"
    //               name="message"
    //             />
    //           </div>
    //           <div className="text-center">
    //             <MDBBtn type="submit" outline color="secondary">
    //               Send
    //               <MDBIcon far icon="paper-plane" className="ml-1" />
    //             </MDBBtn>
    //           </div>
    //         </form>
    //       </MDBCol>
    //     </MDBRow>
    //   </MDBContainer>
    // </>
  );
};

export default Contact;
