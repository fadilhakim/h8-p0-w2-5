function konversiMenit(menit) {
  var detik = menit%60;
  var menit = (menit - detik)/60

  return menit + ':' + ('0' + detik).slice(-2);
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
