import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const InventoryItem = ({inventoryItem, handleDelete}) => {

    const { img, name, price, quantity, supplier, about } = inventoryItem;
    return (
      <>
      <Card className="card-item">
        <Card.Img variant="top" src={img} />
        <Card.Title ><h3>{name}</h3></Card.Title>
     <ListGroup className="list-group-flush">
             <ListGroupItem><h5><strong>Price :</strong> {price} Taka</h5></ListGroupItem>
            <ListGroupItem><h5><strong>Quantity :</strong> {quantity} Pis</h5></ListGroupItem>
            <ListGroupItem><h5><strong>Supplier :</strong> {supplier}</h5></ListGroupItem>
    </ListGroup>
  <Card.Body>
    <Card.Text>
     <p>{about}</p> 
    </Card.Text>
  </Card.Body>
 < button onClick={() =>handleDelete(inventoryItem._id)} className='delete-btn'>DELETE</button>
  </Card>
  </>
    );
};

export default InventoryItem;