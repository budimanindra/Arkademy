function sayHello(name, callback) {
    const wording = `Hello, ${name}`
    callback(wording)
}

function greeting(greeting) {
    console.log(greeting)
}

sayHello('Indra', greeting)