import React, { Component } from "react";
import WeatherSegment from "./components/weatherSegment/weatherSegment";
import "./App.css";

// const cities = [
//   "Warsaw",
//   "Barcelona",
//   "Moscow",
//   "Rome",
//   "Honolulu",
//   "New York"
// ];

const cities = {
  warsaw: {
    name: "Warsaw",
    img: "warsaw"
  },
  newyork: {
    name: "New York",
    img: "newyork"
  },
  moscow: {
    name: "Moscow",
    img: "moscow"
  },
  barcelona: {
    name: "Barcelosna",
    img: "barcelona"
  },
  mexico: {
    name: "Mexico",
    img: "meksyk"
  }
};

class App extends Component {
  render() {
    return (
      <div className="App-container">
        {Object.keys(cities).map((city, index) => {
          return <WeatherSegment key={index} city={cities[city]} />;
        })}
      </div>
    );
  }
}

export default App;
