const dataString = ['Honda', 'Yamaha', 'Suzuki', 'Ducati']
const dataNumber = [1,2,3,9,8,7,4,11]

const dataStringSort = dataString.sort().reverse()
const dataNumberSort = dataNumber.sort((min, max) => min - max) 
console.log(dataStringSort)
console.log(dataNumberSort)

dataStringSort.map((item, index) =>{
    // memanggil semua isi index beserta indexnya
    // console.log(`${index}. Merk ${item}`)

    // memanggil isi index beserta indexnya pada posisi...
    if (index === 2){
        console.log(item)
    }
})

const numberFilter = dataNumberSort.filter (number => number > 5)
const StringFilter = dataStringSort.filter (word => word.length >= 6)
console.log(numberFilter)
console.log(StringFilter)