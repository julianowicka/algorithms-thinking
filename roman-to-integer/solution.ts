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

    console.log("s.length", s.length)
    for (let i = 0; i < s.length; i++) {
        console.log("i", i, "----->", s[i])

    }

    const keys = Object.keys(romanValues);
    console.log("keys", keys)
    console.log("roman values[v]", romanValues["V"])

    for (let i = 0; i < keys.length; i++) {
        console.log("keys[i]", romanValues[keys[i]])
    }

};

console.log(romanToInt("IVLI"))