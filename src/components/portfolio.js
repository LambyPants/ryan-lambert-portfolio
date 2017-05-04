import React, {Component} from 'react';
import { connect } from 'react-redux';
import {selectFilter} from '../actions/index';
import {bindActionCreators} from 'redux';
import {filteredProjects} from '../actions/index';

var i = 0;

class Portfolio extends Component {
    
  
    
    handleClick(filter){

        console.log(filter);
    
 
      this.props.filteredProjects(filter);
      
     
    }
 
    renderProjects(filterValue){
   
     var   arrayToMap = this.props.project;
    
        return arrayToMap.map((project,i)=>{
            console.log(project);
            return(
                <div key={i}>{project.name} </div>
                );
        });
    }
    
  

    render() {
    return (
        <div>
        <button value="bootstrap" onClick={(e)=>{this.handleClick(e.target.value)}}>Boostrap</button> 
        <button value="jQuery" onClick={(e)=>{this.handleClick(e.target.value)}}>jQuery</button> 
       
        Projects will go here!
      {this.renderProjects()}
      
     
        </div>
        )
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