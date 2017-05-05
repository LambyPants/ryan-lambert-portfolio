import React, {Component} from 'react';
import { connect } from 'react-redux';

import {bindActionCreators} from 'redux';
import {filteredProjects} from '../actions/index';

import Buttons from './portfolio-filters';



class Portfolio extends Component {
    
  
    
    handleClick(filter){

        console.log(filter);
 
      this.props.filteredProjects(filter);
      
     
    }
 
    renderProjects(){
   
     var   arrayToMap = this.props.project;
    
        return arrayToMap.map((project,i)=>{
            console.log(project);
            return(
                <div className="col-sm-4 portfolio-item" key={i}>{project.name} 
                       <a href="#portfolioModal1" className="portfolio-link">
                <div className="caption">
                            <div className="caption-content">
                            {project.name}
                            </div>
            
                </div>
          
                    <img src={project.imageLink} className="img-responsive" alt="HLA"/>
                          </a>
                </div>
                );
        });
    }
    
  

    render() {
    return (
        <div>
        <Buttons />

      <section id="portfolio">
        <div className="container">
            <div className="row">
                  <div className="col-lg-12 text-center">
                    <h2>Portfolio</h2>
                    <hr/>
                </div>
                <div className="row">
      {this.renderProjects()}
                </div>
            </div>
         </div>
         </section>
         
           <section className="success" id="about">
    
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2>About</h2>
                    <hr/>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-2">
                           <img alt="portfolio" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR8gewL2z69veXT8NHSnrJFcZvggeWnNsk-oRQ3KEKQo26uqkq5"/>
                </div>   
                        <div className="container">
                <div className="col-lg-5 col-lg-offset-1">
                    <p>Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional LESS stylesheets for easy customization.</p>
                </div>
                <div className="col-lg-5">
                    <p>Whether you're a student looking to showcase your work, a professional looking to attract clients, or a graphic artist looking to share your projects, this template is the perfect starting point!</p>
                </div>
                </div>
    
            </div>
        </div>
    </section>
        </div>
        );
}
}

function mapStateToProps(state){
    console.log(state);
    return {
        project: state.project
    };
}

function mapDispatchToProps(dispatch){
    //Whenever selectBook is called the results need to be passed to all reducers
    return bindActionCreators({filteredProjects: filteredProjects}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);