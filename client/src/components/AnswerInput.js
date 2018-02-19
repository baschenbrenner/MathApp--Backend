import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkAnswer } from '../actions/gameActions'
import { bindActionCreators } from 'redux';

class AnswerInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      answer: ''
    };
  }

    handleOnSubmit = event => {
      event.preventDefault();
      this.props.checkAnswer(this.state.answer, this.props.index);
      this.setState({
        answer: ""
      })
      this.props.restartTimer()
    }

    handleOnChange = event => {
      this.setState({
        answer: event.target.value
      });
    }

    render(){
      return (
        <form style={{ marginTop: '16px' }} onSubmit={this.handleOnSubmit} >
          <h2> {this.props.gameStatus} </h2>
          <input
            type="text"
            onChange={this.handleOnChange}
            placeholder="Answer"
            value={this.state.answer}/>
          <input type="submit" value="Submit Answer" />
        </form>
      );
    }


}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
      checkAnswer: checkAnswer
    }, dispatch);
  };


export default connect(null, mapDispatchToProps)(AnswerInput)
