import readlineSync from 'readline-sync';

export const roundsCount = 3;

const run = (description, makeRound) => {
  console.log('Welcome to the Brain Games');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);

  const iter = (i) => {
    if (i === roundsCount) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const [question, answer] = makeRound();
    console.log(`Question: ${question}`);

    const giveAnswer = readlineSync.question('Your answer: ');
    if (answer !== giveAnswer) {
      console.log(`'${giveAnswer}' is wrong answer ;(. Correct answer was '${answer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
    iter(i + 1);
  };

  iter(0);
};

export default run;
