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
             <div className="container">
            <div className="row">
                <div className="col-sm-4">
                    <img alt="profile" src="http://buzzsharer.com/wp-content/uploads/2015/07/cute-lab-puppy-watching.jpg"className="img-responsive"/>
                </div>
            <div className="col-sm-8">
            <table>
            <tbody>
                <tr>
                    <td>Email </td>
                    
                </tr>              
                <tr>
                    <td>Github </td>
                </tr>              
                <tr>
                    <td>LinkedIn </td>
                </tr>                
                <tr>
                    <td>Facebook </td>
                </tr>     
                </tbody>
      
                </table> 

            </div>
        </div>
        
    </div>
    </div>
            )
    }
}

export default Contact;