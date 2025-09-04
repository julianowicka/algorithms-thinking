function longestCommonPrefix(strs: string[]): string {
    
    const s = strs[0]
    let result = ""
    let shouldAdd = true;
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < strs.length; j++){
            console.log("i", i, "j", j, strs[j][i])
            const isCurrentTheSame = strs[j][i] === strs[(j+1) % strs.length][i]
            shouldAdd = shouldAdd && isCurrentTheSame  
            console.log("czy zczytywac", strs[j][i] === strs[(j+1) % strs.length][i])
        }

        console.log("Koniec pętli i", i, "\n\n")

        if (shouldAdd === true) {
            result = result + strs[0][i]
        }
    }
    console.log("result", result)
    return result
};

longestCommonPrefix(["rolada", "rola", "rolka"])
