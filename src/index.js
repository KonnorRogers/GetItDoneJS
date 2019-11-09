// Normalize css
import 'normalize.css';
import './main.scss';

import DomManipulator from './js/utils/domManipulator.js';
import {Board} from './js/components/board/board.js';
import {Container} from './js/components/utilities/container.js';

const container = Container().render();

const board = Board().render();

container.appendChild(board);

document.body.appendChild(container);
DomManipulator.setFocusElement();
