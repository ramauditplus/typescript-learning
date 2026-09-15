"use strict";
const user = {
    id: 1,
    name: "Ram",
    isDeveloper: true
};
;
let user1 = {
    id: 1,
    name: "Rama",
    age: 30,
    isDeveloper: true
};
console.log(user1.name);
console.log(user1.id);
console.log(user1.isDeveloper);
const product1 = {
    id: 1,
    name: "Rice",
    price: 450,
    inStock: true
};
const product2 = {
    id: 1,
    name: "Wheat",
    price: 850,
    inStock: false,
    description: "test"
};
console.log(product1.inStock);
product1.inStock = false;
console.log(product1.inStock);
const emp1 = {
    id: 1,
    name: "Ram",
    email: "ram@gmail.com",
    salary: 50000,
    isActive: true,
    phone: "9664065171"
};
const emp2 = {
    id: 2,
    name: "Sham",
    email: "sham@gmail.com",
    salary: 80000,
    isActive: false
};
