import React, { useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import profil from "../images/profil.jpg";
import "../styles/aboutStyle.css";

export default function About() {
  return (
    <MDBContainer fluid id="aboutContain">
      <MDBRow id="aboutRow" style={{ overflowX: "hidden" }}>
        <MDBCol id="about">
          <h3 data-aos="fade-down" id="aboutTitle1">
            About me
          </h3>
          <h3 data-aos="fade-down" id="and">
            {" "}
            &{" "}
          </h3>
          <span>
            <h4 data-aos="fade-down" id="aboutTitle2">
              Web Development
            </h4>
          </span>
        </MDBCol>
        <MDBCol id="fotoCol">
          <img
            data-aos="flip-left"
            id="foto"
            src={profil}
            className="img-fluid z-depth-1 rounded-circle"
            alt="foto"
          />
        </MDBCol>
        <MDBCol id="aboutText">
          <h5 data-aos="zoom-in">
            Hi, I'm Rosmalina! 😊 <br />I have a master degree in social science
            and experiences in applications and project management. During corona year,
            I met my creative side and found my passion in the IT: I built my very own webiste 👩‍💻 
            After that, I decided to join the fullstack development bootcamp and pursue a new career.
            During this learning year, I built some web projects 🚀 Check out some of the projects I had been working on. 
            Or visit my Github page through the link below.
          </h5>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
