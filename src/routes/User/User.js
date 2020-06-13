import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Repositories from "../../components/Repositories/Repositories";
import "./User.css"
import Error404 from "../../components/Error404/Error404";

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
        fetch(`https://api.github.com/users/${username}/repos?page=1&per_page=100`)
            .then(res => res.json())
            .then(data => {
                setError(null);
                data.message ? setError(data.message) : setRepo(data);

            })
    }, [username])


    if (error) {
        return <Error404 username={username} />;
    } else {
        return (
            <React.Fragment>
                <section className="user-profile">
                    <UserProfile info={info} />
                    <Repositories repo={repo}/>
                </section>
            </React.Fragment>
        );
    }
}

export default User;