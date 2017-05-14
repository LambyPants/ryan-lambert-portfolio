import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {store} from '../index';
import { Provider } from 'react-redux';
import {connect} from 'react-redux';
import classNames from 'classnames';


class Modal extends Component {
    componentDidMount() {
        this.modalTarget = document.createElement('div');       
        this.modalTarget.className = "hide targetModal";
        document.body.appendChild(this.modalTarget);
        this._render();
    }
    componentDidUpdate() {
        var targetModal  = document.querySelector('.targetModal');
        var hideClass = document.querySelector('.hide');
       if(hideClass && this.props.openClose) {
           targetModal.classList.remove('hide')}
           if(!hideClass|| !this.props.openClose){
               targetModal.className += " hide";
           }
        
        this._render();
    }
    componentWillUnmount(){
        ReactDOM.unmountComponentAtNode(this.modalTarget);
        document.body.removeChild(this.modalTarget);
    }
    _render(){
        ReactDOM.render(
            <Provider store={store}>
            <div className={classNames({'custom-modal': this.props.openClose})}>
      
            {
                this.props.children
            }
            
            </div>
            </Provider>,
            this.modalTarget
            );
    }
    render() {
        return (
                <noscript />
            );
    }
}

function mapStateToProps(state){
    
    return {
        openClose: state.openClose
    };  
}

export default connect(mapStateToProps)(Modal);