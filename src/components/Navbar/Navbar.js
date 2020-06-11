import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";

import "./Navbar.css"

const NavBar = () => {

    const [input, setInput] = useState('')
    let history = useHistory();




    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleClick();
        }
    }

    const handleInput = (e) => {
        setInput(e.target.value);
    }

    const handleClick = () => {

        history.push(`/user/${input}`)


    }

    return (
        <header className="navbar">
            <div className="navbar__logo-container">
                <Link className="navbar__logo-link" to="/">
                    <img className="navbar__logo" src={require('../../images/logo.png')} alt="logo"/>
                </Link>
                <Link className="navbar__title-link" to="/">
                    <h1 className="navbar__title">Github Search Users</h1>
                </Link>
            </div>

            <div className="input">

                <input type="text" placeholder="Username" onChange={handleInput} onKeyDown={handleKeyDown}/>
                <button className="input__button" type="text" onClick={handleClick}>Search</button>


            </div>





        </header>
    )
}

export default NavBar;