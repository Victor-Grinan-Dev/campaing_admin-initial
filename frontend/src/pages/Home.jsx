import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <p>
            Homepage        
            <span> | </span> 
            <Link to="/login">Login</Link>
            <span> | </span>
            <Link to="/register">Register</Link></p>

    </div>

  )
}

export default Home;