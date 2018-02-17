import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { makeNewUser } from '../actions/userActions';

class Signup extends Component {
  constructor() {
      super();
      this.handleOnSubmit = this.handleOnSubmit.bind(this)

      this.state = {
        username: "",
        password: "",
        passwordConfirm: "",
        firstName: "",
        lastName: "",
      };
    }



    handleOnSubmit(e) {
      e.preventDefault();
      this.props.makeNewUser(this.state)
      const { history } = this.props
      history.push('/login')
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

    handleOnFirstNameChange = event => {
      this.setState({
        firstName: event.target.value
      });
    }

    handleOnPasswordConfirmChange = event => {
      this.setState({
        passwordConfirm: event.target.value
      });
    }

    handleOnLastNameChange = event => {
      this.setState({
        lastName: event.target.value
      });
    }

    render(){
      return (
        <div className="container">
        <form style={{ marginTop: '16px' }} onSubmit={this.handleOnSubmit} >
          <div className="row">
            <div className="col-md-3">
                      Username: <br/>
                      <input
                        type="text"
                        onChange={this.handleOnUsernameChange}
                        placeholder="Username"
                        value={this.state.username}/>
            </div>
            <div className="col-md-3">
                        Password: <br/>
                        <input
                          type="password"
                          onChange={this.handleOnPasswordChange}
                          placeholder="password"
                          value={this.state.password}/><br/>
                        Confirm Password: <br/>
                        <input
                          type="password"
                          onChange={this.handleOnPasswordConfirmChange}
                          placeholder="password"
                          value={this.state.passwordConfirm}/>
            </div>
            <div className="col-md-3">
                          First Name: <br/>
                        <input
                          type="text"
                          onChange={this.handleOnFirstNameChange}
                          placeholder="First Name"
                          value={this.state.firstName}/>
            </div>
            <div className="col-md-3">
                          Last Name: <br/>
                        <input
                          type="text"
                          onChange={this.handleOnLastNameChange}
                          placeholder="Last Name"
                          value={this.state.lastName}/>
                              <br/><br/>
                      <input type="submit" value="Signup" />
            </div>
          </div>
        </form>
        </div>
      );
    }

}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
      makeNewUser: makeNewUser
    }, dispatch);
  };


export default connect(null, mapDispatchToProps)(Signup)
