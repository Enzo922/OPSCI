import './App.css';
import { movies } from './data/movies';
import MovieCard from './components/MovieCard';

function App() {
  return (
    <div>
      <header className="header">
        <h1>Catalogue de films</h1>
        <p>Interface React (locale) — prête à être connectée à une API</p>
      </header>

      <main className="container">
        <div className="grid">
          {movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
