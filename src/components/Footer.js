import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Footer = () => {
  return (
    <>
<Card className="text-center text-light  position-fixed bottom-0 w-100 "bg="dark">
    
      <Card.Body >
        <Card.Title >Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
      
      </Card.Body>
      <Card.Footer className="text-muted  ">2 days ago</Card.Footer>
    </Card>


    </>
  )
}

export default Footer