// ex5-rollDiceChain.js
// Challenge: throw five dices in sequence
const rollDice = require('../../helpers/pokerDiceRoller');
function rollTheDices() {
  const results = [];
  // TODO: expand the chain to include five dices
  rollDice(1)
    .then((value) => {
      results.push(value);
      return rollDice(2);
    })
    .then((value) => {
        results.push(value);
        return rollDice(3);
      }) 
      .then((value) => {
        results.push(value);
        return rollDice(4);
      })
      .then((value) => {
          
        results.push(value);
        return rollDice(5);
      })
      .then((value) => {
        results.push(value);
        return results
      })

    .then((results) => console.log('Resolved!', results))
    .catch((error) => console.log('Rejected!', error.message));
}
rollTheDices();
// ! Do not change or remove the code below
module.exports = rollTheDices;