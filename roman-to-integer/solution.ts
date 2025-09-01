function romanToInt(s: string): number {
    const romanValues: Record<string, number> = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };


    let sumCharacter = 0;
    for (let i = 0; i < s.length; i++) {
        const currentCharacter = s[i]
        const romanValue = romanValues[currentCharacter]
        sumCharacter = sumCharacter + romanValue

    }

    return sumCharacter
};

console.log(romanToInt("LXIII"))