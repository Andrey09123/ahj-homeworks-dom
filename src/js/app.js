import GamePlay from './GamePlay';
import GameController from './GameController';

/* eslint-disable */
console.log('it works!');

const gamePlay = new GamePlay(4);
gamePlay.bindToDOM(document.querySelector('#game-container'));

const gameCtrl = new GameController(gamePlay);
gameCtrl.init();