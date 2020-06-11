import React from 'react';
import './Home.css'

const Home = () => {

    const steps = require("../../images/steps.png");
    const mobileSteps = require("../../images/steps-mobile.png");
    const githubLogo = require('../../images/github-logo.png');

    return (
        <div className="home">
            <div className="home__title-container">
                <h1 className="home__title">Welcome to the<br/> <span className="title--whitebold">Github Search User</span> App</h1>
                <div className="home__line"/>
            </div>
            <img className="home__github-icon" src={githubLogo} alt=""/>
            <div className="home__description-container">
                <p className="home__instruction">To search a user just follow these steps:</p>
            </div>
            {/*DESKTOP STEPS*/}
                <div className="home__steps-container--desktop">
                    <img className="home__steps-image--desktop" src={steps} alt="steps"/>
                    <div className="home__steps--desktop">
                        <div className="step-container--desktop">
                            <p className="home__step">Type a GitHub username</p>

                        </div>
                        <div className="step-container--desktop">
                            <p className="home__step">Hit enter or click search</p>

                        </div>
                        <div className="step-container--desktop">
                            <p className="home__step">Done, the result will appear!</p>

                        </div>
                    </div>
                </div>

            {/*MOBILE STEPS*/}
            <div className="home__steps-container--mobile">
                <img className="home__steps-image--mobile" src={mobileSteps} alt="steps"/>
                <div className="home__steps--mobile">
                    <p>Type a GitHub username</p>
                    <p>Hit enter or click search</p>
                    <p>Done, the result will appear!</p>
                </div>
            </div>
        </div>
    )
}

export default Home;