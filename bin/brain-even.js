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
let randomNumber = getRandomIntInclusive;
console.log(`Question: ${getRandomIntInclusive(0,100)}`);

const giveAnswer = readlineSync.question('Your answer: ');
let checkAnswer = giveAnswer
let result = 0;
let correctAnswersCheck = 3; 
// const wrongAnswer = console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);

for (let i = 0; i < correctAnswersCheck; i += 1) {
  if (randomNumber % 2 === 0 && checkAnswer === 'yes') {
    
  } if (randomNumber % 2 === 1 && checkAnswer === 'no') {
    
  }
}