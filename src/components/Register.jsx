import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Lakukan pengecekan dan tindakan sesuai kebutuhan
    console.log("Email:", email);
    console.log("Password:", password);

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        sendEmailVerification(auth.currentUser)
          .then(() => {
            alert("Mohon verifikasi email anda");
            navigate("/login");
          })
          .catch((error) => {
            console.log("Error sending email verification:", error);
          });
      })
      .catch((error) => {
        console.log("Error creating user:", error);
      });
  };

  return (
    <Container>
      <h1 className="text-center">Halaman Register</h1>
      <Row className="justify-content-center">
        <Col md={6}>
          <Form onSubmit={handleRegister}>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Masukkan email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Masukkan password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
              Register
            </Button>
          </Form>
          <p className="text-center mt-3">
            Sudah punya akun? <Link to={"/login"}>Login di sini</Link>.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterForm;
