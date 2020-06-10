import React from 'react';
import './Home.css'
const Home = () => {
    return (
        <div className="home">
            <div className="home__title-container">
                <h1 className="home__title">Welcome to the<br/> <span className="title--whitebold">Github Search User</span> App</h1>

                <div className="home__line"/>
            </div>

            <img className="home__github-icon" src={require('../../images/github-logo.png')} alt=""/>
            <div className="home__description-container">
                <p className="home__instruction">To search a user just follow these steps:</p>

            </div>

        </div>
    )
}

export default Home;