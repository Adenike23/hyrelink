import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services';

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence>
      <Routes location={location} key={location.key}>
        <Route path='/' element={<Hero />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
      </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
