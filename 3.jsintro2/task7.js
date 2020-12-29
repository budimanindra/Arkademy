let dataNomor = [2, 7, [4, 5, 6, 1, 2, 3, 9, 10, 11, 8, 12, 7]]

function seleksiNilai(dataNomor) {
    if (dataNomor[2].length < 5) {
        console.log('Jumlah angka dalam dataArray harus lebih dari 5')
    } else if (dataNomor[0] < dataNomor[1]) {
        console.log(`data array sebelum diurutkan ${dataNomor[2]}`)
        dataNomor[2].sort(function (a, b) { return a - b })
        console.log(`data array setelah diurutkan ${dataNomor[2]}`)
        var hasilnya = dataNomor[2].filter(function (number) {
            return number > dataNomor[0] && number < dataNomor[1];
        })
        console.log(`nilai-nilai yang berada dari ${dataNomor[0]} sampai ${dataNomor[1]} dalam array adalah ${hasilnya}`)
    } else {
        console.log('Nilai akhir harus lebih besar dari nilai awal')

    }
}

seleksiNilai(dataNomor)