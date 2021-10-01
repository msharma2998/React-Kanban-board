import Card from './Card';
import { tasks, columns } from './repo/data';
import classes from './App.module.css';
import React, { useState } from 'react';

const App = () => {
  const[enteredcolumns, setEnteredcolumns] = useState(columns);

  return (
    <div className={classes.card}>
        {Object.entries(enteredcolumns).map(([id, column]) => {
          return(
            <Card title={column.title} tasks={column.tasks}></Card>
          )
        })}
    </div>
    
  );
}

export default App;
