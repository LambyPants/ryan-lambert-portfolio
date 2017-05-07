import React, {Component} from 'react';

class AboutMe extends Component {
    render(){
        return (
            <div> 
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
            </div>
            )
    }
}


export default AboutMe;