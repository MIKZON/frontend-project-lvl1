import getRun from '../../src/index.js';

const getRandomIntInclusive = (min, max) => {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue; // Max and min includes
};

const operations = ['+', '-', '*'];
const getAnswer = (num1, num2, character) => {
  console.log(num1, num2, character);
  if (character === '-') {
    return num1 - num2;
  } if (character === '+') {
    return num1 + num2;
  } if (character === '*') {
    return num1 * num2;
  }
  throw new Error(`Unknown character -- ${character}`);
};
const makeData = () => {
  const randomNumberOne = getRandomIntInclusive(20, 100);
  const randomNumberTwo = getRandomIntInclusive(0, 30);
  const randomArr = Math.floor(Math.random() * operations.length);
  const question = `${randomNumberOne} ${operations[randomArr]} ${randomNumberTwo}`;
  const answer = getAnswer(randomNumberOne, randomNumberTwo, operations[randomArr]).toString();

  return [question, answer];
};

const run = () => {
  const discription = 'What is the result of the expression?';
  const arr = [];

  for (let i = 0; i < 3; i += 1) {
    arr.push(makeData());
  }

  console.log(arr);
  getRun(discription, arr);
};

export default run;
