import React, {Component} from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {bindActionCreators} from 'redux';
import Buttons from './portfolio-filters';
import Modal from './modal';

import {selectedModal} from '../actions/index';
import {openCloseModal} from '../actions/index';





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
                <div className="col-sm-4 portfolio-item" key={i}>
                       <a onClick={()=>{this.props.selectedModal(project); this.props.openCloseModal(true);}}href="#portfolioModal1" className="portfolio-link">
                <div className="caption">
          
                            <div className="caption-content">
                                   <span><i className="fa fa-external-link" aria-hidden="true"></i>
 </span>    
                                 
                            <h4> {project.name} </h4>
                            </div>
            
                </div>
          
                    <img src={project.imageLink} className="img-responsive img-thumbnail" alt="HLA"/>
                          </a>
                </div>
                );
        });
    }
    renderModals(){
        var arrayToMap = this.props.modal.technologies;
        return arrayToMap.map((tech,i)=>{
            return(
                <td key={i}>{tech}</td>
                );
        });
    }
  

    render() {
        
            const transitionOptions = {
                transitionName: "fade",
                transitionEnterTimeout: 500,
                transitionLeaveTimeout: 500
            };
        
    return (
        <div>
        <div className="row">
        <div className="col-lg-12 text-center">
            <h2>Portfolio</h2>
            <hr/>
            </div>
        </div>
        <Buttons />


      <section id="portfolio">
  
        <div className="container">
  
                <div className="row">
                <ReactCSSTransitionGroup {...transitionOptions}>
      {this.renderProjects()}
      </ReactCSSTransitionGroup>
                </div>
            </div>
         </section>
         
<Modal>


<div className="project-info">
<button className="btn btn-danger pull-right" onClick={()=>{this.props.openCloseModal(false)}}><i className="fa fa-times" aria-hidden="true"></i></button>
<h2>{this.props.modal.name}</h2>
<img className="img-responsive img-thumbnail" alt="projectlink" src={this.props.modal.imageLink}/>
    <div className="caption-full">
    <div>
    <h5 className="pull-right"><em>Project Completed: {this.props.modal.completion}</em> </h5>
    </div>
    <div className="panel panel-default">
  <div className="panel-body">
        <h4> {this.props.modal.description} </h4>
  </div>
</div>

  
    <table className="table table-bordered">
    <tbody>
        <tr>
        {this.renderModals()}
        </tr>
        </tbody>
    </table>


<a className="btn btn-primary github" href={this.props.modal.github}>See the Code</a>
<a className="btn btn-primary website" href={this.props.modal.website}>See the Website</a>
</div>
</div>
</Modal>


</div>
        );
}
}

function mapStateToProps(state){
    console.log(state);
    return {
        project: state.project,
        modal: state.modal
    };
}


function mapDispatchToProps(dispatch){
    //Whenever selectBook is called the results need to be passed to all reducers
    return bindActionCreators({openCloseModal:openCloseModal, selectedModal:selectedModal}, dispatch);
}



export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);