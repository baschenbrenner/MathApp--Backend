import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getResults } from '../actions/userActions';

class Results extends Component {
  constructor() {
      super();
      this.handleOnClick = this.handleOnClick.bind(this)
    }
  handleOnClick() {
    this.props.getResults(this.props.user)
  }


  render(){
    const results = this.props.user.games.map((result,index) => (
      <div key={result.id}>
        <ul> Game {index+1}
        <li>Operation: {result.operation}</li>
        <li>Time Per Question: {result.time_per_question}</li>
        <li>Number of Questions: {result.number_of_questions}</li>
        <li>Percent Correct: {Math.floor(result.number_correct/result.number_of_questions*100)}%</li>
        </ul>
      </div>
    )
      )
    return(
      <div>
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
