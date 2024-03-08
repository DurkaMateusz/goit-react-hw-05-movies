import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styles from './MovieDetails.module.css';
import { fetchMovieDetails } from '../FetchApi/movietmdb';

const MovieDetails = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetchMovieDetails(movieId);
        setMovieDetails(response.data);
      } catch (error) {
        setError(error);
        console.error('Error fetching movie details:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [movieId]);

  return (
    <div className={styles.container}>
      {error && <div className={styles.error}>{error.message}</div>}
      {isLoading && <div className={styles.loading}>Loading...</div>}
      {!isLoading && movieDetails && (
        <div className={styles.movieDetails}>
          <button onClick={() => navigate(-1)} className={styles.button}>
            Go back
          </button>
          <h1 className={styles.movieTitle}>{movieDetails.title}</h1>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt={movieDetails.title}
            className={styles.movieImage}
          />
          <p className={styles.movieOverview}>{movieDetails.overview}</p>
          <NavLink to="reviews" className={styles.button}>
            Reviews
          </NavLink>
          <NavLink to="cast" className={styles.button}>
            Cast
          </NavLink>
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default MovieDetails;