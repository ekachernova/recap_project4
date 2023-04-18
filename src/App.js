import "./App.css";
import Form from "./components/Form";
import ActivityList from "./components/ActivityList";
import { useState } from "react";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";

function App() {
  // const [activities, setActivities] = useState([]);
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  // rendering activities
  function handleAddActivity(newActivity) {
    setActivities([{ id: uid(), ...newActivity }, ...activities]);
    console.log("activities:", activities);
  }
  return (
    <div className="App">
      <header className="App-header">Weather APP</header>
      <Form onAddActivity={handleAddActivity} />
      <ActivityList activities={activities}></ActivityList>
    </div>
  );
}

export default App;
