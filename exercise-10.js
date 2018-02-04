function bandingkanAngka(angka1, angka2) {
  var angkaBaru=angka1;

  if (angka1 < angka2) {
    return true
  }
  else if (angka1 === angka2) {
    return -1
  }
  else {
    return false
  }
}

// // TEST CASES
console.log(bandingkanAngka(5, 8)); // true
console.log('-----------------------------');
console.log(bandingkanAngka(5, 3)); // false
console.log('-----------------------------');
console.log(bandingkanAngka(4, 4)); // -1
console.log('-----------------------------');
console.log(bandingkanAngka(3, 3)); // -1
console.log('-----------------------------');
console.log(bandingkanAngka(17, 2)); // false
console.log('-----------------------------');
console.log(bandingkanAngka(3, 2)); // false

// console.log('-----------------------------------------------------------------');
// function balikKata(kata) {
//   var counter=kata.length-1;
//   var kataBaru='';
//
//   while (counter >= 1) {
//     counter--;
//     kataBaru += kata[counter];
//   }
//   return kataBaru;
// }
//
// // TEST CASES
// console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
// console.log(balikKata('John Doe')); // eoD nhoJ
// console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
// console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
// console.log(balikKata('Super')); // repuS
//
// console.log('-----------------------------------------------------------------');
// function konversiMenit(menit) {
//   var detik = menit%60;
//   var menit = (menit - detik)/60
//
//   return menit + ':' + ('0' + detik).slice(-2);
// }
//
// // TEST CASES
// console.log(konversiMenit(63)); // 1:03
// console.log(konversiMenit(124)); // 2:04
// console.log(konversiMenit(53)); // 0:53
// console.log(konversiMenit(88)); // 1:28
// console.log(konversiMenit(120)); // 2:00
//
// console.log('-----------------------------------------------------------------');
// function xo(str) {
//   var counter = str.length;
//   var finalCounter = str.length+1;
//
//   while (counter < finalCounter) {
//     var counter1 = str.length;
//     var counter2 = str.length+1;
//     var x = str.substring(counter1, counter2);
//     var counterDalem = 0;
//     while (counterDalem < finalCounter) {
//       baru = x +' ';
//       counterDalem++;
//     }
//     console.log(baru);
//     counter++;
//   }
//   // var x = str.match(/x/gi).toString().length;
//   // var o = str.match(/o/gi).toString().length;
//   //
//   // if (x === o) {
//   //   return true;
//   // }else {
//   //   return false;
//   // }
// }
//
// // TEST CASES
// console.log(xo('xoxoxo')); // true
// console.log(xo('oxooxo')); // false
// console.log(xo('oxo')); // false
// console.log(xo('xxxooo')); // true
// console.log(xo('xoxooxxo')); // true
// console.log(xo('xxxxxxxxxxxoooooo'));
