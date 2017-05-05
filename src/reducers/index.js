import { combineReducers } from 'redux';
import PortfolioReducer from './reducer-projects.js';
import ActivePortfolioReducer from './reducer-active-projects';




const rootReducer = combineReducers({
  
project : PortfolioReducer,
filter : ActivePortfolioReducer
 

});

export default rootReducer;