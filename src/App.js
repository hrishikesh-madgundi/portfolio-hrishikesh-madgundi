import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import CustomCursor from './components/CustomCursor';
import './App.css';

function App() {
  return (
    <>
    <CustomCursor />
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar remains static */}
        <Navbar />
        
        {/* Dynamic routes */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        {/* Footer remains static */}
        <Footer />
      </div>
    </Router>
    </>
  );
}

export default App;
