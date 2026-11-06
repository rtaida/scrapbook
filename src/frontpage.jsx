import React from 'react';
import BookSpread from './components/BookSpread.jsx';
import { coverPage } from './data/pages.js';

export default function FrontPage() {
  return (
    <BookSpread pageClass="book-spread--cover" nextPath="/page1">
      <div className="memory-page memory-page--cover">
        <div className="cover-photo" role="img" aria-label="A golden sunset behind a tree">
          <div className="cover-photo-wash" />
          <span className="cover-sticker cover-sticker--heart">♥</span>
          <span className="cover-sticker cover-sticker--sparkle">✳</span>
          <div className="cover-photo-caption">where our hearts feel at home</div>
        </div>
        <div className="cover-paper">
          <div className="paper-tape" />
          <h1>{coverPage.title}</h1>
          <span className="tiny-divider"><i /> ♥ <i /></span>
          <p className="cover-note">{coverPage.note}</p>
          <span className="handwritten cover-signature">{coverPage.doodle}</span>
          <span className="corner-heart" aria-hidden="true">♡</span>
        </div>
      </div>
    </BookSpread>
  );
}
