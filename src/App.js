import React from 'react';
import Portfolio from './components/Portfolio/Portfolio'
import './App.css';
import About from './components/About/About';
import Nav from './components/Nav/Nav';
import Skills from './components/Skills/Skills';
import Hero from './components/Hero/Hero';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  const portfolioLinks = [
    {
      title: 'The Verge',
      caption: '...',
      img: '/PortfolioPhotos/TheVergeReDesign.png'
    },
    {
      title: 'E-commerce',
      caption: '...',
      img: '/PortfolioPhotos/cltKicks.png'
    },
    {
      title: 'Guessing Game',
      caption: '...',
      img: '/PortfolioPhotos/GuessGame.png'

    },
    {
      title: 'Breaking The Cycle',
      caption: '...',
      img: '/PortfolioPhotos/BreakTheCycle.png'

    },
    {
      title: 'Animated Nav',
      caption: '...',
      img: '/PortfolioPhotos/AnimatedNav.png'

    },
    {
      title: 'Weather Forecast',
      caption: '...',
      img: '/PortfolioPhotos/weather.png'

    },
    {
      title: 'Github Profiles',
      caption: '...',
      img: '/PortfolioPhotos/GitCards.png'
    },
    {
      title: 'Hotel App',
      caption: '...',
      img: '/PortfolioPhotos/Hotel.png'
    },
    {
      title: 'Spark',
      caption: 'First Hackathon',
      img: '/PortfolioPhotos/Spark.png'
    }
  ]

  return (
    <div className="App">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Portfolio portfolioLinks={portfolioLinks}></Portfolio>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
