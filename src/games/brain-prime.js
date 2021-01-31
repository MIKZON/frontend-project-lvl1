import getRun from '../index.js';

const getRandomIntInclusive = (min, max) => {
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
  const question = getRandomIntInclusive(0, 100);
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

const run = () => {
  const discription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const arr = [];

  for (let i = 0; i < 3; i += 1) {
    arr.push(makeData());
  }

  getRun(discription, arr);
};

export default run;
