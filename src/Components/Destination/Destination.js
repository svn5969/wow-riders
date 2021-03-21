import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useHistory, useParams } from 'react-router-dom';
import map from '../../images/Map.png';
import rideData from '../Data/Data';
import Map from '../Map/Map';

const Destination = (props) => {
    
    
    const {id} = useParams();
    const history = useHistory();
    return (

        <div className="d-flex">
            <div style={{width: '200px' ,marginLeft:"150px",marginTop:"150px"}}>
                <Form>
                    <Form.Group controlId="formBasicStart">
                        <Form.Label>Pick Form</Form.Label>
                        <Form.Control type="text" name="startForm" placeholder="Mirpur" value="Mirpur" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEnd">
                        <Form.Label>Pick To</Form.Label>
                        <Form.Control type="text" name="journyEnd" placeholder="TSC" value="TSC" />
                    </Form.Group>
                    {/* <Button onClick={handleSearchButtonClick()} variant="primary" type="submit">
                        Search
                    </Button> */}
                    
                </Form>
              
                    <button onClick={()=>history.push(`/finalDestination/${id}`)}  className="btn btn-primary">Search</button>
                    
            </div>
            <div style={{marginLeft: '180px',marginTop: '150px'}}>
            
            <Map></Map>
        </div>
        </div>
    );
};   

export default Destination;