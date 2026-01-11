function findClosestToNAndDivisibleByM(n: number, m: number): number {
    if(n % m === 0) {
        return n;
    }
    const lower = n - m 
    const upper = n + m
    
    let minDistance = Infinity
    let minNumber = -1

    for (let i = lower; i <= upper; i++) {
        const distance = Math.abs(n - i)
        const isDivisbale = i % m === 0
        if (distance < minDistance && isDivisbale) {
            minDistance = distance
            minNumber = i
        }
    }
    return minNumber
}

let wynik3 = findClosestToNAndDivisibleByM(13, 4)
console.log(wynik3)