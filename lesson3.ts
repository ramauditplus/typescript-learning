function add(a: number, b: number):number {
    return a + b;
}

const result = add(5, 10.5);
console.log(result);

interface Employee {
    id: number;
    name: string;
    email: string;
    salary: number;
    isActive: boolean;
    phone?: string;
}

function createEmployee(id: number, name: string, email: string, salary: number, isActive: boolean, phone?: string): Employee {
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

function calculateSalary(
    salary: number,
    bonus: number
): number {
    return salary + bonus
}

const total = calculateSalary(50000, 10000);

console.log(total);

function isEmployeeActive(employee: Employee): boolean {
    return employee.isActive
}