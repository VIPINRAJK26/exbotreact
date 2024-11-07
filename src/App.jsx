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


function App() {

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
      <Footer />
      <Copyright/>
    </BrowserRouter>
  );
}

export default App
