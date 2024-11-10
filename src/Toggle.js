import React, { Component } from 'react';

class Toggle extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleToggle}>Click on this button</button>
      </div>
    );
  }
}

export default Toggle;
