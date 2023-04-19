import "./ActivityList.css";
import ActivityListItem from "../ActivityListItem";

export default function ActivityList({ activities }) {
  return (
    <ul className="">
      {activities.map((activity) => {
        return <ActivityListItem activity={activity}></ActivityListItem>;
      })}
    </ul>
  );
}

// const isGoodWeather = true;

// const badWeatherActivity = activities.filter(
//   (activity) => !activity.isForGoodWeather
// );
// const goodWeatherActivity = activities.filter(
//   (activity) => activity.isForGoodWeather
// );
