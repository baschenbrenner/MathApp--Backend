import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getResults } from '../actions/userActions';
import GameResult from '../components/GameResult';

class Results extends Component {
  constructor() {
      super();
      this.handleOnClick = this.handleOnClick.bind(this)




    }
  handleOnClick() {
    this.props.getResults(this.props.user)
  }


  render(){
    const results = this.props.user.games.map((result) => (
      <GameResult result={result} gameId={result.id} userId={this.props.user.user.user_id} userAuthToken={this.props.user.user.auth_token}/>
    )
      )
    return(
      <div className="container">
        <button onClick={this.handleOnClick}>See Results</button>
        {results}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getResults: getResults
  }, dispatch);
};

function mapStateToProps(state){
  return {user: state.user}
}

export default connect(mapStateToProps, mapDispatchToProps)(Results)
