import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllUsers, checkLoginCredentials } from '../actions/userActions';

class Login extends Component {
  constructor() {
      super();
      this.handleClick = this.handleClick.bind(this)
      this.getUserGames = this.getUserGames.bind(this)
      this.handleOnSubmit = this.handleOnSubmit.bind(this)

      this.state = {
        username: "",
        password: "",
        users: [],
        user: null,
        games: []
      };
    }

    getUserGames() {
      fetch('api/users/1').then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => this.setState({
        user: response.user,
        games: response.games
      }));
    }
    handleClick() {
      fetch('api/users/').then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => this.setState({
        users: response
      }));

    }

    handleOnSubmit(e) {
      e.preventDefault();
      this.props.checkLoginCredentials(this.state.username,this.state.password)
      const { history } = this.props
      history.push('/game')
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
      const users = this.state.users.map((user) => {
                return(
                  <div key={user.id}>
                    {user.username}
                  </div>
                )
              })
      const games = this.state.games.map((game) => {
        return(
          <div key={game.id}>
            Type of Game:{game.operation}<br/>
            Time Per Question:{game.time_per_question}<br/>
            Number of Questions:{game.number_of_questions}<br/>
            Percent Correct:{game.number_correct/game.number_of_questions*100}%
          </div>
        )
      })
      return (
        <div>
        <form style={{ marginTop: '16px' }} onSubmit={this.handleOnSubmit} >
          Username: <input
            type="text"
            onChange={this.handleOnUsernameChange}
            placeholder="Username"
            value={this.state.username}/><br/>
            Password:
            <input
              type="password"
              onChange={this.handleOnPasswordChange}
              value={this.state.password}/><br/>
          <input type="submit" value="Login" />
        </form>
        <button onClick={this.handleClick}>Fetch</button>
        {users}
        <button onClick={this.getUserGames}>Get User Games</button>
        Games: {games}
        </div>
      );
    }

}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
      checkLoginCredentials: checkLoginCredentials,
      getAllUsers: getAllUsers
    }, dispatch);
  };

  function mapStateToProps(state){
    return {user: state.user}
  }

export default connect(mapStateToProps, mapDispatchToProps)(Login)
