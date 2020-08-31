import React ,{useContext , Fragment} from "react";
import {FaHeart} from "react-icons/fa";
import {RoomContext} from "../../../Context";
import {Link} from "react-router-dom";
import FavRoom from "./FavRoom/FavRoom";
import {ImHome} from "react-icons/im";
const Favorites =(props)=>{
    const context = useContext(RoomContext);
    let {favRooms, items} = context; //destructuring favRooms form context
    const allRooms = [...items];
    let allIds = favRooms.map(item => item);
     let roomsToRender= [];
     const getRoomById = (id)=>{
         const selectedRoom = allRooms.find( item => item.id === id);
         return selectedRoom;
     }
    for(let i = 0; i < favRooms.length; i++){
         roomsToRender.push(getRoomById(allIds[i]));
    }
        return(
            <Fragment>
                <div className="comp-container container">
                    <p style={{margin:"20px 5px 0 5px"}}><Link to="/"><ImHome className="home-icon"/></Link> > <span className="selectedRoute">Favorites</span></p>
                    <hr/>
               
                    <h3><FaHeart/> Favorite Rooms</h3>
                    {
                        roomsToRender.length <1
                        ?
                        <h3 className="text-center mt-4 text-dark">No rooms to show currently. Add rooms to the cart and get back again.</h3>
                        :
                        <div className="fav-room-main">
                            { roomsToRender.map((item, index) =>{
                                return(<FavRoom room ={item} key={index} /> )
                                }) 
                            }
                        </div>
                    }
                    
                </div>
            </Fragment>
        )
    
}
export default Favorites;