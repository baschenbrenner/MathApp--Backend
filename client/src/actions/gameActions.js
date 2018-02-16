export const setNumbersForGame = (numberOfQuestions,topNumber,bottomNumber) => {
  return {
    type: 'SET_NUMBERS_FOR_GAME',
    numberOfQuestions: numberOfQuestions,
    topNumber: topNumber,
    bottomNumber: bottomNumber
  };
};

export const checkAnswer = (answer, index) => {
  return {
    type: 'CHECK_ANSWER',
    answer: answer,
    index: index
  };
};

export const startGame = () => {
  return {
    type: 'START_GAME'
  };
};

export const endGame = () => {
  return {
    type: 'END_GAME'
  };
};

export const resetGame = () => {
  return {
    type: 'RESET_GAME'
  };
};

export const addUnanswered = () => {
  return {
    type: 'ADD_UNANSWERED'
  };
};

export const changeGameParameters = (object) => {
  return {
    type: 'CHANGE_GAME_PARAMETERS',
    operation: object.operation,
    timePerQuestion: object.timePerQuestion,
    topNumber: object.topNumber,
    bottomNumber: object.bottomNumber,
    numberOfQuestions: object.numberOfQuestions
  };
};

export const saveGameToDatabase = (user, gameData) => {
  return (dispatch) => {
  let userId = user.user.user_id;
  let authToken = user.user.auth_token;
  let data = gameData;
  dispatch({ type: 'SAVE_GAME'});
  return fetch(`api/users/${userId}/games`, {
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `${authToken}`
          },
          method: 'POST'
        }).then(response =>  response.json()).then(responseJson => console.log(responseJson))
    }
}
