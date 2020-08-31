import React,{Fragment, useState} from "react";
import {FaChevronUp, FaChevronDown} from "react-icons/fa";
import {withRouter} from "react-router-dom";
const Cart = (props)=>{
    const {name, price , capacity, size, images, slug, id } = props.room;
    // console.log(props.room);
    const [nights, setNights] = useState(1);
    const [readPrice, setPrice] = useState(price);

    const handlePriceChange=(method)=>{
        if(method === "increase" && nights < 10){
             setNights(nights + 1);
              setPrice(readPrice + price);
        }else if(method === "decrease" && nights >1){
            setPrice(readPrice - price);
            setNights(nights - 1);
        }
        props.accumulator({[id]: readPrice}, id);
    }
    const redirectToSingleRoom=()=>{
        props.history.push(`/rooms/${slug}#top`);
    }
   
    return(
        <Fragment>
            <tbody>
                <tr>
                    <td style={{lineHeight:"158px"}} className="firsttd"><strong>{props.index}</strong></td>
                    <td>
                        
                        <div style={{display:"flex"}}>
                            <img className="cart-img" src={images[0]} alt={name}/>
                            
                            <div style={{display:"block"}}>
                                <h4 style={{textTransform: "capitalize"}}>{name}</h4>
                                <p>Size : {size} SQFT</p>
                                <p>${price}</p>
                                <p>Capacity : {capacity}</p>
                            </div>
                            
                        </div>
                        <button className="cart-delete-Btn" onClick={()=> props.deleteRoom(props.index)}>Remove</button>
                        <span className="cart-delete-Btn" onClick={()=> redirectToSingleRoom()}>Show more details</span>
                    </td>
                    <td>
                        <div className="cart-nights">
                            <button onClick={()=> handlePriceChange("increase") } ><FaChevronUp/></button>
                                {nights}
                            <button onClick={()=> handlePriceChange("decrease")}><FaChevronDown/></button>
                        </div>
                    </td>
                    <td>
                        <div className="cart-price">${readPrice}</div>
                    </td>
                    
                </tr>
                
            </tbody>
        </Fragment>
    )
}
export default withRouter(Cart);