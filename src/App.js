
import './App.css';
import Form from './components/Form';
import { useState } from 'react';
import { uid } from 'uid';

function App() {
  const [activities,setActivities] = useState([]);
 
 // rendering activities
 function handleAddActivity(newActivity) {
  setActivities([{id:uid(),...newActivity},...activities]);


 }
  return (
    <div className="App">
      <header className="App-header">
        Weather APP
      </header>
      <Form onAddActivity={handleAddActivity}/>
    
    </div>
  );
}

export default App;
