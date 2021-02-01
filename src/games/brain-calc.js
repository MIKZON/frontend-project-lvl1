import { getRun, roundsCount } from '../index.js';

const generateNumber = (min, max) => {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
};

const operations = ['+', '-', '*'];
const getAnswer = (num1, num2, character) => {
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
  const randomNumberOne = generateNumber(20, 100);
  const randomNumberTwo = generateNumber(0, 30);
  const randomArr = Math.floor(Math.random() * operations.length);
  const question = `${randomNumberOne} ${operations[randomArr]} ${randomNumberTwo}`;
  const answer = getAnswer(randomNumberOne, randomNumberTwo, operations[randomArr]).toString();

  return [question, answer];
};

const run = () => {
  const description = 'What is the result of the expression?';
  const array = [];

  for (let i = 0; i < roundsCount; i += 1) {
    array.push(makeData());
  }

  getRun(description, array);
};

export default run;
