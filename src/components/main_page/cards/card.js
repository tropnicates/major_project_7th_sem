import React from "react";
import './card.css'

const Card = (props)=>{


    return (
        <a className="card" href={props.address}>

            <span className="card_text">{props.text}</span>

        </a>
    );
}

export default Card;