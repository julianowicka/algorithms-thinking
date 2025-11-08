function print(n: number): void {
  
  for(let i = 1; i < 11; i++){
    console.log(n, "*", i, "=", n * i)
  }
}
console.log(print(5))