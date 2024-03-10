import React from 'react'

import Img from '../../photos/hospital.jpeg'
import { Card } from 'react-bootstrap'
function Home() {
  return (
    <div>
      <Card className="text-white text-center">
  <Card.Img src={Img} alt="Card image" height="500" style={{ opacity: "0.6" }} />
  <Card.ImgOverlay>
    <Card.Title>
      <div>
        <h1 className="font-weight-bold text-danger">Hospital management system</h1>
      </div>
      <p className="font-weight-bold text-danger"></p>
    </Card.Title>
  </Card.ImgOverlay>
</Card>

     <h1 align="center">Our Vision and Mission Statements</h1>
            <br/>
            <br/>
            <p className="container">
            The Mission of H & K Hospital is to provide compassionate, accessible, high quality, 
            cost effective healthcare to the community; to promote health; to educate healthcare professionals; 
            and to participate in appropriate clinical research.
            </p>
            <br/>
            <p className = "container">
            H & K Hospital will be an innovative, leading regional health system dedicated to advancing the 
            health and transforming the lives of the people we serve through excellent clinical quality;
            accessible, patient-centered, caring service; and unmatched physician and employee commitment.
            </p>
            <br/>
            <br/>
    </div>
  )
}

export default Home
