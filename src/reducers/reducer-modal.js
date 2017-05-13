import HLA from '../../public/images/HLA.png';
export default function(state={
            name: "React / Redux Blog App",
            github: "https://github.com/LambyPants/react-redux-blog-app",
            website: 202,
            technologies: ["React.js", "Bootstrap", "APIs"],
            completion: "May 2017",
            imageLink: HLA
}, action) {

    switch(action.type){
        case 'SELECTED_MODAL':     
        
        return action.payload;
        
           default: return state;
    }

}