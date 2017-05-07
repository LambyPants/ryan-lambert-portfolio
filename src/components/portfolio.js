import React, {Component} from 'react';
import { connect } from 'react-redux';

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
                <div className="col-sm-4 portfolio-item" key={i}>{project.name} 
                       <a onClick={()=>{this.props.selectedModal(project); this.props.openCloseModal(true);}}href="#portfolioModal1" className="portfolio-link">
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
      {this.renderProjects()}
                </div>
            </div>
         </section>
         
<Modal>

<button onClick={()=>{this.props.openCloseModal(false)}}>close modal </button>
<h2>{this.props.modal.name}</h2>
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