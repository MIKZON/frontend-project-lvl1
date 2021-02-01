import { getRun, roundsCount } from '../index.js';

const generateNumber = (min, max) => {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
};

const makeData = () => {
  const question = generateNumber(0, 100);
  const answer = question % 2 === 0 ? 'yes' : 'no';

  return [question, answer];
};

const run = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no"';
  const array = [];

  for (let i = 0; i < roundsCount; i += 1) {
    array.push(makeData());
  }

  getRun(description, array);
};

export default run;
