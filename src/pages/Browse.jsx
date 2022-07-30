import React, { useEffect, useState } from "react";
import axios from "axios";
import Film from "../components/Film";
import Empty from "../components/ui/Empty";
import FilmSkeleton from "../components/FilmSkeleton";

const Browse = () => {
  const [films, setFilms] = useState([]);
  const [searchValue, setSearchValue] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    fetchFilms("one piece");
  }, []);

  async function fetchFilms(search, type) {
    setLoading(true);
    const { data } = await axios.get(
      `https://www.omdbapi.com/?s=${search}&type=${
        type ? type : ""
      }&apikey=33132354`
    );
    const searchResults = data.Search;
    setFilms(searchResults);
    setLoading(false);
  }

  function onSearch(type) {
    fetchFilms(searchValue, type);
  }

  return (
    <>
      <div className="container films__container">
        <div className="row films__row">
          <div className="browser__header">
            <h2 className="browser__header--title">All Films</h2>
            <div className="film__search">
              {/* back button */}
              <div className="film__search--container">
                <input
                  type="text"
                  value={searchValue}
                  onChange={(event) => setSearchValue(event.target.value)}
                  onKeyPress={(event) => event.key === "Enter" && onSearch()}
                  placeholder="Search your film"
                  className="film__search--input"
                />
                <button
                  className="film__search--button click"
                  onClick={() => onSearch()}
                >
                  Enter
                </button>
              </div>
            </div>
            <select
              id="filter"
              onChange={(event) => onSearch(event.target.value)}
              defaultValue={"DEFAULT"}
            >
              <option value="DEFAULT" disabled>
                Type:
              </option>
              <option value="movie">Movie</option>
              <option value="series">TV Series</option>
            </select>
          </div>

          <div className="films">
            {/* {new Array(10).fill(0).map((_, index) => (
                <FilmSkeleton />
            ))} */}
            {loading ? (
                new Array(10).fill(0).map((_, index) => (
                <FilmSkeleton key={index} />
                ))
            ) : films ? (
              films.map((film) => (
                <Film
                  key={film.imdbID}
                  title={film.Title}
                  year={film.Year}
                  id={film.imdbID}
                  type={film.Type}
                  poster={film.Poster}
                />
              ))
            ) : (
              <Empty
                description={"Sorry! Nothing Matched Your Search Results"}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Browse;
