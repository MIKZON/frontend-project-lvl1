import { getRun, roundsCount } from '../index.js';

const generateNumber = (min, max) => {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue; // Max and min includes
};

const makeData = () => {
  const randomNumberOne = generateNumber(20, 100);
  const step = generateNumber(0, 7);
  const array = [];
  for (let i = 0; array.length < 10; i += 1) {
    const currentElement = randomNumberOne + (i - 1) * step;
    array.push(currentElement);
  }
  const randomIndex = generateNumber(0, 9);
  const answer = array[randomIndex].toString();
  array[randomIndex] = '..';
  const question = `${array.join(' ')}`;

  return [question, answer];
};

const run = () => {
  const description = 'What number is missing in the progression?';
  const array = [];

  for (let i = 0; i < roundsCount; i += 1) {
    array.push(makeData());
  }

  getRun(description, array);
};

export default run;
