import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardTitle,
  MDBCardBody,
  MDBCardText,
  MDBIcon,
} from "mdbreact";
import "../styles/techStackStyle.css";


export default function TechStack(props) {



  return (
    <MDBContainer fluid id="techContainer" >
      <MDBRow  id="techRow" style={{ overflowX: "hidden"}}>
        <h3 data-aos="fade-right" id="techText">"We learn, thus we grow"</h3>
        <p  data-aos="fade-right" id="quoteAuthor">anonym</p>
      </MDBRow>
      <MDBRow  id="techRow2">
        <MDBCol style={{ display: "flex", justifyContent: "center"}}>
          <MDBCard data-aos="fade-left" id="techCard">
            <MDBCardBody id="techBody">
              <MDBIcon id="techIcon" className="red-text pr-3" icon="laptop-code" size="4x" />
              <MDBContainer id="titleBox">
              <MDBCardTitle id="techTitle">My tech stack knowledge</MDBCardTitle>
              </MDBContainer>
              <MDBCardText id="techDetail">
                HTML, CSS, JavaScript, ReactJS, React-Bootstrap, MDBootstrap,
                MaterialUI, NodeJS, PostgreSQL, ExpressJS, MongoDB
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol style={{ display: "flex", justifyContent: "center"}}>
          <MDBCard data-aos="fade-left" id="techCard">
            <MDBCardBody id="techBody">
              <MDBIcon  id="techIcon" className="red-text pr-3" icon="cogs" size="4x" />
              <MDBContainer id="titleBox">
              <MDBCardTitle className="text-center" id="techTitle">The tools I use</MDBCardTitle>
              </MDBContainer>
              <MDBCardText id="techDetail">
              Github, Jira, Trello, Agile-Scrum, Netlify, Vercel, Heroku
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
