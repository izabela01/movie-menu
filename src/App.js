/* eslint-disable quotes */
/* eslint-disable import/extensions */
import React, { useEffect, useState } from "react";
import { CarouselComp } from "./features/CarouselComp.jsx";
import { getMovies, getMoviesByActors } from "./data/index";

export function App() {
  const [movies, setMovies] = useState(null);
  const [moviesByActor, setMoviesByActor] = useState(null);
  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const moviesData = [name];
    const moviesByActorList = await getMoviesByActors(moviesData);
    if (moviesByActorList) {
      setIsSubmitted(true);
      setMoviesByActor(moviesByActorList);
      console.log(" *** moviesByActorList *** ", moviesByActorList);
    }
  };
  useEffect(async () => {
    const moviesList = await getMovies(
      "https://api.themoviedb.org/3/discover/movie?api_key=7ceb5ca6f93c5d8c993f1f5783f5ccf0&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
    );
    setMovies(moviesList);
  }, []);
  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit} className="form-container">
        <label className="search-label">Search by Actor</label>
        <label className="form-inner-container">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <input type="submit" value="Search" className="submit-button" />
      </form>

      {isSubmitted ? (
        <CarouselComp id="carouselcomp" data={moviesByActor} />
      ) : (
        <CarouselComp id="carouselcomp" data={movies} />
      )}
    </div>
  );
}
