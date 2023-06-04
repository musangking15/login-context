import { Route, Routes } from "react-router-dom";
import CardData from "./components/CardData";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/CardData" element={<CardData />} /> */}
      </Routes>
    </>
  );
}

export default App;
