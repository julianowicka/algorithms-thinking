interface Move {
  disk: number;
  from: string;
  to: string;
}

function towerOfHanoiIterative(n: number): Move[] {
  const moves: Move[] = [];
  const totalMoves = Math.pow(2, n) - 1;

  const stacks: Map<string, number[]> = new Map([
    ['A', Array.from({ length: n }, (_, i) => n - i)],
    ['B', []],
    ['C', []]
  ]);

  const rodOrder = n % 2 === 0 ? ['A', 'B', 'C'] : ['A', 'C', 'B'];

  function tryMove(from: string, to: string): boolean {
    const fromStack = stacks.get(from)!;
    const toStack = stacks.get(to)!;

    const fromTop = fromStack.length > 0 ? fromStack[fromStack.length - 1] : Infinity;
    const toTop = toStack.length > 0 ? toStack[toStack.length - 1] : Infinity;

    if (fromTop < toTop) {
      const disk = fromStack.pop()!;
      toStack.push(disk);
      moves.push({ disk, from, to });
      return true;
    }
    return false;
  }

  for (let i = 1; i <= totalMoves; i++) {
    if (i % 3 === 1) {
      if (!tryMove(rodOrder[0], rodOrder[1])) {
        tryMove(rodOrder[1], rodOrder[0]);
      }
    } else if (i % 3 === 2) {
      if (!tryMove(rodOrder[0], rodOrder[2])) {
        tryMove(rodOrder[2], rodOrder[0]);
      }
    } else {
      if (!tryMove(rodOrder[1], rodOrder[2])) {
        tryMove(rodOrder[2], rodOrder[1]);
      }
    }
  }

  return moves;
}

console.log('Iterative Solution (n=3)');
const result = towerOfHanoiIterative(3);
console.log(`Total moves: ${result.length}`);
result.forEach((move, index) => {
  console.log(`Move ${index + 1}: Disk ${move.disk} from ${move.from} to ${move.to}`);
});

