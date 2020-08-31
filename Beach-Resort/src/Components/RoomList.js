import React from "react";
import Room from "./Room/Room";
const RoomList=(props)=>{
    // console.log(props.sortedRooms);
    if(props.sortedRooms.length === 0){
        return(
            <h3 className="text-center mt-4">Unfortunately no rooms matched your search parameters</h3>
        )
    }
    return(
        <React.Fragment>
            <section className="featuredRooms-section">
                <div className="rooms-container">
                    {
                        props.sortedRooms.map(el =>{
                            return(<Room key={el.id} roomObj={el}/>)
                        })
                    }
                </div>
            </section>
        </React.Fragment>
    )
}
export default RoomList;