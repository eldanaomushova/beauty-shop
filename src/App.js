import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './components/LanguageSwitcher';
import HeaderMain from './components/HeaderMain';
import NavigationMain from './components/NavigationMain';
import ChildSection from './components/ChildSection'
import HandSection from './components/HandSection';
import HairSection from './components/HairSection';
import BodySection from './components/BodySection';
import SkinSection from './components/SkinSection';
import MensSection from './components/MensSection';
import MainPageSection from './components/MainPageSection';

function App() {
  const { t } = useTranslation();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeaderMain />} />
        <Route path="/child" element={<ChildSection />} />
        <Route path="/mens" element={<MensSection />} />
        <Route path="/hand" element={<HandSection />} />
        <Route path="/hair" element={<HairSection />} />
        <Route path="/body" element={<BodySection />} />
        <Route path="/skin" element={<SkinSection />} />
        <Route path="/main" element={<MainPageSection />} />
      </Routes>
    </Router>
  );
}
export default App;   