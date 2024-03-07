import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import styles from './App.module.css'

const Home = lazy(() => import('./Pages/Home'));
const Movies = lazy(() => import('./Pages/Movies'));
const MovieDetails = lazy(() => import('./Pages/MovieDetails'));

const Cast = lazy(() => import('./Pages/Cast'));
const Reviews = lazy(() => import('./Pages/Reviews'));
function App() {
  return (
    <>
      <BrowserRouter basename="/goit-react-hw-05-movies">
        <header className={styles.header}>
          <nav className={styles.nav}>
            <NavLink className={styles.navbar} to="/">Home</NavLink>
            <NavLink className={styles.navbar} to="/movies">Movies</NavLink>
          </nav>
        </header>
        <Suspense fallback={<div>Loading... </div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId/*" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;