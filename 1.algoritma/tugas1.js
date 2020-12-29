function cekPolindrom(str) {  
    var huruf = str.length;
    for (var i = 0; i < huruf / 2; i++) {
        if (str.charAt(i) !== str.charAt(huruf - 1 - i)) {
            return false;
        }
    }return true;
}

if (cekPolindrom("abba")) {
    console.log("Palindrom");
} else {
    console.log("Bukan Palindrom");
}


// 1. mulai
// 2. memasukkan kata yang ingin dicek
// 3. menghitung jumlah huruf/angka pada kata
// 4. menandai setiap huruf/angka sesuai dengan posisinya, misalnya pada kata senin, s = 1, e = 2, n = 3, i = 4, n = 5
// 5. membandingkan huruf/angka pada posisi pertama dengan huruf/angka terakhir
// 6. membandingkan huruf/angka selanjutnya dengan posisi huruf/angka 1 posisi sebelum terakhir
// 7. membandingkan huruf/angka selanjutnya dengan posisi huruf/angka 2 posisi sebelum terakhir
// 8. begitu seterusnya sampai semua huruf/angka telah dibandingkan
// 9. Jika semua huruf/angka yang dibandingkan sama maka kata tersebut palindrom 
// 10. Sebaliknya jika semua huruf/angka yang dibandingkan tidak sama maka kata tersebut bukan palindrom 
