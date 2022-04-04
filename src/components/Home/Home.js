import React from 'react';
import HomeReviews from '../HomeReviews/HomeReviews';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='banner-section'>
                <div className='banner-text'>
                    <h1 className='first-text'>Inline Skates</h1>
                    <h1 className='second-text'>Get out and move</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia impedit at amet velit ex sunt sit consequatur, natus doloribus. Reiciendis voluptate hic cupiditate error omnis, laboriosam deleniti facere quisquam sed voluptatum esse necessitatibus perspiciatis dolores debitis laborum commodi alias. Ea totam facilis dicta necessitatibus nihil cupiditate, perspiciatis possimus officia iste?</p>
                    <button className='banner-btn'>Live demo</button>
                </div>
                <div>
                    <img src="https://www.inercia.com/media/catalog/product/cache/3/image/800x800/444c2d39b70eef4bd4be784a84c4e942/s/e/seba_e3_80_negro_1_1.jpg" alt="" />
                </div>
            </div>
            <div>
                <HomeReviews></HomeReviews>
            </div>
        </div>
    );
};

export default Home;