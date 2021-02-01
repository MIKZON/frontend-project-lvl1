import { run, roundsCount } from '../index.js';
import generateNumber from '../ut.js';

const makeData = () => {
  const question = generateNumber(1, 20);
  const answer = question % 2 === 0 ? 'yes' : 'no';

  return [question, answer];
};

export default () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no"';
  const rounds = [];

  for (let i = 0; i < roundsCount; i += 1) {
    rounds.push(makeData());
  }

  run(description, rounds);
};
