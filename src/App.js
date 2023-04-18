
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Weather APP
      </header>
      <form>
        <h2>Add new Activity</h2>

        <div className = "form__input">
        <label forHtml = "name">Name:</label>
        <input name="name" type ="text"></input>
        </div>

        <div className = "form__checkbox">
        <label forHtml = "checkbox">Good-weather activity:</label>
        <input name="checkbox" type="checkbox"></input>
        </div>
        
        <div className="form__button-wrapper">
        <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
