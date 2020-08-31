import React, {Component} from "react";
import Room from "../Room/Room";
import {RoomContext} from "../../Context.js";
 
class FeaturedRooms extends Component{
    static contextType = RoomContext;
    render(){
        let {loading, featuredRooms} = this.context;
        // console.log(featuredRooms);
        featuredRooms = featuredRooms.map(item =>{
               return( <Room key={item.id} roomObj={item}/>)
        });
        
        return(
            <section className="featuredRooms-section">
                <h2 className="main-title">Featured Rooms</h2>
                {
                    loading ? "Loading..." :
                    (<div className="services-inner-section">{featuredRooms}</div>)
                    
                }
            </section>
        )
    }
    
};

export default FeaturedRooms;