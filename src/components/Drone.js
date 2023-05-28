import React from 'react';
import './Drone.css';

function Drone(props) {
    return (
        <div className='drone'>
            <div className='drone_info'>
                <p>{props.name}</p>

                <p>{props.introduction}</p>

                <p className='drone_speed'>
                    <small>speed</small>
                    <strong>{props.speed}</strong>
                    <small>m/s</small>
                </p>

                <div className='drone_rating'>
                    {
                        Array(props.rating)
                        .fill()
                        .map((_, i) => (
                            <p>★</p>
                        ))
                    }
                </div>
            </div>

            <img src= {props.img} alt="drone_img" />

        </div>
    );
}

export default Drone;