import Card from './Card';
import Task from './Task';
import classes from './App.module.css';

const App = () => {
  return (
    <div className={classes.card}>
        <Card title="To Do">
          <Task title="Document Requiremnets"></Task>
          <Task title="Design the UI"></Task>
          <Task title="Design the database"></Task>
          <Task title="Start implementation of the design features"></Task>
        </Card>
        <Card title="In Progress"></Card>
        <Card title="Testing"></Card>
        <Card title="Completed"></Card>
    </div>
    
  );
}

export default App;
