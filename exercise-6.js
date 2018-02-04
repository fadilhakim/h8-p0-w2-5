function loopingPertama(counter) {
  while (counter < 20) {
    counter++;
    console.log((counter = counter + 1) + ' - I Love Coding');
  }
}

function loopingKedua(counter) {
  while (counter > 2) {
    counter--;
    console.log((counter = counter - 1) + ' - I will become fullstack developer');
  }
}

console.log('Looping Pertama');
loopingPertama(0);
console.log('-----------------------------------------------------------------');
console.log('Looping Kedua');
loopingKedua(22);

function loopingPertamaFor(counter, finalCounter) {
  for (var counter = 0; counter < finalCounter; counter++) {
    console.log((counter+1) + ' - I Love Coding');
  }
}

function loopingKeduaFor(counter, finalCounter) {
  for (var counter = finalCounter; counter > 0; counter--) {
    console.log(counter + ' - I Love Coding');
  }
}

console.log('----------------------------------------------------------------');
console.log('Looping Pertama FOR');
loopingPertamaFor(0, 20);
console.log('----------------------------------------------------------------');
console.log('Looping Kedua FOR');
loopingKeduaFor(0, 20);

console.log('----------------------------------------------------------------');

var counter;
for (var counter = 1; counter < 100; counter++) {
  if (counter % 2) {
    console.log((counter) + '- GANJIL');
  }
  else {
    console.log((counter) + '- GENAP');
  }
}

console.log('----------------------------------------------------------------');

function loopingKelipatan(counter, finalCounter, kelipatan) {
  for (var counter; counter < finalCounter; counter++)
    console.log((counter= counter+kelipatan) + ' - Kelipatan '+ (kelipatan+1));
}

loopingKelipatan(1, 100, 2);
console.log('----------------------------------------------------------------');
loopingKelipatan(1, 100, 5);
console.log('----------------------------------------------------------------');
loopingKelipatan(1, 100, 9);
