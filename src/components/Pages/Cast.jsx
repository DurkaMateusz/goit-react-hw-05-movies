import { useParams } from 'react-router-dom';
import useFetchApi from '../FetchApi/FetchApi';
import styles from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=c49109de954741c007bf763c44eb8f9c`;
  const { data, isLoading, error } = useFetchApi(url);
  return (
    <div>
      {error && <div>{error.message}</div>}
      {isLoading && <div>Loading...</div>}
      {data &&
        (data.cast.length > 0 ? (
          <div>
            <ul className={styles.castList}>
              {data.cast.map(cast => (
                <li key={cast.id}>
                  <h3>{cast.name}</h3>
                  <p>{cast.character}</p>
                  {cast.profile_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w200${cast.profile_path}`}
                      alt=""
                    />
                  ) : (
                    <p>No photo</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div>No cast yet</div>
        ))}
    </div>
  );
};

export default Cast;