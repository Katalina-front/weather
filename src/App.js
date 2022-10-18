import { useState } from "react";
import "./App.css";
import { CardList } from "./Card-list";
import { Input } from "./Input";

function App() {
  const  [citiesList, setCitiesList] = useState([]);
  return (
    <div className="Main">
      <Input  setCitiesList={setCitiesList} />
      <CardList citiesList={citiesList}/>
    </div>
  );
}

export default App;
