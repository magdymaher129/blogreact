import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cards = (props) => {

  return (




    <Card >

  

    <Card.Img variant="top" src={props.posts.img} height='300px' />
      <Card.Body>
        <Card.Title>{props.posts.title.slice(0, 20)}</Card.Title>
        <Card.Text>
        {props.posts.body.slice(0, 70)}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
   )
      




}

export default Cards