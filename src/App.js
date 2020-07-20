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
      title: 'Tokyo, Japan',
      caption: 'HTML, CSS',
      img: '/PortfolioPhotos/Tokyo.png',
      page: "https://triptotokyo.netlify.app/"
    },
    {
      title: 'Hotel App',
      caption: 'HTML, CSS',
      img: '/PortfolioPhotos/Hotel.png',
      page: "https://hotelgo.netlify.app/"
    },
    {
      title: 'Animated Nav',
      caption: 'HTML, CSS, JS',
      img: '/PortfolioPhotos/AnimatedNav.png',
      page:'https://animated-nav.netlify.app/'
    },
    {
      title: 'Github Profiles',
      caption: 'REACT.js, CSS',
      img: '/PortfolioPhotos/GitCards.png',
      page: 'https://hubprofiles.netlify.app/'
    },
    {
      title: 'Guessing Game',
      caption: 'HTML, CSS, JS',
      img: '/PortfolioPhotos/GuessGame.png',
      page: 'https://guess-thenumber.netlify.app/'
    },
    {
      title: 'Weather Forecast',
      caption: 'HTML, CSS, JS, RESTful API',
      img: '/PortfolioPhotos/weather.png',
      page:''
    },
    {
      title: 'Breaking The Cycle',
      caption: 'HTML, CSS, NODE.js',
      img: '/PortfolioPhotos/BreakTheCycle.png',
      page:''
    },
    {
      title: 'Tic Tac Toe',
      caption: 'REACT.js, CSS',
      img: '/PortfolioPhotos/TicTac.png',
      page: "https://tic-tactoe-game.netlify.app"
    },

    {
      title: 'E-commerce',
      caption: 'REACT.js, CSS',
      img: '/PortfolioPhotos/cltKicks.png',
      page: "https://7o4kicks.netlify.app/"
    },
    {
      title: 'The Verge',
      caption: 'REACT.js, MONGODB, NODE.js, CSS',
      img: '/PortfolioPhotos/TheVergeReDesign.png',
      page: "https://r2h-the-verge-clone.netlify.app"
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
