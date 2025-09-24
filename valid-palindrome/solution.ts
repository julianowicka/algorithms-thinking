function isPalindrome(s: string): boolean {
    let newString = ""
    for (let i = 0; i < s.length; i++) {
        let current = s[i]
        if (/[A-Za-z0-9]/.test(current)) {
            newString = newString + current
        }
    }
    newString = newString.toLocaleLowerCase()
    for (let i = 0; i < newString.length; i++) {
        const oppositeIndex = newString.length - 1 - i
        if (newString[i] !== newString[oppositeIndex]) {
            return false
        } 
    }

    return true
};
