### Implement a component that iterates and displays the list of countries received

### File structure

1. node_modules
2. public
3. src
    - actions - implemented api's
    - components - implemented common select functionality
    - containers - implemented routes and components for the view
    - constants - implemented const variables to use in for reducers
    - reducers - implemented redux
    - uility - implemented api's and general or common functionality
4. app.css - for common css
5. app.js - root component to start the container
6. app.test.js
7. index.js - first file to start app
8. reportWebVitals.js
9. setup.test.js
10. store.js - created redux thunk
11. .gitignore
12. package.json

#### Implementation
1. Created app with "npx created-react-app appname".
2. added plugins "axios, react-dom, react-router-dom, react-select, redux, redux-thunk, rxjs".
3. added starting script not to conflict with other ports `"start": "(set PORT=3001 || export PORT=3001 || PORT=3001) && react-scripts start",`
4. written common functionality in the components.
5. written main functionality in the containers.
6. api calls in actions.
7. redux in reducers
8. constants to identify reducers
9. utilities to have api and common functionality

### Code run
1. npm install
2. npm start
3. http://locahost:3001/