import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./HomeInventory.css";

const HomeInventory = ({ product }) => {
    const {_id, img, name, price, quantity, supplier, about } = product;
    const navigate = useNavigate()

    const navigateToItemDetails = id => {
        navigate(`/detailupdate/${id}`);
}

    return (
        <>
           <Card  className = 'card-item' >
        <Card.Img className='img' variant="top" src={img} />
        <Card.Title ><h3>{name}</h3></Card.Title>
     <ListGroup className="list-group-flush">
             <ListGroupItem><h5><strong>Price :</strong> {price} Taka</h5></ListGroupItem>
            <ListGroupItem><h5><strong>Quantity :</strong> {quantity} Pis</h5></ListGroupItem>
            <ListGroupItem><h5><strong>Supplier :</strong> {supplier}</h5></ListGroupItem>
    </ListGroup>
  <Card.Body>
    <Card.Text>
     <p>{about.slice(0,200)} .....</p> 
    </Card.Text>
  </Card.Body>
          <div div className = "update-btn" >
             <button onClick={()=>navigateToItemDetails(_id)}> UPDATE  INFO</button>
       </div>
</Card>
  
        </>
    );
};

export default HomeInventory;