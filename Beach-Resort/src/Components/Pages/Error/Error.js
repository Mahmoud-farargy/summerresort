import React from "react";
import Hero from "../../Hero/Hero";
import "../../Header/Header.css";
import {withRouter} from "react-router-dom";
const ErrorPath = (props)=>{
    const onHeroBtnClick = () =>{ //redirects the user to the homepage when they click on "Return to Home" button in Hero component
        props.history.push("/");
    }
    return(
        <React.Fragment>
            <div>
                <Hero onBtnClick={()=> onHeroBtnClick()} title="404" info="Page not found" btnText="Return Home" Bcg="hero default-hero-bcg"/>
            </div>
        </React.Fragment>
    )
}
export default withRouter(ErrorPath);