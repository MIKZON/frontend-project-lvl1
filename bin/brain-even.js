#!/usr/bin/env node
import name from '../src/cli.js';
import readlineSync from 'readline-sync';

console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".')


const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Max and min includes
}

let result = 0;
let correctAnswersCheck = 3;

for (let i = 0; i < correctAnswersCheck; i += 1) {
  let randomNumber = getRandomIntInclusive(0, 100);
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
  console.log(`Congratulations, ${name}!`)
} else {
  console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
}
