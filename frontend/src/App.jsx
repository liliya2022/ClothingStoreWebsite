import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Settings from './pages/Settings';
import About from './pages/About';
import ImageDetail from './pages/ImageDetail';
import BurgerMenu from './components/BurgerMenu/BurgerMenu';
import './App.css';

function App() {
  const location = useLocation();

  const getPageTitle = () => {
    if (location.pathname === '/') return 'Home';
    if (location.pathname === '/settings') return 'Settings';
    if (location.pathname === '/about') return 'About';
    if (location.pathname === '/image-detail') return 'Image Detail';
    return 'Home';
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="page-title">{getPageTitle()}</h1>
      </header>
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/about" element={<About />} />
          <Route path="/image-detail" element={<ImageDetail />} />
        </Routes>
      </main>
      <BurgerMenu />
    </div>
  );
}

export default App;
