import React ,{Fragment, useContext} from "react";
import {FaShoppingCart, FaLock} from "react-icons/fa";
import {Link, withRouter} from "react-router-dom";
import {RoomContext} from "../../../Context";
import visa from "../../../images/vc-btn.jpg";
import paypal from "../../../images/paypal.png";
import {ImHome} from "react-icons/im";
import Cart from "./Cart/Cart";
const ShoppingCart =(props)=>{
   const context = useContext(RoomContext);
   let {cartRooms, items , handleTotal} = context; //destructuring cartRooms form context
   const allRooms = [...items];
   let allIds = cartRooms.map(item => item);
    let roomsToRender= [];
    const getRoomById = (id)=>{
        const selectedRoom = allRooms.find( item => item.id === id);
        return selectedRoom;
    }
    // console.log(roomsToRender);
   for(let i = 0; i < cartRooms.length; i++){
        roomsToRender.push(getRoomById(allIds[i]));
   }
    const redirectToCheckout=()=>{
        props.history.push("/checkout");
    }
    const deleteRoom = (index)=>{
        roomsToRender.splice(index,1);
        cartRooms.splice(index,1);
        // console.log(cartRooms, roomsToRender);
    }
        return(
            <Fragment>
                <section className="comp-container container">
                    <p style={{margin:"20px 5px 0 5px"}}><Link to="/"><ImHome className="home-icon"/></Link> > <span className="selectedRoute">Cart</span></p>
                    <hr/>
                    <h3><FaShoppingCart/> Cart</h3>
                    {
                        roomsToRender.length < 1
                        ?
                            <div>
                                <h3 className="text-center mt-4 text-dark">No rooms to show currently. Add rooms to the cart and get back again.</h3>
                            </div>
                        
                         :     //Desktop version
                            <div className="row w-100 my-4"> 
                                <div className="col-lg-8 cart-desktop">
                                    <h3>ROOMS ({roomsToRender.length} {roomsToRender.length >1 ? "rooms": "room"})</h3>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <td className="firsttd">
                                                    No.
                                                </td>
                                                <td>
                                                    Details
                                                </td>
                                                <td>
                                                    Nights
                                                </td>
                                                <td>
                                                    Price
                                                </td>
                                            </tr>
                                        </thead>
                                        
                                            {
                                                roomsToRender.map((room, index) =>{
                                                    return( <Cart room={room} key={room.id} deleteRoom={()=> deleteRoom(index)} index={index} accumulator={(val, id)=> handleTotal(val, id)} /> )
                                                })
                                            }
                                    
                                    </table>
                                        <div className="table-bottom">
                                            <p ><i>SUBTOTAL</i> ({roomsToRender.length} rooms) <strong>$ "total test"</strong></p>
                                        </div>
                                    
                                </div>
                                <aside className="col-lg-4 mx-auto ">
                                    <div className="aside-summary">
                                        <div className="secure-checkout">
                                            <h6 className="mt-1"><FaLock className="mb-1 mr-2"/>Secure Checkout</h6>
                                        </div>
                                        <p style={{textAlign:"center",margin:"0"}}>- or -</p>
                                        <div className="row mb-2 align-items-center mx-auto">
                                                <img src={visa} alt='visa' className="col-md-5 mr-2 payment-method" style={{height:"40px"}} />
                                                <img src={paypal} alt='paypal' className="col-md-5 payment-method" style={{height:"25px"}}/>
                                        </div>
                                        <div className="order-summary-box">
                                                <h5 className="order-title">Summary</h5>
                                                <div className="order-row">
                                                    <p>Subtotal ({roomsToRender.length} rooms):</p>
                                                    <p className="cart-price">$"total test"</p>
                                                </div>
                                                <div className="order-row ">
                                                    <p>Tax: </p>
                                                    <p className="cart-price">$20</p>
                                                </div>
                                                <div className="order-row ">
                                                    <strong>Total:</strong>
                                                    <strong className="cart-price">$"total test"</strong>
                                                </div>
                                                <hr/>
                                                <button onClick={()=> redirectToCheckout()} className="main-order-btn">Go to Checkout</button>
                                        </div>
                                        <div className="promo-code">
                                                <input type="text" name="promo" placeholder="Promo code" />
                                                <button>Apply Code</button>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        
                    }
                    
                </section>
            </Fragment>
        )
    
}
export default withRouter(ShoppingCart);