class IndecisionApp extends React.Component {
  constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: []
    };
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }))
      }
    } catch (e) {
      // Do nothing at all
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnMount');
  }

  handleDeleteOptions() {
    // shorthand syntax
    this.setState(() => ({options: []}));

    // longhand syntax
    // this.setState(() => {
    //   return {
    //     options: []
    //   };
    // });
  }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      // filter returns a new array
      // if option is not equal to optionToRemove
      // it will return true and that will go into the new array
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }

  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    // shorthand syntax
    this.setState((prevState) => ({options: prevState.options.concat(option)}));

    // longhand syntax
    // this.setState((prevState) => {
    //   return {
    //     options: prevState.options.concat(option)
    //   };
    // });

  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }

  render() {
    const subtitle = 'Put your life in the hands of a computer'

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption}/>
      </div>
    );
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
};

// How to set default props to a stateless functional component
Header.defaultProps = {
  title: 'Indecision'
};

const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
        >
          What should I do?
        </button>
      </div>
  );
};

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove Options</button>
      {props.options.length === 0 && <p>Please add an option to get started!</p>}
      {
        props.options.map((option) => (
          <Option
            key={option}
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))
      }
    </div>
  );
};

const Option = (props) => {
  return(
    <div>
      {props.optionText}
      <button
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        remove
      </button>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props){
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e) {
    e.preventDefault();

    // option is the name of the input of the form *see below*
    // add trim to get rid of spaces before and after string
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    // shorthand syntax
    this.setState(() => ({error}));

    // longhand syntax
    // this.setState(() => {
    //   return {
    //     error
    //     since there is only one attribute you don't need to have error: error
    //   };
    // });
    if (!error) {
      e.target.elements.option.value = '';
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));


// stateless functional component
// it doesn't need a render function only the return
// you render it below in ReactDom.render
// it doesn't have state, but can use props
// you don't use this. it's only props
// faster than class based components because they don't come with all the overhead
// and baggage having to extend react.component it's not using a lot of code
// that class based components use. Much easier to write and test.

////////*Example Code*////////
// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// };
