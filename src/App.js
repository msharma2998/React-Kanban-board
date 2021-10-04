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

    const startColumn = enteredcolumns[source.droppableId];
    const endColumn = enteredcolumns[destination.droppableId];

    if(startColumn === endColumn)
    {
      const newTasks = Array.from(enteredcolumns[source.droppableId].tasks);
      newTasks.splice(source.index, 1);
      newTasks.splice(destination.index, 0, tasks.find( ({id}) => id === draggableId)); 
      const newcolumn = {
        ...startColumn,
        tasks:newTasks
      };
  
      setEnteredcolumns(prevState =>{ 
        return {
          ...prevState,
        [source.droppableId] : newcolumn
        } 
      });

      return;
    }
   
    const startnewTasks = Array.from(enteredcolumns[source.droppableId].tasks);
    const endnewTasks = Array.from(enteredcolumns[destination.droppableId].tasks);

    startnewTasks.splice(source.index, 1);
    endnewTasks.splice(destination.index, 0, tasks.find( ({id}) => id === draggableId)); 

    const startnewcolumn = {
      ...startColumn,
      tasks:startnewTasks
    };
    const endnewcolumn = {
      ...endColumn,
      tasks:endnewTasks
    };

    setEnteredcolumns(prevState =>{ 
      return {
        ...prevState,
      [source.droppableId] : startnewcolumn,
      [destination.droppableId] : endnewcolumn,
      } 
    });
  }

  return (
      <DragDropContext onDragEnd={hanldeOnDragEnd}>
        <div className={classes.card}>
          {Object.entries(enteredcolumns).map(([id, column]) => {
            return(
              <Card key={id} id={id} title={column.title} tasks={column.tasks}></Card>
            )
          })}
        </div>
      </DragDropContext>
  );
}

export default App;
