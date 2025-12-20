/*
Given a positive integer n, find the sum of the first n natural numbers.

Examples : 

Input: n = 3
Output: 6
Explanation: 1 + 2 + 3 = 6

Input: n = 5
Output: 15 
Explanation:  1 + 2 + 3 + 4 + 5 = 15
*/

function sumOfTheFirstNatural(n: number) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum = sum + i
    }
    return sum
}

console.log("Test :", sumOfTheFirstNatural(3));