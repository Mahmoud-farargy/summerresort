import React, {useContext} from "react";
import Aux from "../HOC/Auxx";
import defaultImg from "../../images/room-1.jpeg"; //setting a default image
import {Link} from "react-router-dom";
import {FaShoppingCart, FaHeart} from "react-icons/fa";
import PropTypes from "prop-types";
import {RoomContext} from "../../Context";

const Room = (props)=>{                     
    const {name, slug, images, price, id, liked} = props.roomObj;
    let context  = useContext(RoomContext);
    // console.log(name,props.roomObj);
    const {addToCart} = context;
    return(
        <Aux>
            <section className="room">
                <div className="room-img-container">
                    <div className="fav-room-outline"></div>
                    <img src={images[0] || defaultImg} alt={name}/>
                    <div className="price-top">
                        <h6>${price}</h6>
                        <p>Per night</p>
                    </div>
                    <Link smooth="true" to={`/rooms/${slug}#top`} className="btn-primary stylish-btn room-link"> Features </Link>
                    <div className="room-upper-btns">
                        <FaShoppingCart className="shoppingCart mr-2" onClick={()=>addToCart("cartRooms", id)}/>
                        <FaHeart style={{color: liked ? "red": "#fff", transition: "all 0.3s linear"}} className="favHeart" onClick={()=>addToCart("favRooms", id)}/>
                    </div>
                </div>
                <h5 className="room-title">{name}</h5>
            </section>
        </Aux>
    )
}

// settings up propTypes
Room.propTypes={
    roomObj: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired,
    })
}

export default Room;