import { Button } from "react-bootstrap";
import { auth } from "../config/firebase";
import DataList from "./DataList";
import FormData from "./FormData";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const notLogin = auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/login");
      }
    });

    notLogin();
  }, []);

  const handleLogout = () => {
    auth.signOut().then(() => {
      navigate("/login");
    });
  };

  return (
    <>
      <Button onClick={handleLogout}>Logout</Button>
      <h1>Form Keluhan</h1>
      <FormData />
      <hr />
      <DataList />
    </>
  );
}

export default Home;
