import React, {Component} from "react";
import items from "./data.js";

const RoomContext = React.createContext();

class RoomProvider extends Component{
    state = {
        items: [],
        sortedRooms: [],
        featuredRooms: [],
        favRooms: [],
        cartRooms:[],
        loading: true,
        type: "all",
        capacity: 1,
        price: 0,
        maxPrice: 0,
        minPrice: 0,
        maxSize: 0,
        minSize: 0,
        breakfast: false,
        pets: false,
        notificationMSG: {message: "hello", mode:"success"},
        showNotification: false,
        total:[]
    };
    componentDidMount(){
        console.log("component did mount");
        let rooms = this.formatData(items);
        // console.log(rooms, this.state.featuredRooms);
        let FTRooms = rooms.filter(room => room.featured === true); //Filters rooms to extact the featured ones
        let maxPrice = Math.max(...rooms.map(item => item.price)); //extracts the highest price room from the data
        let maxSize = Math.max(...rooms.map(item => item.size));    //extracts the largest size room from the data
        this.setState({
            items: rooms,
            sortedRooms: rooms,
            featuredRooms: FTRooms,
            loading: false,
            price:maxPrice,
            maxPrice,
            maxSize
        });
    }
    handleChanges= event =>{
        const name = event.target.name;
        const target = event.target;
        const value = target.type === "checkbox" ?
        target.checked : target.value;
        this.setState({
            [name]: value
        },this.filterRooms); //also triggers filterRooms as a callback function with evey input change
    }
    addARoom = (location, id)=>{
        
        if(location === "favRooms"){
                var sortedRoomsIndex , featuredRoomsIndex;
                this.state.sortedRooms.find((item, i) =>{
                    sortedRoomsIndex = i;
                   return item.id === id;
                });
                let checkFeatRooms = this.state.featuredRooms.find((item, i) =>{
                    featuredRoomsIndex = i;
                    return item.id === id;
                });

            let sortedRoomsCopy = JSON.parse(JSON.stringify(this.state.sortedRooms));
            sortedRoomsCopy[sortedRoomsIndex].liked = !this.state.sortedRooms.find(item => item.id === id).liked;
            if( this.state.sortedRooms.find(item => item.id === id).liked){
                this.notification(`Removed from ${location === "favRooms" ? "favorites.":"reservation box."}`,"warning"); 
            }else{
                this.notification(`Added to ${location === "favRooms" ? "favorites.":"reservation box."}`,"success"); 
            }
            if(checkFeatRooms){
                let featuredRoomsCopy = JSON.parse(JSON.stringify(this.state.featuredRooms));
                featuredRoomsCopy[featuredRoomsIndex].liked = !this.state.featuredRooms.find(item => item.id === id).liked;
                this.setState({
                    featuredRooms: featuredRoomsCopy
                })
            }
            
            this.setState({
                sortedRooms: sortedRoomsCopy
            })
            // console.log(this.state.sortedRooms, checkFeatRooms);
            this.state[location].unshift(id);
        }
        if(location === "cartRooms"){
            this.notification(`Added to ${location === "favRooms" ?"favorites.":"reservation box."}`,"success"); 
            this.state[location].unshift(id);
        }
        
        
        setTimeout(()=>{
            this.setState({//clears any repeated elements from the array (if the user clicks on an item multiple times)
                [location]: [...new Set(this.state[location])] 
            })
            // console.log(this.state[location]);
        },500);

        
    }
   
    filterRooms= ()=>{
        let {  //destructuring elements from the state object
            items,
            type,
            sortedRooms,
            capacity,
            pets,
            breakfast,
            maxPrice,
            minPrice,
            maxSize,
            minSize,
            price
        } = this.state;
        
        let tempRooms = [...items];
            // console.log(tempRooms);
        // let mappedRooms = tempRooms.map(item =>{
        //     return item.fields;
        // });
        capacity = parseInt(capacity); //converts it into a number value
        price = parseInt(price);

        //filter by type
        if( type !== "all"){ //only filters then any other option than "all" is selected otherwise all elements will be normally included
            tempRooms = tempRooms.filter(room => {
                return room.type === type //returns only rooms that matches the seleted type
            });
        }
        //filter by the capacity
        if(capacity !== 1){
            tempRooms = tempRooms.filter(room =>{
            return room.capacity >= capacity;
        })
        }
        //filter by room price
        if(price > minPrice && price < maxPrice){
            tempRooms = tempRooms.filter(room => room.price <= price)
        }
        //filter by the size
            tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize);
        //filter by pets
        if(pets){
            tempRooms = tempRooms.filter(room => room.pets === true);
        }
        //filter by breakfast
        if(breakfast){
            tempRooms = tempRooms.filter(room => room.breakfast === true);
        }
      
        
        //   console.log(tempRooms);

        //Change state
        this.setState({ //sortedRooms array will be adjusted according to the filter
            sortedRooms: tempRooms
        });
    }
    
    formatData(items){
        let tempData = items.map((item, index) =>{
            let id = item.sys.id;
            let images = item.fields.images.map(image=> image.fields.file.url);
                let room = {
                    ...item.fields,
                    images: images, //overrides the original images property
                    id: id // you could also type them like this let room = {...item.fields, images, id}
                }
                return room; //returns room
            })
            return tempData; //returns tempData
    }

    getRoom = slug => { //gets the specific room that is being clicked on
        // console.log(this.state.items)
        let tempRoom = [...this.state.items]; 
       const selectedRoom = tempRoom.find(item => item.slug === slug);
       return selectedRoom;
    }
    notification = (message ,mode)=>{
        this.setState({
            showNotification: true,
            notificationMSG: {message:message, mode:mode}
        })
        let timeout = setTimeout(()=>{
           this.setState({
                showNotification: false,
               notificationMSG: {message: "", mode: ""}
           }) 
           clearTimeout(timeout);
        },3000);
    }
    handleTotal = (val,id) =>{

        // let tempTotalIds = ([...new Set(this.state.total.map(item => {
        //     return item[id];
        // }))]);
        // let tempIds = [];
       
        // let matchedIds = this.state.items.find(item => item.id === tempTotalId[i]);
        // tempIds = [...new Set([this.state.total.map(item => item[])])];
        // for(let i = 0; i<tempTotalIds.length;i++){
        //    for(const key in this.state.total){
        //         console.log(this.state.total[key]);
        //     };
        // }
        this.state.total.unshift({val,id});
        //  console.log(tempTotalIds);
    }
    render(){
        
        return( //passes the altered state to other components
           <RoomContext.Provider
           value={{
               ...this.state,
               getRoom: this.getRoom,
               handleChanges: this.handleChanges,
               addToCart: this.addARoom,
               handleTotal: this.handleTotal,
               notification: this.notification,
               notificationMSG: this.state.notificationMSG,
               showNotification: this.state.showNotification
               }}>  
                {this.props.children} 
            </RoomContext.Provider>
        )
    }
}
const RoomConsumer = RoomContext.Consumer;
export{
    RoomProvider,
    RoomContext,
    RoomConsumer
}