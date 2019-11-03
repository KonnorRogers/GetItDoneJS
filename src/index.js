import './main.scss';
import DomManipulator from './js/utils/domManipulator.js';
import {Board} from './js/components/board.comp.js';
import {Container} from './js/components/container.comp.js';

const rootElem = Container().render();

const docFrag = document.createDocumentFragment();

const board = Board().render();

DomManipulator.appendChildrenTo(docFrag)(board);

rootElem.appendChild(docFrag);

document.body.appendChild(rootElem);
