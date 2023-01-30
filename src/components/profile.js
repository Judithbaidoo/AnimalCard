import React from "react";
import {ProfilePicture} from "./Images";

export function Profile(){
    return (
    <div className="border1">
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


