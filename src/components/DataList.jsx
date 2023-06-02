import axios from "axios";
import { useEffect } from "react";
import { useContext } from "react";
import { addContext, GET_DATA } from "../Context/AddContext";

function DataList() {
  const { data, dispatch } = useContext(addContext);

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

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://64400c883dee5b763e2d6c25.mockapi.io/todo/${id}`);
      const deleteData = data.filter((item) => item.id !== id);
      dispatch({ type: GET_DATA, payload: deleteData });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h3>Data Keluhan</h3>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <h4>
              {item.nama} -- {item.alamat} -- {item.kota} -- {item.keluhan} <button onClick={() => handleDelete(item.id)}>Delete</button>
            </h4>
          </div>
        );
      })}
    </>
  );
}

export default DataList;
