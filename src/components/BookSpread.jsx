import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function BookSpread({ children, pageClass = '', nextPath, previousPath }) {
  const navigate = useNavigate();

  const turnForward = () => {
    if (nextPath) navigate(nextPath);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight' && nextPath) navigate(nextPath);
      if (event.key === 'ArrowLeft' && previousPath) navigate(previousPath);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate, nextPath, previousPath]);

  return (
    <section className="book-stage" aria-label="Interactive love scrapbook">
      <div className="book-shadow" aria-hidden="true" />
      <div
        className={`book-spread ${pageClass}`}
        role="group"
        tabIndex={0}
        aria-label={nextPath ? 'Scrapbook page. Click to turn forward.' : 'Scrapbook is open to the last page.'}
        onClick={turnForward}
        onKeyDown={(event) => {
          if (event.target !== event.currentTarget) return;
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            turnForward();
          }
        }}
      >
        {children}
        {previousPath && (
          <button
            className="previous-page"
            type="button"
            aria-label="Previous page"
            onClick={(event) => {
              event.stopPropagation();
              navigate(previousPath);
            }}
          >
            <span aria-hidden="true">←</span> Previous page
          </button>
        )}
        <div className="book-spine" aria-hidden="true" />
      </div>
    </section>
  );
}
