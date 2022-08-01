import React from 'react';

const FilmSkeleton = () => {


    return (
        <div className="film film-skeleton">
            <figure className="film__image--wrapper film__image--wrapper-skeleton">
                <img className="film__image film__image-skeleton" src="" alt="" />
            </figure>
            <div className="film__description--wrapper film__description--wrapper-skeleton">
                <div className="film__title film__title-skeleton">
                </div>
                <div className="film__ratings film__ratings-skeleton">
                </div>
                <div className="film__type film__type-skeleton">
                </div>
            </div>
        </div>
    );
}

export default FilmSkeleton;
