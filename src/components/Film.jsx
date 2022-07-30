import React from 'react';
import { Link } from 'react-router-dom'

const Film = ({id, poster, title, year, type }) => {


    return (
        <div className="film">
            <Link to={`/browse/${id}`}>
                <figure className="film__image--wrapper">
                    <img className="film__image" src={poster} alt="" />
                </figure>
            </Link>
            <div className="film__description--wrapper">
                <Link to={`/browse/${id}`}>
                    <div className="film__title">
                        {title}
                    </div>
                </Link>
                <div className="film__ratings">
                    {year}
                </div>
                <div className="film__type">
                    Type: {type}
                </div>
            </div>
        </div>
    );
}

export default Film;
