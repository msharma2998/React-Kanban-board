import React from "react";
import Task from "./Task";
import classes from './Card.module.css';

const Card = (props) => {
    return(
        <div className={classes.card}>
            <p className={classes.title}>{props.title}</p>
            <hr className={classes.linebreak}></hr>
            {
                props.tasks.length!=0 ?
                props.tasks.map((task) => {
                    return(
                        <Task title={task.title}></Task>
                    )
                }):null
            }
        </div>
    )
};

export default Card;