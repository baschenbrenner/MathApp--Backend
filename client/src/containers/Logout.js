import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { endSession } from '../actions/userActions';

class Logout extends Component {
  constructor() {
      super();
      this.endSession = this.endSession.bind(this)
    }
endSession() {
  this.props.endSession()
  const { history } = this.props
  history.push('/')
}


  render(){
    return(
      <div id="logout" className="container">
        <h1> Are you sure you want to logout? </h1>
        <button onClick={this.endSession}>Yes, Log Me Out!</button>
      </div>
    )
  }
}
  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        endSession: endSession
      }, dispatch);
    };

export default connect(null, mapDispatchToProps)(Logout)
