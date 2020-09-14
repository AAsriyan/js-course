const listItemElements = document.querySelectorAll('li');
const listItemElements2 = document.getElementsByTagName('li');

for (const listItemEl of listItemElements) {
  console.dir(listItemEl);
}

const h1 = document.getElementById('main-title');
h1.textContent = 'Some new title!';
h1.style.color = 'red';

const li = document.querySelector('li:last-of-type');
li.textContent = li.textContent + ' (Changed!)';
