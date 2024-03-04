import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import HeaderMain from './components/HeaderMain';
import ChildSection from './components/ChildSection'
import HairSection from './components/HairSection';
import BodySection from './components/BodySection';
import SkinSection from './components/SkinSection';
import MensSection from './components/MensSection';
import MainPageSection from './components/MainPageSection';
import LikedProductsSection from './components/LikeProductsSection';
import Basket from './components/Basket';
import Login from './components/Login';

function App() {
  const { t } = useTranslation();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeaderMain />} />
        <Route path="/child" element={<ChildSection />} />
        <Route path="/mens" element={<MensSection />} />
        <Route path="/hair" element={<HairSection />} />
        <Route path="/body" element={<BodySection />} />
        <Route path="/skin" element={<SkinSection />} />
        <Route path="/main" element={<MainPageSection />} />
        <Route path="/liked" element={<LikedProductsSection />} />
        <Route path="/basketProducts" element={<Basket />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
export default App;   