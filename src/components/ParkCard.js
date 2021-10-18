import React from "react";
import { Card } from "react-bootstrap";
import {Link} from 'react-router-dom'

const ParkCard = ({parkId, image, title, description}) => {
  return (
    <Card className="mb-3">
      <Card.Img variant="top" src={image} alt={title} height={196} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {`${description.substring(0, 150)}...`}
        </Card.Text>
        <Link to={`/park-details/${parkId}`} className="btn btn-primary">Details</Link>
      </Card.Body>
    </Card>
  );
};

export default ParkCard;
