import React from "react";
import {ProfilePicture} from "./Images";
import { Link } from "react-router-dom";


export function Profile(){
    return (
    <div className="border1">
        <Link to = "/">
            <button className="back"> back
            </button>
        </Link>
        
        <h1>PROFILE</h1>
        <ProfilePicture/>

        <ul>            
            <li><b>Scientific name</b> :Felis catus</li>
            <li><b> Longest cat recorded</b> :48.5 inches</li>
            <li><b>Average Lifespan</b> : 2-16 years</li>
            <li><b>Habitat</b> : warm,dry areas/unknown</li>
        </ul>
    </div>
    )
};


