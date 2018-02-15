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

export const saveGameToDatabase = (user) => {
  debugger;
  // fetch('api/users//games/')
}
export const checkLoginCredentials = (username, password) => {
  let data = {username: username, password: password}
  fetch('/authenticate', {
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }).then(response => response.json()).then(responseJson => console.log(responseJson))

  }
