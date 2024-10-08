import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Hero from './components/Hero';

function App() {
  return (
    <Router>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Navbar />
          <div className="flex-1 overflow-hidden flex flex-col">
            <main className="flex-1 overflow-auto p-8">
              <Routes>
                <Route path="/" element={<About />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <div className="h-24"> {/* Adjust this value to control Hero height */}
              <Hero />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;