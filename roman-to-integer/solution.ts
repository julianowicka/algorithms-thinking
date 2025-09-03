const romanToIntegerConverter: Record<string, number> = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
    'IV': 4,
    'IX': 9,
    'XL': 40,
    'XC': 90,
    'CD': 400,
    'CM': 900,

};

const specialRomanNumerals: Record<string, number> = {
    'IV': 4,
    'IX': 9,
    'XL': 40,
    'XC': 90,
    'CD': 400,
    'CM': 900,
}


function romanToInt(inputString: string): number {


    let romanTokens = []

    for (let i= 0; i < inputString.length; i++) {
        if (i === inputString.length - 1) {
            romanTokens.push(inputString[i])
            break
        }
        let potentialPair = inputString[i] + inputString[i + 1]
        if (specialRomanNumerals[potentialPair] !== undefined) {
            romanTokens.push(potentialPair)
            i++
        } else {
            romanTokens.push(inputString[i])
        }
    }

    let sumCharacter = 0;
    for (let i = 0; i < romanTokens.length; i++) {
        const currentCharacter = romanTokens[i]
        const romanValue = romanToIntegerConverter[currentCharacter]
        sumCharacter = sumCharacter + romanValue

    }

    return sumCharacter
};
