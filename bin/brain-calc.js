#!/usr/bin/env node
import readlineSync from 'readline-sync';
import name from '../src/cli.js';
import getRandomIntInclusive from '../src/index.js';

console.log(`Hello, ${name}!`);
console.log('What is the result of the expression?');

const operations = ['+', '-', '*'];
const randomArr = Math.floor(Math.random() * operations.length);
console.log(operations[randomArr]);

const correctAnswersCheck = 3;

for (let i = 0; i < correctAnswersCheck; i += 1) {
  const randomNumberOne = getRandomIntInclusive(20, 100);
  const randomNumberTwo = getRandomIntInclusive(0, 30);
  console.log(`Question: ${randomNumberOne} ${operations[randomArr]} ${randomNumberTwo}`);
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
