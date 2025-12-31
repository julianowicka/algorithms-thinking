interface Move {
  disk: number;
  from: string;
  to: string;
}

function towerOfHanoiRecursive(
  n: number,
  from: string = 'A',
  to: string = 'C',
  aux: string = 'B',
  moves: Move[] = []
): Move[] {
  if (n === 1) {
    moves.push({ disk: 1, from, to });
    return moves;
  }

  towerOfHanoiRecursive(n - 1, from, aux, to, moves);

  moves.push({ disk: n, from, to });

  towerOfHanoiRecursive(n - 1, aux, to, from, moves);

  return moves;
}

console.log('Recursive Solution (n=3)');
const result = towerOfHanoiRecursive(3);
console.log(`Total moves: ${result.length}`);
result.forEach((move, index) => {
  console.log(`Move ${index + 1}: Disk ${move.disk} from ${move.from} to ${move.to}`);
});

