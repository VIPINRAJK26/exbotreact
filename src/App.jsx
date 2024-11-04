import './App.css';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Pricing />} />
      </Routes> 
    </BrowserRouter>
  )
}

export default App
