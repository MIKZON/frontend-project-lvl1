import getRun from '../../src/index.js';

const run = () => {
  const discription = 'Answer "yes" if the number is even, otherwise answer "no"';
  const getRandomIntInclusive = (min, max) => {
    const minValue = Math.ceil(min);
    const maxValue = Math.floor(max);
    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue; // Max and min includes
  };

  const question = getRandomIntInclusive(0, 100);
  const arr = [[10, 'yes'], [20, 'yes'], [30, 'yes']];
  const answer = question % 2 === 0;
  if (answer === true) {
    getRun(discription, arr);
  }
  if (answer === false) {
    getRun(discription, arr);
  }
};

export default run;
