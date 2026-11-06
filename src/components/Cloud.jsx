import React from 'react';

export default function Cloud({ className = '' }) {
  return (
    <svg className={`cloud ${className}`} viewBox="0 0 120 58" aria-hidden="true">
      <path d="M22 48C9 48 3 39 5 29c2-9 10-15 20-14C31-1 54-3 64 12c12-5 27 1 29 15 14-1 23 7 22 17-1 9-9 14-21 14H22Z" />
    </svg>
  );
}
