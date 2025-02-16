import React from 'react';
import { Link } from 'react-router-dom';


const NotFound = () => {
  return (
    <div>
            <Link to="/">Back to Homepage</Link>
            <br />
            <p>404 Not Found</p>
            <p>The page you are looking for doesn't exists</p>

    </div>
  )
}

export default NotFound;