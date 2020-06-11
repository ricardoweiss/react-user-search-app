import React from "react";

const starImage = require('../../images/star.png');

const Repository = ({ repositorio }) => {
    const { html_url, name, stargazers_count } = repositorio;
    return (
        <div className="repositories__repository">
            <a href={html_url} target="_blank" rel="noopener noreferrer">
                <p className="repository__name link">{name}</p>
            </a>
            <p className="repository__star-count"> {stargazers_count} <img className="repository__star" src={starImage} alt=""/></p>
        </div>
    )
}

export default Repository;