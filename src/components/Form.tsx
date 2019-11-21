import React from 'react';

interface State {
  input: any;
}

class Form extends React.Component<State> {
  state: State = {
    input: '',
  };

  render() {
    return (
      <form >
        <input
          type="text"
          value={this.state.input}
        />
        <button>登録</button>
      </form>
    );
  }

}

export default Form;
