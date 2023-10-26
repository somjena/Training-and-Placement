import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const LoginPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginForm = styled.form`
  background-color: #767678;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(10, 10, 10, 0.1);
  padding: 3rem;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateY(0);
  transition: transform 0.5s;
  &:hover {
    transform: translateY(-10px);
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: background-color 0.3s;
  &:hover {
    background-color: #f7f7f7;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #004080;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #ff6600;
  }
`;

const Logo = styled.img`
  width: 100px;
  margin-bottom: 1rem;
`;

const RoleSelection = styled.select`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 5px solid #ccc;
  border-radius: 5px;
  transition: background-color 0.3s;
  &:hover {
    background-color: #ff6702;
  }
`;

const ForgotPassword = styled.a`
  text-decoration: none;
  color: #004080;
  margin-top: 10px;
  &:hover {
    text-decoration: underline;
  }
`;

const RegisterLink = styled.a`
  text-decoration: none;
  color: #004080;
  margin-top: 10px;
  &:hover {
    text-decoration: underline;
  }
`;

const roles = ['Student', 'HR', 'PTO'];

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState(roles[0]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Replace with your API endpoint
      const response = await axios.post('https://your-api-url.com/login', {
        username,
        password,
        role: selectedRole, // Include selected role in the request
      });

      // Assuming the API returns a user object
      const user = response.data;

      // Add your logic for handling successful login, e.g., redirecting to the appropriate dashboard
      console.log('Login successful', user);
    } catch (error) {
      // Handle login errors here
      console.error('Login failed', error);
    }
  };

  return (
    <LoginPageContainer>
      <LoginForm onSubmit={handleLogin}>
        <Logo src="/Images/college_logo.png" alt="Logo" />
        <Title>Login</Title>
        <RoleSelection
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
        >
          {roles.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </RoleSelection>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Login</Button>
        <ForgotPassword href="/forgot-password">Forgot Password</ForgotPassword>
        <RegisterLink href="/register">Register Here</RegisterLink>
      </LoginForm>
    </LoginPageContainer>
  );
};

export default Login;