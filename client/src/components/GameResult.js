import React, { Component } from 'react';

class GameResult extends Component {
  constructor() {
      super();


    }

    increaseVotes = () => {

      this.setState({
        votes: this.state.votes + 1
      })
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
          <button onClick={this.callApi}>Call Api</button>
        </div>



      )

    }
}



export default GameResult;
