import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Typography, TextField, Button } from "@mui/material";
import styled from "styled-components";

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Header = styled(Typography)`
  text-align: center;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled(TextField)`
  margin-bottom: 20px;
`;

const Error = styled(Typography)`
  margin-bottom: 20px;
  color: #f44336;
`;

const LoginButton = styled(Button)`
  margin-top: 20px;
  background-color: #4caf50; /* Change this to the desired color */
  color: #ffffff; /* Text color */
  &:hover {
    background-color: #388e3c; /* Hover color */
  }
`;

const SignupLink = styled(Typography)`
  text-align: center;
`;

const DEFAULT_ADMIN_USERNAME = "admin";
const DEFAULT_ADMIN_PASSWORD = "admin123";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    //validation
    if (!username.trim() || !password.trim()) {
      setError("Username and password are required.");
    } else if (username.trim() === DEFAULT_ADMIN_USERNAME && password.trim() === DEFAULT_ADMIN_PASSWORD) {
     
      window.location.href = "/add";
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <Container>
      <Header variant="h4">Login</Header>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Input
          label="Username"
          variant="outlined"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <Error variant="body2">{error}</Error>}
        <LoginButton variant="contained" onClick={handleLogin}>
          Login
        </LoginButton>
      </Form>
      <SignupLink variant="body1">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </SignupLink>
    </Container>
  );
};

export default Login;
