import React from 'react';
import Form from '../components/form';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
        <Link to="/">Back to Homepage</Link>
        <Form route="api/token/" method="login"/>
        <Link to="/register">Register instead</Link>
    </div>
  )
}

export default Login;