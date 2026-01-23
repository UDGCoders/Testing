import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import BackgroundDots from './components/home/CompanySlider/Backgrounddots';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Navbar />
        <BackgroundDots/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
