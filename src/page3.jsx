import React from 'react';
import MemoryPage from './components/MemoryPage.jsx';
import { memoryPages } from './data/pages.js';

export default function Page3() {
  return <MemoryPage page={memoryPages[2]} pageNumber={3} />;
}
