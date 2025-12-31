import React from "react";

class ClassLifecycle extends React.Component {
  constructor(props) {
    super(props);
    console.log("Constructor (Mount)");
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("componentDidMount (Mounted)");
    // API call
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate (Updated)");
    console.log("Previous Count:", prevState.count);
    console.log("Current Count:", this.state.count);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount (Unmounted)");
    // Cleanup: remove timer, listener
  }

  render() {
    console.log("Render");
    return (
      <div>
        <h2>Class Count: {this.state.count}</h2>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

export default ClassLifecycle;
