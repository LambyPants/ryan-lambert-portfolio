var i = 0;
import HLA from '../../public/images/HLA.png';
import Yelp from '../../public/images/Yelp.png';
import lovetoeat from '../../public/images/lovetoeat.png';
import YelpCamp from '../../public/images/yelpcamp.png';
import easyabc from '../../public/images/easyabc.png';
import Weather from '../../public/images/Weather.png';
import youtube from '../../public/images/youtube.png';
import BHatch from '../../public/images/Bhatch.png';
import paperZombies from '../../public/images/paperzombies.PNG';

const originalData =  [
        {
            name: "HL Architecture and Construction",
            github: "https://github.com/LambyPants/hla-architecture-and-construction",
            website: "http://hallambertarchitecture.com/",
            technologies: ["jQuery", "Bootstrap"],
            description: "Full architectural professional portfolio website designed using Bootstrap and jQuery; includes a PHP contact form and multiple lightbox galleries.",
            completion: "March 2017",
            herokuFree: false,
            imageLink: HLA
        },
         {
            name: "Brian Hatch | Actor Portfolio App",
            github: "https://github.com/LambyPants/bhatch-actor-website-app",
            website: "http://briananthonyhatch.com/",
            technologies: ["jQuery", "Bootstrap", "Node.js", "MongoDB", "Top Projects"],
            description: "This is professional portfolio full-stack web application built for New York actor Brian Hatch. It includes a backend Node.js interface which allows the client to edit, create, and destroy all site content himself (all media, links, announcements, quotes, etc).All CRUD routes and the backend interface are protected through authentication middleware and Passport -- accessible by the client only after he has logged in..",
            completion: "June 2017",
            herokuFree: false,
            imageLink: BHatch
        },
        {
            name: "Paper Zombies",
            github: "https://github.com/LambyPants/PaperZombies",
            website: "https://lambypants.github.io/PaperZombies/",
            technologies: ["Games", "Top Projects"],
            description: "A zombie survival game made with Paper.js -- use your keyboard and mouse to shoot zombies and earn a higher score. If you collect 3 gas tanks, you'll have enough fuel to power your zombie crushing sports car. But be careful! Zombies get more numerous and faster the more you kill. How long will you survive the zombie apocalypse? As an experiment, this project relied only on Paper.js to draw its sprites and characters; no outside SVG images were used in the making of this game.",
            completion: "October 2017",
            herokuFree: false,
            imageLink: paperZombies
        },
        {
            name: "React / Redux Weather App",
            github: "https://github.com/LambyPants/react-redux-weather-app",
            website: "https://blooming-inlet-78384.herokuapp.com/",
            technologies: ["React.js", "Bootstrap", "APIs"],
            type: "Single Page Application",
            description: "Single page application which dynamically displays Sparkline charts of city temperatures, a 10 day forecast, and their location on Google Maps.",
            completion: "May 2017",
            herokuFree: true,
            imageLink: Weather
        },
        {
            name: "MERN Stack Recipe App",
            github: "https://github.com/LambyPants/Love-To-Eat-React-Recipes-App",
            website: "http://sheltered-eyrie-54525.herokuapp.com/",
            technologies: ["MongoDB", "Bootstrap", "React.js", "Node.js"],
            description: "Single page application which incorporates an external MongoDB database and server-side API to save, delete, and edit user-uploaded recipes.",
            completion: "April 2017",
            herokuFree: true,
            imageLink: lovetoeat
        },       
        {
            name: "React YouTube Clone",
            github: "https://github.com/LambyPants/react-youtube-clone",
            website: "https://salty-retreat-24555.herokuapp.com/",
            technologies: ["React.js", "Bootstrap", "APIs", "Top Projects"],
            description: "As practice with single-page applications made with React, this app is a clone of the YouTube video player and allows users to instantly search for and watch YouTube videos.",
            completion: "April 2017",
            herokuFree: true,
            imageLink: youtube
        },       
        {
            name: "NoSuchThingAsBadPress Node.js App",
            github: "https://github.com/LambyPants/Random1StarYelpReviewsApp",
            website: "http://www.nosuchthingasbadpress.com/",
            technologies: ["Node.js", "APIs"],
            description: "This is a silly app made for a friend who LOVES reading bad reviews. This app randomly pulls a 1-star Review from Yelp via the Yelp-Fusion API; the structure of Yelp's API made this somewhat difficult to achieve, but thankfully you can now easily find the best of the worst of Yelp!",
            completion: "March 2017",
            herokuFree: false,
            imageLink: Yelp
        },        
        {
            name: "YelpCamp Full-Stack App with Auth",
            github: "https://github.com/LambyPants/YelpCampV12",
            website: "https://damp-peak-11641.herokuapp.com/",
            technologies: ["Node.js", "Bootstrap", "MongoDB"],
            completion: "April 2017",
            herokuFree: true,
            description: "This my final capstone project produced during Colt Steele's Web Developer Bootcamp course. It's a fully functioning Express and Node.js application which allows users to sign-up, leave comments, and create directories to their favorite campgrounds (similar to Yelp - but for camping!)",
            imageLink: YelpCamp
        },        
        {
            name: "React ABCs Game / Learning Tool",
            github: "https://github.com/LambyPants/Learn-ABCs-React-Application",
            website: "https://shielded-coast-86411.herokuapp.com/",
            technologies: ["React.js", "Games"],
            description: "This is an application to help children learn their ABC's and includes sound, images, and option-toggles (random letter, play sound / word again, mute). This was a 'homework assignment' and is my own solution to Abhay Talreja's 'React JS - Build Real World Applications' couse on Udemy.",
            completion: "February 2017",
            herokuFree: true,
            imageLink: easyabc
        }
        ];
        
     function filterArray(filter) {
        const finalArray=[]; 
        originalData.forEach(function(arr) {for(i=0; i<arr.technologies.length; i++)
        {if (arr.technologies[i] === filter ){
        finalArray.push(arr)}} 
        }
        );

        return finalArray
    }

export default function(state=originalData, action) {

    switch(action.type){
        case 'FILTERED_ARRAY': 
         
        if(action.payload !== "All"){
         var testing = filterArray(action.payload);
        
        return testing;} else {
        return originalData}
           default: return state;
    }
  

}

