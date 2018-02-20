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
  return (dispatch) => {
    let data = {user: {
      username: userObject.username,
      password: userObject.password,
      password_confirmation: userObject.passwordConfirm,
      first_name: userObject.firstName,
      last_name: userObject.lastName
    }}
    return fetch('/api/users', {
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }).then(response => response.json()).then(responseJson => console.log(responseJson))
  }
}

export const voteUp = (user, gameId) => {
  return (dispatch) => {
    let userId = user.user.user_id;
    let authToken = user.user.auth_token;
    return fetch(`/api/users/${userId}/games/${gameId}/vote_up`,
      {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${authToken}`
        },
        method: 'POST'
      })
      .then(response => response.json())
      .then(responseJson => dispatch({type: 'VOTE_UP', payload: {gameId: responseJson.id, votes:responseJson.votes}}))




  }
}
