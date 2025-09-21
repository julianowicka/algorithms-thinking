function addBinary(a: string, b: string): string {
    let sumResult = ""
    let aIndex = a.length - 1
    let bIndex = b.length - 1
    let carry = 0

    while (aIndex >= 0 || bIndex >= 0) {
        let sum = carry
        if (aIndex >= 0) {
            sum = sum + Number(a[aIndex])
            aIndex = aIndex - 1
        }
        if (bIndex >= 0) {
            sum = sum + Number(b[bIndex])
            bIndex--
        }
        const result = String(sum % 2)
        sumResult = result + sumResult 
        if (sum >=2) {
            carry = 1
        } else {
            carry = 0
        }
    }
    if (carry === 1) {
        sumResult = String(carry) + sumResult
    }
    return sumResult
};



function addBinary(a: string, b: string): string {
    let sumResult = ""
    let aIndex = a.length - 1
    let bIndex = b.length - 1
    let carry = 0

    while (aIndex >= 0 || bIndex >= 0 || carry > 0) {
        let sum = carry
        if (aIndex >= 0) {
            sum = sum + Number(a[aIndex])
            aIndex = aIndex - 1
        }
        if (bIndex >= 0) {
            sum = sum + Number(b[bIndex])
            bIndex--
        }
        const result = String(sum % 2)
        sumResult = result + sumResult 
        if (sum >=2) {
            carry = 1
        } else {
            carry = 0
        }
    }

    return sumResult
};

const result = addBinary("101", "101")
console.log("result", result)