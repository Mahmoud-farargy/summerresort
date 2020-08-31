import React, {useState, useContext} from "react";
import {FaEnvelope} from "react-icons/fa";
import {RoomContext} from "../../Context";
const SubEmail = (props)=>{
    const [email, setEmail] = useState("");
    const context = useContext(RoomContext);
    const submitEmail = () => {
        if(email !== ""){
           context.notification("You are now being subscribed to our service. Thanks!","success");
           setEmail("");  
        }
       
    };
    
    const enteredText = (e)=>{
        setEmail(e.target.value);
    }
    return(
        <div className="sub-email-container">
                <p className="sub-email-text">
                   <strong>Subscribe</strong> to our newsletters right 
                    now and get special offers
                </p>
                    <div className="sub-email-form" >
                        <input required type="email" onChange={(e)=> enteredText(e)} value={email} placeholder="Enter your e-mail..." className="form-control sub-email-input" />
                        <button onClick={()=> submitEmail()} type="submit" value="subscribe" className="sub-email-btn" ><FaEnvelope style={{margin:"0 3px 3px 0"}}/>Subscribe</button>
                    </div>
               
        </div>
    )
}
export default SubEmail;