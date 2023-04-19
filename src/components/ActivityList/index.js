import "./ActivityList.css";

import ActivityListItem from "../ActivityListItem";

export default function ActivityList({ activities, weather,key }) {
  return (
    <ul className="activity__list">
    {console.log(weather.isGoodWeather)}
    {weather.isGoodWeather
        ? activities
            .filter((activity) => activity.isForGoodWeather)
            .map((activity) => {
              return <ActivityListItem activity={activity} key={key} />;
            })
        : activities
            .filter((activity) => !activity.isForGoodWeather)
            .map((activity) => {
              return <ActivityListItem activity={activity} key={key} />;
            })}
    </ul>
  );
}


