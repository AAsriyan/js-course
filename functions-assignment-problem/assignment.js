const sayHello = (name) => console.log('Hi ' + name);
const sayGreeting = (greeting, name = 'Bill') =>
  console.log(`${greeting} ${name}`);
const sayHelloHardcoded = () => console.log('Hello, this is hardcoded.');
const sayHelloReturn = (name) => `Hello, ${name} from returned`;

const checkInput = (cb, ...args) => {
  let isEmpty = false;
  for (let i = 0; i < args.length; i++) {
    if (args[i]) {
      continue;
    } else {
      isEmpty = true;
      break;
    }
  }
  if (isEmpty) cb();
};

const validString = () => {
  console.log('There are no empty strings');
};

checkInput(validString, 'bb', '256', 'string');

sayHello('Alex');
