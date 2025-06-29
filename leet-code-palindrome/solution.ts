// Array<string> === string[]
function getDigits(value: number): Array<string> {
    const stringValue = value.toString()
    const digits = stringValue.split("")
    return digits 
}

function createPalindrom(array: Array<string>): Array<string> {
    const result = []
    for (let i = array.length - 1; i >= 0; i--) {
        result.push(array[i])
    }
    return result
}

function isPalindrome(x: number): boolean {
    const digits = getDigits(x)
    const palindrom = createPalindrom(digits)
    for (let i = 0; i < digits.length; i++) {
        if (digits[i] !== palindrom[i]) {
            return false
        }
    }
    
    return true
};


const result = isPalindrome(121)

console.log(result)
