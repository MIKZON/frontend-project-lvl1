import { run, roundsCount } from '../index.js';
import generateNumber from '../ut.js';

const greatestDivisor = (num1, num2) => {
  if (!num2) {
    return num1;
  }
  return greatestDivisor(num2, num1 % num2);
};

const makeData = () => {
  const num1 = generateNumber(1, 20);
  const num2 = generateNumber(1, 20);
  const question = `${num1} ${num2}`;
  const answer = greatestDivisor(num1, num2).toString();

  return [question, answer];
};

export default () => {
  const description = 'Find the greatest common divisor of given numbers';
  const rounds = [];

  for (let i = 0; i < roundsCount; i += 1) {
    rounds.push(makeData());
  }

  run(description, rounds);
};
