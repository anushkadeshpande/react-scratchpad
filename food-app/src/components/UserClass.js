import React from "react";

class UserClass extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h2>{this.state.count}</h2>
        <button onClick={() => {this.setState({
          count: this.state.count + 1
        })}}>Increment</button>

        <button onClick={() => {this.setState({
          count: this.state.count - 1
        })}}>Decrement</button>

      </div>
    )
  }
}

export default UserClass