import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Ride.css'

const Rides = (props) => {
    const history = useHistory()
    const handleBook = (id) => {
        history.push(`/destination/${id}`);
    }
    const { name, quantity, img, price, id } = props.ride;

    return (
        <div key={id} className="col-lg-3 col-md-6 col-sm-12" style={{height:'768px'}}>
            <Card className="singleCard" onClick={() => handleBook(id)} style={{ width: '14rem', height: '200px', textAlign: 'center',borderRadius:"15px",marginLeft:'10%',marginTop:'300px'}}>
                <Card.Img variant="top" style={{ width: '150px',marginTop:"10px",marginLeft:"60px"}} src={img} />
                <Card.Body>
                    <Card.Title > {name} </Card.Title>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Rides;