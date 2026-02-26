import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/movies?limit=5")
      .then((res) => res.json())
      .then((data) => {
        console.log("🟢 Films reçus :", data);
        setMovies(data);
      })
      .catch((err) => {
        console.error("❌ Erreur de chargement :", err);
      });
  }, []);

  return (
    <div className="container">
      <h1>Films</h1>
      <div className="grid">
        {movies.map((movie, index) => (
          <div key={index} className="card">
            <img src={`http://127.0.0.1:8000${movie.image_url}`} alt={movie.title} />
            <div className="card-content">
              <h2>{movie.title}</h2>
              <p className="meta"><strong>Réalisateur :</strong> {movie.director}</p>
              <p className="desc">{movie.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
