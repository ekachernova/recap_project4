import "./ActivityListItem.css";

export default function ActivityListItem({ activity }) {
  return (
    <li className="" key={activity.id}>
      {activity.name}
    </li>
  );
}
