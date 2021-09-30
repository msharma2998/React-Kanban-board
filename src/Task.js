import React from "react";
import classes from './Task.module.css';

const Task = (props) => {
    return(
        <div className={classes.task}>{props.title}</div>
    )
};

export default Task;