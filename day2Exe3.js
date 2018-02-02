var nama = prompt('masukan nama anda');

if (nama == "") {
  alert('nama harus diisi!');
  document.location.reload();
}
else {
  var peran = prompt('Halo ' + nama + ', Pilih peranmu untuk memulai game!')
  
    if (peran == "ksatria") {
      alert('Selamat datang di Dunia Proxytia, ' + nama)
      alert('Halo ' + peran + ' ' + nama + ', kamu dapat menyerang dengan senjatamu!')
    }
    else if (peran == "tabib") {
      alert('Selamat datang di Dunia Proxytia, ' + nama)
      alert('Halo ' + peran + ' ' + nama + ', kamu akan membantu temanmu yang terluka.')
    }
    else if (peran == "penyihir") {
      alert('Selamat datang di Dunia Proxytia, ' + nama)
      alert('Halo ' + peran + ' ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!')
    }
    else {
      alert('Pilih peranmu lagi!')
    }
    console.log(nama);
    console.log(peran);
}
document.location.reload();
