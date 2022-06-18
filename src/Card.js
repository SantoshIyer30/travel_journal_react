import React from "react";
import location from "./loc.png";


function Card(props){
    console.log(props.id);
    return(
        <div className="card">
            <img src ={props.image} className="card-image" alt="" />
            <div className="details">
                <div className="location">
                    <img src = {location} className="location-logo" alt=""/>
                    <p className="place">{props.location}</p>
                    <p className="google-link"> View on Google Maps </p>
                </div>
                <h2 className="title">{props.title}</h2>
                <p className="date">{props.date}</p>
                <p className="description">{props.description}</p>
            </div>
        </div>
    )
}


export default Card;