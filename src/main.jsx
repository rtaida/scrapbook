import React from 'react';
import { createRoot } from 'react-dom/client';
import { AppRouting } from './appRouting.jsx';
import './styles.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouting />
  </React.StrictMode>,
);
