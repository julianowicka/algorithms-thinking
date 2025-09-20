function isPalindrome(x: number): boolean {
  let  y = ""
  const value = String(x)
  for (let i = value.length - 1; i >= 0; i--) {
    y = y + value[i]
  }
  return value === y  
};