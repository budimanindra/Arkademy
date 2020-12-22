const matematika = 90
const kimia = 90
const biologi = 90
const fisika = 90

let nilaiRataRata = (matematika + kimia + biologi + fisika)/4

if (nilaiRataRata >= 90 && nilaiRataRata <= 100) {
    console.log(`Rata-rata = ${nilaiRataRata}\nGrade A`)    
} else if (nilaiRataRata >= 80 && nilaiRataRata <= 89) {
    console.log(`Rata-rata = ${nilaiRataRata}\nGrade B`)
} else if (nilaiRataRata >= 70 && nilaiRataRata <= 79)   {
    console.log(`Rata-rata = ${nilaiRataRata}\nGrade C`)
} else if (nilaiRataRata >= 60 && nilaiRataRata <= 69)   {
    console.log(`Rata-rata = ${nilaiRataRata}\nGrade D`)
} else {
    console.log(`Rata-rata = ${nilaiRataRata}\nGrade E`)
} 