const dataTypeError = 'incorrect data type';

const addTwoNumbers = (num1, num2) =>
  [num1, num2].every((num) => typeof num === 'number')
    ? num1 + num2
    : dataTypeError;

module.exports = {
  dataTypeError,
  addTwoNumbers
};
