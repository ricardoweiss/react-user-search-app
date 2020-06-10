import React from "react";
import "../../components/UserProfile/UserProfile.css"

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
                <div className="user-profile__follows-container">
                    <img className="follows__image" src={require('../../images/follow.png')} alt=""/>
                    <p className="user-profile__followers">{props.info.followers} Followers</p>
                </div>
                <div className="user-profile__follows-container">
                    <img className="follows__image" src={require('../../images/followers.png')} alt=""/>
                    <p className="user-profile__followers">{props.info.following} Following</p>
                </div>
            </div>


    )
}

export default UserProfile;