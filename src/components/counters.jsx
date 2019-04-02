import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counter: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  render() {
    return (
      <main className="container">
        {this.state.counter.map(item => (
          <div className="row my-2" key={item.id}>
            <Counter value={item.value} />
          </div>
        ))}
      </main>
    );
  }
}

export default Counters;
