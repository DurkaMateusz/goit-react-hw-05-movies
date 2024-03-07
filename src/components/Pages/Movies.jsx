import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchMoviesByQuery } from '../FetchApi/movietmdb';
import styles from './Movies.module.css';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();
    setError(null);
    try {
      const response = await fetchMoviesByQuery(query);
      setMovies(response.data.results);
    } catch (error) {
      setError(error);
      console.error('Error fetching movies:', error);
    }
    setQuery('');
  };

  const handleChange = e => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.searchForm}>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search movies"
          className={styles.searchInput}
        />
        <button type="submit" className={styles.searchButton}>
          Search
        </button>
      </form>
      {error && <div className={styles.errorMessage}>Error: {error.message}</div>}
      <ul className={styles.moviesList}>
        {movies.map(movie => (
          <li key={movie.id} className={styles.movieItem}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;