import run from '../index.js';
import { generateNumber } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers';
const gcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return gcd(num2, num1 % num2);
};

const generateRound = () => {
  const num1 = generateNumber(1, 20);
  const num2 = generateNumber(1, 20);
  const question = `${num1} ${num2}`;
  const answer = gcd(num1, num2).toString();

  return [question, answer];
};

export default () => {
  run(description, generateRound);
};
