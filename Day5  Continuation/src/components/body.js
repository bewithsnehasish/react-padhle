import { useState } from "react";
import { restaurantList } from "../constants";
import RestrauntCard from "./RestrauntCard";
import { useState } from "react";

function filterData(searchText, restaurants) {
    if (searchText.trim() === "") {
        return restaurants;
    } else {
        const filteredData = restaurants.filter((restaurant) =>
            restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
        return filteredData;
    }
}

const Body = () =>{
    const [restaurants, setRestaurants] = useState(restaurantList);
    // searchText is a loal state object
    const [searchText, setSearchText] = useState(""); //To create state variable
    return(
        <>
        <div className="search-container">
            <input type="text" className="search-input" placeholder="Search" value={searchText} onChange={(e) => {
                // e.target.value = whatever value you will be putting in the search
                setSearchText(e.target.value);
            }}/>
            <button className="search-btn" onClick={() => {
                //need to filter the date
                const data = filterData(searchText, restaurants);
                // update the state = restaurants
                setRestaurants(data);
            }}>Search</button>
        </div>
        <div className="restaurant-list">
            {
                restaurants.map((restaurant) => {
                    return (
                    <RestrauntCard {...restaurant.info} key={restaurant.info.id}/>
                    );
                })}
        </div>
        </>
    )
}

export default Body ;
