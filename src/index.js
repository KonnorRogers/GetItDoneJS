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

// Will reach out and set the focus element as well as return the new focus element
DomManipulator.setFocusElement(frag, board.getBoardState());

document.body.appendChild(frag);

// Focus can be only on 2 tabs. Projects, or tasks.
const observable = document.getElementById('tabs');

DomManipulator.watchFocusChange(observable, board.getBoardState());

const btn = document.createElement('button');
btn.innerText = 'get State';
btn.onclick = () => {
  board.updateLocalStorage();
  console.log(board.retrieveLocalStorage());
};

document.body.appendChild(btn);
