import Card from './Card';
import classes from './App.module.css';

const App = () => {
  return (
    <div className={classes.card}>
        <Card title="To Do"></Card>
        <Card title="In Progress"></Card>
        <Card title="Testing"></Card>
        <Card title="Completed"></Card>
    </div>
    
  );
}

export default App;
