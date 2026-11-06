import React from 'react';
import MemoryPage from './components/MemoryPage.jsx';
import { memoryPages } from './data/pages.js';

export default function Page1() {
  return <MemoryPage page={memoryPages[0]} pageNumber={1} />;
}
