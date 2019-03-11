import React, { Component } from 'react';
import logo from './logo.svg';
import $ from "jquery"
import axios from "axios"
import './App.css';

class App extends Component {
  componentDidMount() {
    console.log("挂载了", $)
    axios.get("https://api.github.com/users/octocat/gists").then(res => {
      console.log(res, 778787)
    });
  }
  render() {
    console.log(this.props.abc)
    let arr = [1,2,3,45,6,6]
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p abd="ddd">
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {arr.join('-')}
        </header>
      </div>
    );
  }
}

App.defaultProps = {
  abc: "abc"
}

export default App;
