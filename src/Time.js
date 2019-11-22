import React, { Component } from "react";

class Time extends Component {
  state = {
    date: new Date(),
    message: ""
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
    this.timerSM = setInterval(() => this.setMessage(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
    clearInterval(this.timerSM);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  setMessage() {
    const Now = `${this.state.date.getHours()}`;

    if (Now >= 0) {
      if (Now >= 7) {
        if (Now >= 12) {
          if (Now >= 14) {
            if (Now >= 16) {
              if (Now >= 17) {
                if (Now >= 21) {
                  this.setState({ message: "Netflix and Wine please." });
                } else {
                  this.setState({
                    message: "Pizza or Pasta or Ramen or Sushi or Hot Pot?"
                  });
                }
              } else {
                this.setState({
                  message: "Time to have a coffee break."
                });
              }
            } else {
              this.setState({ message: "Time to have a coffee break." });
            }
          } else {
            this.setState({ message: "A bagel savvy." });
          }
        } else {
          this.setState({ message: "I am not worth a thing before coffee." });
        }
      } else {
        this.setState({ message: "I am not a party animal." });
      }
    }
  }

  render() {
    console.log(this.state.message);
    return (
      <React.Fragment>
        <small>
          <strong className="time">
            {this.state.date.toLocaleTimeString("en-US")}
            <br />
            {this.state.message}
          </strong>
        </small>
      </React.Fragment>
    );
  }
}

export default Time;
