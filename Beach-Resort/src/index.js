import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Pages/Home/Home";
import Rooms from "./Components/Pages/Rooms/Rooms";
import SingleRoom from "./Components/Pages/SingleRoom/SingleRoom";
import Error from "./Components/Pages/Error/Error";
import {RoomProvider} from "./Context.js";
import Favorites from "./Components/Pages/Favorites/Favorites";
import Cart from "./Components/Pages/ShoppingCart/ShoppingCart";
import Checkout from "./Components/Pages/Checkout/Checkout";
import {FaAngleUp} from "react-icons/fa";
import SignIn from "./Components/Pages/SignIn/SignIn";
import Footer from "./Components/Footer/Footer";

class MainApp extends React.Component{
        state={
            currentPageWidth: 0
        }
    render(){
        window.addEventListener("scroll", () =>{ //gets the current height
            let  scroll = document.body.scrollTop || document.documentElement.scrollTop;
            let arrowUp = document.querySelector(".arrow-up-btn").style;
            scroll >= 1000 ? arrowUp.display="flex" : arrowUp.display = "none";
        });

        window.addEventListener("resize", ()=>{ //gets the current width
            this.setState({
                currentPageWidth: window.innerWidth || document.documentElement.clientWidth
            })
            // console.log(window.innerWidth, document.documentElement.clientWidth , document.body.clientWidth);
        });
        
        return(
            <main id="mainsite">
                <section>
                <Header />
                <Switch >
                    <Route exact path="/"  component={Home}/>
                    <Route exact path="/rooms" component={Rooms}/>
                    <Route exact path="/rooms/:slug" component={SingleRoom}/>
                    <Route exact path="/favs" component={Favorites}/>
                    <Route exact path="/cart" component={Cart}/>
                    <Route exact path="/checkout" component={Checkout}/>
                    <Route exact path="/signin" component={SignIn}/>
                    <Route component={Error}/>
                </Switch>
                <a href="#mainsite" className="arrow-up-btn"><FaAngleUp/></a>
                </section>
                <Footer currentWidth={this.state.currentPageWidth} />
            </main>
        )
    }
}

const mainApp =(
    <RoomProvider>
        <BrowserRouter> 
            <MainApp/>
        </BrowserRouter>
    </RoomProvider>
)
ReactDOM.render( mainApp,
document.getElementById("app")
)
export default MainApp;