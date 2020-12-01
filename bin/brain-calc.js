#!/usr/bin/env node
import readlineSync from 'readline-sync';
import name from '../src/cli.js';

console.log(`Hello, ${name}!`);
console.log('What is the result of the expression?');