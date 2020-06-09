import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Repositories from "../Repositories";
import "../css/User.css"
const User = () => {

    let { username } = useParams();
    const [info, setInfo] = useState({});
    const [repo, setRepo] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then(res => res.json())
            .then(data => {
                setError(null);
                data.message ? setError(data.message) : setInfo(data);

            })
        fetch(`https://api.github.com/users/${username}/repos`)
            .then(res => res.json())
            .then(data => {
                setError(null);
                data.message ? setError(data.message) : setRepo(data);

            })
    }, [username])


    console.log(info)
    console.log(repo)


    if (error) {
        return (<h1>User not Found</h1>);
    } else {
        return (

            <section className="user-profile">
                <img className="user-profile__image" src={info.avatar_url} alt=""/>
                <div className="user-profile__info-container">
                    <p className="user-profile__info"><span className="title--whitebold">Name:</span> <br/>{info.name}</p>
                    <p className="user-profile__info"><span className="title--whitebold">Bio:</span><br/> {info.bio ? info.bio : 'No bio'} </p>
                    <p className="user-profile__info"><span className="title--whitebold">Email:</span><br/> {info.email ? info.email : 'no email'}</p>
                </div>
                <div className="user-profile__follows-container">
                    <img className="follows__image" src={require('../images/follow.png')} alt=""/>
                    <p className="user-profile__followers">{info.followers} Followers</p>
                </div>
                <div className="user-profile__follows-container">
                    <img className="follows__image" src={require('../images/followers.png')} alt=""/>
                    <p className="user-profile__followers">{info.following} Following</p>
                </div>
                <h1 className="repositories__header">User repositories:</h1>
                <div className="repositories__container">
                    <Repositories repo={repo}/>
                </div>





            </section>);
    }


        /*
        error ? <h1>User not Found</h1> :
            (/!*<h1>{info.bio}</h1>*!/
            <section className="user-profile">
                <img className="user-profile__image" src={info.avatar_url} alt=""/>
                <h1 className="user-profile__name">{info.name}</h1>
                <p className="user-profile__description">{info.bio}</p>
                <p className="user-profile__email">email: {info.email ? info.email : 'no email'}</p>
                <p className="user-profile__followers">{info.followers} Followers</p>
                <p className="user-profile__following">{info.following} Following</p>
                <div className="user-profile__repositories">
                    {repo.map((repositorio) => {
                        return repositorio.name
                    })}
                </div>
            </section>)*/

}

export default User;