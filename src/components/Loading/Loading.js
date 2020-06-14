import React from "react";
import "./Loading.css"

const Loading = () => {
    return (
        <div className="loading__container">
            <div className="loading__block--one"/>
            <div className="loading__block--two"/>
            <div className="loading__block--three"/>
            <div className="loading__block--four"/>
            <div className="loading__block--five"/>
        </div>
    )
}

export default Loading;