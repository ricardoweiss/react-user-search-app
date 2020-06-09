import React, { useState } from "react";
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
            <Link className="navbar__logo-link" to="/">
                <img className="navbar__logo" src={require('./images/logo.png')} alt="logo"/>
            </Link>
            <div className="input">

                <input type="text" placeholder="Username" onChange={handleInput}/>
                <button className="input__button" onClick={handleClick}>Search</button>


            </div>
            <Link className="navbar__title-link" to="/">
                <h1 className="navbar__title">Github Search Users</h1>
            </Link>




        </header>
    )
}

export default NavBar;