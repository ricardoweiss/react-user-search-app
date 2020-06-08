import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
const User = () => {

    let { username } = useParams();
    const [info, setInfo] = useState({});
    const [error, setError] = useState(false)

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setInfo(data)
            })
            .catch(error => setError(true));
    }, [username])
    return (

        error ? <h1>User not Found</h1> : (<h1>{info.login}</h1>)
    )
}

export default User;