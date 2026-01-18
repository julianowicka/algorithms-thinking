function primalityTest(n: number){
    if (n === 1) {
        return false;
    }
    
    if (n === 2) {
        return true;
    }

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}

const result5 = primalityTest(7)
console.log("result", result5)