import React from 'react';
import About from './components/About';
import Hero from './components/Hero';
import Pics from './components/Pics';
import Register from './components/Register';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#F6FBFE]">
      <Hero />
      <About />
      <Pics/>
      <Register/>
      <Footer/>
    </div>
  );
}

export default App;
