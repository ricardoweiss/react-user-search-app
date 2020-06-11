import React from "react";
import "../../components/UserProfile/UserProfile.css"
import Follows from "../Follows/Follows";

const circuitImage = require('../../images/data-circuit-image.png');

const UserProfile = ({ info }) => {
    const { avatar_url, name, bio, email } = info;
    return (
            <div className="user-profile__container">
                <img className="user-profile__image" src={avatar_url} alt=""/>
                <div className="user-profile__info-container">
                    <p className="user-profile__info"><span className="title--whitebold">Name:</span> <br/>{name}</p>
                    <p className="user-profile__info"><span
                        className="title--whitebold">Bio:</span><br/> {bio ? bio : 'no bio'} </p>
                    <p className="user-profile__info"><span
                        className="title--whitebold">Email:</span><br/> {email ? email : 'no email'}</p>
                </div>
                <Follows info={info}/>
                <img className="user-profile__decoration" src={circuitImage} alt=""/>
            </div>
    )
}

export default UserProfile;