import "./App.css";
import { CardList } from "./Card-list/card-list";
import { useCitiesList } from "./hooks/useCitiesList";
import { Input } from "./Input/input";

function App() {
  const  [state, dispatch] = useCitiesList();
  const {inputValue, citiesList, editingCity } = state;
  return (
    <div className="Main">
      <Input  dispatch={dispatch} inputValue={inputValue} editingCity={editingCity} />
      <CardList citiesList={citiesList} dispatch={dispatch} />
    </div>
  );
}

export default App;
