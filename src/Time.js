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
    const Now = Date.parse(this.state.date);
    const GetWakeUp =
      `${this.state.date.getMonth() + 1}-` +
      `${this.state.date.getDate()}-` +
      `${this.state.date.getFullYear()} ` +
      "00:00:01";
    const WakeUp = Date.parse(GetWakeUp);

    const GetMorning =
      `${this.state.date.getMonth() + 1}-` +
      `${this.state.date.getDate()}-` +
      `${this.state.date.getFullYear()} ` +
      "09:00:00";
    const Morning = Date.parse(GetMorning);
    const GetNoon =
      `${this.state.date.getMonth() + 1}-` +
      `${this.state.date.getDate()}-` +
      `${this.state.date.getFullYear()} ` +
      "11:30:00";
    const Noon = Date.parse(GetNoon);
    const GetCoffeeBreak =
      `${this.state.date.getMonth() + 1}-` +
      `${this.state.date.getDate()}-` +
      `${this.state.date.getFullYear()} ` +
      "14:00:00";
    const CoffeBreak = Date.parse(GetCoffeeBreak);
    const GetAfternoon =
      `${this.state.date.getMonth() + 1}-` +
      `${this.state.date.getDate()}-` +
      `${this.state.date.getFullYear()} ` +
      "16:00:00";
    const Afternoon = Date.parse(GetAfternoon);
    const GetDinner =
      `${this.state.date.getMonth() + 1}-` +
      `${this.state.date.getDate()}-` +
      `${this.state.date.getFullYear()} ` +
      "18:00:00";
    const Dinner = Date.parse(GetDinner);
    const GetNight =
      `${this.state.date.getMonth() + 1}-` +
      `${this.state.date.getDate()}-` +
      `${this.state.date.getFullYear()} ` +
      "21:00:00";
    const Night = Date.parse(GetNight);

    if (Now > WakeUp) {
      if (Now > Morning) {
        if (Now > Noon) {
          if (Now > CoffeBreak) {
            if (Now > Afternoon) {
              if (Now > Dinner) {
                if (Now > Night) {
                  this.setState({ message: "Wine please." });
                } else {
                  this.setState({
                    message: "Pizza or Pasta or Ramen or Sushi or Hot Pot?"
                  });
                }
              } else {
                this.setState({
                  message: "Time to have a second coffee break."
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
          </strong>
          <p></p>
          <p>{this.state.message}</p>
        </small>
      </React.Fragment>
    );
  }
}

export default Time;
