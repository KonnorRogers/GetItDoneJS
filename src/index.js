import './main.scss';
import domManipulator from './js/utils/domManipulator.js';

const root = {
  id: 'root',
  className: 'container',
  innerText: 'sup dudes',
};

const rootElem = domManipulator.createElement('div', root);
document.body.appendChild(rootElem);
