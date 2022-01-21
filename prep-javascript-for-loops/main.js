// create your loops here.
console.log('Loop that runs from 0 - 9');
let num = 0;
for (let i = 0; i < 10; i++) {
  console.log(num);
  num = num + 1;
}

console.log('Loop that runs 10x in increments of 2');
let num2 = 0;
for (let i = 0; i < 11; i++) {
  console.log(num2);
  num2 += 2;
}

console.log('Loop that runs 100x in reverse 💣');
let bomb = 100;
for (let i = 100; i > 0; i--) {
  console.log('Time till explosion: ' + bomb + '!');
  bomb -= 1;
}
