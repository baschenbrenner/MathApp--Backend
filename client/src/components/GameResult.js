import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { voteUp } from '../actions/userActions';

class GameResult extends Component {
  constructor() {
      super();
      this.increaseVotes = this.increaseVotes.bind(this)

    }

    increaseVotes() {
          this.props.voteUp(this.props.user, this.props.result.id)
    }


    render(){

      const  { result, index }= this.props
      return(

        <div key={result.id}>
          <ul> Game {index+1}
          <li>Operation: {result.operation}</li>
          <li>Time Per Question: {result.time_per_question}</li>
          <li>Number of Questions: {result.number_of_questions}</li>
          <li>Percent Correct: {Math.floor(result.number_correct/result.number_of_questions*100)}%</li>
          </ul>
          Number Of Votes: {result.votes}
          <button onClick={this.increaseVotes}>Vote Up</button>
        </div>



      )

    }
}

function mapStateToProps(state) {
  return {user: state.user}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    voteUp: voteUp
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(GameResult);
