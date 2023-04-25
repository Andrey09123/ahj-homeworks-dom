function creatArrayPositions(boardSize) {
  const cells = [];
  for (let i = 0; i < boardSize ** 2; i += 8) {
    cells.push(i);
    cells.push(i + 1);
  }
  return cells;
}

export default function createPosition(boardSize) {
  const cells = creatArrayPositions(boardSize);
  const rand = Math.floor(Math.random() * cells.length);
  return cells[rand];
}
