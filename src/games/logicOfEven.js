import readlineSync from 'readline-sync';

const even = () => {
  console.log('Welcome to the Brain Games!');
  const gamerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${gamerName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let counter = 0;
  while (counter < 3) {
    const question = Math.floor(Math.random() * 100);
    console.log(question);
    const gamerAnswer = readlineSync.question('Your answer: ');
    if (question % 2 === 0) {
      if (gamerAnswer === 'yes') {
        console.log('Correct!');
      }
      if (gamerAnswer !== 'yes') {
        console.log(`"${gamerAnswer}" is wrong answer ;(. Correct answer was "yes".`);
        console.log(`Let's try again, ${gamerName}!`);
        break;
      }
    }
    if (question % 2 !== 0) {
      if (gamerAnswer === 'no') {
        console.log('Correct!');
      }
      if (gamerAnswer !== 'no') {
        console.log(`"${gamerAnswer}" is wrong answer ;(. Correct answer was "no".`);
        console.log(`Let's try again, ${gamerName}!`);
        break;
      }
    }
    counter += 1;
    if (counter === 3) {
      console.log(`Congratulations, ${gamerName}!`);
    }
  }
};

export default even;
