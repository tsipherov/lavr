import React from "react";
import PropTypes from "prop-types";

import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  static propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
  };

  state = {
    cnt: this.props.min,
    inputValue: this.props.min,
  };

  increase = () => {
    this.set(this.state.cnt + 1);
  };

  decrease = () => {
    this.set(this.state.cnt - 1);
  };

  set(newCnt) {
    // let cnt = Math.min(Math.max(newCnt, this.props.min), this.props.max);
    let cnt = Math.max(Math.min(newCnt, this.props.max), this.props.min);
    this.setState({
      cnt,
      inputValue: cnt,
    });
  }

  setValue(newStr) {
    this.setState({ inputValue: newStr });
  }

  applyValue = () => {
    let cnt = parseInt(this.state.inputValue);
    this.set(isNaN(cnt) ? this.props.min : cnt);
  };

  checkEnterKey = (e) => {
    if (e.keyCode === 13) {
      this.applyValue();
    }
  };

  styles = {
    display: "flex",
    alignItems: "center",
    width: 150,
    justifyContent: "space-around",
    fontSize: 30,
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <br />
          <div style={this.styles}>
            <button className="App-link" onClick={this.decrease}>
              -1
            </button>
            <p>{this.state.cnt}</p>
            <button className="App-link" onClick={this.increase}>
              +1
            </button>
          </div>
          <br />
          <input
            value={this.state.inputValue}
            onChange={(e) => this.setValue(e.target.value)}
            onBlur={this.applyValue}
            onKeyUp={this.checkEnterKey}
          />
        </header>
      </div>
    );
  }
}

export default App;
