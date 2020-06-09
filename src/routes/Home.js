import React from 'react';
import '../css/Home.css'
const Home = () => {
    return (
        <div className="home">
            <div className="home__title-container">
                <h1 className="home__title">Welcome to the<br></br> <span className="home__title--whitebold">Github Search User</span> App</h1>

                <div className="home__line"></div>
            </div>

            <img className="home__github-icon" src={require('../images/github-logo.png')} alt=""/>
            <div className="home__description">
                <p className="home__instruction">To search a user, just type the username in the input above and hit enter!</p>
            </div>

        </div>
    )
}

export default Home;