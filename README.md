# Purpose

A TODO list application written in vanilla Javascript. <br>
Bundling via Webpack.<br>
CSS via preprocessor - SASS <br>
Documentation via jsdoc. <br>
Testing via Jest.<br>

## Getting started

```bash
git clone https://github.com/paramagicdev/GetItDoneJS
cd GetItDoneJS
yarn install
```

### Local development

```bash
yarn dev
```

### Production build

```bash
yarn build
```

## Running test suite

### One time run

```bash
yarn test
```

### Watch for changes

```bash
yarn test:watch
```

## How everything works

### Components

UI components are stored in the src/js/components file & are saved as \*.comp.js

A typical component is created as follows:

````javascript
import DomManipulator from '../utils/domManipulator.js';
import {Base} from './base.comp.js';

export const addItemForm = (props = {}) => {
  const _base = Base(props);
  const _baseProps = _base.getProps();

  // ...Your code here
};
```

## Checklist

- [x] Your ‘todos’ are going to be objects that you’ll want to dynamically create, which means either using factories or constructors/classes to generate them.
      <br><br>

- [x] Brainstorm what kind of properties your todo-items are going to have. At a minimum they should have a title, description, dueDate and priority. You might also want to include notes or even a checklist.
      <br><br>

- [x] Your todo list should have projects or separate lists of todos. When a user first opens the app, there should be some sort of ‘default’ project to which all of their todos are put. Users should be able to create new projects and choose which project their todos go into.
      <br><br>

- [x] You should separate your application logic (i.e. creating new todos, setting todos as complete, changing todo priority etc.) from the DOM-related stuff, so keep all of those things in separate modules.
      <br><br>

- The look of the User Interface is up to you, but it should be able to do the following:
  - [ ] view all projects
  - [ ] view all todos in each project (probably just the title and duedate.. perhaps changing color for different priorities)
  - [ ] expand a single todo to see/edit it’s details
  - [ ] delete a todo
        <br><br>
- For inspiration, check out the following great todo apps. (look at screenshots, watch their introduction videos etc.)
  - Todoist
  - Things
  - any.do
    <br><br>
- [ ] Use localStorage to save user’s projects and todos between sessions.<br>
- Since you are probably already using webpack, adding external libraries from npm is a cinch! You might want to consider using the following useful library in your code:
  - date-fns gives you a bunch of handy functions for formatting and manipulating dates and times.
````
