import React from 'react';
import Card from 'react-bootstrap/Card';
import Tags from './Tags';

const MyCard = ({img,name,dsc,raza,BgColor}) => { 
    return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {dsc}
        </Card.Text>
        <Tags raza={raza} BgColor={BgColor} />
      </Card.Body>
    </Card>
    )
};
export default MyCard;