export default function userReducer(state = {loading: false, user: null, games: []}, action) {
  switch (action.type) {
    case 'FIND_USER':
      return Object.assign({}, state, {loading: true})

    case 'AUTHENTICATE':
      return Object.assign({}, state, {loading: false, user: action.payload})

    case 'LOADING_GAMES':
      return Object.assign({}, state, {loading: true})

    case 'SUBMIT_LOGIN_CREDENTIALS':
      return { loading: false, games: action.payload}

    case 'LOADING_USERS':
      return Object.assign({}, state, {loading: true})

    case 'GET_USERS':
      console.log(action.payload)
      return Object.assign({}, state, {loading: false, users: state.users.concat(action.payload)})

    default:
      return state;
  }
};
