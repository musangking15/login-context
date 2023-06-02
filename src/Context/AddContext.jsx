import React from "react";
import { useReducer } from "react";
import { createContext } from "react";

const intialState = {
  data: [],
};

export const addContext = createContext(intialState);

export const ADD_DATA = "ADD_DATA";
export const GET_DATA = "GET_DATA";

const dataReducer = (state, action) => {
  switch (action.type) {
    case ADD_DATA:
      return {
        ...state,
        data: [...state.data, action.payload],
      };

    case GET_DATA:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};

function AddProvider({ children }) {
  const [state, dispatch] = useReducer(dataReducer, intialState);

  return (
    <>
      <addContext.Provider value={{ data: state.data, dispatch }}>{children}</addContext.Provider>
    </>
  );
}

export default AddProvider;
