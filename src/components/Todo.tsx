import React from 'react';

interface Props {
  text: string;
}

class Todo extends React.Component<Props> {

  render() {
    const { text } = this.props
    return (
      <div>
        { text }
      </div>
    );
  }
}

export default Todo;
