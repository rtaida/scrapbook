import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Cloud from './Cloud.jsx';
import PhotoCarousel from './PhotoCarousel.jsx';

export default function ScrapbookLayout() {
  return (
    <main className="scene">
      <PhotoCarousel />
      <div className="sky-glow" aria-hidden="true" />
      <Cloud className="cloud--top-left" />
      <Cloud className="cloud--top-right" />
      <span className="sky-heart sky-heart--one" aria-hidden="true">♡</span>
      <span className="sky-heart sky-heart--two" aria-hidden="true">♥</span>
      <span className="sky-heart sky-heart--three" aria-hidden="true">♡</span>

      <header className="topbar">
        <Link className="wordmark" to="/" aria-label="Our little story, welcome">
          <span className="wordmark-heart">♥</span>
          <span>OUR LITTLE STORY</span>
        </Link>
        <span className="topbar-note">a keepsake made with love</span>
      </header>

      <Outlet />
      <div className="landscape" aria-hidden="true"><div className="landscape-line" /></div>
    </main>
  );
}
