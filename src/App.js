const appRoot = document.getElementById("app");

class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer!';
    const options = ['Thing one!', 'Thing two', 'Thing four'];

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <ol>
          {this.props.options.map(option => (<Option key={option} optionText={option} />))}
        </ol>
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <li>
        <h4>{this.props.optionText}</h4>
      </li>
    );
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <div>
        <h2>Add option component</h2>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, appRoot);
