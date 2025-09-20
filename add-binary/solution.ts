function addBinary(a: string, b: string): string {
    let sumResult = ""
    const smallerLength = Math.min(a.length, b.length)
    let rest = 0
    for (let i = 0; i < smallerLength + 1; i++) {
        const aIndex = a.length - 1 - i
        const bIndex = b.length - 1 - i

        let currentSum = Number(a[aIndex] ?? 0) + Number(b[bIndex] ?? 0) + rest
        if (currentSum === 2) {
            currentSum = 1
            rest = 1
        }
        sumResult = String(currentSum) + sumResult 
    }

    let longerString = a
    if (a.length < b.length) {
        longerString = b
    }

    const beginning = longerString.substring(0, longerString.length - smallerLength - 1)

    return beginning + sumResult   
};

const result = addBinary("###10101", "1011")
console.log("result", result)