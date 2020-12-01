#!/usr/bin/env node
import readlineSync from 'readline-sync';
import name from '../src/cli.js';

console.log(`Hello, ${name}!`);
console.log('What is the result of the expression?');

const operations = ['+', '-', '*'];

const getRandomIntInclusive = (min, max) => {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue; // Max and min includes
};

const correctAnswersCheck = 3;

for (let i = 0; i < correctAnswersCheck; i += 1) {
  const randomNumberOne = getRandomIntInclusive(20, 100);
  const randomNumberTwo = getRandomIntInclusive(0, 30);
  console.log(`Question: ${randomNumberOne} ${randomNumberTwo}`);
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
