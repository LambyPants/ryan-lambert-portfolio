var i = 0;

const originalData =  [
        {
            name: "HL Architecture and Construction",
            github: 202,
            website: "http://hallambertarchitecture.com/",
            technologies: ["jQuery", "Bootstrap"],
            description: "Full Architecture Professional Website designed using Bootstrap and jQuery; includes a PHP contact form and multiple lightbox galleries.",
            completion: "March 2017",
            imageLink: "http://res.cloudinary.com/dlksliyac/image/upload/v1494202742/Screen_Shot_2017-05-07_at_7.18.45_PM_tgku2w.png"
        },        
        {
            name: "React / Redux Weather App",
            github: "https://github.com/LambyPants/react-redux-weather-app",
            website: "https://blooming-inlet-78384.herokuapp.com/",
            technologies: ["React.js", "Bootstrap", "APIs"],
            type: "Single Page Application",
            description: "Single page application which dynamically displays Sparkline charts of city temperatures, a 10 day forecast, and their location on Google Maps.",
            completion: "May 2017",
            imageLink: "http://res.cloudinary.com/dlksliyac/image/upload/v1494202596/Screen_Shot_2017-05-07_at_7.01.41_PM_ly0t67.png"
        },
        {
            name: "MERN Stack Recipe App",
            github: "https://github.com/LambyPants/Love-To-Eat-React-Recipes-App",
            website: "http://sheltered-eyrie-54525.herokuapp.com/",
            technologies: ["MongoDB", "Bootstrap", "React.js", "Node.js"],
            description: "Single page application which incorporates an external MongoDB database and server-side API to save, delete, and edit user-uploaded recipes.",
            completion: "April 2017",
            imageLink: "http://res.cloudinary.com/dlksliyac/image/upload/v1494382780/Screen_Shot_2017-05-09_at_9.19.24_PM_rcyrrf.png"
        },       
        {
            name: "React YouTube Clone",
            github: "https://github.com/LambyPants/react-youtube-clone",
            website: "none",
            technologies: ["React.js", "Bootstrap", "APIs"],
            description: "As practice with single-page applications made with React, this app is a clone of the YouTube video player and allows users to instantly search for and watch YouTube videos.",
            completion: "April 2017",
            imageLink: "http://hallambertarchitecture.com/HLAFinal/CustomHomes/HalsHouse/1-Thumbnail.JPG"
        },       
        {
            name: "NoSuchThingAsBadPress Node.js App",
            github: "https://github.com/LambyPants/Random1StarYelpReviewsApp",
            website: "http://www.nosuchthingasbadpress.com/",
            technologies: ["Node.js", "APIs", "Semantic-UI"],
            description: "This is a silly app made for a friend who LOVES reading bad reviews. This app randomly pulls a 1-star Review from Yelp via the Yelp-Fusion API; the structure of Yelp's API made this somewhat difficult to achieve, but thankfully you can now easily find the best of the worst of Yelp!",
            completion: "March 2017",
            imageLink: "http://res.cloudinary.com/dlksliyac/image/upload/v1494202594/Screen_Shot_2017-05-07_at_7.13.41_PM_nkpcxk.png"
        },        
        {
            name: "React / Redux Blog App",
            github: "https://github.com/LambyPants/react-redux-blog-app",
            website: 202,
            technologies: ["React.js", "Bootstrap", "APIs"],
            description: "This is React-Redux blogging application made as practice to help master ES6 and Redux.",
            completion: "May 2017",
            imageLink: "http://hallambertarchitecture.com/HLAFinal/CustomHomes/HalsHouse/1-Thumbnail.JPG"
        },
        {
            name: "React Numbers Game",
            github: "https://github.com/LambyPants/React-Numbers-Game",
            website: 202,
            technologies: ["Games", "React.js"],
            description: "This numbers game challenges you to correctly solve the sum of two randomly produced numbers; the player is presented with four random options in a similar range to the correct answer. This game includes 'GameOver' and 'Play Again' animations through Animate.css",
            completion: "March 2017",
            imageLink: "http://hallambertarchitecture.com/HLAFinal/CustomHomes/HalsHouse/1-Thumbnail.JPG"
        },       
        {
            name: "YelpCamp Full-Stack App with Auth",
            github: "https://github.com/LambyPants/YelpCampV12",
            website: "https://damp-peak-11641.herokuapp.com/",
            technologies: ["Node.js", "Bootstrap", "MongoDB"],
            completion: "April 2017",
            description: "",
            imageLink: "http://res.cloudinary.com/dlksliyac/image/upload/v1494202967/Screen_Shot_2017-05-07_at_7.22.18_PM_xbccyz.png"
        },        
        {
            name: "React ABCs Game / Learning Tool",
            github: "https://github.com/LambyPants/Learn-ABCs-React-Application",
            website: "https://shielded-coast-86411.herokuapp.com/",
            technologies: ["React.js", "Games"],
            description: "This is an application to help children learn their ABC's and includes sound, images, and option-toggles (random letter, play sound / word again, mute). This was a 'homework assignment' and is my own solution to Abhay Talreja's 'React JS - Build Real World Applications' couse on Udemy.",
            completion: "February 2017",
            imageLink: "http://res.cloudinary.com/dlksliyac/image/upload/v1494210076/Screen_Shot_2017-05-07_at_9.20.54_PM_yucoks.png"
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

export default function(state={}, action) {
    console.log(action.type);
    switch(action.type){
        case 'FILTERED_ARRAY': console.log(action.payload); 
        if(action.payload !== "All"){
         var testing = filterArray(action.payload);
        
        return testing;} else {
        return originalData}
           default: return originalData;
    }

}


// function test() {var finalArray=[]; x.forEach(function(arr) {for(i=0; i<arr.technologies.length; i++){if (arr.technologies[i] === "jQuery"){finalArray.push(arr.technologies[i])} }});return finalArray}