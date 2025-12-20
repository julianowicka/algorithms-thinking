/*
Given a positive integer n, we have to find the sum of squares of first n natural numbers. 
*/

function SumOfSquares(n: number) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum = sum + (i * i);
    }
    return sum
}

console.log("Test:", SumOfSquares(3));