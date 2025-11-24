import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import About from './components/About';
import Services from './components/Services';
import RecentIdeas from './components/RecentIdeas';
import Freedom from './components/Freedom';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <About />
        <Services />
        <RecentIdeas />
        <Freedom />
      </main>
      <Footer />
    </div>
  );
}

export default App;
