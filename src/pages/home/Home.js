import React from 'react';
import './Home.css';
import background from '../../imgs/background.jpg';
import AboutUs from '../../components/AboutUs';


function Home() {
    return (
   
        <div className="home">
            <div className="home-container">
                <img className="home-image" src={background} alt="background"/>    
                <div className = "home-title">
                    <p>Gachon Express</p>
                </div>
                <div className='home-text'>
                    <AboutUs />
                </div>
            </div>
        </div>
    );
}

export default Home;