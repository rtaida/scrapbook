import React, { useEffect, useState } from 'react';

const carouselImages = [
  'photo_2026-11-06_15-54-22.jpg',
  'photo_2026-11-06_15-54-30.jpg',
  'photo_2026-11-06_15-54-34.jpg',
  'photo_2026-11-06_15-54-37.jpg',
  'photo_2026-11-06_15-54-40.jpg',
  'photo_2026-11-06_15-54-43.jpg',
  'photo_2026-11-06_15-54-46.jpg',
  'photo_2026-11-06_15-54-49.jpg',
  'photo_2026-11-06_15-54-52.jpg',
  'photo_2026-11-06_15-54-54.jpg',
  'photo_2026-11-06_15-54-57.jpg',
  'photo_2026-11-06_15-55-01.jpg',
  'photo_2026-11-06_15-55-04.jpg',
  'photo_2026-11-06_15-55-07.jpg',
];

export default function PhotoCarousel() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrentImage((current) => (current + 1) % carouselImages.length);
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div className="photo-carousel" aria-hidden="true">
      {carouselImages.map((image, index) => (
        <img
          className={`carousel-image ${index === currentImage ? 'carousel-image--visible' : ''}`}
          key={image}
          src={`/carousel/${image}`}
          alt=""
        />
      ))}
    </div>
  );
}
