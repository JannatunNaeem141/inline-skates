import React from 'react';
import HomeReviews from '../HomeReviews/HomeReviews';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='banner-section'>
                <div className='banner-text'>
                    <h1 className='first-text'>Inline Skates</h1>
                    <h1 className='second-text'>Get Out and Move</h1>
                    <p>There are several disciplines of inline skating, and with that there are a few different styles of inline skates available. The four main types of inline skates are going to be fitness, race, recreation, and urban. There are also aggressive and inline hockey skates, but we talk about them in other guides. You will notice inline skates are going to be available for men*, women, girls and boys. Many think that the skates are simply aesthetically different, but the skates are actually designed to fit the specific foot shape for men, women, boys or girls.</p>
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