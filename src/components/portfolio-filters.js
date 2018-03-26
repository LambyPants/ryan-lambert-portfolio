import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { filteredProjects } from "../actions/index";
import classNames from "classnames";

class Buttons extends Component {
  constructor(props) {
    super(props);

    this.state = { activeButton: "All" };
    this.addActiveClass = this.addActiveClass.bind(this);
  }

  renderButtons() {
    return this.props.filter.map((button, i) => {
      return (
        <button
          className={classNames("btn btn-primary btn-lg", {
            activeButton: this.state.activeButton === button
          })}
          key={i}
          value={button}
          onClick={e => {
            this.props.filteredProjects(e.target.value);
            this.addActiveClass(e.target);
          }}
        >
          {button}
        </button>
      );
    });
  }
  addActiveClass(e) {
    let selectedButton = e.value;
    this.setState({ activeButton: selectedButton });
  }

  render() {
    return (
      <div className="container">
        <div className="well well-lg">
          <h4>Filter By Project Type</h4>
          <div className="btn-group">{this.renderButtons()}</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    filter: state.filter,
    openClose: state.openClose
  };
}
function mapDispatchToProps(dispatch) {
  //Whenever selectBook is called the results need to be passed to all reducers
  return bindActionCreators({ filteredProjects: filteredProjects }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
