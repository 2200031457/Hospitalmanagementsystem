import React from 'react'
import { Card } from 'react-bootstrap'
import Img from '../../photos/hospital2.jpg'

function Contact() {
  return (
    <div>
      <Card className="text-white">
        <Card.Img src={Img} alt="Card image" height="500" style={{opacity:"0.6"}}/>
                <Card.ImgOverlay>
                    <Card.Title>
                        <h1 className="font-weight-bold text-danger">contact details</h1>
                        <br>
                        
                        
                        
                        </br>
                        <p className="font-weight-bold text-danger">Curing Generations for Ages</p>
                    </Card.Title>
                    
                    
                </Card.ImgOverlay>
        </Card>
    </div>
  )
}

export default Contact
