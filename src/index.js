import readlineSync from 'readline-sync';

export const roundsCount = 3;

export const getRun = (description, array) => {
  let result = 0;
  console.log('Welcome to the Brain Games');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);

  for (let i = 0; i < roundsCount; i += 1) {
    const data = array[i];
    const question = data[0];
    console.log(`Question: ${question}`);
    const answer = data[1];

    const giveAnswer = readlineSync.question('Your answer: ');
    if (answer === giveAnswer) {
      result += 1;
      console.log('Correct!');
    } else {
      console.log(`'${giveAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${name}!`);
      break;
    }
  }
  if (result === roundsCount) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default getRun;
