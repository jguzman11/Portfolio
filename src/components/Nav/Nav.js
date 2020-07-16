import React from 'react';
import '../Nav/Nav.css';


function Nav() {
    return(
     
     <React.Fragment>
     <nav id="navbar">
      <ul>
      <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#About">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#Skills">Skills</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
          </li>
      </ul>
  </nav>
  <nav classname="hamburger" role="navigation" >
      <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#About">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#Skills">Skills</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
          </li>
          </ul>
      </div>
  </nav>
    
  </React.Fragment>
      // <div className="collapse navbar-collapse" id="navbarResponsive">
      //   <ul className=" navbar navbar-nav text-uppercase ml-auto">
      //     <li className="nav-item">
      //       <a className="nav-link js-scroll-trigger" href="#About">About</a>
      //     </li>
      //     <li className="nav-item">
      //       <a className="nav-link js-scroll-trigger" href="#Skills">Skills</a>
      //     </li>
      //     <li className="nav-item">
      //       <a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
      //     </li>
      //     <li className="nav-item">
      //       <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
      //     </li>
      //   </ul>
      // </div>
    
  )
  }

export default Nav;
