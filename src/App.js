import React from 'react';

class TimeConversion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time12Hour: '',
      time24Hour: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({ time12Hour: event.target.value });
  };

  convertTime = () => {
    const { time12Hour } = this.state;
    
    // Extract the hour, minute, and second components
    let [hour, minute, second] = time12Hour.split(':');

    // Convert hour to integer
    hour = parseInt(hour);

    // Check if it's PM and not 12:00:00 PM
    if (time12Hour.includes('PM') && hour !== 12) {
      hour += 12;
    }
    // Check if it's AM and 12:00:00 AM
    else if (time12Hour.includes('AM') && hour === 12) {
      hour = 0;
    }

    // Format the time in 24-hour military format
    const time24Hour = `${hour}:${minute}:${second}`;
    this.setState({ time24Hour });
  };

  render() {
    const { time12Hour, time24Hour } = this.state;

    return (
      <div>
        <input
          type="text"
          value={time12Hour}
          onChange={this.handleInputChange}
          placeholder="Enter time in 12-hour format"
        />
        <button onClick={this.convertTime}>Convert</button>
        <p>Time in 24-hour format: {time24Hour}</p>
      </div>
    );
  }
}

export default TimeConversion;
