function lengthOfLastWord(s: string): number {
    let index = s.length - 1
    while (s[index] === " ") {
        index--
    }
    let counter = 0
    while (s[index] !== " " && index >= 0) {
        counter++
        index--
    }
    return counter
};