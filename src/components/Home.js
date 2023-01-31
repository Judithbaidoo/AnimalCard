import React from "react";
import { Link } from "react-router-dom";
import {Pictures} from "./Images";

function Home(){

    return(
<div className="border1" >
    <h2> ANIMAL CARD : CAT</h2>
        <Pictures/>
    <div className = "border" >
       
            <Link to = "/profile" className = "information" >
             <span >PROFILE | </span>
             </Link> 
             <Link to = "/about" className = "information" >
                <span> ABOUT  |</span> 
             </Link>

             <Link to = "/funfacts" className = "information" >
                <span>  FUN-FACT</span>
             </Link>
    </div>
</div>
)}

export default Home