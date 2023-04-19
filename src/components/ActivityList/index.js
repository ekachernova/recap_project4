import "./ActivityList.css";

import ActivityListItem from "../ActivityListItem";

export default function ActivityList({ activities, weather,key,onDeleteActivity }) {
  return (
    <ul className="activity__list">
    {console.log(weather.isGoodWeather)}
    {weather.isGoodWeather
        ? activities
            .filter((activity) => activity.isForGoodWeather)
            .map((activity) => {
              return <ActivityListItem activity={activity} key={key} onDeleteActivity={onDeleteActivity} />;
            })
        : activities
            .filter((activity) => !activity.isForGoodWeather)
            .map((activity) => {
              return <ActivityListItem activity={activity} key={key} onDeleteActivity={onDeleteActivity}/>;
            })}
    </ul>
  );
}


