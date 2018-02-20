export default function userReducer(state = {loading: false, user: null, games: []}, action) {
  switch (action.type) {
    case 'FIND_USER':
      return Object.assign({}, state, {loading: true})

    case 'AUTHENTICATE':
    if (action.payload.error)
      { alert(action.payload.error.user_authentication)
        return Object.assign({}, state, {loading: false})}
    else
      { return Object.assign({}, state, {loading: false, user: action.payload})}

    case 'LOADING_GAMES':
      return Object.assign({}, state, {loading: true})

    case 'UPDATE_GAMES':
      let games = action.payload
      let sortGames = games.sort(function(a,b) {return b.votes-a.votes})
      return Object.assign({}, state, {loading: false, games: sortGames})

    case 'END_SESSION':
       return Object.assign({}, state, {user: null})

    case 'VOTE_UP':
      let game = state.games.filter(function x(game) {return game.id === action.payload.gameId})
      game[0].votes = action.payload.votes
      let otherGames = state.games.filter(function x(game) {return game.id !== action.payload.gameId})
      let allGames = otherGames.concat(game)
      let sortedGames = allGames.sort(function(a,b) {return b.votes-a.votes})

      return Object.assign({}, state, {games: sortedGames})

    default:
      return state;
  }
};
