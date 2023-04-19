import "./App.css";
import Form from "./components/Form";
import ActivityList from "./components/ActivityList";
// import ActivityListItem from "./components/ActivityListItem";
// import { useState } from "react";
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

  const isGoodWeather = true
  
  return (
    <div className="App">
      <header className="App-header">Weather APP</header>
      <Form onAddActivity={handleAddActivity} />
      {isGoodWeather ? <h2>The weather is awesome! Go outside and:</h2> : <h2>Bad weather outside! Here's what you can do now:</h2>}
      <ActivityList activities={activities} isGoodWeather={activities.isGoodWeather}>
        {/* <ActivityListItem /> */}
        </ActivityList>
    </div>
  );
}

export default App;
