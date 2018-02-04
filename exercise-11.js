function balikKata(kata) {
  var counter=kata.length-1;
  var kataBaru='';

  while (counter >= 1) {
    counter--;
    kataBaru += kata[counter];
  }
  return kataBaru;
}

// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS
