function swapTwoNumbers(a: number, b: number) {

    const swap = a
    a = b
    b = swap
    return { a, b }
}
const wynik = swapTwoNumbers(2,3)
console.log(`Po zamianie: a = ${wynik.a}, b = ${wynik.b}`)