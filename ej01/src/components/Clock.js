import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      time: '0:0:0'
    }
  }
  componentDidMount(){
  setInterval(() => {this.updateClock()}, 1000);
  }
  updateClock(){
    const newDate = new Date();
    const hour = newDate.getHours();
    const minutes = newDate.getMinutes();
    const seconds = newDate.getSeconds();
    const actualTime = `${hour}:${minutes}:${seconds}`;
    this.setState({time : actualTime});
  }
  componentWillUnmount(){
   clearInterval(); 
  }
  render() {
    return (
      <p>{this.state.time}</p>
    )
  }
}

export default Clock;