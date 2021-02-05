import run from '../index.js';
import { generateNumber } from '../utils.js';

const isEven = (num) => num % 2 === 0;

const description = 'Answer "yes" if the number is even, otherwise answer "no"';
const generateRound = () => {
  const question = generateNumber(1, 20);
  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => {
  run(description, generateRound);
};
