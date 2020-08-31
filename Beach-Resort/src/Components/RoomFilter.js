import React, {useContext} from "react";
import {RoomContext} from "../Context";

const RoomFilter=(props)=>{
    const context = useContext(RoomContext); //the third way to use context in React
    
    const { //destrucuring elements from the context object
        handleChanges,
        type,
        capacity,
        price,
        maxPrice,
        minPrice,
        maxSize,
        minSize,
        breakfast,
        pets
    } = context;

    const getUnique=(items,value)=>{ 
        return [...new Set(items.map(item => {
            return item[value]
        }))]; //gets items that are repeated only once
    }
    //get unique type items (returns an array)
    let types = getUnique(props.rooms,'type');
    //add all to the options
    types = ["all",...types];
    //map to JSX
    types = types.map((item, index)=> { //creates options dynamically according to data and after removing any repetition 
        return(<option value={item} key={index} >{item}</option>);
    })
    //same thing for guests
    let guests = getUnique(props.rooms,"capacity");
    guests = guests.map((item, index) =>{
        return (<option value={item} key={index}> {item}</option>)
    });
    //price
    // console.log(types)
    return(
        <React.Fragment>
            <div className="container filter-box">
                <h4>Filter</h4>
                <form className="filter-form">
                    <div className="mb-2">
                        {/* Type */}
                        <label htmlFor="type">Type</label><br/>
                        <select name="type" id="type" value={type}  className="form-input" onChange={handleChanges}>
                            {types}
                        </select>
                    </div>
                    {/* Guests */}
                    <div className="">
                        <label htmlFor="capacity">Guests</label><br/>
                        <select name="capacity" id="capacity" value={capacity} className="form-input" onChange={handleChanges}>
                            {guests}
                        </select>
                    </div>
                    {/* Price */}
                    <div>
                        <label htmlFor="price">Room Price ${price}</label> <br/>
                        <input type="range" value={price} min={minPrice} max={maxPrice} className="form-input" onChange={handleChanges} id="price" name="price"/>
                    </div>
                    {/* Size */}
                    <div className="form-input">
                        <label htmlFor="size">Room Size</label><br/>
                        {/* min */}
                        <input id="size-min" className="mr-2 mb-2" type="number" name="minSize" value={minSize} min="0" max={maxSize} onChange={handleChanges} />
                        {/* max */}
                        <input className="mr-2 mb-2" id="size-max" type="number" name="maxSize" min={minSize} max={maxSize} value={maxSize} onChange={handleChanges}/>

                    </div>
                    {/* Pets & Breakfast */}
                    <div className="form-input d-block">
                        <div>
                            <label htmlFor="pets" className="mr-2 mb-2">Pets</label>
                            <input type="checkbox" checked={pets} id="pets" name="pets" value={pets} onChange={handleChanges}/>
                        </div>
                        <div>
                            <label htmlFor="breakfast" className="mr-2 mb-2">Breakfast</label>
                            <input type="checkbox" checked={breakfast} value={breakfast} onChange={handleChanges} name="breakfast"  id="breakfast"/>
                        </div>
                    </div>
                </form>
            </div>
        </React.Fragment>
    )
}
export default RoomFilter;