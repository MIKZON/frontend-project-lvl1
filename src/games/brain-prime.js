import run from '../index.js';
import { generateNumber } from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const question = generateNumber(1, 20);
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => {
  run(description, generateRound);
};
