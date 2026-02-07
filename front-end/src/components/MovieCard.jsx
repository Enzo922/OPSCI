function MovieCard({ movie }) {
  return (
    <article className="card">
      <img src={movie.image} alt={movie.title} />
      <div className="card-content">
        <h2>{movie.title}</h2>
        <p className="meta"><strong>Réalisateur :</strong> {movie.director}</p>
        <p className="desc">{movie.description}</p>
      </div>
    </article>
  );
}
export default MovieCard;
