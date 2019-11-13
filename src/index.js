// Normalize css
import 'normalize.css';
import './main.scss';

import DomManipulator from './js/utils/domManipulator.js';
import {loadObject, saveObject} from './js/utils/storageUtil';
import {Board} from './js/components/board/board.js';
import {Container} from './js/components/utilities/container.js';

// Wrappers for everything
const container = Container().render();
const board = Board();
const frag = new DocumentFragment();

board.getBoardState().addTasks('task1');

frag.appendChild(container);

container.appendChild(board.render());

document.body.appendChild(frag);

const tabs = ['#projects', '#tasks'];
DomManipulator.setTarget(tabs, tabs[1]);
// State stuff, get rid of this
const btn = document.createElement('button');
btn.innerText = 'get State';
btn.onclick = () => {
  board.updateLocalStorage();
  console.log(board.retrieveLocalStorage());
};

document.body.appendChild(btn);
