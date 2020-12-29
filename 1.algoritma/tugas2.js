     let str1 = "Daun manggis tidak enak";
     let str1WordArr = str1.split(" ");
     let reverseWord=[];
     for(let i=(str1WordArr.length)-1;i>=0;i--)
     {
          reverseWord.push(str1WordArr[i]); 
     }
      console.log(reverseWord.join(" ")); 


// 1. mulai
// 2. menyiapkan kalimat yang kata-katanya akan di balik
// 3. memisahkan setiap kata yang ada dengan cara mencari spasi dalam kalimat (' ')
// 4. memasukkannya setiap kata kedalam array
// 5. membalik urutan dari setiap kata dalam array
// 6. selesai