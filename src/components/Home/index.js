import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import logo from '../../logo.svg';
import {
  getStringTime,
  getNumberTime
} from '../../actions/timeActions';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.getStringTime();
    this.props.getNumberTime();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React @ {this.props.stringTime} || {this.props.numberTime}</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

Home.propTypes = {
  getStringTime: PropTypes.func.isRequired,
  getNumberTime: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  stringTime: PropTypes.string,
  numberTime: PropTypes.number
};

const mapStateToProps = state => ({
  stringTime: state.stringTime,
  numberTime: state.numberTime
});

const mapDispatchToProps = dispatch => ({
  getStringTime: () => dispatch(getStringTime()),
  getNumberTime: () => dispatch(getNumberTime())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
