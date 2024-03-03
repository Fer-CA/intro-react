import React from 'react';
import Badge from 'react-bootstrap/Badge';

const Tags = ({raza,BgColor}) => { 
    return (
        <Badge bg={BgColor}>{raza}</Badge>
    )
};
export default Tags;