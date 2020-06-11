import React from "react";
import Repository from "../Repository/Repository";

const Repositories =({ repo }) =>

            repo.sort((a, b) => (a.stargazers_count > b.stargazers_count) ? -1 : 1).map((repositorio) => {
                return (<Repository repositorio={repositorio} key={repositorio.id}/>)
            })


export default Repositories;