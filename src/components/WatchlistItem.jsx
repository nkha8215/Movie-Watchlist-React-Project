import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromWatchlist, addToWatched } from '../features/watchlistSlice';

const WatchlistItem = ({film}) => {
    const dispatch = useDispatch();

    const removeWatchlist = () => {
        dispatch(
            removeFromWatchlist(film.id)
        )
    }

    const addWatched = () => {
        dispatch(
            addToWatched(film)
        )
        removeWatchlist()
    }

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
                            <button className="watchlist__film--add" onClick={addWatched}>
                                <span>&#10004; Add to Watched</span>
                            </button>
                            <button className="watchlist__film--remove" onClick={removeWatchlist}>
                                <span>&#10005; Remove</span>
                            </button>
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
