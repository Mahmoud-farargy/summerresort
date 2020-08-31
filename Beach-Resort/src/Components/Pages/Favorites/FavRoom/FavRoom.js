import React , {useContext} from "react";
import Aux from "../../../HOC/Auxx";
import {RoomContext} from "../../../../Context";
const FavRoom = (props)=>{
    const context = useContext(RoomContext);
    const {addToCart} = context;
    const {images, name , price , id} = props.room;
    // console.log(props.room, context);
    return(
        <Aux>
                <div className="fav-room-box">
                    <h4 className="fav-room-closing-icon">&times;</h4>
                    <img className="fav-room-img" src={images[0]} alt={name} />
                    <div className="fav-room-inner">
                        <h5 className="fav-room-name">{name}</h5>
                        <strong className="fav-room-price">${price}</strong><br/>
                        <button className="cart-delete-Btn" onClick={()=> addToCart("cartRooms",id)}>Add to reservation box</button>
                    </div>
                </div>
        </Aux>
    )
}
export default FavRoom;