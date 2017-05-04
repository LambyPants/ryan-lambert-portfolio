import React, {Component} from 'react';
import { connect } from 'react-redux';
import {selectFilter} from '../actions/index';
import {bindActionCreators} from 'redux';
import {filteredProjects} from '../actions/index';

var i = 0;

class Portfolio extends Component {
    
    filterArray(array, filter) {
        console.log(array);
        const finalArray=[]; 
        array.forEach(function(arr) {for(i=0; i<arr.technologies.length; i++)
        {if (arr.technologies[i] === filter ){
        finalArray.push(arr)}} 
        }
        );

        return finalArray
    }
    
  
    
    handleClick(filter){

        console.log(filter);
    
     var filterValue = this.filterArray(this.props.project, filter);
      console.log(filterValue);
      this.props.filteredProjects(filterValue);
      
     
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
        <button value="bootstrap" onClick={(e)=>{this.handleClick(e.target.value)}}>jQuery</button> 
       
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
    return bindActionCreators({selectFilter:selectFilter, filteredProjects: filteredProjects}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);