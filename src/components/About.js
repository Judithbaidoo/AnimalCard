import React from "react";
import {AboutPicture} from "./Images";
import { Link } from "react-router-dom";


export default function About(){
    return (
        
    <div className="border1">
        <Link to = "/">
            <button className="back"> back
            </button>
        </Link>
        <h1> ABOUT </h1>
        <AboutPicture/>
        <p>The cat <b>(Felis catus)</b> is a domestic species of small carnivorous mammal.<br/>
        It is the only domesticated species in the family Felidae and is often referred to as 
        the domestic cat to distinguish it from the wild members of the family.
        </p>
    </div>
)
}


