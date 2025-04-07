import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Movie type definition
interface Movie {
  id: number;
  title: string;
  imageUrl: string;
  genre: string;
  year: number;
}

// Sample movie data (would be fetched from API in real app)
const SAMPLE_MOVIES: Movie[] = [
  {
    id: 1,
    title: 'The Seventh Seal',
    imageUrl: 'https://via.placeholder.com/300x450?text=Movie+1',
    genre: 'Drama',
    year: 1957,
  },
  {
    id: 2,
    title: 'Eraserhead',
    imageUrl: 'https://via.placeholder.com/300x450?text=Movie+2',
    genre: 'Experimental',
    year: 1977,
  },
  {
    id: 3,
    title: 'Persona',
    imageUrl: 'https://via.placeholder.com/300x450?text=Movie+3',
    genre: 'Drama',
    year: 1966,
  },
  {
    id: 4,
    title: 'Stalker',
    imageUrl: 'https://via.placeholder.com/300x450?text=Movie+4',
    genre: 'Sci-Fi',
    year: 1979,
  },
  {
    id: 5,
    title: 'El Topo',
    imageUrl: 'https://via.placeholder.com/300x450?text=Movie+5',
    genre: 'Western',
    year: 1970,
  },
  {
    id: 6,
    title: 'Holy Mountain',
    imageUrl: 'https://via.placeholder.com/300x450?text=Movie+6',
    genre: 'Surreal',
    year: 1973,
  },
  {
    id: 7,
    title: 'Rashomon',
    imageUrl: 'https://via.placeholder.com/300x450?text=Movie+7',
    genre: 'Drama',
    year: 1950,
  },
  {
    id: 8,
    title: 'Häxan',
    imageUrl: 'https://via.placeholder.com/300x450?text=Movie+8',
    genre: 'Horror',
    year: 1922,
  },
  {
    id: 9,
    title: 'Videodrome',
    imageUrl: 'https://via.placeholder.com/300x450?text=Movie+9',
    genre: 'Horror',
    year: 1983,
  },
  {
    id: 10,
    title: 'Wings of Desire',
    imageUrl: 'https://via.placeholder.com/300x450?text=Movie+10',
    genre: 'Fantasy',
    year: 1987,
  },
];

// Get unique genres from movies array
const getGenres = (movies: Movie[]): string[] => {
  const genres = movies.map((movie) => movie.genre);
  return Array.from(new Set(genres));
};

const MoviesPage: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [genres, setGenres] = useState<string[]>([]);
  const [visibleCount, setVisibleCount] = useState(6);

  // Initialize with sample data
  useEffect(() => {
    // In real app, this would fetch from an API
    setMovies(SAMPLE_MOVIES);
    setFilteredMovies(SAMPLE_MOVIES);
    setGenres(getGenres(SAMPLE_MOVIES));
  }, []);

  // Apply filters when search or genre changes
  useEffect(() => {
    let results = movies;

    // Apply genre filter
    if (selectedGenre) {
      results = results.filter((movie) => movie.genre === selectedGenre);
    }

    // Apply search filter
    if (searchTerm) {
      results = results.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredMovies(results);
  }, [movies, searchTerm, selectedGenre]);

  // Handle scroll to load more
  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, filteredMovies.length));
  };

  return (
    <div className="movies-page">
      <h1>Browse Movies</h1>

      <div className="filters">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search by title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="genre-filter">
          <select
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
          >
            <option value="">All Genres</option>
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="movie-grid">
        {filteredMovies.slice(0, visibleCount).map((movie) => (
          <div key={movie.id} className="movie-card">
            <Link to={`/movies/${movie.id}`}>
              <img src={movie.imageUrl} alt={movie.title} />
              <div className="movie-info">
                <h3>{movie.title}</h3>
                <div className="movie-details">
                  <span>{movie.year}</span>
                  <span>{movie.genre}</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {visibleCount < filteredMovies.length && (
        <div className="load-more">
          <button onClick={handleLoadMore} className="btn-secondary">
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default MoviesPage;
