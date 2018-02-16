export default (state = {
  numberSetA: [],
  numberSetB: [],
  operation: "multiplication",
  timePerQuestion: 5,
  numberOfQuestions: 10,
  topNumber: 12,
  bottomNumber: 7,
  numberCorrect: 0,
  numberIncorrect: 0,
  numberUnanswered: 0,
  status: "unstarted"

}, action) => {
  switch (action.type) {

    case 'CHANGE_GAME_PARAMETERS':
      return Object.assign({}, state, {operation: action.operation, timePerQuestion: parseInt(action.timePerQuestion, 10), numberOfQuestions: parseInt(action.numberOfQuestions, 10), topNumber: parseInt(action.topNumber, 10), bottomNumber: parseInt(action.bottomNumber, 10)})

    case 'SET_NUMBERS_FOR_GAME':
      let n = action.numberOfQuestions
      let t = state.topNumber
      let b = state.bottomNumber
      let setA = [""]
      let setB = [""]
        for (let i=1;i<n+1;i++)
        {setA[i]= Math.floor(Math.random() * (t-b+1))+b;
         setB[i]= Math.floor(Math.random() * (t-b+1))+b;}

      return Object.assign({}, state, { numberSetA: setA, numberSetB: setB})

    case 'START_GAME':
      return Object.assign({},state, {status: "started"})

    case 'END_GAME':
      return Object.assign({},state, {status: "finished"})

    case 'RESET_GAME':
      return Object.assign({},state, {status: "unstarted"})

    case 'ADD_UNANSWERED':
      let newNumberUnanswered = state.numberUnanswered + 1
      return Object.assign({},state, {numberUnanswered: newNumberUnanswered})


    case 'CHECK_ANSWER':
      let suppliedAnswer = action.answer;
      let problemNumber = action.index;
      let rightAnswer;
      let newNumberCorrect = state.numberCorrect;
      let newNumberIncorrect = state.numberIncorrect;

      switch(state.operation){
        case 'multiplication':
           rightAnswer = state.numberSetA[problemNumber]*state.numberSetB[problemNumber];
           break
        case 'addition':
          rightAnswer = state.numberSetA[problemNumber]+state.numberSetB[problemNumber]
          break
        default:
          break
        }


          if (parseInt(suppliedAnswer, 10) === rightAnswer)
            { newNumberCorrect += 1}
          else
            { newNumberIncorrect += 1}

      return Object.assign({}, state, {numberCorrect: newNumberCorrect, numberIncorrect: newNumberIncorrect})

      
    case 'SAVE_GAME':
      return Object.assign({}, state, {
        numberSetA: [],
        numberSetB: [],
        operation: "multiplication",
        timePerQuestion: 5,
        numberOfQuestions: 10,
        topNumber: 12,
        bottomNumber: 7,
        numberCorrect: 0,
        numberIncorrect: 0,
        numberUnanswered: 0,
        status: "unstarted"

      })

    default:
      return state;
  }
};
