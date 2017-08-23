const stringTimeReducer = (state = null, action) => {
  switch (action.type) {
    case 'GET_STRING_TIME':
      return action.stringTime;
    default:
      return state;
  }
};

const numberTimeReducer = (state = null, action) => {
  switch (action.type) {
    case 'GET_NUMBER_TIME':
      return action.numberTime;
    default:
      return state;
  }
};

export {
  stringTimeReducer,
  numberTimeReducer
};
