console.log('App.js is runing!');

// JSX - JavaScript XML
const app = {
  title: 'Hello React',
  subtitle: 'This is my subtitle',
  options: ['One', 'Two']
}

const template = (
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

let count = 0;
const addOne = () => {
  console.log('addOne');
};

const minusOne = () => {
  console.log('minusOne');
};

const reset = () => {
  console.log('reset')
};

const templateTwo = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>reset</button>
  </div>
);

const appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
