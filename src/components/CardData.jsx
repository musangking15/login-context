import { useContext, useState } from "react";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { addContext } from "../Context/AddContext";
import { ListGroup } from "react-bootstrap";

function CardKota({ kota }) {
  const { data } = useContext(addContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [dataKota, setDataKota] = useState([]);

  const handleCardClick = () => {
    const filterData = data.filter((item) => item.kota === kota);
    setDataKota(filterData);
    setModalOpen(true);
  };

  return (
    <>
      <Card style={{ width: "18rem" }} className="mb-3" onClick={handleCardClick}>
        <ListGroup>
          <ListGroup.Item style={{ cursor: "pointer" }}>{kota}</ListGroup.Item>
        </ListGroup>
      </Card>
      <Modal show={modalOpen} onHide={() => setModalOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Data Keluhan Kota {kota}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {dataKota.map((item) => (
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
  const { data } = useContext(addContext);
  const filterKota = [...new Set(data.map((item) => item.kota))];

  return (
    <>
      {filterKota.map((kota) => (
        <CardKota key={kota} kota={kota} />
      ))}
    </>
  );
}

export default CardData;
