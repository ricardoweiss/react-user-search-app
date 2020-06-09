import React from "react";
import Repository from "./Repository";
const Repositories =(props) => {
    return (
        <div className="user-profile__repositories">
                        {props.repo.sort((a, b) => (a.stargazers_count > b.stargazers_count) ? -1 : 1).map((repositorio) => {
                            return (<Repository repositorio={repositorio}/>)
                        })}
                    </div>
    )
}

export default Repositories;