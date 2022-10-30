/* eslint-disable default-case */
import { useEffect, useReducer } from "react";

const initialState = {
  citiesList: JSON.parse(localStorage.getItem("citiesLisr")) || [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CITY': {
      const newState = {
        ...state,
        citiesList: [...state.citiesList, action.payload],
      }
      return newState;
    }

    case 'DELETE_CITY': {
      const oldArray = state.citiesList;
      const newArray = oldArray.filter(el => el !== action.payload);
      return { ...state, citiesList: newArray };
    }
    default:
      return initialState;
  }
};

export const useCitiesList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { citiesList } = state;
  useEffect(() => {
    localStorage.setItem("citiesList", JSON.stringify(citiesList));
  }, [citiesList]);
  return [citiesList, dispatch];
};
