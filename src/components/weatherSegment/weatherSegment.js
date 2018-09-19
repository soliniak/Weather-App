import React, { Component } from "react";
import WeatherInfo from "../weatherInfo/weatherinfo";
import WeatherTile from "../weatherTile/weatherTile";
import "./weatherSegment.css";

const API_KEY = "957a9d2de58023bd971a530fa9d87387";
// const TIME_ZONE_KEY = "SVDIEN6LJ5NQ";
const UNITS = "metric"; // metric, imperial or kelvin

class App extends Component {
  constructor(props) {
    super(props);
    this.handleExpand = this.handleExpand.bind(this);

    this.state = {
      weather: [],
      expand: false,
      error: false
    };
  }

  handleExpand() {
    this.setState({ expand: !this.state.expand });
  }

  componentDidMount(CITY) {
    CITY = this.props.city.name;

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=${UNITS}&APPID=${API_KEY}`
    )
      .then(res => res.json())
      .then(weather => this.setState({ weather }))
      .then(() => {
        if (this.state.weather.cod !== 200) {
          this.setState({ error: true });
        }
      });
  }

  render() {
    this.context = <div className="loading">Loading...</div>;
    if (this.state.error) {
      this.context = (
        <div className="error-container">
          <div className="error error-code">{this.state.weather.cod}</div>
          <div className="error error-message">
            {this.state.weather.message}
          </div>
        </div>
      );
    }
    // if (!this.state.timezone.timestamp) return null;
    return this.state.weather.main ? (
      <div
        className="weatherWindow"
        onMouseOver={this.handleExpand}
        onMouseOut={this.handleExpand}
      >
        <WeatherTile weather={this.state.weather} city={this.props.city} />
        <WeatherInfo
          weatherData={this.state.weather}
          expand={this.state.expand}
          timezone={this.state.timezone}
        />
      </div>
    ) : (
      <div className="weatherWindow">{this.context}</div>
    );
  }
}

export default App;
