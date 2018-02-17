import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setNumbersForGame, startGame, endGame, resetGame, addUnanswered, saveGameToDatabase } from '../actions/gameActions';
import AnswerInput from '../components/AnswerInput';
import ShowProblem from '../components/ShowProblem';
import ShowResults from '../components/ShowResults';
import GameParameters from '../components/GameParameters';
import '../stylesheets/gamePage.css';

class GamePage extends Component {
  constructor() {
      super();

      this.increaseIndex = this.increaseIndex.bind(this)
      this.subtractTime = this.subtractTime.bind(this)
      this.startGame = this.startGame.bind(this)
      this.restartTimer = this.restartTimer.bind(this)
      this.resetGame = this.resetGame.bind(this)
      this.setTotalTime = this.setTotalTime.bind(this)
      this.saveGame = this.saveGame.bind(this)

      this.state = {
        index: 0,
        totalTimeLeft: 50,
        questionTimeLeft: 5
      };
    }

increaseIndex() {
  this.setState({
    index: this.state.index + 1,
  })
}



subtractTime() {
  let totalLeft = this.state.totalTimeLeft - 1
  let questionTimeLeft = this.state.questionTimeLeft - 1
  this.setState({
      totalTimeLeft: totalLeft,
       questionTimeLeft: questionTimeLeft
  })
  if ((this.state.totalTimeLeft > 0) && (this.props.game.status === "started"))
  {
      if (this.state.questionTimeLeft === 0)
        { this.props.addUnanswered()
          this.increaseIndex()
          this.setState({
            questionTimeLeft: 5
          })
          setTimeout(this.subtractTime,1000)
        }
      else {setTimeout(this.subtractTime,1000)}
    }
}

startTimers() {
  setTimeout(this.subtractTime,1000)
}

startGame = () => {
  this.props.setNumbersForGame(this.props.game.numberOfQuestions,this.props.game.topNumber,this.props.game.bottomNumber)
  this.setState({
    index: 1
  })
  this.props.startGame()
  this.setTotalTime()
  this.startTimers()
}

saveGame = () => {
  let gameData = this.props.game
  if (gameData.status === "finished")
   {this.props.saveGameToDatabase(this.props.user, gameData)}
  else {
    alert("The game needs to be finished to be saved")
  }

}


restartTimer() {
  let currentIndex = this.state.index
  if (currentIndex < this.props.game.numberOfQuestions)
      {this.setState({
        index: currentIndex + 1,
        questionTimeLeft: 5
      })}
  else
      {this.props.endGame()}
}

resetGame() {
  this.props.resetGame()
  this.setState({
    index: 0,
    questionTimeLeft: this.props.game.timePerQuestion
  })
}

setTotalTime() {
  this.setState({
    totalTimeLeft: this.props.game.timePerQuestion * this.props.game.numberOfQuestions
  })
}
// componentDidUpdate() {
//   console.log("My index is " + this.state.index)
//   console.log(Date.now())
//
// }

renderOperationSymbol() {
  if (this.props.game.operation === "multiplication")
  {return "x"}
  else if (this.props.game.operation === "addition")
  {return "+"}
  else {return ""}
}

renderGameParametersIfLoggedIn(props) {
  if (props.user !== null)
   {return <GameParameters />}
}

renderSaveButton(props) {
  if (props.user !== null)
  {return <button className="ButtonStyle" onClick={this.saveGame}>Save Game</button>}
}

  render() {



    return (
      <div align="center">
        {this.renderGameParametersIfLoggedIn(this.props.user)}
        <br/>
        <ShowProblem firstNumber={this.props.game.numberSetA[this.state.index]} operationSymbol={this.renderOperationSymbol()} secondNumber={this.props.game.numberSetB[this.state.index]} />
        <AnswerInput index={this.state.index} restartTimer={this.restartTimer}/>
        <br/>
        <br/>
        <br/>
        <ShowResults
         status={this.props.game.status}
         correct={this.props.game.numberCorrect}
         incorrect={this.props.game.numberIncorrect}
         unanswered={this.props.game.numberUnanswered}
         timeLeft={this.state.totalTimeLeft}/>
        <br/>
        <div id="buttons">
          <button className="ButtonStyle" onClick={this.startGame}>Start Game</button>
          <button className="ButtonStyle" onClick={this.resetGame}>Reset Game</button>
          <br />
          {this.renderSaveButton(this.props.user)}
        </div>
          <br/>

        <h2>Time Left for Question: {this.state.questionTimeLeft}</h2>

        <h2>Time Left for Game: {this.state.totalTimeLeft}</h2>

      </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
      endGame: endGame,
      startGame: startGame,
      setNumbersForGame: setNumbersForGame,
      resetGame: resetGame,
      addUnanswered: addUnanswered,
      saveGameToDatabase: saveGameToDatabase
    }, dispatch);
  };

const mapStateToProps = state => {
  return {
    game: state.game,
    user: state.user
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
