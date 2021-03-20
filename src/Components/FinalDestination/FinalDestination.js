import React, { useEffect, useState } from 'react';
import rideData from '../Data/Data';
import map from '../../images/Map.png';
import './FinalDestination.css';


const FinalDestination = () => {
    const [ride, setRide] = useState([])
    useEffect(() => {
        setRide(rideData[0])
        // console.log("p", rideData);
    }, [])
    // console.log("pp", ride[0].name);
    const { name, quantity, img, price} = ride;
    return (
        <div className="d-flex">
            
        <div className="finalPlace" >
            <div className='divStyle'>
                <h4> Mirpur</h4>
                <h4> TSC</h4>
            </div>
            <div className="bike">
              <p><img style={{height: '40px'}} src={img} alt=""/><span style={{marginLeft: '20px'}}> {name}</span> <span style={{marginLeft: '20px'}}> {quantity}</span> <span style={{marginLeft: '20px'}}> {price}</span></p>  
            </div>
            <div className="bike">
              <p><img style={{height: '40px'}} src={img} alt=""/><span style={{marginLeft: '20px'}}> {name}</span> <span style={{marginLeft: '20px'}}> {quantity}</span> <span style={{marginLeft: '20px'}}> {price}</span></p>  
            </div>
            <div className="bike">
              <p><img style={{height: '40px'}} src={img} alt=""/><span style={{marginLeft: '20px'}}> {name}</span> <span style={{marginLeft: '20px'}}> {quantity}</span> <span style={{marginLeft: '20px'}}> {price}</span></p>  
            </div>
            
        </div>
        <div>
            <img style={{height: '400px', marginLeft:"150px" , marginTop:"50px"}}src={map} alt=""/>
        </div>
    </div>
    );
};

export default FinalDestination;