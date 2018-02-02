var tanggal = prompt('Masukan tanggal disini!');

  if (Number(tanggal) >= 1 && Number(tanggal) <= 31) {
    var bulan = prompt('Masukan bulan disini!');
      if (bulan >= 1 && bulan <= 12) {
        var tahun = prompt('Masukan tahun disini!');
          if (Number(tahun) >= 1900 && Number(tahun) <= 2200) {

            var bulanName;
            switch (Number(bulan)){
              case 1: bulanName = 'Januari';
                break;
              case 2: bulanName = 'Februari';
                break;
              case 3: bulanName = 'Maret';
                break;
              case 4: bulanName = 'April';
                break;
              case 5: bulanName = 'Mei';
                break;
              case 6: bulanName = 'Juni';
                break;
              case 7: bulanName = 'Juli';
                break;
              case 8: bulanName = 'Agustus';
                break;
              case 9: bulanName = 'September';
                break;
              case 10: bulanName = 'Oktober';
                break;
              case 11: bulanName = 'November';
                break;
              case 12: bulanName = 'Desember';
            }
            console.log(tanggal +' '+bulanName+' '+ tahun);
          }
          else {
            alert('Tahun Salah');
            delete tahun;
          }
          document.location.reload();
      }
      else {
        alert('Bulan Salah');
        delete bulan;
      }
      document.location.reload();
  }
  else {
    alert('Tanggal Salah');
    delete tanggal;
  }
  document.location.reload();
