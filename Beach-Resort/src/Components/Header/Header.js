import React , {Component} from "react";
import "./Header.css";
import {FaAlignRight, FaShoppingCart, FaHeart, FaHotel , FaUser} from "react-icons/fa";
import {ImHome} from "react-icons/im";
import {Link, NavLink , withRouter} from "react-router-dom";
import {RoomContext} from "../../Context";
const logo = require("../../images/logo.svg");

class Header extends Component {
    state={
        openNav: false
    }
    handleToggle= ()=>{
        this.setState({
            openNav: !this.state.openNav
        })
    }
    static contextType = RoomContext;
    render(){
        let {favRooms, cartRooms , notificationMSG , showNotification} = this.context;
        // console.log(notificationMSG);
            return(
            <header className="header">
                <div className="container headerInner">
                    <nav className="navbar navbar-expand-sm w-100">
                        <Link className="nav-mylink" to="/">
                            <img className="navbar-brand" src={logo} alt="logo" />
                        </Link>

                        <button onClick={()=> this.handleToggle()} className="navbar-toggler" data-toggle="collapse" data-target="#mainNav">
                            <FaAlignRight className="nav-icon"/>
                        </button>
                        <div className={this.state.openNav ? "navbar-collapse ": "hideEl"}  id="mainNav">
                            <ul className="navbar-nav mr-auto" >
                                <NavLink exact to="/" onClick={()=> this.setState({openNav:false})} activeClassName="active" className="nav-link navigation-link" tag="li"><ImHome className="nav-icons"/> Home</NavLink>
                                <NavLink to="/rooms" onClick={()=> this.setState({openNav:false})} activeClassName="active" className="nav-link navigation-link" tag="li"><FaHotel className="nav-icons"/>  Rooms</NavLink>
                                <NavLink to="/signin" onClick={()=> this.setState({openNav:false})} activeClassName="active" className="nav-link navigation-link" tag="li"><FaUser className="nav-icons"/> Sign In</NavLink>
                            </ul>
                            <ul className="shopping-deck">
                                <div className="header-icons">
                                    <NavLink exact to="/favs" tag="li" onClick={()=> this.setState({openNav:false})} className="navigation-link ico"><FaHeart/></NavLink>
                                    {favRooms.length >=1 && this.props.location.pathname !=="/favs" ? <Link to="/favs" onClick={()=> this.setState({openNav:false})} className="items-counter">{favRooms.length}</Link> : null}
                                </div>
                                <div className="header-icons">
                                    <NavLink exact to="/cart" tag="li" onClick={()=> this.setState({openNav:false})} className="navigation-link ico"><FaShoppingCart/></NavLink>
                                    {cartRooms.length >= 1 && this.props.location.pathname !=="/cart" ?  <Link to="/cart" onClick={()=> this.setState({openNav:false})} className="items-counter">{cartRooms.length}</Link> : null}
                                </div>
                            </ul>
                        </div>
                        
                        
                    </nav>
                </div>
                {
                    showNotification
                    ?
                        <div className={`alert alert-${notificationMSG.mode} py-1 px-4 noti-MSG`}>
                            <p>{notificationMSG.message}</p>
                        </div>
                    :
                    null
                }
            </header>
        )
    }
    
};

export default withRouter(Header);