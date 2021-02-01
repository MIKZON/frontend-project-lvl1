import { run, roundsCount } from '../index.js';
import generateNumber from '../ut.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const makeData = () => {
  const question = generateNumber(1, 20);
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const rounds = [];

  for (let i = 0; i < roundsCount; i += 1) {
    rounds.push(makeData());
  }

  run(description, rounds);
};
