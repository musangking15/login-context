import { Button } from "react-bootstrap";
import { auth } from "../config/firebase";
import DataList from "./DataList";
import FormData from "./FormData";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [showDataList, setShowDataList] = useState(false);

  useEffect(() => {
    const notLogin = auth.onAuthStateChanged((user) => {
      console.log(user);
      if (!user) {
        navigate("/login");
      } else {
        if (user.uid !== "IM48QsyBZ1ZCI3GfniaSD0M5gTq1") {
          setShowDataList(false);
        } else {
          setShowDataList(true);
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
      <FormData />
      <hr />
      {showDataList && <DataList />}
    </>
  );
}

export default Home;
