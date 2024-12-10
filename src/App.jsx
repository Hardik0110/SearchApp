import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AuthorPage } from './pages/AuthorPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/author/:id" element={<AuthorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;