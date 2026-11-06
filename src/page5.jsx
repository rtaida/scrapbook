import React from 'react';
import MemoryPage from './components/MemoryPage.jsx';
import { memoryPages } from './data/pages.js';

export default function Page5() {
  return <MemoryPage page={memoryPages[4]} pageNumber={5} />;
}
