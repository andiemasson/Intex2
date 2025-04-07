import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

// Movie type definition
interface Movie {
  id: number;
  title: string;
  imageUrl: string;
  genre: string;
  year: number;
  director: string;
  description: string;
  rating: number;
  runtime: number;
}

// Sample movie data (would be fetched from API in real app)
const SAMPLE_MOVIES: Movie[] = [
  {
    id: 1,
    title: 'The Seventh Seal',
    imageUrl: 'https://via.placeholder.com/300x450?text=Movie+1',
    genre: 'Drama',
    year: 1957,
    director: 'Ingmar Bergman',
    description:
      'A knight returns to Sweden after the Crusades to find the country ravaged by the Black Death. He encounters Death, who agrees to a chess match. As the fateful game progresses, the knight traverses the countryside and encounters various individuals, including a theatrical troupe of travelling players.',
    rating: 8.1,
    runtime: 96,
  },
  {
    id: 2,
    title: 'Eraserhead',
    imageUrl: 'https://via.placeholder.com/300x450?text=Movie+2',
    genre: 'Experimental',
    year: 1977,
    director: 'David Lynch',
    description:
      'Henry Spencer tries to survive his industrial environment, his angry girlfriend, and the unbearable screams of his newly born mutant child.',
    rating: 7.4,
    runtime: 89,
  },
  {
    id: 3,
    title: 'Persona',
    imageUrl: 'https://via.placeholder.com/300x450?text=Movie+3',
    genre: 'Drama',
    year: 1966,
    director: 'Ingmar Bergman',
    description:
      'A nurse is put in charge of a mute actress and finds that their personae are melding together.',
    rating: 8.1,
    runtime: 83,
  },
  {
    id: 4,
    title: 'Stalker',
    imageUrl: 'https://via.placeholder.com/300x450?text=Movie+4',
    genre: 'Sci-Fi',
    year: 1979,
    director: 'Andrei Tarkovsky',
    description:
      'A guide leads two men through an area known as the Zone to find a room that grants wishes.',
    rating: 8.2,
    runtime: 162,
  },
  {
    id: 5,
    title: 'El Topo',
    imageUrl: 'https://via.placeholder.com/300x450?text=Movie+5',
    genre: 'Western',
    year: 1970,
    director: 'Alejandro Jodorowsky',
    description:
      'A mysterious gunfighter roams the desert with his young son, seeking vengeance on his enemies.',
    rating: 7.5,
    runtime: 125,
  },
];

const MovieDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would be an API call
    setLoading(true);
    setTimeout(() => {
      const foundMovie = SAMPLE_MOVIES.find((m) => m.id === Number(id));
      setMovie(foundMovie || null);
      setLoading(false);
    }, 500); // Simulate API delay
  }, [id]);

  if (loading) {
    return <div className="loading">Loading movie details...</div>;
  }

  if (!movie) {
    return (
      <div className="error-container">
        <h2>Movie Not Found</h2>
        <p>Sorry, we couldn't find the movie you're looking for.</p>
        <Link to="/movies" className="btn-primary">
          Back to Movies
        </Link>
      </div>
    );
  }

  return (
    <div className="movie-detail-page">
      <div className="movie-header">
        <Link to="/movies" className="back-button">
          ← Back to Movies
        </Link>
        <h1>
          {movie.title} ({movie.year})
        </h1>
      </div>

      <div className="movie-content">
        <div className="movie-poster">
          <img src={movie.imageUrl} alt={movie.title} />
        </div>

        <div className="movie-info">
          <div className="movie-metadata">
            <p>
              <strong>Director:</strong> {movie.director}
            </p>
            <p>
              <strong>Genre:</strong> {movie.genre}
            </p>
            <p>
              <strong>Year:</strong> {movie.year}
            </p>
            <p>
              <strong>Runtime:</strong> {movie.runtime} minutes
            </p>
            <p>
              <strong>Rating:</strong> {movie.rating}/10
            </p>
          </div>

          <div className="movie-description">
            <h3>Synopsis</h3>
            <p>{movie.description}</p>
          </div>

          <div className="movie-actions">
            <button className="btn-primary">Add to Watchlist</button>
            <button className="btn-secondary">Write a Review</button>
          </div>
        </div>
      </div>

      <div className="movie-recommendations">
        <h3>You might also like</h3>
        <div className="recommendation-list">
          {SAMPLE_MOVIES.filter((m) => m.id !== movie.id)
            .slice(0, 3)
            .map((recommendedMovie) => (
              <div key={recommendedMovie.id} className="recommendation-card">
                <Link to={`/movies/${recommendedMovie.id}`}>
                  <img
                    src={recommendedMovie.imageUrl}
                    alt={recommendedMovie.title}
                  />
                  <h4>{recommendedMovie.title}</h4>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
