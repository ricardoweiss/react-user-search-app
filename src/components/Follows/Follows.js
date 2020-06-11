import React from "react";
import "./Follows.css"

const Follows = (props) => {
    return (
        <>
            <div className="user-profile__follows-container">
                <img className="follows__image" src={require('../../images/follow.png')} alt=""/>
                <p className="user-profile__followers">{props.info.followers} Followers</p>
            </div>
            <div className="user-profile__follows-container">
                <img className="follows__image" src={require('../../images/followers.png')} alt=""/>
                <p className="user-profile__followers">{props.info.following} Following</p>
            </div>
        </>
    )
}

export default Follows;