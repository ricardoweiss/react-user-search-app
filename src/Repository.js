import React from "react";

const Repository = (props) => {
    return (
        <div className="repositories__repository">
            <p>{props.repositorio.name} | {props.repositorio.stargazers_count} estrelas</p>
        </div>
    )
}

export default Repository;