import React from "react";
import Aux from "../../HOC/Auxx";
import Hero from "../../../Components/Hero/Hero";
import {withRouter} from "react-router-dom";
import RoomContainer from "../../RoomContainer";
import {ImHome} from "react-icons/im";
import {Link} from "react-router-dom";
const Rooms = (props)=>{ 
    const onHeroBtnClick = () =>{ //redirects the user to the homepage when they click on "Return to Home" button in Hero component
       props.history.push("/");
    }
        return(
            <Aux>
                <Hero onBtnClick={()=> onHeroBtnClick()} title="Our Rooms" info="Browse our available rooms" btnText="Return Home" Bcg="hero rooms-hero-bcg"/>
                <div className="container">
                    <p style={{margin:"20px 5px 0 5px"}}><Link to="/"><ImHome className="home-icon"/></Link> > <span className="selectedRoute">Rooms</span></p>
                    <hr/>
                </div>
                <RoomContainer />
            </Aux>
        );
}

export default withRouter(Rooms); //withRouter gives you additional router related options you can access them by props