import React from "react";
import Task from "./Task";
import classes from './Card.module.css';
import { Droppable } from "react-beautiful-dnd";

const Card = (props) => {
    return(
        <div className={classes.card}>
            <p className={classes.title}>{props.title}</p>
            <hr className={classes.linebreak}></hr>
            <Droppable droppableId = {props.id}>
            {(provided) => (
                <div className={classes.wrapperdiv}
                    ref = {provided.innerRef}
                    {...provided.droppableProps} 
                >
                {
                    props.tasks.length!==0 ?
                    props.tasks.map((task, index) => {
                        return(
                            <Task key= {task.id} id={task.id} title={task.title} index={index}></Task>
                        )
                    }):null
                }
                {provided.placeholder}
                </div>
            )}
            </Droppable>
        </div>
    )
};

export default Card;