
export default function(state={
            name: "React / Redux Blog App",
            github: "https://github.com/LambyPants/react-redux-blog-app",
            website: 202,
            technologies: ["React.js", "Bootstrap", "APIs"],
            completion: "May 2017",
            imageLink: "http://hallambertarchitecture.com/HLAFinal/CustomHomes/HalsHouse/1-Thumbnail.JPG"
}, action) {

    switch(action.type){
        case 'SELECTED_MODAL':     console.log(action.payload);
        
        return action.payload;
        
           default: return state;
    }

}