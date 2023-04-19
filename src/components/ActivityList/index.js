import "./ActivityList.css";
import ActivityListItem from "../ActivityListItem";

export default function ActivityList({ activities, isGoodWeather }) {
  return (
    <ul className="activity__list">

    {isGoodWeather
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


