import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { addContext, GET_DATA } from "../Context/AddContext";

function CityCard({ city }) {
  const { data } = useContext(addContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [cityData, setCityData] = useState([]);

  const handleCardClick = () => {
    const filteredData = data.filter((item) => item.kota === city);
    setCityData(filteredData);
    setModalOpen(true);
  };

  return (
    <>
      <Card className="mb-3" onClick={handleCardClick}>
        <Card.Body>
          <Card.Title>{city}</Card.Title>
        </Card.Body>
      </Card>
      <Modal show={modalOpen} onHide={() => setModalOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Data {city}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cityData.map((item) => (
            <div key={item.id}>
              <h4>
                {item.nama} -- {item.alamat} -- {item.keluhan}
              </h4>
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModalOpen(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function CardData() {
  const { data, dispatch } = useContext(addContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://64400c883dee5b763e2d6c25.mockapi.io/todo");
        dispatch({ type: GET_DATA, payload: response.data });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [dispatch]);

  const uniqueCities = [...new Set(data.map((item) => item.kota))];

  return (
    <>
      <h3>Data Keluhan</h3>
      {uniqueCities.map((city) => (
        <CityCard key={city} city={city} />
      ))}
    </>
  );
}

export default CardData;
