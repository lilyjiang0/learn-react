## Setup Environment
Install VS Code, nvm, node, npm, tsc

## Create a new project
`npx create-react-app project-name`

## Start the server 
`npm start`

## Stop the server
using ctrl-c

## Connection
### index.html
```
<body>
    ...
    <div id="root"></div>
    ...
  </body>
```

### index.js
```
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### app.js
```
function App() {
  return (
    <div className="App">
    ...
    </div>
  );
}
```