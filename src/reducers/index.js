import { combineReducers } from 'redux';
import PortfolioReducer from './reducer-projects.js';
import ActivePortfolioReducer from './reducer-active-projects';
import TechReducer from './reducer-tech-skills';




const rootReducer = combineReducers({
  
project : PortfolioReducer,
filter : ActivePortfolioReducer,
 tech: TechReducer

});

export default rootReducer;