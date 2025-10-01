import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home/Index';
import Reviews from './components/Reviews';
import Colleges from './components/Colleges';
import Logout from './components/Logout/Index';
import Favorites from './components/Favorites';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/colleges" element={<Colleges />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Navigate to="/home" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
