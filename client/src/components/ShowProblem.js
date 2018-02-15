import React, { Component } from 'react';
import { connect } from 'react-redux';

export class ShowProblem extends Component {

    render(){
      return (
        {this.props.setA[1]} x {this.props.setB[1]}
      );
    }
}

const mapStateToProps = state => {
  return {
    setA: numberSetA,
    setB: numberSetB
  }
}

export default connect(mapStateToProps)(ShowProblem)
