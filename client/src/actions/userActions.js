import fetch from 'isomorphic-fetch';

export const checkLoginCredentials = (username, password) => {
  return (dispatch) => {
    dispatch({ type: 'FIND_USER'});
    let data = {username: username, password: password}
    return fetch('/authenticate', {
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }).then(response => response.json()).then(responseJson => dispatch({ type: 'AUTHENTICATE', payload: responseJson }))
  }
}


export const getResults = (user) => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_GAMES' });
    let userId = user.user.user_id;
    let authToken = user.user.auth_token
    return fetch(`../api/users/${userId}/games`, {headers: {
      'Authorization': `${authToken}` }})
        .then((response) =>  response.json())
        .then(responseJson => dispatch({ type: 'UPDATE_GAMES', payload: responseJson}));
  }
}

export const endSession = () => {
  return (dispatch) => {
    dispatch({ type: 'END_SESSION'});
  }
}

export const makeNewUser = (userObject) => {
  debugger;
}
