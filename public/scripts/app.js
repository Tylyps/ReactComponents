'use strict';

console.log('App.js is runing!');

// JSX - JavaScript XML
var app = {
  title: 'Hello React',
  subtitle: 'This is my subtitle'
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item one'
    ),
    React.createElement(
      'li',
      null,
      'Item two'
    )
  )
);

// Create a templateTwo var JSX expression

var user = {
  name: 'Jakub',
  age: 21,
  location: 'Poland, Białystok'
};

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name
  ),
  React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  React.createElement(
    'p',
    null,
    'Location: ',
    user.location
  ),
  template
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
