const task3Element = document.getElementById('task-3');

function alertFunction() {
  alert('This is the function without parameters');
}

function alertParameters(name) {
  alert(`Hi ${name}!`);
}

function combinedString(string1, string2, string3) {
  const combined = `${string1} ${string2} ${string3}`;
  return combined;
}

task3Element.addEventListener('click', alertFunction);

alertFunction();
alertParameters('Alex');
alert(combinedString('Hello,', 'my name is', 'Alex.'));
