import React, { Component } from 'react';
import 'react-bootstrap';
import Portfolio from './portfolio';


class App extends Component {
  render() {
    return (
      <div>

<nav className="navbar navbar-default navbar-custom">
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
                        <span className="skills">I build full-stack javascript applications.</span>
                    </div>
                </div>
                <div className="row">
                <div className="col-lg-12">
                <div className="header-links">
                <span>Github </span>
                <span>LinkedIn </span>
                <span>Email </span>
                
                </div>
                </div>
                </div>
            </div>
        </div>
    </header>
<section className="portfolio">
<h2>Portfolio </h2>
<Portfolio />
</section>
      </div>
    );
  }
}

export default App;
