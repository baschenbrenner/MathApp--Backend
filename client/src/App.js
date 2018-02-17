import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GamePage from './containers/GamePage';
import About from './containers/About';
import Login from './containers/Login';
import Logout from './containers/Logout';
import Results from './containers/Results';
import Signup from './containers/Signup';
import NavLinkLoggedIn from './components/NavLinkLoggedIn';
import NavLinkLoggedOut from './components/NavLinkLoggedOut';

class App extends Component {

navLinks(props){
  if (props.user.user === null)
  {return <NavLinkLoggedOut />}
  else
  {return <NavLinkLoggedIn />}
}
  render() {
    return(
  <Router>
    <div>
      <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
        {this.navLinks(this.props)}
      </div>
      <Route exact path="/" render={() => (<div align="center"><h2>Welcome to My Awesome Math App</h2> <h3> Click Any of the Links Above to Get Started </h3></div>)} />
      <Route path="/login" component={Login} />
      <Route path="/about" component={About} />
      <Route path="/game" component={GamePage} />
      <Route path="/logout" component={Logout} />
      <Route path="/user/games" component={Results} />
      <Route path="/signup" component={Signup} />
    </div>
  </Router>)};}

  const mapStateToProps = state => {
    return {
      user: state.user
    };
  }

export default connect(mapStateToProps)(App);
