function minRats(n: number): number {
    return Math.ceil(Math.log2(n));
}


let n = 4;
console.log("Minimum " + minRats(n) + " rat(s) are required");

n = 100;
console.log("Minimum " + minRats(n) + " rat(s) are required");

n = 1000;
console.log("Minimum " + minRats(n) + " rat(s) are required");

n = 1025;
console.log("Minimum " + minRats(n) + " rat(s) are required");