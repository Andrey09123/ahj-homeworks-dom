export default function calcTileType(index, boardSize) {
  // TODO: ваш код будет тут
  if (index < (boardSize - 1) && index > 0) {
    return 'top';
  }
  if (index < (boardSize ** 2 - 1) && index > (boardSize ** 2 - boardSize)) {
    return 'bottom';
  }
  for (let i = 1; i < boardSize - 1; i += 1) {
    if (index === boardSize * i) {
      return 'left';
    }
    if (index === (boardSize * i + (boardSize - 1))) {
      return 'right';
    }
  }

  switch (index) {
    case 0:
      return 'top-left';
    case (boardSize - 1):
      return 'top-right';
    case (boardSize * (boardSize - 1)):
      return 'bottom-left';
    case (boardSize ** 2 - 1):
      return 'bottom-right';
    default:
      return 'center';
  }
}
