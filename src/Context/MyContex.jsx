import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const Context = createContext();

function Provider({ children }) {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get("https://64400c883dee5b763e2d6c25.mockapi.io/todo");
    setData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return <Context.Provider value={{ data }}>{children}</Context.Provider>;
}

export default Provider;
