import "./App.css";
import { CardList } from "./Card-list/card-list";
import { useCitiesList } from "./hooks/useCitiesList";
import { Input } from "./Input/input";

function App() {
  const  [citiesList, dispatch] = useCitiesList();
  return (
    <div className="Main">
      <Input  dispatch={dispatch} />
      <CardList citiesList={citiesList} dispatch={dispatch} />
    </div>
  );
}

export default App;
