const getMonth = (callback) => {
    setTimeout(() => {
        let error = false
        let month = ['January', 'February', 'March', 'April', 'May',
            'June', 'July', 'August', 'September', 'October', 'November', 'Desember']
        if (!error) {
            callback(null, month)
        } else {
            callback(new Error('Sorry data not found', []))
        }
    }, 4000)
}

getMonth(function (error, month) {
    if (error == null) {
      let mapMonth = month.map((m) => m);
      console.log(mapMonth);
    } else {
      console.log(error);
    }
   });