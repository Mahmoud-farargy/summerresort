import React ,{useRef} from "react";
import SubEmail from "../SubEmail/SubEmail";
import gplay from "../../images/gplay.png";
import applestore from "../../images/applestore.png";
import {FaTwitter , FaInstagram , FaFacebook} from "react-icons/fa";
const Footer =(props)=>{
    const arrowIcon = useRef();
    const nav1 = useRef();
    const nav2 = useRef();
    const nav3 = useRef();
    // const nav1 = useRef();
    const expandNav = (element)=>{ //uncompleted
        if(props.currentWidth < 600){
            arrowIcon.current.style.transform = "rotate(90deg)";
        }
    }
    return(
        <footer>
            <div className="main-footer">
                <div className="decoration-top"></div>
                <section className="row w-100">
                        <div className="col-lg-9 mx-auto">
                            <div className="footer-links-row row w-100 mx-auto">
                            <div className="col-md-2 w-100 mr-2">
                                Get the App.
                                <div className="mt-2 mr-2">
                                    <img className="app-img" alt="Google play" src={gplay} />
                                    <img className="app-img" alt="Apple Store"src={applestore} />
                                </div>
                            </div>
                            <div className="col-md-2 footer-social mt-2 mr-2 w-100">
                                <span><FaTwitter/></span>
                                <span><FaFacebook/></span>
                                <span><FaInstagram/></span>
                              
                            </div>
                                
                                <div className=" col-md-2 mr-2">
                                    <h4 onClick={()=> expandNav("nav1")} className="footer-nav-title">Title <i ref={arrowIcon} className="footer-arrow-icon fas fa-angle-up"></i></h4>
                                    <ul className="footer-nav" ref={nav1}>
                                        <li>home</li>
                                        <li>sign up</li>
                                    </ul>
                                </div>
                                
                                <div className="col-md-2 mr-2">
                                    <h4 onClick={()=> expandNav("nav2")}  className="footer-nav-title">about us <i ref={arrowIcon} className="footer-arrow-icon fas fa-angle-up"></i></h4>
                                    <ul className="footer-nav" ref={nav2}>
                                        <li>company</li>
                                        <li>information</li>
                                        <li>contact us</li>
                                        <li>reviews</li>
                                    </ul>
                                </div>
                                <div className="col-md-2">
                                    <h4 onClick={()=> expandNav("nav3")}  className="footer-nav-title">support <i ref={arrowIcon} className="footer-arrow-icon fas fa-angle-up"></i></h4>
                                    <ul className="footer-nav" ref={nav3}>
                                        <li style={{textTransform:"uppercase"}}>FAQ</li>
                                        <li>help desk</li>
                                        <li>forums</li>
                                    </ul>
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-lg-3">
                           <SubEmail /> 
                        </div>
                        
                </section>
                
            </div>
            <div className="copyright-footer">
                    <p>&copy; 2020 Mahmoud Farargy </p>
            </div>
        </footer>
    )
}
export default Footer;