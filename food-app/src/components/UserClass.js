import React from "react";

class UserClass extends React.Component {

  constructor(props) {
    console.log("Contructor called");

    super(props)

    this.state = {
      userInfo: {
        name: "",
        company: ""
      }
    }
  }

  async componentDidMount() {
    // this method is mostly used to make API calls
    console.log("Component did mount");

    let res = await fetch("https://api.github.com/users/anushkadeshpande")
    let resJson = await res.json()

    console.log(resJson)

    this.setState({userInfo: resJson})
  }

  componentDidUpdate() {
    console.log("Component did update");
  }

  componentWillUnmount() {
    console.log("Component unmounted");
  }

  render() {
    console.log("Render called");

    return (
      <div>
        <img src={this.state.userInfo.avatar_url} alt="" />
        <h1>{this.state.userInfo.name}</h1>
        {/* <h2>{this.state.count}</h2> */}
        {/* <button onClick={() => {this.setState({
          count: this.state.count + 1
        })}}>Increment</button> */}

        {/* <button onClick={() => {this.setState({
          count: this.state.count - 1
        })}}>Decrement</button> */}
        <h3>{this.state.userInfo.company}</h3>
        
      </div>
    )
  }
}

export default UserClass