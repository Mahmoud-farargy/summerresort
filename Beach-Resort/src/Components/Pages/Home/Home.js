import React, {Component} from "react";
import Hero from "../../../Components/Hero/Hero";
import Services from "../../../Components/Services/Services";
import {withRouter} from "react-router-dom";
import FeaturedRooms from "../../../Components/FeaturedRooms/FeaturedRooms";
class Home extends Component{ 
    onHeroBtnClick(){ //redirects the user to "Rooms" page
        this.props.history.push("/rooms");
    }
    render(){
        return(
            <div>
                <Hero onBtnClick={()=> this.onHeroBtnClick()} title="Luxurious Rooms" info="Deluxe Rooms Starting At $299" btnText="Our Rooms" Bcg="hero default-hero-bcg"/>
                <Services />
                <FeaturedRooms />
            </div>
        )
    }
}
export default withRouter(Home);