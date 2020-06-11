import React from "react";
import "../../components/UserProfile/UserProfile.css"
import Follows from "../Follows/Follows";

const circuitImage = require('../../images/data-circuit-image.png');

const UserProfile = (props) => {
    return (

            <div className="user-profile__container">
                <img className="user-profile__image" src={props.info.avatar_url} alt=""/>
                <div className="user-profile__info-container">
                    <p className="user-profile__info"><span className="title--whitebold">Name:</span> <br/>{props.info.name}</p>
                    <p className="user-profile__info"><span
                        className="title--whitebold">Bio:</span><br/> {props.info.bio ? props.info.bio : 'no bio'} </p>
                    <p className="user-profile__info"><span
                        className="title--whitebold">Email:</span><br/> {props.info.email ? props.info.email : 'no email'}</p>
                </div>
                <Follows info={props.info}/>
                <img className="user-profile__decoration" src={circuitImage} alt=""/>
            </div>


    )
}

export default UserProfile;