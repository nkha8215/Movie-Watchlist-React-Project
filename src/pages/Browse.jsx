import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Browse = () => {
    const [films, setFilms] = useState([]);
    const [searchValue, setSearchValue] = useState();

    function onSearch() {
        fetchFilms(searchValue)
    }

    async function fetchFilms(search) {
        const { data } = await axios.get(`https://www.omdbapi.com/?s=${search}&apikey=33132354`)
        const searchResults = data.Search
        setFilms(searchResults)
    }

    useEffect(() => {
        fetchFilms("one piece")
    }, [])

    return (
        <>
            <div className="container films__container">
                <div className="row films__row">
                    <div className="browser__header">
                        <h2 className="browser__header--title">
                            All Films
                        </h2>
                        <div className="film__search">
                            {/* back button */}
                            <div className="film__search--container">
                                <label className="post__search--label">Search your film!</label>
                                <input 
                                    type="text" 
                                    value={searchValue}
                                    onChange={(event) => setSearchValue(event.target.value)}
                                    onKeyPress={(event) => event.key === 'Enter' && onSearch()}
                                />
                                <button onClick={() => onSearch()}>Enter</button>
                            </div>
                        </div>
                        <select id="filter">
                            <option value="" disabled selected>Sort</option>
                        </select>
                    </div>

                    <div className="films">
                        {films ? (films.map((film, index) => (
                            <div className="film" key={index}>
                                <figure className="film__image--wrapper">
                                    <img className="film__image" src={film.Poster} alt="" />
                                </figure>
                                <div className="film__title">
                                    {film.Title}
                                </div>
                                <div className="film__ratings">
                                    {film.Year}
                                </div>
                                <div className="film__type">
                                    Type: {film.Type}
                                </div>
                            </div>
                        ))
                        ) : (
                            <h1>Could not Find What you were looking for</h1>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Browse;
