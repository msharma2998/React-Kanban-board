import React from "react";
import classes from './Card.module.css';

const Card = (props) => {
    return(
        <div className={classes.card}>
            <p className={classes.title}>{props.title}</p>
            <hr></hr>
        </div>
    )
};

export default Card;