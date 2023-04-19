import "../Form/Form.css";

export default function Form({ onAddActivity }) {
  // get the data from the form
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newActivity = Object.fromEntries(formData);

    onAddActivity(newActivity);
    event.target.reset();
    event.target.elements.name.focus();
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add new Activity</h2>

      <div className="form__input">
        <label htmlFor="name"></label>
        <input name="name" type="text" className="form__input--input"></input>
      </div>

      <div className="form__checkbox">
        <label htmlFor="isForGoodWeather" className="form__checkbox--label">
          Good-weather activity:
        </label>
        <input name="isForGoodWeather" type="checkbox"></input>
      </div>

      <div className="form__button-wrapper">
        <button type="submit" className="form__button">
          Submit
        </button>
      </div>
    </form>
  );
}
