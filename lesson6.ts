// function getFirst(items:number[]): number {
//     return items[0];
// }

function getFirst<T>(items: T[]): T {
    return items[0];
}

console.log(getFirst([1,2,3]));
console.log(getFirst(["Ram", "Sham", "Jam"]));

function getLast<T>(items: T[]): T{
    return items[items.length - 1];
}

console.log(getLast([1,2,3]));
console.log(getLast(["Ram", "Sham", "Jam"]));