import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../components/Layout';
import LandingPage from '../pages/LandingPage';
import PredictionPage from '../pages/PredictionPage';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={        
            <LandingPage />
        } />
        <Route path="/predict" element={
            <PredictionPage />
        } />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
