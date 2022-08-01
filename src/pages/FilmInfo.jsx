import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import FilmDetails from "../components/ui/filmDetails";
import Button from "@mui/material/Button";

import { useDispatch } from "react-redux";
import {
  addToWatchlist,
  removeFromWatchlist,
} from "../features/watchlistSlice";

const FilmInfo = () => {
  const [film, setFilm] = useState([]);
  const { id } = useParams();
  const dispatch = useDispatch();

  const addWatchlist = () => {
    dispatch(
      addToWatchlist({
        id: film.imdbID,
        poster: film.Poster,
        title: film.Title,
        year: film.Year,
        ratings: film.imdbRating,
        type: film.Type,
      })
    );
  };

  const removeWatchlist = () => {
    dispatch(removeFromWatchlist(film.imdbID));
  };

  useEffect(() => {
    async function fetchFilmById() {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?i=${id}&apikey=33132354`
      );
      console.log(data);
      setFilm(data);
    }
    fetchFilmById();
  }, []);

  return (
    <>
      <section className="infoPage">
        <div className="cover__overlay">
          <div className="cover__overlay--top"
            style={{backgroundImage: `linear-gradient(to top, rgba(100,100,100,0) 0%,#161616 100%), url(${film.Poster}})`}}
          >
            <div className="container container__top infoPage__container">
              <div className="filmNameGenre__container">
                <h1 className="filmName">{film.Title}</h1>
                <div className="genres">
                  {film.Genre &&
                    film.Genre.split(",").map((genre, index) => (
                      <Link
                        key={index}
                        to={`/browse/${id}`}
                        className="type__genre click"
                      >
                        {genre}
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>

          <div className="cover__overlay--bottom">
            <div className="container infoPage__container">
              <div className="cover__overlay--bottom">
                <div className="cover__overlay--bottomLeft">
                  <figure className="film__poster--wrapper">
                    <img src={film.Poster} alt="" className="film__poster" />
                  </figure>
                  <div className="film__details">
                    <FilmDetails film={film} />
                  </div>
                </div>

                <div className="cover__overlay--bottomRight">
                  <div className="film__description">{film.Plot}</div>
                  <div className="watchlist__button--wrapper">
                    <Button
                      variant="contained"
                      className="watchlist__button"
                      onClick={addWatchlist}
                    >
                      Add to Watchlist
                    </Button>
                    <Button onClick={removeWatchlist}>remove</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FilmInfo;
