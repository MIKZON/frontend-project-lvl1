import run from '../index.js';
import { generateNumber } from '../utils.js';

const description = 'What number is missing in the progression?';
const progressionLength = 10;
const generateProgression = () => {
  const firstElement = generateNumber(1, 20);
  const step = generateNumber(0, 7);
  const progression = [];
  for (let i = 0; progression.length < progressionLength; i += 1) {
    const currentElement = firstElement + i * step;
    progression.push(currentElement);
  }
  return progression;
};

const generateRound = () => {
  const progression = generateProgression();
  const hiddenNumberIndex = generateNumber(0, progressionLength - 1);
  const answer = progression[hiddenNumberIndex].toString();
  progression[hiddenNumberIndex] = '..';
  const question = progression.join(' ');

  return [question, answer];
};

export default () => {
  run(description, generateRound);
};
