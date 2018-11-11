'use strict';

console.log('App.js is runing!');

// JSX - JavaScript XML
var app = {
  title: 'Hello React',
  subtitle: 'This is my subtitle',
  options: ['One', 'Two']
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'p',
    null,
    app.options && app.options.length > 0 ? 'Here are your options' : 'No options'
  ),
  app.options && app.options.length > 0 && React.createElement(
    'ol',
    null,
    app.options.map(function (option) {
      return React.createElement(
        'li',
        { key: option },
        option
      );
    })
  )
);

var count = 0;
var addOne = function addOne() {
  console.log('addOne');
};

var minusOne = function minusOne() {
  console.log('minusOne');
};

var reset = function reset() {
  console.log('reset');
};

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Count: ',
    count
  ),
  React.createElement(
    'button',
    { onClick: addOne },
    '+1'
  ),
  React.createElement(
    'button',
    { onClick: minusOne },
    '-1'
  ),
  React.createElement(
    'button',
    { onClick: reset },
    'reset'
  )
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
