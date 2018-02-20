import React, { Component } from 'react';

class GameResult extends Component {
  constructor() {
      super();
      //this.increaseVotes = this.increaseVotes.bind(this)
      this.callApi = this.callApi.bind(this)
      this.state = {
        votes: 0
      };


    }

    increaseVotes = () => {

      this.setState({
        votes: this.state.votes + 1
      })
    }

    callApi() {
      console.log('a')
    fetch(`/api/users/${this.props.userId}/games`, {
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `${this.props.userAuthToken}`
              }
            })
            .then(response =>  {
              console.log('b')
              return response.json()
            })
            .then(responseJson => console.log('c',responseJson))
            .catch(err => console.log('d', err))
            console.log('e')
    // a c b e
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
          Number Of Votes: {this.state.votes}
          <button onClick={this.increaseVotes}>Vote Up</button>
          <button onClick={this.callApi}>Call Api</button>
        </div>



      )

    }
}



export default GameResult;
