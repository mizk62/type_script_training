import React, { FormEvent }  from 'react';

interface Props {
  onSubmit: any;
}

interface State {
  todo: string;
}

class Form extends React.Component<Props,State> {

  constructor(props:Props) {
    super(props);

    this.state = {
      todo: ""
    };
  }


  public render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          onChange={e => {
            this.setState({
              todo: e.target.value,
            });
          }}
          value={this.state.todo}
        />
        <button>登録</button>
      </form>
    );
  }

  private handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    this.props.onSubmit(this.state.todo);
    this.setState({todo: ""});
  };

}

export default Form;
