import React from 'react';

const FilmDetails = ({film}) => {
    return (
        <>
            <div className="film__detailsElement">
                <div className="film__detailsElement--title">
                    Type
                </div>
                <div className="film__detailsElement--value">
                    {film.Type}
                </div>
            </div>
            <div className="film__detailsElement">
                <div className="film__detailsElement--title">
                    Production
                </div>
                <div className="film__detailsElement--value">
                    {film.Production}
                </div>
            </div>
            <div className="film__detailsElement">
                <div className="film__detailsElement--title">
                    Release Date
                </div>
                <div className="film__detailsElement--value">
                    {film.Year}
                </div>
            </div>
            <div className="film__detailsElement">
                <div className="film__detailsElement--title">
                    Rated
                </div>
                <div className="film__detailsElement--value">
                    {film.Rated}
                </div>
            </div>
        </>
    );
}

export default FilmDetails;
