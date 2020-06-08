import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";

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
            <Link className="navbar__link" to="/">
                <h1 className="navbar__logo">Github Search Users</h1>
            </Link>
        <div className="input">
            <input type="text" onChange={handleInput}/>
            <button onClick={handleClick}>Search</button>
        </div>
        </header>
    )
}

export default NavBar;