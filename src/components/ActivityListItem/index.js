import "./ActivityListItem.css";

export default function ActivityListItem({ activity,onDeleteActivity}) {
  function handleClick() {
    onDeleteActivity(activity);
  }
  
  return (
    
    <>   
    <li className="activity__list--item" key={activity.id}>
    {activity.name}
  </li>
    <button className="activity__list__item--button" onClick={handleClick}>x</button>
  </>
 
  );
}
