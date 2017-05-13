import React, { Component } from 'react';
import 'react-bootstrap';
import Portfolio from './portfolio';
import AboutMe from './portfolio-aboutme';
import Tech from './portfolio-tech';
import Contact from './portfolio-contact';
import TextEffect from './portfolio-texteffect';

import {Link, Element, Events, scroll, scrollSpy} from 'react-scroll';

class App extends Component {
constructor (props){
      super(props);
      this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {

    Events.scrollEvent.register('begin', function() {
     
    });

    Events.scrollEvent.register('end', function() {
      
    });

    scrollSpy.update();

  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render() {
    return (
      <div>
        <Element name="header" className="element" >
       
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

    <Link className="navbar-brand" to="header" spy={true} smooth={true} duration={500}> Ryan Lambert</Link>
    </div>

    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav navbar-right">
        
        <li><Link activeClass="active" to="portfolio" spy={true} smooth={true} duration={500}>Portfolio</Link></li>
        <li><Link activeClass="active" to="about" spy={true} smooth={true} duration={500}>About</Link></li>
        <li><Link activeClass="active" to="skills" spy={true} smooth={true} duration={500}>Skills</Link></li>
        <li><Link activeClass="active" to="contact" spy={true} smooth={true} duration={500}>Contact</Link></li>


      </ul>

    </div>
  </div>
  </div>
</nav>
        </Element>
      
    <header>
        <div className="container" id="maincontent">
            <div className="row">
                <div className="col-lg-12">
        
                    <div className="intro-text">
                        <div className="name"><TextEffect/></div>
                        <hr/>
                        <h3 className="skills">I build full-stack javascript applications.</h3>
                        <h5> Explore my work and always feel free to reach out! </h5>
                        
                    </div>
                </div>
                <div className="row">
                <div className="col-lg-12">
                <div className="header-links">
                <a href="https://www.linkedin.com/in/ryan-lambert-58202596"><i className="fa fa-github" aria-hidden="true"></i></a>
                <a href="https://www.linkedin.com/in/ryan-lambert-58202596"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
                <a href="mailto:ryanlandonlambert@gmail.com"><i className="fa fa-envelope" aria-hidden="true"></i></a>

                </div>
                </div>
                </div>
            </div>
        </div>
    </header>
<Element name="portfolio" className="element">    
  <section className="portfolio">

        <Portfolio />

  </section>
 </Element>
  <Element name="about" className="element">
    <section className="success" id="about">
        <AboutMe />
    </section>
   </Element>   
   <Element name="skills" className="element">
      <section className="technologies" id="tech">
        <Tech/>
      </section>   
     </Element> 
    <Element name="contact" className="element">
        <section className="contact-me">
          <Contact/>
          </section>  
     </Element> 
  

<footer>
<div className="upper-footer">
<div className="container">
<div className="row">
<div className="col-lg-12">
Need help on a project? Send me an email!
</div>
</div>
</div>


</div>
        <div className="footer-below">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        I made this site using React.js and Redux - check out the code for <span><a href="https://github.com/LambyPants/ryan-lambert-portfolio">this site</a></span> and all my other projects on my GitHub.
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
