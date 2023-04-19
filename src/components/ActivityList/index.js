import "./ActivityList.css";

import ActivityListItem from "../ActivityListItem";

export default function ActivityList({ activities, weather }) {
  return (
    <ul className="activity__list">

    {weather
        ? activities
            .filter((activity) => activity.isForGoodWeather)
            .map((activity) => {
              return <ActivityListItem activity={activity} />;
            })
        : activities
            .filter((activity) => !activity.isForGoodWeather)
            .map((activity) => {
              return <ActivityListItem activity={activity} />;
            })}
    </ul>
  );
}


