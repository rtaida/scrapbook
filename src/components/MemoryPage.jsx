import React, { useEffect, useState } from 'react';
import BookSpread from './BookSpread.jsx';
import PhotoPrint from './PhotoPrint.jsx';

export default function MemoryPage({ page, pageNumber }) {
  const [frontPhoto, setFrontPhoto] = useState(0);
  const previousPath = pageNumber === 1 ? '/frontpage' : `/page${pageNumber - 1}`;
  const nextPath = pageNumber < 5 ? `/page${pageNumber + 1}` : undefined;

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const intervalId = window.setInterval(() => {
      setFrontPhoto((current) => (current === 0 ? 1 : 0));
    }, 4800);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <BookSpread previousPath={previousPath} nextPath={nextPath}>
      <div
        className="memory-page"
        style={{ '--page-background': `url('/scrapbook-paper-${pageNumber}.png')` }}
      >
        <div className={`memory-collage memory-collage--${page.photoLayout} memory-collage--page-${pageNumber} memory-collage--photo-swap ${frontPhoto === 1 ? 'memory-collage--second-front' : ''}`}>
          <span className="collage-label">LITTLE MOMENTS</span>
          <PhotoPrint photo={page.photos[0]} className="polaroid--first" />
          <PhotoPrint photo={page.photos[1]} className="polaroid--second" />
          <span className="collage-heart" aria-hidden="true">♡</span>
          <span className="collage-spark" aria-hidden="true">✳</span>
        </div>
        <div className="memory-paper">
          <div className="paper-tape paper-tape--small" />
          <h2>{page.title}</h2>
          <span className="tiny-divider tiny-divider--left"><i /> ♥ <i /></span>
          <p className="page-note">{page.note}</p>
          <div className="page-rule" />
          <span className="handwritten page-signature">{page.doodle}</span>
        </div>
      </div>
    </BookSpread>
  );
}
