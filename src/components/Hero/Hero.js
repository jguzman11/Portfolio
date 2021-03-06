import React from 'react';
import '../Hero/Hero.css'

function Hero() {
    return(
        <header className="masthead">
    <div className="container">
      <div className="intro-text">
        <div className="intro-lead-in">Welcome, my name is Jordan Guzman</div>
        <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#About"><i className='arrow' class="fa fa-chevron-circle-down fa-2x"></i></a>
      </div>
    </div>
  </header>
    )
};

export default Hero;