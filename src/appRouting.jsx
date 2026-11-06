import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import FrontPage from './frontpage.jsx';
import Page1 from './page1.jsx';
import Page2 from './page2.jsx';
import Page3 from './page3.jsx';
import Page4 from './page4.jsx';
import Page5 from './page5.jsx';
import ScrapbookLayout from './components/ScrapbookLayout.jsx';
import WelcomePage from './welcome.jsx';

export function AppRouting() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ScrapbookLayout />}>
          <Route index element={<WelcomePage />} />
          <Route path="frontpage" element={<FrontPage />} />
          <Route path="page1" element={<Page1 />} />
          <Route path="page2" element={<Page2 />} />
          <Route path="page3" element={<Page3 />} />
          <Route path="page4" element={<Page4 />} />
          <Route path="page5" element={<Page5 />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
