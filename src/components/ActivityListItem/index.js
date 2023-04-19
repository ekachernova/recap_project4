import "./ActivityListItem.css";

export default function ActivityListItem({ activity, onDeleteActivity }) {
  function handleClick() {
    onDeleteActivity(activity);
  }

  return (
    <div className="activity__list--wrapper">
      <div className="item-name-wrapper">
        <li className="activity__list--item" key={activity.id}>
          {activity.name}
        </li>
      </div>
      <div className="delete-button-container">
        <button className="activity__list__item--button" onClick={handleClick}>
          x
        </button>
      </div>
    </div>
  );
}
