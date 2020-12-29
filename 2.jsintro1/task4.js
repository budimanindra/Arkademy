let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    hobbies : ['hiking', 'running'],
    address:
    {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}

// task 4a
data.name = "Indra Budiman"
data.email = "budimanindra98@gmail.com"
data.hobbies = [...data.hobbies,"reading", "playing", "sleeping"]
console.log(data)

// task 4b
let {id, name, username, email, hobbies, address, phone, website} = data
let {street, suite, city, zipcode} = address
console.log(street)
console.log(city)