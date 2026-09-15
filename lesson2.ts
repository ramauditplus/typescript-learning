const user = {
    id: 1,
    name: "Ram",
    isDeveloper: true
};

interface User {
    id: number;
    name: string;
    age: number;
    isDeveloper: boolean;
};

let user1: User = {
    id: 1,
    name: "Rama",
    age: 30,
    isDeveloper: true
}

console.log(user1.name);
console.log(user1.id);
console.log(user1.isDeveloper);


interface Product {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
    description?: string;
}

const product1: Product = {
    id: 1,
    name: "Rice",
    price: 450,
    inStock: true
}

const product2: Product = {
    id: 1,
    name: "Wheat",
    price: 850,
    inStock: false,
    description: "test"
}

console.log(product1.inStock)
product1.inStock = false;
console.log(product1.inStock);

interface Employee {
    id: number;
    name: string;
    email: string;
    salary: number;
    isActive: boolean;
    phone?: string;
}

const emp1: Employee = {
    id: 1,
    name: "Ram",
    email: "ram@gmail.com",
    salary: 50000,
    isActive: true,
    phone: "9664065171"
}

const emp2: Employee = {
    id: 2,
    name: "Sham",
    email: "sham@gmail.com",
    salary: 80000,
    isActive: false
}