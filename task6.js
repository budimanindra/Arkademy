function sayHello(name, callback) {
    let greeting = `Hello ${name}`
    callback(greeting)
}

function showGreeting(quote) {
    console.log(quote)    
}

sayHello("Arkademy", showGreeting)



let words = ['Indra', 'Naufal', 'Nagelsmann', 'Indah', 'Iniesta', 'Naruto', 'Nayeon', 'Nana', 'Hana', 'Neechropos']

// const result = words.filter(word => word.match(/na/gi));
// console.log(result);


let wordSearch = 'Na'
totalOutput = 1

function searching(wordSearch, totalOutput, callback) {
    let result = words.filter(word => word.match(wordSearch));
    result.splice(totalOutput, result.length)
    callback (result)
}

function output(resultFix) {
    console.log(resultFix);
}
searching(wordSearch, totalOutput, output)