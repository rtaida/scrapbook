import React from 'react';
import MemoryPage from './components/MemoryPage.jsx';
import { memoryPages } from './data/pages.js';

export default function Page2() {
  return <MemoryPage page={memoryPages[1]} pageNumber={2} />;
}
