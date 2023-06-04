import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { addContext, ADD_DATA } from "../Context/AddContext";

function FormData() {
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [kota, setKota] = useState("");
  const [keluhan, setKeluhan] = useState("");
  const { dispatch } = useContext(addContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newData = {
      nama: nama,
      alamat: alamat,
      kota: kota,
      keluhan: keluhan,
    };

    try {
      const response = await axios.post("https://64400c883dee5b763e2d6c25.mockapi.io/todo", newData);

      dispatch({ type: ADD_DATA, payload: response.data });

      setNama("");
      setAlamat("");
      setKota("");
      setKeluhan("");
      alert("Data keluhan anda sudah terkirim");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div>FormData</div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nama" id="nama" placeholder="masukkan nama" value={nama} onChange={(e) => setNama(e.target.value)} />
        <input type="text" name="alamat" id="alamat" placeholder="masukkan alamat" value={alamat} onChange={(e) => setAlamat(e.target.value)} />
        <select name="kota" id="kota" value={kota} onChange={(e) => setKota(e.target.value)}>
          <option value="">Pilih</option>
          <option value="jakarta">Jakarta</option>
          <option value="bandung">Bandung</option>
          <option value="semarang">Semarang</option>
          <option value="jember">Jember</option>
        </select>
        <input type="text" name="keluhan" id="keluhan" placeholder="masukkan keluhan" value={keluhan} onChange={(e) => setKeluhan(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default FormData;
