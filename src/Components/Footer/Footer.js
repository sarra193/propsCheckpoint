import React from 'react'
import{Card,Button} from 'react-bootstrap'


const Footer = () => {
      return (
      <Card style={{ position: 'fixed',bottom: '0',width: "100%"}}>
      <Card.Body>
      <Card.Title>Special title treatment</Card.Title>
      <Card.Text>
            With supporting text below as a natural lead-in to additional content.
      </Card.Text>
      <Button variant="primary" >Go somewhere</Button>
      </Card.Body>
      </Card>
      )
}

export default Footer