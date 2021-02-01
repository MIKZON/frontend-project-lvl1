import { getRun, roundsCount } from '../index.js';

const generateNumber = (min, max) => {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue; // Max and min includes
};

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const makeData = () => {
  const question = generateNumber(0, 100);
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

const run = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const array = [];

  for (let i = 0; i < roundsCount; i += 1) {
    array.push(makeData());
  }

  getRun(description, array);
};

export default run;
