"use strict";

console.log('App.js is runing!');

// JSX - JavaScript XML
var template = React.createElement(
  "h1",
  null,
  "Hellow React"
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
