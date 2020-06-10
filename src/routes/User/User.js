import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Repositories from "../../components/Repositories/Repositories";
import "./User.css"

import UserProfile from "../../components/UserProfile/UserProfile";

const User = () => {

    let {username} = useParams();
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
            <React.Fragment>
                <section className="user-profile">
                    <UserProfile info={info} />
                    <div className="repositories">
                        <h1 className="repositories__header">User repositories:</h1>
                        <p className="repositories__header-caption">( Click in the repository name to open it on a new
                            window!)</p>
                        <div className="repositories__container">
                            <Repositories repo={repo}/>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default User;