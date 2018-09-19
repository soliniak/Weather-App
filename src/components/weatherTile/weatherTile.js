import React, { Component } from "react";
import "./weatherTile.css";
const iconCode = {
  blizzard: [622],
  clear_day: [800],
  //   sunny: [800], //depends on temperature ( >25)
  //   clear_night: [800], //depends on time zone
  cloudy: [802, 803, 804],
  mist: [701],
  partly_cloudy_night: [801], //depends on time zone
  partly_cloudy_day: [801], //depends on time zone
  drizzle: [300, 301, 302, 310, 311, 312, 313, 314, 321],
  hail: [600], //(śnieg mrzawka)
  rain: [500, 501, 502, 503, 504, 511, 520, 521, 522, 531],
  snow: [601, 602, 611, 612, 615, 616, 620, 621],
  thunder: [200, 201, 202, 210, 211, 221, 230, 231, 232],
  windy: [], //depends on wind speed (>10m/s?)
  winter_mix: [] //(śnieg z deszczem)
};

class weatherTile extends Component {
  render() {
    const city = this.props.city,
      weather = this.props.weather;
    // console.log(weather.name, weather.coord.lon);
    // Handle background image
    let cityIMG, overlay, weatherIcon;
    if (city.img === "none" || !city.img || city.img === "") {
      cityIMG = require("../../img/img-placeholder.jpg");
    } else {
      cityIMG = require(`../../img/cities/${city.img}.jpg`);
    }
    let BreakException = {};
    // Assign weather icon to weather code
    try {
      Object.entries(iconCode).forEach(([key, value]) => {
        if (value.includes(weather.weather[0].id)) {
          weatherIcon = require(`../../img/wi/wi_${key}.png`);
          overlay = key;
          // Exit loop if exists
          if (value.includes(weather.weather[0].id)) throw BreakException;
        } else {
          weatherIcon = require(`../../img/wi/nd.png`);
        }
      });
    } catch (e) {
      if (e !== BreakException) throw e;
    }

    return (
      <div className="data_container">
        <img src={cityIMG} alt="" className="city_image" />
        <div className={`city_overlay ${overlay}`} />
        <img
          src={weatherIcon}
          alt={`Icon describing "${weather.weather[0].description}" weather`}
          className="weatherIcon"
        />
        <div className="city_name">{city.name}</div>
        <div className="weather_temp">
          {Math.round(weather.main.temp)}
          <span className="deggrees">&#176;C</span>
        </div>
        <div className="weather_condition">
          {" "}
          {weather.weather[0].description}{" "}
        </div>
      </div>
    );
  }
}

export default weatherTile;
