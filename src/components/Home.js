import React from "react";
import { Link } from "react-router-dom";
import {Pictures} from "./Images";

function Home(){

    return(
<div className="border1" >
    <h1>CAT</h1>
        <Pictures/>
    <div className = "border" >
       
            <Link to = "/profile" className = "information" >
             <span >PROFILE  </span>
             </Link> 
             <Link to = "/about" className = "information" >
                <span> ABOUT  </span> 
             </Link>

             <Link to = "/funfacts" className = "information" >
                <span>  FUN-FACTS</span>
             </Link>
    </div>
</div>
)}

export default Home