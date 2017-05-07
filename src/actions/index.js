
export function filteredProjects(array){
    console.log(array);
    
      
return {
        type: "FILTERED_ARRAY",
        payload: array
};
}

export function selectedModal(obj){
    console.log(obj);
    return {
        type: "SELECTED_MODAL",
        payload: obj
    };
}

export function openCloseModal(bool){
    console.log(bool);
    return {
        type: "OPENCLOSE_MODAL",
        payload: bool
    };
}