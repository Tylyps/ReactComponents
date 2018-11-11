console.log('App.js is runing!');

// JSX - JavaScript XML
var template = (
  <div>
    <h1>Jakub</h1>
    <p>This is some info</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

// Create a templateTwo var JSX expression

var templateTwo = (
  <div>
    <h1>Jakub Ch</h1>
    <p>Age: 21</p>
    <p>Location: Poland, Białstok</p>
  </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
