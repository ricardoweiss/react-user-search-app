import React from "react";


const Repository = (props) => {
    return (
        <div className="repositories__repository">
            <a href={props.repositorio.html_url} target="_blank" rel="noopener">
                <p className="repository__name link">{props.repositorio.name}</p>
            </a>
            <p className="repository__star-count"> {props.repositorio.stargazers_count} <img className="repository__star" src={require('../../images/star.png')} alt=""/></p>
        </div>
    )
}

export default Repository;