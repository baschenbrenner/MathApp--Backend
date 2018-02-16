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
    const results = this.props.user.games.map(result => <li key={result.id}>{result.operation}</li>)
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
