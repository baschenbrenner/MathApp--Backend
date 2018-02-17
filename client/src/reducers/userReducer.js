export default function userReducer(state = {loading: false, user: null, games: []}, action) {
  switch (action.type) {
    case 'FIND_USER':
      return Object.assign({}, state, {loading: true})

    case 'AUTHENTICATE':
    if (action.payload.error)
      { alert(action.payload.error.user_authentication)
        return Object.assign({}, state, {loading: false})}
    else
      {return Object.assign({}, state, {loading: false, user: action.payload})}

    case 'LOADING_GAMES':
      return Object.assign({}, state, {loading: true})

    case 'UPDATE_GAMES':
      return Object.assign({}, state, {loading: false, games: action.payload})

    case 'END_SESSION':
       return Object.assign({}, state, {user: null})

    default:
      return state;
  }
};
