import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import pages
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import MovieDetailPage from './pages/MovieDetailPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PrivacyPage from './pages/PrivacyPage';

// Import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:id" element={<MovieDetailPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
