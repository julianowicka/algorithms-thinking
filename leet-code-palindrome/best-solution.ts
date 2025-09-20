function isPalindrome(x: number): boolean {
  const value = String(x)
  for (let i = 0; i < value.length / 2; i++) {
    const opposite = value.length - 1 - i
    if (value[i] !== value[opposite]) {
        return false
    } 
  }
  return true  
};