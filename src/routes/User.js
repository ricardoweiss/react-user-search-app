import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
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
                <h1 className="user-profile__name">{info.name}</h1>
                <p className="user-profile__description">{info.bio}</p>
                <p className="user-profile__email">email: {info.email ? info.email : 'no email'}</p>
                <p className="user-profile__followers">{info.followers} Followers</p>
                <p className="user-profile__following">{info.following} Following</p>
                <div className="user-profile__repositories">
                    <h1 className="repositories__header">User repositories:</h1>
                    {repo.map((repositorio) => {
                        return (<div className="repositories__repository">
                            {repositorio.name}
                        </div>)
                    })}
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