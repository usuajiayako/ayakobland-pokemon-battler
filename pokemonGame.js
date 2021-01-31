const inquirer = require('inquirer');
const { Pokemon, Trainer, Battle } = require('./pokemon')

const firstQuestions = [
  {
    type: 'input',
    name: 'trainerName',
    message: 'What is your name?', 
    default: 'Ash',
  },
  {
    type: 'list',
    name: 'name',
    message: 'Which pokemon do you choose?',
    choices: ['Snivy', 'Totodile'],
  },
  {
    type: 'list',
    name: 'damageChoice',
    message: 'Choose one from A, B and C',
    choices: ['A', 'B', 'C'],
  },
  {
    type: 'input',
    name: 'sound',
    message: 'How does your pokemon make sound?',
    default: 'pipipipipipi',
  },
  {
    type: 'input',
    name: 'move',
    message: 'What is your pokemon\'s move?',
    default: 'kamehameha!!'
  }
]; 

const secondQuestions = [
  {
    type: 'list',
    name: 'battle',
    message: `There is another pokemon!! Do you want to battle?`,
    choices: ["Yes", "No"],
  },
];

let pokemon1;
let trainer1;
let pokemon2;
let trainer2;

function playGame() {
  inquirer
    .prompt(firstQuestions)
    .then((firstAnswers) => {
      const { name, damageChoice, sound, move } = firstAnswers;

      let type = 'normal'
      if (name === 'Snivy') type = 'grass';
      else type = 'water';

      let damage = 0;
      if (damageChoice === 'A') damage = 10;
      if (damageChoice === 'B') damage = 20;
      if (damageChoice === 'C') damage = 30;

      pokemon1 = new Pokemon(name, damage, sound, move, type);
      trainer1 = new Trainer(firstAnswers.trainerName);
      trainer1.catch(pokemon1)

      pokemon2 = new Pokemon('Alomomola', 10, 'Alooooooo', 'round-fin-slap', 'water')
      trainer2 = new Trainer('Ayako')
      trainer2.catch(pokemon2)

      console.log("---------------------------------------------------")
      console.log(`Hello, ${trainer1.name}!! Let's battle with other pokemons with your ${pokemon1.name}!!`)
      console.log(`Your Data -> name: ${trainer1.name}`)
      console.log(`Your Pokemon Data -> name: ${pokemon1.name}, health: ${pokemon1.health}, damage: ${pokemon1.damage}, type: ${pokemon1.type}`)
      console.log("---------------------------------------------------")

      return inquirer.prompt(secondQuestions);
    })

    .then((secondAnswers) => {
      if (secondAnswers.battle === "Yes") {
        console.log
        const battle1 = new Battle(trainer1, trainer2)
        setTimeout(wait, 1000);
        function wait() {
          battle1.fight(pokemon1, pokemon2)
        }
      }
    })
  
}

playGame();