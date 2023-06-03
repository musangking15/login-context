import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);

    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        if (response.user.emailVerified) {
          navigate("/home");
        } else {
          alert("verifikasi email terlebih dahulu");
        }
      })
      .catch((error) => {
        console.log("Error creating user:", error);
      });
  };

  return (
    <Container>
      <h1 className="text-center">Halaman Login</h1>
      <Row className="justify-content-center">
        <Col md={6}>
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Masukkan email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Masukkan password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
              Login
            </Button>
          </Form>
          <p className="text-center mt-3">
            Belum punya akun? <Link to={"/register"}>Daftar di sini</Link>.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
