function sieveOfEratosthenes(n: number): number[] {
    if (n < 2) return [];
  
    const isPrime: boolean[] = new Array(n + 1).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;
  
    for (let i = 2; i * i <= n; i++) {
      if (isPrime[i]) {
        for (let j = i * i; j <= n; j += i) {
          isPrime[j] = false;
        }
      }
    }
  
    const primes: number[] = [];
    for (let i = 2; i <= n; i++) {
      if (isPrime[i]) primes.push(i);
    }
  
    return primes;
  }
  
  function superPrimes(n: number): number[] {
    const primes = sieveOfEratosthenes(n);
    
    if (primes.length === 0) return [];
  
    const primePositions = sieveOfEratosthenes(primes.length);
  
    const result: number[] = [];
    
    for (const pos of primePositions) {
      const superPrime = primes[pos - 1];
      
      if (superPrime <= n) {
        result.push(superPrime);
      }
    }
  
    return result;
  }
  
  console.log(superPrimes(7)); 
  console.log(superPrimes(17));
  console.log(superPrimes(50));