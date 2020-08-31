import React , {Component} from "react";
import Aux from "../HOC/Auxx";
import "./Services.css";
import {FaCocktail, FaHiking , FaShuttleVan, FaBeer } from "react-icons/fa";
class Services extends Component{
    
        state={
            services:[
                {icon: <FaCocktail/>,
                 title: "Free Cocktail",
                 info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
                },
                {icon: <FaHiking />,
                    title: "Endless Hiking",
                    info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
                },
                {icon: <FaShuttleVan />,
                    title: "Free Shuttle",
                    info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
                },
                {icon: <FaBeer />,
                    title: "Strongest Beer",
                    info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
                }
            ]
        
    }
    render(){
        // console.log(this.state.services);
        return(
            <Aux>
                <section className="services-section">
                    <h2 className="main-title">Services</h2>
                    <div className="container services-inner-section">
                            {this.state.services.map((item, index) => {
                                    return(
                                        <article key={`${index} - ${item.title}`} className="service">
                                            <span>{item.icon}</span>
                                            <h6 className="mt-3">{item.title}</h6>
                                            <p>{item.info}</p>
                                        </article>
                                        
                                    );
                            })}
                    </div>
                    
                    </section>
                
                </Aux>
        );
    }
}

export default Services;