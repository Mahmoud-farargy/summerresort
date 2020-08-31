import React, {Component} from "react";
import {Link} from "react-router-dom";
import Hero from "../../Hero/Hero";
import defaultBcg from "../../../images/room-1.jpeg";
import {RoomContext} from "../../../Context";
import StyledHero from "../../Hero/StyledHero";
import {ImHome} from "react-icons/im";

class SingleRoom extends Component {
    constructor(props){
        super(props)
        
        this.state={
            slug: this.props.match.params.slug,
            pageBcg: defaultBcg 
        }
    }
    onHeroBtnClick=()=>{
        this.props.history.push("/rooms");
    }
     static contextType = RoomContext;
    render(){
        
       let {getRoom} = this.context;
       let room = getRoom(this.state.slug); //getting the room from the slug in respective url
    //    console.log(room);
       if(!room){
           return(
               <div className="error">
                   <h3>No such rooom could be found.</h3>
                   <Link to="/rooms" className="stylish-btn">Back to rooms</Link>
                </div>
           )
       }
       const {name, description, capacity, size, price, extras, breakfast, pets, images} = room;
       return(
            <div id="top">
                <StyledHero img={images[0]} >
                    <Hero onBtnClick={()=> this.onHeroBtnClick()} title={`${name} room`} btnText="Back to rooms" info={`Price:  $${price}`}  Bcg="hero"/>
                </StyledHero>
                <section className="singleRoom-container container" >
                    <p><Link to="/"><ImHome className="home-icon"/></Link> > <Link to="/rooms">Rooms</Link> > <span className="selectedRoute">{name}</span></p>
                    <hr/>
                    <div className="images-container">
                        {
                            images.map((image,index) =>{
                                return(<img key={index} className="single-image" src={image} alt={name} />)
                            })
                        }
                    </div>
                    <div className="row w-100 mt-5 mb-4">
                        <div className="col-md-6">
                            <h3>Details</h3>
                            <p>{description}</p>
                        </div>
                        <div className="col-md-6">
                            <h3>Information</h3>
                            <p>Price : ${price}</p>
                            <p>Size : {size} SQFT</p>
                            <p>Max capacity : {capacity >1 ? capacity + " people": capacity + " person"}</p>
                            <p>{breakfast && "Free breakfast included"}</p>
                            <p>{pets ? "Pets Are Allowed" : "No Pets Allowed"}</p>
                        </div>
                    </div>
                    <div >
                        <h3>Extras</h3>
                        <div className="row w-100 mt-1 mb-3">
                            {
                                extras.map((item, index)=>{
                                    return(<p key={index} className="col-md-4">- {item}</p>)
                                })
                            }
                        </div>
                    </div>
                </section>
            </div>
        )  
    };
}
export default SingleRoom;