var i = 0;

const originalData =  [
        {
            name: "HL Architecture and Construction",
            github: 202,
            website: "http://hallambertarchitecture.com/",
            technologies: ["jQuery", "Bootstrap"],
            completion: "March 2017",
            imageLink: "http://hallambertarchitecture.com/HLAFinal/CustomHomes/HalsHouse/1-Thumbnail.JPG"
        },        
        {
            name: "React / Redux Weather App",
            github: "https://github.com/LambyPants/react-redux-weather-app",
            website: "https://blooming-inlet-78384.herokuapp.com/",
            technologies: ["React.js", "Bootstrap", "APIs"],
            completion: "May 2017",
            imageLink: "http://hallambertarchitecture.com/HLAFinal/CustomHomes/HalsHouse/1-Thumbnail.JPG"
        },
        {
            name: "MERN Stack Recipe App",
            github: "https://github.com/LambyPants/Love-To-Eat-React-Recipes-App",
            website: "http://sheltered-eyrie-54525.herokuapp.com/",
            technologies: ["MongoDB", "Bootstrap", "React.js", "Node.js"],
            completion: "April 2017",
            imageLink: "http://hallambertarchitecture.com/HLAFinal/CustomHomes/HalsHouse/1-Thumbnail.JPG"
        },       
        {
            name: "React YouTube Clone",
            github: "https://github.com/LambyPants/react-youtube-clone",
            website: "none",
            technologies: ["React.js", "Bootstrap", "APIs"],
            completion: "April 2017",
            imageLink: "http://hallambertarchitecture.com/HLAFinal/CustomHomes/HalsHouse/1-Thumbnail.JPG"
        },       
        {
            name: "NoSuchThingAsBadPress Node.js App",
            github: "https://github.com/LambyPants/Random1StarYelpReviewsApp",
            website: "http://www.nosuchthingasbadpress.com/",
            technologies: ["Node.js", "APIs", "Semantic-UI"],
            completion: "March 2017",
            imageLink: "http://hallambertarchitecture.com/HLAFinal/CustomHomes/HalsHouse/1-Thumbnail.JPG"
        },        
        {
            name: "React / Redux Blog App",
            github: "https://github.com/LambyPants/react-redux-blog-app",
            website: 202,
            technologies: ["React.js", "Bootstrap", "APIs"],
            completion: "May 2017",
            imageLink: "http://hallambertarchitecture.com/HLAFinal/CustomHomes/HalsHouse/1-Thumbnail.JPG"
        },
        {
            name: "React Numbers Game",
            github: "https://github.com/LambyPants/React-Numbers-Game",
            website: 202,
            technologies: ["Games", "React.js"],
            completion: "March 2017",
            imageLink: "http://hallambertarchitecture.com/HLAFinal/CustomHomes/HalsHouse/1-Thumbnail.JPG"
        },       
        {
            name: "YelpCamp Full-Stack App with Auth",
            github: "https://github.com/LambyPants/YelpCampV12",
            website: "https://damp-peak-11641.herokuapp.com/",
            technologies: ["Node.js", "Bootstrap", "MongoDB"],
            completion: "April 2017",
            imageLink: "http://hallambertarchitecture.com/HLAFinal/CustomHomes/HalsHouse/1-Thumbnail.JPG"
        },        
        {
            name: "React ABCs Game / Learning Tool",
            github: "https://github.com/LambyPants/Learn-ABCs-React-Application",
            website: "https://shielded-coast-86411.herokuapp.com/",
            technologies: ["React.js", "Games"],
            completion: "February 2017",
            imageLink: "http://hallambertarchitecture.com/HLAFinal/CustomHomes/HalsHouse/1-Thumbnail.JPG"
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