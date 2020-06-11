import React from "react";

const starImage = require('../../images/star.png');

const Repository = ({ repositorio }) => {
    return (
        <div className="repositories__repository">
            <a href={repositorio.html_url} target="_blank" rel="noopener noreferrer">
                <p className="repository__name link">{repositorio.name}</p>
            </a>
            <p className="repository__star-count"> {repositorio.stargazers_count} <img className="repository__star" src={starImage} alt=""/></p>
        </div>
    )
}

export default Repository;