import React, { Component } from 'react';

export class ShowProblem extends Component {
    render(){
      return (
        <div className="ShowProblem">
        Solve this:<br/>
          {this.props.firstNumber} {this.props.operationSymbol} {this.props.secondNumber}
        </div>
      );
    }
}



export default ShowProblem;
