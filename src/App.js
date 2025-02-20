import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Destinations from './components/Destinations';
import Adventure from './components/Adventure';
import Culture from './components/Culture';
import TravelTips from './components/TravelTips';
import Gallery from './components/Gallery';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Explore Himachal Pradesh</h1>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/adventure" element={<Adventure />} />
            <Route path="/culture" element={<Culture />} />
            <Route path="/travel-tips" element={<TravelTips />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>
        <footer>
          <p>&copy; {new Date().getFullYear()} Explore Himachal Pradesh. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
