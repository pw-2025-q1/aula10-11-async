const obj = {
    name: "John Doe",
    age: 30,
    email: "john.doe@email.com",
    active: true
};

const json = JSON.stringify(obj);
console.log(json);

const obj2 = JSON.parse(json);
console.log(obj2);