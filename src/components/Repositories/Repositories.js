import React from "react";
import Repository from "../Repository/Repository";

const emptyRepositories = require("../../images/emptyrepositories.png");

const Repositories = ({ repo }) => {
    return repo.length === 0 ?
        (
            <div className="repositories">
                <img className="repositories__empty-image" src={emptyRepositories} alt="empty box"/>
                <h1 className="repositories__header">This user has no <br/> repositories!</h1>
            </div>
        ) :
        (
            <div className="repositories">
                <h1 className="repositories__header">User repositories:</h1>
                <p className="repositories__header-caption">( Click in the repository name to open it on a new
                    window!)</p>
                <div className="repositories__container">
                    {
                        repo.sort((a, b) => (a.stargazers_count > b.stargazers_count) ? -1 : 1).map((repositorio, key) => {
                            return (<Repository repositorio={repositorio} key={key}/>)
                        })
                    }

                </div>
            </div>
        );
}

export default Repositories;