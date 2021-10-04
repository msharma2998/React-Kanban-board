import React, { useState } from 'react';
import Card from './Card';
import { tasks, columns } from './repo/data';
import classes from './App.module.css';
import { DragDropContext } from 'react-beautiful-dnd';

const App = () => {
  const[enteredcolumns, setEnteredcolumns] = useState(columns);

  const hanldeOnDragEnd = result => {
    const { destination, source, draggableId } = result;

    if(!destination)
      return;

    if(
      destination.draggableId === source.draggableId &&
      destination.index === source.index
    )
      return;

    const column = enteredcolumns[source.droppableId];
    const newTasks = Array.from(enteredcolumns[source.droppableId].tasks);
    newTasks.splice(source.index, 1);
    newTasks.splice(destination.index, 0, tasks.find( ({id}) => id === draggableId)); 
    const newcolumn = {
      ...column,
      tasks:newTasks
    };

    setEnteredcolumns(prevState =>{ 
      return {
        ...prevState,
      [source.droppableId] : newcolumn
      } 
    });

  }

  return (
    <div className={classes.card}>
      <DragDropContext onDragEnd={hanldeOnDragEnd}>
        {Object.entries(enteredcolumns).map(([id, column]) => {
          return(
            <Card key={id} id={id} title={column.title} tasks={column.tasks}></Card>
          )
        })}
      </DragDropContext>
    </div>
    
  );
}

export default App;
