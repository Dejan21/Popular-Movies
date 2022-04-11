import React from "react";
import { Button } from 'react-bootstrap'

const Login = () => {
  return (
    <form>
        <label htmlFor="text">Username</label>
        <br />
        <input type="username" placeholder="username" />
        <br />
        <label htmlFor="text">Password</label>
        <br />
        <input type="password" placeholder="password" />
        <Button className="btn btn-primary">Log In</Button>
    </form>
  );
};

export default Login;
