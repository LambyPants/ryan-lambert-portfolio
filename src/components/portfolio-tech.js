import React, {Component} from 'react';
import { connect } from 'react-redux';


class Tech extends Component {
    renderTech(){
        return this.props.tech.map((tech, i)=>{
          return(   
          <div className="col-md-2 col-sm-4 col-xs-6" key={i}>
          <div className="tech-photos thumbnail">

            
            <img className="img-responsive" src={tech.image} alt="techname"/>
                        <h2>
                {tech.name}
            </h2>
            </div>
            </div>
            );
        })
    }

    render(){
        return(
            <div>

            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2>All Skills</h2>
                    
                    <hr/>
                </div>
                </div>
            <div className="row">
            
            {this.renderTech()}
           
            </div>
            </div>
            );
        
    }
}

function mapStateToProps(state){
    return {
        tech: state.tech
    };  
}

export default connect(mapStateToProps)(Tech);
