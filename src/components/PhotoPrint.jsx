import React from 'react';

export default function PhotoPrint({ photo, className = '' }) {
  return (
    <figure className={`polaroid ${className}`}>
      <div className="photo-window" style={{ '--photo-ratio': photo.ratio }}>
        <img className="page-photo" src={`/pages_img/${photo.src}`} alt={photo.caption} />
      </div>
      <figcaption className="photo-caption">{photo.caption}</figcaption>
    </figure>
  );
}
