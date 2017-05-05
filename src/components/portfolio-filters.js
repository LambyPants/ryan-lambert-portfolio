import React, {Component} from 'react';
import { connect } from 'react-redux'; 
import {bindActionCreators} from 'redux';
import {filteredProjects} from '../actions/index';


class Buttons extends Component {
    renderButtons(){
        console.log(this.props.filter);
       return  this.props.filter.map((button, i)=>{
            return(
            
            <button  className="btn btn-success" key={i} value={button}  onClick={(e)=>{this.props.filteredProjects(e.target.value)}}>{button}</button> 
           
            
            );
            
        });
    }
    render()  {
    
    return (
        <div>
       {this.renderButtons()}
        </div>
        )
    
}
}

function mapStateToProps(state){
    return {
        filter: state.filter
    };  
}
function mapDispatchToProps(dispatch){
    //Whenever selectBook is called the results need to be passed to all reducers
    return bindActionCreators({filteredProjects: filteredProjects}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);