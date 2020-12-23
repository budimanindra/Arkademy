let dataNomor = [2, 17, [19, 20, 25, 1, 2, 3, 9, 10, 11, 17, 18]]

function seleksiNilai(dataNomor) {
    if (dataNomor[2].length < 5) {
        console.log('Jumlah angka dalam dataArray harus lebih dari 5')
    } else if (dataNomor[0] < dataNomor[1]) {
        dataNomor[2].sort(function (a, b) { return a - b })
        console.log(dataNomor[2])
        var hasilnya = dataNomor[2].filter(function (number) {
            return number > dataNomor[0] && number < dataNomor[1];
        })
        console.log(hasilnya)
    } else {
        console.log('Nilai akhir harus lebih besar dari nilai awal')

    }
}

seleksiNilai(dataNomor)