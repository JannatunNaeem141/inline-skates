import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Review.css'

const Review = (props) => {
    const { name, img, description, rating } = props.review;
    return (
        <div className='review'>
            <div className='avatar'>
                <img src={img} alt="" />
            </div>
            <div>
                <h4>{name}</h4>
                <p className='rating-text'>Rating: <span>{rating}</span><FontAwesomeIcon icon={faStar} className='rating'></FontAwesomeIcon></p>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Review;