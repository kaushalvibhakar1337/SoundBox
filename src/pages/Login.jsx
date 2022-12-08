import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";

import {
  Button, Box, Divider, Text
} from '@chakra-ui/react';
import GoogleButton from "react-google-button";
import "./Login.css"
import { useUserAuth } from "../context/UserAuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/discover");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/discover");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Box className="MainDivLogin">
        <Box className="MainDivLoginChild">
          <Box width="70%" textAlign="center">
            <Text className="mb-3" fontSize="20px" fontWeight="bold" sx={{ color: 'white' }}>Login to SoundBox</Text>
            {error && <Alert variant="danger">{error}</Alert>}

            <Form onSubmit={handleSubmit} width="100%">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Enter your Email address"
                  onChange={(e) => setEmail(e.target.value)}

                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Enter your Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Button type="Submit" width="100%" marginTop="10px" marginBottom="10px">
                Log In
              </Button>

            </Form>
            <Divider />
            <Box w="100%" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '15px', paddingBottom: '15px' }}>
              <GoogleButton

                type="dark"
                onClick={handleGoogleSignIn}


              />
            </Box>
            <Box >
              <Text sx={{ color: 'white' }}>Don't have an account? <Link to="/signup">Sign up</Link></Text>

            </Box>
          </Box>
        </Box>
      </Box>

    </>
  );
};

export default Login;