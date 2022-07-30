import React from 'react';
import circle from '../assets/shapes/circle.svg'
import semiCircle from '../assets/shapes/semi circle.svg'
import squiggly from '../assets/shapes/squiggly.svg'
import triangle from '../assets/shapes/triangle.svg'

const Home = () => {

    return (
        <>
            <header className="header">
                <div className="header__content">
                    <h1 className="title">Weclome!</h1>
                    <h1 className="title blue">Movie Watchlist</h1>
                    <p className="header__para">
                        An <b className="blue">interactive Watchlist Webpage</b> that allows you to search for news movies and shows to add to your watchlist. 
                        <br />
                        how to get <b className="blue click">started.</b>
                    </p>
                </div>
            </header>
            
            <div className="shapes__container">
                <img src={semiCircle} className="shape shape--0" alt="" />
                <img src={circle} className="shape shape--1" alt="" />
                <img src={squiggly} className="shape shape--2" alt="" />
                <img src={circle} className="shape shape--3" alt="" />
                <img src={triangle} className="shape shape--4" alt="" />
                <img src={circle} className="shape shape--5" alt="" />
            </div>

        </>
    );
}

export default Home;
