import getRandom from './random';
import getField from './getField';
import stopGame from './stopGame';

export default function startGame() {
  const field = getField();
  let randomItemNumber = getRandom(field.length);
  field[randomItemNumber].classList.add('field-item-img');

  const intervalId = setInterval(() => {
    const currentGoblin = field.findIndex((item) => item.classList.contains('field-item-img'));
    field[currentGoblin].classList.remove('field-item-img');

    randomItemNumber = getRandom(field.length, randomItemNumber);

    field[randomItemNumber].classList.add('field-item-img');
  }, 1000);

  stopGame(intervalId);
}
