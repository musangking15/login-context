import { Button } from "react-bootstrap";
import { auth } from "../config/firebase";
// import DataList from "./DataList";
import FormData from "./FormData";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardData from "./CardData";

function Home() {
  const navigate = useNavigate();
  const [showCardData, setShowCardData] = useState(false);
  const [showFormData, setShowFormData] = useState(false);

  useEffect(() => {
    const notLogin = auth.onAuthStateChanged((user) => {
      console.log(user);
      if (!user) {
        navigate("/login");
      } else {
        if (user.email !== "haikalfajari156@gmail.com") {
          setShowCardData(false);
          setShowFormData(true);
        } else {
          setShowCardData(true);
          setShowFormData(false);
        }
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
      {showFormData && <FormData />}
      <hr />
      {showCardData && <CardData />}
    </>
  );
}

export default Home;
