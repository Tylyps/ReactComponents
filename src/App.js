console.log('App.js is runing!');

// JSX - JavaScript XML
var app = {
  title: 'Hello React',
  subtitle: 'This is my subtitle',
  options: ['One', 'Two']
}

var template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{(app.options && app.options.length > 0) ? 'Here are your options' : 'No options'}</p>
    {(app.options && app.options.length > 0) && (
    <ol>
      {app.options.map(option => (<li key={option}>{option}</li>))}
    </ol>)}
  </div>
);

// Create a templateTwo var JSX expression

var user = {
  name: 'Jakub',
  age: 21,
  location: 'Poland, Białystok'
};

function getLocation(location) {
  if (location) {
    return (<p>Location: {location}</p>);
  }
  return undefined;
}

var templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
    {template}
  </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
