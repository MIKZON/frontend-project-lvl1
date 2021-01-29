import readlineSync from 'readline-sync';

const getRun = (discription, arr) => {
  const correctAnswersCheck = 3;
  let result = 0;
  console.log('Welcome to the Brain Games');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(discription);
  for (let i = 0; i < correctAnswersCheck; i += 1) {
    const data = arr[i];
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
  if (result === correctAnswersCheck) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default getRun;
