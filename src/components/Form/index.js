
export default function Form({onAddActivity}) {
    // rendering activities
    function handleAddActivity() {

    }
    
    // get the data from the form
    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
    
        if (event.target.elements.isForGoodWeather.checked) {
            console.log("is checked");
        }
        // onAddActivity(data);
        console.log(data);
        console.log(event.target.isForGoodWeather.checked);
        event.target.reset();
        event.target.elements.name.focus();
        
       
    }
    return (
        <form onSubmit={handleSubmit}>
        <h2>Add new Activity</h2>

        <div className = "form__input">
        <label forHTML = "name">Name:</label>
        <input name="name" type ="text"></input>
        </div>

        <div className = "form__checkbox">
        <label forHTML = "isForGoodWeather">Good-weather activity:</label>
        <input name="isForGoodWeather" type="checkbox"></input>
        </div>
        
        <div className="form__button-wrapper">
        <button type="submit">Submit</button>
        </div>
      </form>

    )
}