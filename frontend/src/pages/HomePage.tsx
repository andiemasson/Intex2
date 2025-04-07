import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

// Sample movie images for carousel
const movieImages = [
  {
    id: 1,
    src: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
    title: 'The Matrix',
  },
  {
    id: 2,
    src: 'https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg',
    title: 'Titanic',
  },
  {
    id: 3,
    src: 'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
    title: 'The Lord of the Rings',
  },
  {
    id: 4,
    src: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
    title: 'The Dark Knight',
  },
  {
    id: 6,
    src: 'https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
    title: 'Forrest Gump',
  },
  {
    id: 8,
    src: 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
    title: 'Interstellar',
  },
];

const HomePage: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollLeft = useCallback(() => {
    if (scrollPosition > 0) {
      setScrollPosition((prevPos) => prevPos - 1);
    } else {
      // Loop back to end
      setScrollPosition(movieImages.length - 4);
    }
  }, [scrollPosition]);

  const scrollRight = useCallback(() => {
    if (scrollPosition < movieImages.length - 4) {
      setScrollPosition((prevPos) => prevPos + 1);
    } else {
      // Loop back to beginning
      setScrollPosition(0);
    }
  }, [scrollPosition]);

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      scrollRight();
    }, 3000);

    return () => clearInterval(interval);
  }, [scrollRight]);

  return (
    <div className="home-page">
      <div className="hero">
        <h1>Welcome to CineNiche</h1>
        <p>
          Discover curated, hard-to-find content from cult classics to
          international cinema and indie films.
        </p>
        <Link to="/movies" className="btn-primary">
          Browse Movies
        </Link>
      </div>

      <div className="movie-carousel-container">
        <h2>Featured Films</h2>
        <div className="movie-carousel">
          <button className="carousel-btn prev-btn" onClick={scrollLeft}>
            &lt;
          </button>
          <div className="carousel-track">
            {movieImages
              .slice(scrollPosition, scrollPosition + 4)
              .map((movie) => (
                <div key={movie.id} className="carousel-item">
                  <img src={movie.src} alt={movie.title} />
                  <p>{movie.title}</p>
                </div>
              ))}
          </div>
          <button className="carousel-btn next-btn" onClick={scrollRight}>
            &gt;
          </button>
        </div>
      </div>

      <div className="features">
        <div className="feature">
          <h3>Curated Selection</h3>
          <p>
            Our catalog spans cult classics, international cinema, indie films,
            and niche documentaries.
          </p>
        </div>

        <div className="feature">
          <h3>Exclusive Content</h3>
          <p>Access films unavailable on larger mainstream platforms.</p>
        </div>

        <div className="feature">
          <h3>Passionate Community</h3>
          <p>
            Connect with fellow film enthusiasts who share your passion for
            unique cinema.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
