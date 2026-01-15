function sumOfNDigits(n: number): number {
    const newString = String(n)
    let sum = 0
    for (let i = 0; i<newString.length; i++) {
        const digit = Number(newString[i]) 
        sum = sum + digit
    }
    return sum
}
const wynik2 = sumOfNDigits(123);
console.log("hello")
console.log(wynik2)
