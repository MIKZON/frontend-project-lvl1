import { run, roundsCount } from '../index.js';
import generateNumber from '../ut.js';

const operations = ['+', '-', '*'];
const getNumber = (num1, num2, character) => {
  switch (character) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    default:
      return num1 * num2;
  }
  //  throw new Error(`Unknown character -- ${character}`);
};
const makeData = () => {
  const num1 = generateNumber(1, 20);
  const num2 = generateNumber(1, 20);
  const randomNum = Math.floor(Math.random() * operations.length);
  const question = `${num1} ${operations[randomNum]} ${num2}`;
  const answer = getNumber(num1, num2, operations[randomNum]).toString();

  return [question, answer];
};

export default () => {
  const description = 'What is the result of the expression?';
  const rounds = [];

  for (let i = 0; i < roundsCount; i += 1) {
    rounds.push(makeData());
  }

  run(description, rounds);
};
