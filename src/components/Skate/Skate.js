import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Skate.css'

const Skate = (props) => {
    const { name, img, price } = props.skate;
    console.log(props)
    return (
        <div className='skate'>
            <img src={img} alt="inline skate" />
            <div className='skate-info'>
                <p className='skate-name'>{name}</p>
                <p>Price: $ {price}</p>
            </div>
            <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Skate;