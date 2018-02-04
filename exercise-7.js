var counter = 0;
var finalCounter = 5;

while (counter < finalCounter) {
  console.log('*');
  counter++;
}

console.log('----------------------------------------------------------------');

var counter = 0;
var finalCounter = 5;

while (counter < finalCounter) {
  var bintang = '';
  var counterDalem = 0;
  while (counterDalem < finalCounter) {
    bintang = bintang + '*';
    counterDalem++;
  }
  console.log(bintang);
  counter++;
}

console.log('----------------------------------------------------------------');

var counter = 0;
var finalCounter = 5;
var bintang;

while (counter < finalCounter) {
  var bintang = '';
  var counterDalem = 0;
  while (counterDalem < (counter+1)) {
    bintang = bintang + '*';
    counterDalem++;
  }
  console.log(bintang);
  counter++;
}
