import React, { Component } from 'react';
import 'react-bootstrap';
import Portfolio from './portfolio';
import AboutMe from './portfolio-aboutme';
import Tech from './portfolio-tech';
import Contact from './portfolio-contact';



class App extends Component {

  render() {
    return (
      <div>

<nav className="navbar navbar-default navbar-fixed-top navbar-custom">
      <div className="container">
  <div className="container-fluid">

    <div className="navbar-header ">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="#">Ryan Lambert</a>
    </div>

    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#">About <span className="sr-only">(current)</span></a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Skills</a> </li>

      </ul>

    </div>
  </div>
  </div>
</nav>
    <header>
        <div className="container" id="maincontent">
            <div className="row">
                <div className="col-lg-12">
        
                    <div className="intro-text">
                        <h1 className="name">Hi. I'm Ryan.</h1>
                        <hr/>
                        <h3 className="skills">I build full-stack javascript applications.</h3>
                        <h5> Explore my work and always feel free to reach out! </h5>
                        
                    </div>
                </div>
                <div className="row">
                <div className="col-lg-12">
                <div className="header-links">
                <a><i className="fa fa-github" aria-hidden="true"></i></a>
                <a><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
                <a><i className="fa fa-envelope" aria-hidden="true"></i></a>
                
                </div>
                </div>
                </div>
            </div>
        </div>
    </header>
<section className="portfolio">

<Portfolio />
</section>
    <section className="success" id="about">
            <AboutMe />
    </section>
        <section className="technologies" id="tech">
        <Tech />
    </section>
        <section className="contact-me">
       
<Contact/>
    
    </section>

<footer>
<div className="upper-footer">
<div className="container">
<div className="row">
<div className="col-lg-12">
Project Idea? Always Feel Free to Reach Out!
</div>
</div>
</div>


</div>
        <div className="footer-below">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        I made this site using React.js and Redux - feel free to check out my code on GitHub!
                    </div>
                </div>
            </div>
        </div>
    </footer>
      </div>
    );
  }
}

export default App;
