import React from "react";
import "./Error404.css"

const Error404 = ({ username }) => {
    return (
            <div className="error__container">
                <img className="error__image" src={require("../../images/search.png")} alt="magnifier"/>
                <h1 className="error__title">User "{username}" not found!</h1>
            </div>
    )
}

export default Error404;