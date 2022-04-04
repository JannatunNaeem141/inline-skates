import React from 'react';
import './Review.css'

const Review = (props) => {
    const { name, img, description } = props.review;
    return (
        <div className='review'>
            <div className='avatar'>
                <img src={img} alt="" />
            </div>
            <h4>{name}</h4>
            <p>{description}</p>
        </div>
    );
};

export default Review;