import React from 'react';
import { useState } from 'react';
import background from '../../images/Bg.png'
import Rides from '../Rides/Rides'
import rideData from '../Data/Data'
import { useEffect } from 'react';
import './Home.css'


const Home = () => {
    const [ride, setRide] = useState([]);
    useEffect(() => {
        setRide(rideData);
        // console.log(rideData);
    }, [])
    return (
        <section className="banner row">
            <div className="ride-section" >
                {
                    ride.map(ride => <Rides
                        key={ride.id}
                        ride={ride}></Rides>
                    )
                }
               
            </div>
           
        </section>
    );
};

export default Home;