import React from "react";
import "./App.css";
import { CardList } from "./Card-list/card-list";
import { useCitiesList } from "./hooks/useCitiesList";
import { Input } from "./Input/input";

export const GlobalContext = React.createContext();

function App() {
  const [state, dispatch] = useCitiesList();
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      <div className="Main">
        <Input />
        <CardList />
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
