import { combineReducers } from 'redux';
import PortfolioReducer from './reducer-projects.js';
import ActivePortfolioReducer from './reducer-active-projects';
import TechReducer from './reducer-tech-skills';
import ModalReducer from './reducer-modal';
import OpenCloseReducer from './reducers-openclosemodal';




const rootReducer = combineReducers({
  
project : PortfolioReducer,
filter : ActivePortfolioReducer,
 tech: TechReducer,
 modal: ModalReducer,
 openClose: OpenCloseReducer

});

export default rootReducer;