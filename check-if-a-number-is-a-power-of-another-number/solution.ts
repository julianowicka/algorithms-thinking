
function isPowerOf(x: number, y: number): boolean {
  if(y === 1){
    return true
  }
  
  if(x === 1){
    return false
  }
  
  while (y > 1) {
    if (y % x !== 0) {
      return false;
    }
    y = y / x;
  }
  
  return y === 1;
}

console.log("Test 1:", isPowerOf(10, 1));
console.log("Test 2:", isPowerOf(10, 1000));
console.log("Test 3:", isPowerOf(10, 1001));