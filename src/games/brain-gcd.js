import getRun from '../index.js';

const getRandomIntInclusive = (min, max) => {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue; // Max and min includes
};

const greatestDivisor = (firstNum, secondNum) => {
  if (!secondNum) {
    return firstNum;
  } return greatestDivisor(secondNum, firstNum % secondNum);
};

const makeData = () => {
  const randomNumberOne = getRandomIntInclusive(20, 100);
  const randomNumberTwo = getRandomIntInclusive(0, 30);
  const question = `${randomNumberOne} ${randomNumberTwo}`;
  const answer = greatestDivisor(randomNumberOne, randomNumberTwo).toString();

  return [question, answer];
};

const run = () => {
  const discription = 'Find the greatest common divisor of given numbers';
  const arr = [];

  for (let i = 0; i < 3; i += 1) {
    arr.push(makeData());
  }

  console.log(arr);
  getRun(discription, arr);
};

export default run;
