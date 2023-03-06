// import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends React.Component {
  render() {
    const fullName = this.props;

    return (
      <div>
        <h1>{fullName.s1}</h1>
        <h1>{fullName.s2}</h1>
        <h1>
          {fullName.s3}
          {"!".repeat(this.props.num)}
        </h1>
      </div>
    );
  }
}

export default App;
