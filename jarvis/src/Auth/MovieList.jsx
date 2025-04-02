import { useState } from "react";
import moviesData from "./moviesData"; // Import movie data
import "./MovieList.css"; 

export default function MovieList() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleBookNow = (movie) => {
    setSelectedMovie(movie);
    alert(`Booking confirmed for "${movie.title}" 🎉`);
  };

  return (
    <div className="container">
      <h2 className="title">🎬 Now Showing</h2>
      <div className="movie-list">
        {moviesData.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <img src={movie.poster} alt={movie.title} className="movie-poster" />
            <h3 className="movie-title">{movie.title}</h3>
            <p className="movie-description">{movie.description}</p>
            <button className="book-btn" onClick={() => handleBookNow(movie)}>
              Book Now
            </button>
          </div>
        ))}
      </div>
      {selectedMovie && (
        <div className="booking-message">
          You booked: <strong>{selectedMovie.title}</strong>
        </div>
      )}
    </div>
  );
}
