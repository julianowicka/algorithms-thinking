function reverseDigits(n: number){
    const newString = String(n)
    let reverseDigits = ""
    for(let i = newString.length - 1; i >= 0; i--) {
    reverseDigits = reverseDigits + newString[i]
    }
    return reverseDigits
}
const result1 = reverseDigits(54321)
console.log("wynik", result1) 