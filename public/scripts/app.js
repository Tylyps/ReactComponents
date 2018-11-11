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

// Create a templateTwo var JSX expression

var user = {
  name: 'Jakub',
  age: 21,
  location: 'Poland, Białystok'
};

function getLocation(location) {
  if (location) {
    return React.createElement(
      'p',
      null,
      'Location: ',
      location
    );
  }
  return undefined;
}

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name ? user.name : 'Anonymous'
  ),
  user.age && user.age >= 18 && React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  getLocation(user.location),
  template
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
