#!/usr/bin/env node
import readlineSync from 'readline-sync';
import name from '../src/cli.js';

console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const getRandomIntInclusive = (min, max) => {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue; // Max and min includes
};

let result = 0;
const correctAnswersCheck = 3;

for (let i = 0; i < correctAnswersCheck; i += 1) {
  const randomNumber = getRandomIntInclusive(0, 100);
  console.log(`Question: ${randomNumber}`);
  const giveAnswer = readlineSync.question('Your answer: ');
  if (randomNumber % 2 === 0 && giveAnswer === 'yes') {
    result += 1;
    console.log('Correct!');
  } else if (randomNumber % 2 === 1 && giveAnswer === 'no') {
    result += 1;
    console.log('Correct!');
  } else {
    break;
  }
}

if (result === correctAnswersCheck) {
  console.log(`Congratulations, ${name}!`);
} else {
  console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
}
