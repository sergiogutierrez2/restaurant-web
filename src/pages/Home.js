import React from 'react';
import banner from "../assets/foodmain.jpg"
import {Link} from 'react-router-dom';
import "../styles/Home.css"

function Home() {
return(
    <div className="home" style={{backgroundImage: `url(${banner})` }}>
    <div className="headerContainer">
    <h1>Quynh's Restaurant</h1>
    <br/>
    <Link to="/menu">
    <button>Order Now</button>
    </Link>
    </div>
    </div>
)
}

export default Home;