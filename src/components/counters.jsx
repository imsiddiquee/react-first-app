import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {
      onReset,
      counters,
      onIncrement,
      onDecrement,
      onDelete
    } = this.props;
    return (
      <main className="container">
        <button onClick={onReset} className="btn btn-primary btn-sm">
          Reset
        </button>
        {counters.map(counter => (
          <div key={counter.id}>
            <Counter
              onIncrement={onIncrement}
              onDecrement={onDecrement}
              onDelete={onDelete}
              counter={counter}
            />
          </div>
        ))}
      </main>
    );
  }
}

export default Counters;
