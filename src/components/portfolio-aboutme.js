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
                <div className="about-me">
                <div className="col-lg-2">

                    <img className="img-responsive img-thumbnail" alt="portfolio" src={require("../../public/images/ryanpic.jpg")}/>
                </div>   
                        <div className="container">
                <div className="col-lg-5">
                    <p>Originally from Florida, I now call myself a proud Chicagoan (though I will always have a soft spot for extra-pulp orange juice). 
                    I love building websites and web-applications and helping others solve problems and currently work as a professional developer.  </p>
                </div>
                <div className="col-lg-5">
                    <p>When I'm not coding, I enjoy playing guitar and practicing my German. I met my wife doing improv in the city and we have an adorable puppy named Cooper. Whether it's 
                    a project for you, a friend, or just an adorable picture of your puppy, always feel free to drop us a line! 
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
            </div>
            )
    }
}


export default AboutMe;