import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import {
  Button, Box, Text
} from '@chakra-ui/react';
import { useUserAuth } from "../context/UserAuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <Box className="MainDivLogin">
        <Box className="MainDivLoginChild">
          <Box width="80%" textAlign="center">
            <div className="p-4 box">
              <Text cclassName="mb-3" fontSize="20px" fontWeight="bold" paddingBottom={"20px"} sx={{ color: 'white' }}>Register to SoundBox</Text>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="Email address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                <div className="d-grid gap-2">
                  <Button type="Submit" width="100%" marginTop="10px" marginBottom="10px">
                    SIGN IN
                  </Button>
                </div>
              </Form>
            </div>
            <Text sx={{ color: 'white' }}>
              Already have an account? <Link to="/">Log In</Link>
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Signup;