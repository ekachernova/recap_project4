import "./App.css";
import Form from "./components/Form";
import ActivityList from "./components/ActivityList";
// import ActivityListItem from "./components/ActivityListItem";
// import { useState } from "react";
import { useEffect, useState } from "react";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";


function App() {
  // const [activities, setActivities] = useState([]);
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const [weather,setWeather] = useState(true)


  useEffect(() =>{
    async function weatherFetch() {
      const response = await fetch("https://example-apis.vercel.app/api/weather");
      const weather = await response.json();
      setWeather(weather);

    }
    weatherFetch();
    console.log("weather: ",weather);
  }, [])

  // rendering activities
  function handleAddActivity(newActivity) {
    setActivities([{ id: uid(), ...newActivity }, ...activities]);
    console.log("activities:", activities);
  }

  
  
  return (
    <div className="App">
      <header className="App-header">Weather APP</header>
      <Form onAddActivity={handleAddActivity} />
      {weather ? 
      <>      
      <div>{weather.condition}</div>
      <div>{weather.temperature} °C</div> 
      <h2>The weather is awesome! Go outside and:</h2>
      </> 
      : <>
      <div>{weather.condition}</div>
      <div>{weather.temperature} °C</div> 
      <h2>Bad weather outside! Here's what you can do now:</h2>
      </>
      }
      <ActivityList activities={activities} weather={weather}>
        </ActivityList>
    </div>
  );
}

export default App;
