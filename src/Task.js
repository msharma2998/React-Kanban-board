import React from "react";
import classes from './Task.module.css';
import { Draggable } from "react-beautiful-dnd";

const Task = (props) => {
    return(
        <Draggable draggableId = {props.id} index = {props.index}>
        {(provided) => (
            <div className={classes.task}
                 ref ={provided.innerRef}
                 {...provided.draggableProps}
                 {...provided.dragHandleProps}
            >{props.title}</div>
        )}
        </Draggable>
        
    )
};

export default Task;