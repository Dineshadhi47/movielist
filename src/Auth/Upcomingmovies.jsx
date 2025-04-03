import React from "react";
import "./Upcomingmovies.css";

const UpcomingMovies = () => {
  const movies = [
    { id: 1, title: "MS DHONI UNTOLD STORY", release_date: "2025-05-10", poster: "ms dhoni.jpg" },
    { id: 2, title: "JANA NAYAGAN", release_date: "2025-06-15", poster: "jana nayagan.jpg" },
    { id: 3, title: "RETRO", release_date: "2025-07-20", poster: "retro.jpg" }
  ];
    return (
      <div className="upcoming-movies">
        <h2>Upcoming Movies</h2>
        <ul className="movie-list">
          {movies.map((movie) => (
            <li key={movie.id} className="movie-item">
              <img
                src={movie.poster}
                alt={movie.title}
                className="movie-poster"
              />
              <h3 className="movie-title">{movie.title}</h3>
              <p className="release-date">Release Date: {movie.release_date}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  

export default UpcomingMovies;
