import React, { useEffect, useState } from 'react';
import rideData1 from '../Data/Data';
//import map from '../../images/Map.png';
import './FinalDestination.css';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie, faUserFriends, faUsers } from '@fortawesome/free-solid-svg-icons'
import Map from '../Map/Map';



const FinalDestination = () => {

  
  const {id} = useParams();
  
    

     const vehicle = rideData1.find(ride => ride.id == id);
     console.log(vehicle);
     const { name, quantity, img, price} = vehicle;
    return (
        <div className="d-flex">
            
        <div style={{width: '200px' ,marginLeft:"150px",marginTop:"100px"}}>
            <div className='divStyle'>
                <h4> Mirpur</h4>
                <h4> TSC</h4>
            </div>
            <div className="bike">
              <p><img style={{height: '40px'}} src={img} alt=""/><span style={{marginLeft: '20px'}}> {name}</span> <span style={{marginLeft: '20px'}}><FontAwesomeIcon icon={faUserTie} /> {quantity}</span> <span style={{marginLeft: '20px'}}> {price}</span></p>  
            </div>
            <div className="bike">
              <p><img style={{height: '40px'}} src={img} alt=""/><span style={{marginLeft: '20px'}}> {name}</span> <span style={{marginLeft: '20px'}}><FontAwesomeIcon icon={faUserFriends} /> {quantity}</span> <span style={{marginLeft: '20px'}}> {price}</span></p>  
            </div>
            <div className="bike">
              <p><img style={{height: '40px'}} src={img} alt=""/><span style={{marginLeft: '20px'}}> {name}</span> <span style={{marginLeft: '20px'}}><FontAwesomeIcon icon={faUsers} /> {quantity}</span> <span style={{marginLeft: '20px'}}> {price}</span></p>  
            </div>
            
        </div>
        <div style={{marginLeft: '180px',marginTop: '150px'}}>
            
            <Map></Map>
        </div>
    </div>
    );
};

export default FinalDestination;