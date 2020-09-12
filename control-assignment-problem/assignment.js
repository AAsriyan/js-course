const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const secondRandomNumber = Math.random();
let numberArray = [1, 2, 3, 4, 5];

if (randomNumber >= 0.7) alert('The random number is greater than 0.7');

for (num of numberArray) {
  console.log(num);
}

for (let i = numberArray.length - 1; i >= 0; i--) {
  console.log(numberArray[i]);
}

console.log(`first number: ${randomNumber}`);
console.log(`second number: ${secondRandomNumber}`);

if (
  (randomNumber > 0.7 && secondRandomNumber > 0.7) ||
  randomNumber < 0.2 ||
  secondRandomNumber < 0.2
) {
  alert('the second alert has been triggered.');
}
