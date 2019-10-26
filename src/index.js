import './main.scss';
import DomManipulator from './js/utils/domManipulator.js';
import {Board} from './js/components/board.js';
import {Tab} from './js/components/tab.js';
import {Checkbox} from './js/components/checkbox.js';
import {Container} from './js/components/container.js';

const rootElem = Container().render();

const docFrag = DomManipulator.createDocFrag();

const board = Board().render();
const tab = Tab().render();
const checkbox = Checkbox().render();

DomManipulator.appendChildren(docFrag, board, tab, checkbox);

rootElem.appendChild(docFrag);

document.body.appendChild(rootElem);
