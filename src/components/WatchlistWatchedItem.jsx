import React from 'react';

const WatchlistItem = ({film}) => {

    return (
        <>
            <div className="watchlist__item">
                <div className="watchlist__film">
                    <img src={film.poster} alt="" className="watchlist__film--image"/>
                    <div className="watchlist__film--info">
                        <span className="watchlist__film--title">
                            {film.title}
                        </span>
                        <div className="watchlist__film--year">
                            {film.year}
                        </div>
                        <div className="watchlist__function">

                        
                        </div>
                    </div>
                </div>
                <div className="watchlist__rating">
                    {film.ratings}
                </div>
                <div className="watchlist__type">
                    {film.type}
                </div>
            </div>
        </>
    );
}

export default WatchlistItem;
