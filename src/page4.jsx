import React from 'react';
import MemoryPage from './components/MemoryPage.jsx';
import { memoryPages } from './data/pages.js';

export default function Page4() {
  return <MemoryPage page={memoryPages[3]} pageNumber={4} />;
}
