import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import * as serviceWorker from './serviceWorker';

const root = document.getElementById("root");

ReactDOM.render(<App />, root);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
