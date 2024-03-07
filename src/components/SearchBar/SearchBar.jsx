import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchMoviesByQuery } from '../FetchApi/movietmdb';


const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetchMoviesByQuery(query);
        setMovies(response.data.results);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch movies');
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(query);
  };

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <h1>Search Bar</h1>
      <form className={form} onSubmit={handleSubmit}>
        <button type="submit" className={button}>
          Submit
        </button>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          className={input}
          placeholder="Search for movies..."
        />
      </form>
      {error && <div>{error}</div>}
      {loading && <div>Loading...</div>}
      <ul className={resultsList}>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;