import React from "react";
import UpdatedComponent from "./withCounter";

class ClickCounter extends React.Component {
  render() {
    const { count, incrementCount, name } = this.props;

    return (
      <div>
        <h3>{name}</h3>
        <button onClick={incrementCount}>Clicked {count} Times</button>
      </div>
    );
  }
}

export default UpdatedComponent(ClickCounter, 5);
