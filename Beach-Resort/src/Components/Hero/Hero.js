import React from "react";
import "../Header/Header.css";

const Hero = (props) =>{
    return(
        <div className={props.Bcg}>
            <div className="hero-inner">
                <h1 className="main-title hero-title">{props.title}</h1>
                <h6 className="my-3 hero-info">{props.info}</h6>
                <button onClick={()=> props.onBtnClick()} className="stylish-btn mt-2">{props.btnText}</button>
            </div>
        </div>
    )
}

export default Hero;