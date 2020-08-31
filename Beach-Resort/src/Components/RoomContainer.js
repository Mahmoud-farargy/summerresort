import React from "react";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
import {RoomConsumer} from "../Context";

const RoomContainer=(props)=>{

    return(
        <RoomConsumer>
            {
                (value)=> {
                    const {loading, sortedRooms, items} = value;
                    if(loading){
                        return(<p>loading...</p>)
                    }
                    return(
                        <div className="RoomContainerPage">
                            <h2 className="main-title">Search Rooms</h2>
                            <RoomFilter rooms={items}/>
                            <RoomList sortedRooms={sortedRooms} />
                        </div>
                    );
                    
                }
            }
            
        </RoomConsumer>
    )
}
export default RoomContainer;