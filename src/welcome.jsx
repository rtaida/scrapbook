import React from 'react';
import { Link } from 'react-router-dom';

export default function WelcomePage() {
  return (
    <section className="welcome-content" aria-label="Open the scrapbook">
      <h1 className="welcome-heading">In case I fail to show how much I love you my baby, look at this book.</h1>
      <Link className="closed-book" to="/frontpage" aria-label="Open the scrapbook">
        <span className="closed-book-ribbon" aria-hidden="true">♥</span>
        <span className="closed-book-title">A little Book<br />of my Love<br />for You</span>
        <span className="closed-book-caption">our story, in little pieces</span>
      </Link>
      <span className="welcome-prompt">TAP THE BOOK TO OPEN <span aria-hidden="true">↑</span></span>
    </section>
  );
}
