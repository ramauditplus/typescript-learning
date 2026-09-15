"use strict";
function add(a, b) {
    return a + b;
}
const result = add(5, 10.5);
console.log(result);
function createEmployee(id, name, email, salary, isActive, phone) {
    return {
        id,
        name,
        email,
        salary,
        isActive,
        phone
    };
}
const emp = createEmployee(1, "rama", "rama@gmail.com", 50000, false);
console.log(emp);
