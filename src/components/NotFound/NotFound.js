import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='not-found'>
            <div className='not-found-text'>
                <h1>404</h1>
                <h2>Oops! Page not found</h2>
                <p>Sorry, the page you are looking for is not found. Please, make sure you have typed the current URL</p>
            </div>
        </div>
    );
};

export default NotFound;