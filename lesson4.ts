let employeeId: string | number;

employeeId = 10;
console.log(employeeId);

employeeId = "ten";
console.log(employeeId);

interface Employee {
    id: number | string;
    name: string;
    isDev: boolean;
};

const emp1: Employee = {
    id: 10,
    name: "Rama",
    isDev: true
}

let selectedEmployee: Employee | null = null;
selectedEmployee = emp1;
console.log(selectedEmployee);
