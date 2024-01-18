function pangrams(s) {
    s = s.toLowerCase();
    let uniqueLetters = new Set();

    for (let letter of s) {
        if (letter >= 'a' && letter <= 'z') {
            uniqueLetters.add(letter);
        }
    }
    return uniqueLetters.size === 26 ? 'pangram' : 'not pangram';
}
