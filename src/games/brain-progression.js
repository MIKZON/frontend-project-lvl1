import { run, roundsCount } from '../index.js';
import generateNumber from '../ut.js';

const makeData = () => {
  const num1 = generateNumber(1, 20);
  const step = generateNumber(0, 7);
  const rounds = [];
  for (let i = 0; rounds.length < 10; i += 1) {
    const currentElement = num1 + (i - 1) * step;
    rounds.push(currentElement);
  }
  const randomIndex = generateNumber(0, 9);
  const answer = rounds[randomIndex].toString();
  rounds[randomIndex] = '..';
  const question = `${rounds.join(' ')}`;

  return [question, answer];
};

export default () => {
  const description = 'What number is missing in the progression?';
  const rounds = [];

  for (let i = 0; i < roundsCount; i += 1) {
    rounds.push(makeData());
  }

  run(description, rounds);
};
