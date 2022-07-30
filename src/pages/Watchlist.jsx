import React from 'react';
import { watchlist, watched } from '../features/watchlistSlice'
import { useSelector } from 'react-redux'
import WatchlistItem from '../components/WatchlistItem';
import WatchlistWatchedItem from '../components/WatchlistWatchedItem';
import Empty from '../components/ui/Empty';

const Watchlist = () => {
    const films = useSelector(watchlist);
    console.log(films)
    const filmsWatched = useSelector(watched)
    console.log(filmsWatched)

    return (
        <div id="watchlist__body">
            <main id="watchlist__main">
                <div className="watchlist__container">
                    <div className="row">
                        <div className="film__selected--top">
                            <h2 className='watchlist__title'>Watchlist</h2>
                        </div>
                        <div className="watchlist">
                            <div className="watchlist__header">
                                <div className="watchlist__film">
                                    Film
                                </div>
                                <div className="watchlist__rating">
                                    Ratings
                                </div>
                                <div className="watchlist__type">
                                    Type
                                </div>
                            </div>
                            <div className="watchlist__body">

                                {films.length > 0 ? (
                                    films.map((film, index) => (
                                    <WatchlistItem
                                        key={index}
                                        film={film}
                                    />
                                    ))
                                ) : (
                                    <div>
                                        <br />
                                        <br />
                                        <Empty description={"Currently No Items In Watchlist"}/>
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="film__selected--top">
                            <h2 className='watchlist__title'>Watched</h2>
                        </div>
                        <div className="watchlist">
                            <div className="watchlist__header">
                                <div className="watchlist__film">
                                    Film
                                </div>
                                <div className="watchlist__rating">
                                    Ratings
                                </div>
                                <div className="watchlist__type">
                                    Type
                                </div>
                            </div>
                            <div className="watchlist__body">

                                {filmsWatched.length > 0 ? (
                                    filmsWatched.map((film, index) => (
                                    <WatchlistWatchedItem 
                                        key={index}
                                        film={film}
                                    />
                                    ))
                                ) : (
                                    <div>
                                        <br />
                                        <br />
                                        <Empty description={"You Have Not Currently Watched Anything"}/>
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>    
    
    );
}

export default Watchlist;
