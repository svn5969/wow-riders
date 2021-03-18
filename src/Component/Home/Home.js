import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Home.css'
import bg from '../../images/Bg.png'

const Home = () => {
    const [vehicles, setVehicles] = useState([])

    useEffect(() => {
        const url = `https://api.mocki.io/v1/380d1d2c`
        fetch(url)
            .then(res => res.json())
            .then(data => setVehicles(data))
    }, [])
    return (


        <div>
            <img style={{ width: '100%', height: '100%' }} src={bg} alt="" />


            <div className="row">
                <div className="col-md-3 vehicleImage d-flex">
                    {
                        vehicles.map(vehicle => <img className="vehicleImage" style={{ width: '100px', height: '100px', margin: 'auto' }} src={vehicle.image}></img>)
                    }


                </div>


                <div className="col-md-3 d-flex vehicleName">
                    {
                        vehicles.map(vehicle => <div className="vehicleName">{vehicle.name}</div>)
                    }
                </div>
            </div>


        </div>

    );
};

export default Home;