import React from 'react';
import { changeGameParameters } from '../actions/gameActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../stylesheets/slider.css';

export class GameParameters extends React.Component {
  constructor(props){
    super(props);


    this.state = {
      operation: "multiplication",
      numberOfQuestions: 5,
      topNumber: 12,
      bottomNumber: 6,
      timePerQuestion: 5
    };
  }

  handleQChange = (event) => {
    this.setState({
        numberOfQuestions: event.target.value
    })
  }
  handleTopChange = (event) => {
    this.setState({
         topNumber: event.target.value
    })
  }

  handleBottomChange = (event) => {
    this.setState({
      bottomNumber: event.target.value
    })
  }


  handleSubmit = (event) => {
    event.preventDefault();
    this.props.changeGameParameters(this.state)

  }

  handleSliderChange = (event) => {
  var slider = document.getElementById("timePerQuestion");
  var output = document.getElementById("demo");
  output.innerHTML = slider.value;
  slider.oninput = function() {output.innerHTML = this.value;}
  this.setState({
    timePerQuestion: slider.value
  })
  }

  handleOpChange = (event) => {
    this.setState({
      operation: event.target.value
    })
  }

    render(){
      return(
      <div>
        <h1> Game Options</h1>
        <form>
          Number of Questions:
          <input type="text"
                 name="numberOfQuestions"
                 value={this.state.numberOfQuestions}
                 onChange={this.handleQChange}
                 placeholder="How many questions do you want?"
                 /> <br/>

         <div className="slidecontainer">
            <input type="range" min="5" max="10" value={this.state.timePerQuestion} className="slider" id="timePerQuestion" onChange={this.handleSliderChange}/>
          </div>
          Time Per Question: <div id="demo">{this.state.timePerQuestion}</div>

          I want to test numbers between
          <input type="text"
                 name="bottomNumber"
                 value={this.state.bottomNumber}
                 onChange={this.handleBottomChange}
                 placeholder="Bottom Number"
                 />
          and
          <input type="text"
                 name="topNumber"
                 value={this.state.topNumber}
                 onChange={this.handleTopChange}
                 placeHolder="Bottom Number"
                 />
          <input type="submit" onClick={this.handleSubmit}/> <br/>
          Operation <br/>
          <div onChange={this.handleOpChange}>
            <input type="radio" name="operation" value="multiplication" id="mult" checked={(this.state.operation === "multiplication")}/> Multiplication<br/>
            <input type="radio" name="operation" value="addition" id="add" checked={(this.state.operation === "addition")}/> Addition<br/>
          </div>
        </form>
      </div>

    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
      changeGameParameters: changeGameParameters
    }, dispatch);
  };

export default connect(null, mapDispatchToProps)(GameParameters)
