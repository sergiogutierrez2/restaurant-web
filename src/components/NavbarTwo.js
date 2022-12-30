import React, {useState} from 'react';
import logo from '../assets/logo.png';
import {Link} from 'react-router-dom';
import '../styles/Navbar.css'
import ReorderIcon from "@mui/icons-material/Reorder";

function NavbarTwo() {
    const[showLinks, setShowLinks] = useState(false);
    function Click(){
    setShowLinks(!showLinks);
    }
    return (
        <div className = "navbar">
            <div className = "leftSide" id= {showLinks ? "open" : "close"}>
            <img src={logo}/>
            <div className='hiddenLinks'>
            <Link to ="/restaurant-web/">Home</Link>
            <Link to ="/restaurant-web/menu">Menu</Link>
            <Link to ="/restaurant-web/about">About</Link>
            <Link to ="/restaurant-web/contact">Contact</Link>
            </div>
            </div>

            <div className = "rightSide">
            <Link to ="/restaurant-web/">Home</Link>
            <Link to ="/restaurant-web/menu">Menu</Link>
            <Link to ="/restaurant-web/about">About</Link>
            <Link to ="/restaurant-web/contact">Contact</Link>
            <button onClick={Click}>
            <ReorderIcon />
            </button>
            </div>
        </div>
    )
}


export default NavbarTwo