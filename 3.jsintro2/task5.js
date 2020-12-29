//1. .pop() berfungsi untuk menghapus element terakhir yang terdapat dalam suatu array
const dataString = ['Bunaken', 'Gili Trawangan', 'Raja Ampat']

dataString.pop();
console.log(`1. ${dataString}`)


//2. .shift() berfungsi untuk menghapus element pertama yang terdapat dalam suatu array
const dataString2 = ['Bunaken', 'Gili Trawangan', 'Raja Ampat']

dataString2.shift();
console.log(`2. ${dataString2}`)


//3. .every() berfungsi untuk mencek elemen dalam suatu array telah sesuai dengan tes yang dibuat
const dataNumber = [17,6,9,18,15,16,20]

function moreThan5(number) {
   return number > 5 
}

console.log(`3. ${dataNumber.every(moreThan5)}`)


//4. .concat() berfungsi untuk menggabungkan beberapa array/string menjadi satu array/string
const dataString3 = ['Bunaken', 'Gili Trawangan', 'Raja Ampat']
const dataString4 = ['Pulau Komodo', 'Pantai Sanur', 'Bukit Mantar']
const string1 = 'Indra'
const string2 = 'Budiman'

dataString5 = dataString3.concat(dataString4);
string3 = string1.concat(string2);

console.log(dataString5)
console.log(string3)


//5. .match() berfungsi untuk mencari string tertentu dalam kata/kalimat dengan mengembalikan hasilnya dalam array
const quotes = 'Iam nor neither a hero, nor a villain, iam just myself'

const quotesMatch = quotes.match(/iam/gi)
console.log(`5. ${quotesMatch}`)


//6. .search() berfungsi untuk mencari string tertentu dalam kata/kalimat dengan mengembalikan posisinya
const quotes2 = 'Iam neither a hero, nor a Villain, iam just myself'

const quotesSearch = quotes2.search(/villain/i)
console.log(`6. ${quotesSearch}`)


//7. .startsWith() berfungsi untuk mencek apakah suatu string diawalin dengan kalimat tertentu dan mengembalikan nilai kebenarannya
const quotes3 = 'Iam neither a hero, nor a villain, iam just myself'

const quotes4 = quotes3.startsWith("villain", 26)
console.log(`7. ${quotes4}`)


//8. .localeCompare() berfungsi untuk membandingkan antara 2 isi string dengan mengembalikan nilai -1,0,1
const compare1 = "Roonez"
const compare2 = "Rooney"
// perbandingan dimulai dari karakter pertama, jika karakter ditemukan berbeda maka akan langsung dibandingkan
// kurang maka -1, sama 0, lebih 1

var compareResult = compare1.localeCompare(compare2);
console.log(`8. ${compareResult}`)


//9. .toString() berfungsi untuk mengubah tipe data suatu element menjadi string
const randomNumber = 30
const randomString = randomNumber.toString()

console.log(randomNumber)
console.log(randomString)


//10. .toFixed() berfungsi untuk mengubah tipe data number menjadi string kemudian membulatkan bilangan ke beberapa angka desimal
const notFixed = 9.872133432
const fixedNumber = notFixed.toFixed(3)

console.log(`10. ${fixedNumber}`)