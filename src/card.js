import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';


function CardComp(props){
  let[counter, setCounter]=useState([])
  function showDetails(){}
  function addToFavorite  (){
   setCounter (counter+1)
  }
  return(
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.image} />
    <Card.Body>
      <Card.Title>{props.titel}</Card.Title>
      <Card.Text>
      {props.favorite}
      </Card.Text>
      <Card.Text>
      ★{counter}
      </Card.Text>
      <Button variant="primary"onClick={addToFavorite}>add to favorite</Button>
      <Button variant="primary"onClick={showDetails}>show details</Button>
    </Card.Body>
    </Card>
  )

}

export default CardComp;
