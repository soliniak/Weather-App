import React, { Component } from "react";
import "./weatherinfo.css";
import humidity_icon from "../../img/humidity-icon.png";
import pressure_icon from "../../img/pressure-icon.png";
import windspeed_icon from "../../img/windspeed-icon.png";
import sunrise_icon from "../../img/sunrise-icon.png";
import sunset_icon from "../../img/sunset-icon.png";
import clouds_icon from "../../img/clouds-icon.png";
import visibility_icon from "../../img/visibility-icon.png";

class WeatherInfo extends Component {
  constructor() {
    super();
    this.handleUnixTime = this.handleUnixTime.bind(this);
    this.state = {
      timezone: []
    };
  }

  handleUnixTime(unixDate) {
    var date = new Date(unixDate * 1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();

    return hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
  }

  render() {
    let expand = this.props.expand,
      weatherData = this.props.weatherData;

    return (
      <div className={`weatherInfo expanded-${expand}`}>
        <span className="dataLine">
          <div className="icon_description"> Pressure in hPa. </div>
          <img
            src={pressure_icon}
            alt="Pressure"
            className="weather_icon"
          />{" "}
          {weatherData.main.pressure
            ? `${weatherData.main.pressure} hPa`
            : "N/D"}
        </span>

        <span className="dataLine">
          <div className="icon_description">
            Wind speed and direction in m/s.
          </div>
          <img src={windspeed_icon} alt="Wind speed" className="weather_icon" />
          {weatherData.wind.speed ? `${weatherData.wind.speed} m/s` : "N/D"}
          {weatherData.wind.deg ? (
            <span
              className="wind-arrow"
              style={{
                transform: `rotate(${weatherData.wind.deg}deg)`
              }}
            >
              ➜
            </span>
          ) : (
            "N/D"
          )}
        </span>

        <span className="dataLine">
          <div className="icon_description"> Humidity in %. </div>
          <img
            src={humidity_icon}
            alt="Humidity"
            className="weather_icon"
          />{" "}
          {weatherData.main.humidity ? `${weatherData.main.humidity}%` : "N/D"}
        </span>
        <span className="dataLine">
          <div className="icon_description"> Cloud cover in %. </div>
          <img src={clouds_icon} alt="Clouds" className="weather_icon" />
          {weatherData.clouds.all}%
        </span>
        <span className="dataLine">
          <div className="icon_description"> Visibility in m. </div>
          <img src={visibility_icon} alt="Visibilty" className="weather_icon" />
          {weatherData.visibility ? `${weatherData.visibility}m` : "N/D"}
        </span>

        <span className="dataLine">
          <div className="icon_description"> Sunrise time. </div>
          <img src={sunrise_icon} alt="Sunrise" className="weather_icon" />
          {weatherData.sys.sunrise
            ? this.handleUnixTime(weatherData.sys.sunrise)
            : "N/D"}
        </span>
        <span className="dataLine">
          <div className="icon_description"> Sunset time. </div>
          <img src={sunset_icon} alt="Sunset" className="weather_icon" />
          {weatherData.sys.sunset
            ? this.handleUnixTime(weatherData.sys.sunset)
            : "N/D"}
        </span>
      </div>
    );
  }
}

export default WeatherInfo;
