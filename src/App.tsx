import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import QRLanding from './pages/QRLanding';
import ARPage from './pages/ARPage';
import ThankYouPage from './pages/ThankYouPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QRLanding />} />
        <Route path="/viewer" element={<ARPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;