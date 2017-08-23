const getStringTime = () => {
  const now = new Date();
  return {
    type: 'GET_STRING_TIME',
    stringTime: now.toString()
  };
};

const getNumberTime = () => {
  const now = new Date();
  return {
    type: 'GET_NUMBER_TIME',
    numberTime: now.getTime()
  };
};

export {
  getStringTime,
  getNumberTime
};
