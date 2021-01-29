import getRun from '../index.js';

const getRandomIntInclusive = (min, max) => {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue; // Max and min includes
};

const makeData = () => {
  const question = getRandomIntInclusive(0, 100);
  const answer = question % 2 === 0 ? 'yes' : 'no';

  return [question, answer];
};

const run = () => {
  const discription = 'Answer "yes" if the number is even, otherwise answer "no"';
  const arr = [];

  for (let i = 0; i < 3; i += 1) {
    arr.push(makeData());
  }

  console.log(arr);
  getRun(discription, arr);
};

export default run;
