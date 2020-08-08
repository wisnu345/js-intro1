let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
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

let result = {...data, name: "Wisnu Giri", email : "wisnugiri64@gmail.com", hobby: "programming"}

console.log(data);
console.log (result);

let {street, city} = data.address
console.log (street);
console.log (city);