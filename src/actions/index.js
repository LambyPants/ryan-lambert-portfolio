var i = 0;

export function selectFilter(project){
    //selectFilter is an action creator and needs to return an action - an object with a type property
    console.log(project);
   return {
       type: 'PROJECT_SELECTED',
       payload: project
   };
}

export function filteredProjects(array){
    console.log(array);
    
      
return {
        type: "FILTERED_ARRAY",
        payload: array
}
}