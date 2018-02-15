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


//
// fetch('api/users/', {headers: {"Authorization": "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJleHAiOjE1MTg4MTAzNzZ9.AzrPppfUA5SzAcGY_d2OPdj2ykcisNJjh6iqcydCB_4"} }).then(res => res.json())
//       .catch(error => console.error('Error:', error))
//       .then(response => console.log(response))

// export const checkLoginCredentials = (username, password) => {
//   let data = {username: username, password: password}
//   fetch('/authenticate', {
//         body: JSON.stringify(data),
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         method: 'POST'
//       }).then(response => response.json()).then(responseJson => console.log(responseJson))
//
//   }

// export const checkLoginCredentials = (username, password) => {
//   return(dispatch) => {
//     dispatch({ type: 'FIND_USER'});
//
//   }
// }

export const getAllUsers = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_USERS' });
    return fetch('api/users/', {headers: {
      'Authorization': "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0LCJleHAiOjE1M…yNDV9._MGXTe0jQ3xH7GLvHpgjGIZi11dWiYTV5Jh-6y1H2YU"}
    })
        .then((response) => {setTimeout(() => null, 0); return response.json()})
        .then(responseJson => {console.log("hey"); dispatch({ type: 'GET_USERS', payload: responseJson })});

  }
}

export const saveGameToDatabase = () => {
  return (dispatch) => {
    dispatch({ type: 'SAVE_GAME_TO_USER'});
  }
}

export const endSession = () => {
  return (dispatch) => {
    dispatch({ type: 'END_SESSION'});
  }
}

//
