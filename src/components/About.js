import React, { useEffect } from 'react'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'
import profil from '../images/profil.jpg'
import '../styles/aboutStyle.css'

export default function About() {

    

    return (
        <MDBContainer fluid id="aboutContain" >
            <MDBRow id="aboutRow" style={{ overflowX: "hidden"}}>
                <MDBCol id="about" >
                    <h3 data-aos="fade-right" id="aboutTitle1" >About me</h3>
                    <h3 data-aos="fade-right"  id="and" > & </h3>
                    <span><h4 data-aos="fade-left" id="aboutTitle2">Web Development</h4></span>
                </MDBCol>
                <MDBCol id="fotoCol">
                <img data-aos="flip-left" id="foto" src={profil} className="img-fluid z-depth-1 rounded-circle" alt="" />
                </MDBCol>
                <MDBCol id="aboutText">
                <h5 data-aos="zoom-in">Hi, I'm Rosmalina! I have a master degree in social science and experiences in costumer service.
                Two years ago I found out my creative side while building my very first simple website. Ever since that I have a growing interest in
                web development. That is why starting early this year I decided to give more focus on this area
                and joined a fulltime training as full stack web developer.
                Check out some of the projects I have been working on recently. </h5>
                </MDBCol>
            </MDBRow>        
        </MDBContainer>
    )
}

