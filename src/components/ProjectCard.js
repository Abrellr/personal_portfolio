import React, { useState, useEffect } from "react";
import {
  MDBMask,
  MDBView,
  MDBCard,
  MDBCardBody,
  MDBBtn,
  MDBCardTitle,
  MDBCardText,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";
import ProjectList from "../assets/ProjectList";
import "../styles/projectStyle.css";

export default function ProjectCard(props) {
  const [toggle, setToggle] = useState(false);

  return (
    <MDBContainer fluid id="projectContainer" style={{ overflowX: "hidden" }}>
      <MDBRow id="textRow" >
        <h3 data-aos="fade-right" className="text-center" id="projectText">Check out my latest work</h3>  
      </MDBRow>
      <MDBRow id="cardRow" data-aos="fade-left" >
        {ProjectList &&
          ProjectList.map((project, idx) => {
            return (
              <MDBCol key={idx} id="cardCol" >
                <MDBCard  id="card" className="hoverable">
                  <MDBCardBody id="cardbody" >
                    <MDBView hover href="https://google.com">
                      <img
                        src="https://mdbootstrap.com/img/Others/documentation/forest-sm-mini.jpg"
                        className="img-fluid"
                        alt="projectfoto"
                      />
                      <MDBMask
                        id="stack"
                        className="flex-center"
                        overlay="teal-strong"
                      >
                        <h6 className="white-text">{project.stackUsed}</h6>
                      </MDBMask>
                    </MDBView>
                    <div id="box">
                    <MDBCardTitle id="title" className="font-weight-bold">
                      {project.title}
                    </MDBCardTitle>
                    </div>
                    <MDBCardText>lorem ipsum text imonem</MDBCardText>
                    <MDBContainer id="projectBtnRow">
                      {/* <MDBBtn
                      id="projectButton"
                      color="primary"
                      onClick={() => setToggle(true)}
                    >
                      MDBBtn
                    </MDBBtn> */}
                    </MDBContainer>
                    <MDBModal color="primary" isOpen={toggle} size="md">
                      <MDBModalHeader></MDBModalHeader>
                      <MDBModalBody>
                        This should be filtered and mapped
                      </MDBModalBody>
                      <MDBModalFooter>
                        <MDBBtn
                          color="secondary"
                          size="sm"
                          onClick={() => setToggle(false)}
                        >
                          Close
                        </MDBBtn>
                      </MDBModalFooter>
                    </MDBModal>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            );
          })}
      </MDBRow>
    </MDBContainer>
  );
}
