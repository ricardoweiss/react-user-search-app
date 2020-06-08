import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";

import "./css/Navbar.css"

const NavBar = () => {

    const [input, setInput] = useState('')
    let history = useHistory();


    const handleInput = (e) => {
        setInput(e.target.value);
    }

    const handleClick = () => {

        history.push(`/user/${input}`)


    }

    return (
        <header className="navbar">
            <div className="input">
                <input type="text" onChange={handleInput}/>
                <button onClick={handleClick}>Search</button>


            </div>
            <Link className="navbar__link" to="/">
                <h1 className="navbar__title">Github Search Users</h1>
            </Link>
            <div className="navbar__image-container">
                <img className="navbar__logo" src="./images/logo.png" alt=""/>
            </div>



        </header>
    )
}

export default NavBar;