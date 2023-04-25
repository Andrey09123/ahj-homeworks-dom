import createPosition from './createPosition';
import cursors from './cursors';

export default class GameController {
  constructor(gamePlay) {
    this.gamePlay = gamePlay;
    this.indexSelect = {};
    this.onCellClick = this.onCellClick.bind(this);
    this.onCellEnter = this.onCellEnter.bind(this);
    this.onCellLeave = this.onCellLeave.bind(this);
  }

  init() {
    // TODO: add event listeners to gamePlay events
    this.events();
    this.gamePlay.drawUi('prairie');
    this.showCharacter();
  }

  events() {
    this.gamePlay.addCellEnterListener(this.onCellEnter);
    this.gamePlay.addCellLeaveListener(this.onCellLeave);
    this.gamePlay.addCellClickListener(this.onCellClick);
  }

  onCellClick(index) {
    this.gamePlay.setCursor(cursors.crosshair);
    if (document.querySelector('.selected-red')) {
      this.gamePlay.deselectCell(this.indexSelect.red);
    }

    this.gamePlay.selectCell(index);
    this.indexSelect.red = index;
  }

  onCellEnter() {
    this.gamePlay.setCursor(cursors.pointer);
  }

  onCellLeave(index) {
    this.gamePlay.hideCellTooltip(index);
  }

  showCharacter() {
    const timerId = setInterval(() => {
      let position;
      let isPosition = false;
      do {
        position = createPosition(this.gamePlay.boardSize);
        if (this.gamePlay.positionChar === position) {
          position = createPosition(this.gamePlay.boardSize);
          isPosition = true;
        }
        this.gamePlay.positionChar = position;
      } while (!isPosition);
      this.gamePlay.redrawPositions(position);
    }, 1000);
    setTimeout(() => clearInterval(timerId), 1000000);
  }
}
