import React from 'react';
import '../Skills/Skills.css';

function mySkills() {
    return(

<section className="page-section" id="Skills">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Skills</h2>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-desktop fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Front-End</h4>
          <ul className="user-skills">
           <li className="skills-li">HTML</li>
           <li className="skills-li">CSS</li>
           <li className="skills-li">Javascript</li>
         </ul>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-user fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Tools</h4>
         <ul className="user-skills">
            <li className="skills-li">Wire Framing</li>
            <li className="skills-li">Agile Methodology</li>
            <li className="skills-li">Technical Writing</li>
         </ul>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-database fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Back-End</h4>
          <ul className="user-skills">
           <li className="skills-li">MySQl</li>
           <li className="skills-li">MongoDB</li>
           <li className="skills-li">Node</li>
           <li className="skills-li">REST Endpoints</li>
         </ul>
        </div>
      </div>
    </div>
  </section>
    )
};

export default mySkills;