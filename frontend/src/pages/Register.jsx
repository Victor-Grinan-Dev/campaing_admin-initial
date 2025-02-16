import React from 'react';
import Form from '../components/form';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div >
        <Link to="/">Back to Homepage</Link>
        <Form route={"api/user/register/"} method="register"/>
        <Link to="/login">Login instead</Link>
    </div>
  )
}

export default Register;