export default function(state = false, action) {
    switch(action.type){
        case 'OPENCLOSE_MODAL': 
            return action.payload;
    
           default: return state;
    }

}