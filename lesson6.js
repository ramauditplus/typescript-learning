"use strict";
// function getFirst(items:number[]): number {
//     return items[0];
// }
function getFirst(items) {
    return items[0];
}
console.log(getFirst([1, 2, 3]));
console.log(getFirst(["Ram", "Sham", "Jam"]));
function getLast(items) {
    return items[items.length - 1];
}
console.log(getLast([1, 2, 3]));
console.log(getLast(["Ram", "Sham", "Jam"]));
