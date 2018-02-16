import React from 'react';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import GamePage from './containers/GamePage';
import About from './containers/About';
import Login from './containers/Login';
import Logout from './containers/Logout';
import Results from './containers/Results'

const App = (props) =>
  <Router>
    <div>
      <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
        <NavLink style={{ marginRight: '10px' }} to="/game">Play A Game!</NavLink>
        <NavLink style={{ marginRight: '10px' }} to="/about">Learn More About Math App!</NavLink>
        <NavLink style={{ marginRight: '10px' }} to="/login">Login</NavLink>
        <NavLink style={{ marginRight: '10px' }} to="/logout">Logout</NavLink>
        <NavLink style={{ marginRight: '10px' }} to="/user/games">See Your Previous Results</NavLink>
      </div>
      <Route exact path="/" render={() => <h3>Welcome to My Awesome Math App</h3>} />
      <Route path="/login" component={Login} />
      <Route path="/about" component={About} />
      <Route path="/game" component={GamePage} />
      <Route path="/logout" component={Logout} />
      <Route path="/user/games" component={Results} />
    </div>
  </Router>;

export default App;
