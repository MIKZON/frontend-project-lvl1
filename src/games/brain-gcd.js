import { getRun, roundsCount } from '../index.js';

const generateNumber = (min, max) => {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
};

const greatestDivisor = (firstNum, secondNum) => {
  if (!secondNum) {
    return firstNum;
  }
  return greatestDivisor(secondNum, firstNum % secondNum);
};

const makeData = () => {
  const randomNumberOne = generateNumber(20, 100);
  const randomNumberTwo = generateNumber(0, 30);
  const question = `${randomNumberOne} ${randomNumberTwo}`;
  const answer = greatestDivisor(randomNumberOne, randomNumberTwo).toString();

  return [question, answer];
};

const run = () => {
  const description = 'Find the greatest common divisor of given numbers';
  const array = [];

  for (let i = 0; i < roundsCount; i += 1) {
    array.push(makeData());
  }

  getRun(description, array);
};

export default run;
