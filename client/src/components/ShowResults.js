import React from 'react';

function precisionRound(number, precision) {
  var factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
}

function calculateAverage(x,y,a,b,c) {
  return precisionRound((x-y)/(a+b+c), 1)
}

function Finished(props) {

  return <div>
  <h1>Correct: {props.correct} Incorrect: {props.incorrect} Unanswered: {props.unanswered}</h1>
  <h2> Time Left: {props.timeLeft} Average Time Per Question: {calculateAverage(props.totalTime,props.timeLeft,props.correct,props.incorrect,props.unanswered)}</h2>
  <h3> Press Reset Game To Clear Results and Prepare for New Game </h3>
  </div>;
}

function Unstarted(props) {
  return <h1>Press Start Game to Start</h1>;
}

function Started(props) {
  return <h1>Good Luck!</h1>;
}

function ShowResults(props) {
  const status = props.status
  switch (status) {
    case 'unstarted':
      return <Unstarted />;
    case 'started':
      return <Started />
    case 'finished':
      return <Finished correct={props.correct} incorrect={props.incorrect} unanswered={props.unanswered} timeLeft={props.timeLeft} totalTime={props.totalTime}/>
    default:
      return {}
  }
}

export default ShowResults;
