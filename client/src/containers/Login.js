import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { checkLoginCredentials, endSession } from '../actions/userActions';

class Login extends Component {
  constructor() {
      super();
      this.handleOnSubmit = this.handleOnSubmit.bind(this)

      this.state = {
        username: "",
        password: "",
        user: null
      };
    }



    handleOnSubmit(e) {
      e.preventDefault();
      this.props.checkLoginCredentials(this.state.username,this.state.password)
      // if (this.props.user.user !== null)
      {const { history } = this.props
      history.push('/game')}
    }

    handleOnUsernameChange = event => {
      this.setState({
        username: event.target.value
      });
    }

    handleOnPasswordChange = event => {
      this.setState({
        password: event.target.value
      });
    }

    render(){
      return (
        <div className="container">
        <form style={{ marginTop: '16px' }} onSubmit={this.handleOnSubmit} >
          Username: <input
            type="text"
            onChange={this.handleOnUsernameChange}
            placeholder="Username"
            value={this.state.username}/><br/>
            Password:&nbsp;
            <input
              type="password"
              onChange={this.handleOnPasswordChange}
              placeholder="Password "
              value={this.state.password}/><br/>
          <input type="submit" value="Login" />
        </form>
        </div>
      );
    }

}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
      checkLoginCredentials: checkLoginCredentials,
      endSesion: endSession
    }, dispatch);
  };

  function mapStateToProps(state){
    return {user: state.user}
  }

export default connect(mapStateToProps, mapDispatchToProps)(Login)
