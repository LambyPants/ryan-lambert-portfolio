import React, {Component} from 'react';

class Contact extends Component {
    render() {
        return(
            <div>
         <div className="row">
            <div className="col-lg-12 text-center">
                 <h2>Contact</h2> 
                 <hr/>
                 </div>
            </div>
             <div className="container-fluid">
            <div className="row">
                <div className="col-sm-3">
                    <img alt="profile" src="http://buzzsharer.com/wp-content/uploads/2015/07/cute-lab-puppy-watching.jpg"className="img-responsive"/>
                </div>
            <div className="col-sm-9">
  
        <div className="panel panel-default">
        <div className="panel-body">
            <ul contact-list>
                
                <li>
                    <span><a><i className="fa fa-envelope" aria-hidden="true"></i></a> </span>
                    <span><a href="mailto:ryanlandonlambert@gmail.com">RyanLandonLambert@gmail.com</a></span>
                    
                </li>              
                <li>
                    <span><a><i className="fa fa-github-square" aria-hidden="true"></i></a></span>
                    <span><a href="https://www.linkedin.com/in/ryan-lambert-58202596.com">LinkedIn</a></span>
                     
                </li>              
                <li>
                    <span><a><i className="fa fa-linkedin-square" aria-hidden="true"></i></a> </span>
                     <span><a href="https://github.com/LambyPants">Github</a></span>
                </li>                
                <li>
                    <span><a><i className="fa fa-facebook-square" aria-hidden="true"></i></a> </span>
                     <span><a href="facebook.com"> Facebook </a></span>
                </li>     
           
      
                </ul> 
                </div>

            </div>
        </div>
        
    </div>
    </div>
    </div>
            )
    }
}

export default Contact;