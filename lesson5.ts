interface User {
    id: number;
    name: string;
    phone?: string;
}

const user1: User = {
    id: 1,
    name: "Ram"
};

let user: User | null = null;


console.log(user1.phone);