"use strict";

console.log('App.js is runing!');

// JSX - JavaScript XML
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Jakub"
  ),
  React.createElement(
    "p",
    null,
    "This is some info"
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Item one"
    ),
    React.createElement(
      "li",
      null,
      "Item two"
    )
  )
);

// Create a templateTwo var JSX expression

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Jakub Ch"
  ),
  React.createElement(
    "p",
    null,
    "Age: 21"
  ),
  React.createElement(
    "p",
    null,
    "Location: Poland, Bia\u0142stok"
  )
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
