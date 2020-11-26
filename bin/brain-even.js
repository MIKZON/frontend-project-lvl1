#!/usr/bin/env node
import name from '../src/cli.js';

console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".')

// const randomNumber = Math.floor(Math.random() * 100);
// console.log(`Question: ${randomNumber}`);

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Max and min includes
}
console.log(`Question: ${getRandomIntInclusive(0,100)}`);

if (getRandomIntInclusive % 2 === 0) {

}