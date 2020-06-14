import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Repositories from "../../components/Repositories/Repositories";
import "./User.css"
import Error404 from "../../components/Error404/Error404";

import UserProfile from "../../components/UserProfile/UserProfile";
import Loading from "../../components/Loading/Loading";

const User = () => {

    let {username} = useParams();
    const [info, setInfo] = useState({});
    const [repo, setRepo] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setError(null);
        fetch(`https://api.github.com/users/${username}`)
            .then(res => res.json())
            .then(data => {
                setInfo(data);
                fetch(`https://api.github.com/users/${username}/repos?page=1&per_page=100`)
                    .then(res => res.json())
                    .then(data => {
                        data.message ? setError(data.message) : setRepo(data);
                        setLoading(false);

                    })
                    .catch(error => setError(error))
            })
            .catch(error => setError(error))

    }, [username])


    return error ? <Error404 username={username} /> :
        loading ? <Loading/> : (<section className="user-profile">
                                    <UserProfile info={info} />
                                    <Repositories repo={repo}/>
                                </section>
                                )



}

export default User;