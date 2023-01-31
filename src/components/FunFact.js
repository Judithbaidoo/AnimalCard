import React from "react";
import {FunFPicture} from "./Images";
import { Link } from "react-router-dom";

export function FunFact(){
    return (
        
    <div className="border1">
        <Link to = "/">
            <button className="back"> back
            </button>
        </Link>
        <h1> FUN FACT </h1>
        <FunFPicture/>
        <p>
            <p>Originally, it was thought that Egyptians domesticated the cat but in 2004 but 
            French archaeologists discovered a 9,500 year old cat grave in Cyprus.</p>
        </p>
    </div>

)
};

