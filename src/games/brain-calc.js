import run from '../index.js';
import { generateNumber } from '../utils.js';

const description = 'What is the result of the expression?';
const operations = '+-*';
const calculate = (num1, num2, character) => {
  switch (character) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown character -- ${character}`);
  }
};
const generateRound = () => {
  const num1 = generateNumber(1, 20);
  const num2 = generateNumber(1, 20);
  const randomNum = generateNumber(0, operations.length - 1);
  const question = `${num1} ${operations[randomNum]} ${num2}`;
  const answer = calculate(num1, num2, operations[randomNum]).toString();

  return [question, answer];
};

export default () => {
  run(description, generateRound);
};
