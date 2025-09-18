import React from 'react';
    import { Routes, Route } from 'react-router-dom';
    import Layout from '@/components/Layout';
    import HomePage from '@/pages/HomePage';
    import AoDaiPage from '@/pages/AoDaiPage';
    import AoTuThanPage from '@/pages/AoTuThanPage';
    import AoBaBaPage from '@/pages/AoBaBaPage';
    import AoGamPage from '@/pages/AoGamPage';
    import AoNhatBinhPage from '@/pages/AoNhatBinhPage';
    
    function App() {
      return (
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/ao-dai" element={<AoDaiPage />} />
            <Route path="/ao-tu-than" element={<AoTuThanPage />} />
            <Route path="/ao-ba-ba" element={<AoBaBaPage />} />
            <Route path="/ao-gam" element={<AoGamPage />} />
            <Route path="/ao-nhat-binh" element={<AoNhatBinhPage />} />
          </Route>
        </Routes>
      );
    }
    
    export default App;