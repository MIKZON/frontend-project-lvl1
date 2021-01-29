import getRun from '../index.js';

const getRandomIntInclusive = (min, max) => {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue; // Max and min includes
};

const makeData = () => {
  const randomNumberOne = getRandomIntInclusive(20, 100);
  const step = getRandomIntInclusive(0, 7);
  const arr = [];
  for (let i = 0; arr.length < 10; i += 1) {
    const currentElement = randomNumberOne + (i - 1) * step;
    arr.push(currentElement);
  }
  const randomIndex = getRandomIntInclusive(0, 9);
  const answer = arr[randomIndex].toString();
  arr[randomIndex] = '..';
  const question = `${arr.join(' ')}`;

  return [question, answer];
};

const run = () => {
  const discription = 'What number is missing in the progression?';
  const arr = [];

  for (let i = 0; i < 3; i += 1) {
    arr.push(makeData());
  }

  getRun(discription, arr);
};

export default run;
