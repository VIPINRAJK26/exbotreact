import './App.css';
import { Copyright } from './components/Footer/Copyright';
import { Footer } from './components/Footer/Footer';
import Navbar from './components/header/Navbar';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Terms } from './pages/Terms';
import { Refund } from './pages/Refund';
import { Privacy } from './pages/Privacy';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css"; 
import ScrollToTopButton from './components/home/ScrollToTop';


function App() {

  useEffect(() => {
    AOS.init({
      duration: 900, 
      easing: "ease-in-out", 
      once: false,
    });
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      <ScrollToTopButton/>
      <Footer />
      <Copyright/>
    </BrowserRouter>
  );
}

export default App
