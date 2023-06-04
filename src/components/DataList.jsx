import React, { useEffect, useContext } from "react";
import axios from "axios";
import { addContext, GET_DATA } from "../Context/AddContext";
import CardData from "./CardData";

function DataList() {
  const { dispatch } = useContext(addContext);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("https://64400c883dee5b763e2d6c25.mockapi.io/todo");
        dispatch({ type: GET_DATA, payload: response.data });
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, [dispatch]);

  return (
    <>
      <h3>Data Keluhan</h3>
      <CardData />
    </>
  );
}

export default DataList;
