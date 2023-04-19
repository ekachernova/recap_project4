import "./ActivityListItem.css";

export default function ActivityListItem({ activity }) {
  return (
    <li className="activity__list--item" key={activity.id}>
      {activity.name}
    </li>
  );
}
