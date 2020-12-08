#!/usr/bin/env node
import readlineSync from 'readline-sync';
import name from '../src/cli.js';
import getRandomIntInclusive from '../src/index.js';

console.log(`Hello, ${name}!`);
console.log('Find the greatest common divisor of given numbers.');

const correctAnswersCheck = 3;
let result = 0;

for (let i = 0; i < correctAnswersCheck; i += 1) {
  const randomNumberOne = getRandomIntInclusive(50, 100);
  const randomNumberTwo = getRandomIntInclusive(0, 70);
  console.log(`Question: ${randomNumberOne} ${randomNumberTwo}`);
  const giveAnswer = readlineSync.question('Your answer: ');
  const firstNum = randomNumberOne;
  const secondNum = randomNumberTwo;
  console.log(firstNum);
  console.log(secondNum);
  const greatestDivisor = (firstNum, secondNum) => {
    if (!secondNum) {
      return firstNum;
    } return greatestDivisor(secondNum, firstNum % secondNum);
  };
console.log(greatestDivisor(firstNum, secondNum));
console.log(giveAnswer);
console.log(greatestDivisor(firstNum, secondNum) === giveAnswer);
  if (greatestDivisor(firstNum, secondNum).toString() === giveAnswer) {
    result += 1;
    console.log('Correct');
} else {
  console.log(`'${giveAnswer}' is wrong answer ;(. Correct answer was '${greatestDivisor(secondNum, firstNum % secondNum.toString())}'. Let's try again, ${name}!`);
  break;
}
}

if (result === correctAnswersCheck) {
  console.log(`Congratulations, ${name}!`);
}
