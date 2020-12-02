#!/usr/bin/env node
import readlineSync from 'readline-sync';
import name from '../src/cli.js';
import getRandomIntInclusive from '../src/index.js';

console.log(`Hello, ${name}!`);
console.log('What is the result of the expression?');

const operations = ['+', '-', '*'];
const correctAnswersCheck = 3;
let result = 0;

for (let i = 0; i < correctAnswersCheck; i += 1) {
  const randomNumberOne = getRandomIntInclusive(20, 100);
  const randomNumberTwo = getRandomIntInclusive(0, 30);
  const randomArr = Math.floor(Math.random() * operations.length);
  const calculationsNumbers = eval(`${randomNumberOne} ${operations[randomArr]} ${randomNumberTwo}`).toString();
  console.log(`Question: ${randomNumberOne} ${operations[randomArr]} ${randomNumberTwo}`);
  const giveAnswer = readlineSync.question('Your answer: ');
  if (calculationsNumbers === giveAnswer) {
    result += 1;
    console.log('Correct!');
  } else {
    console.log(`'${giveAnswer}' is wrong answer ;(. Correct answer was '${calculationsNumbers}'. Let's try again, ${name}!`);
    break;
  }
}

if (result === correctAnswersCheck) {
  console.log(`Congratulations, ${name}!`);
}
