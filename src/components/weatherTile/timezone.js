import React, { Component } from "react";
class Timezone extends Component {
  render() {
    Date.prototype.addHours = function(h) {
      this.setHours(this.getHours() + h);
      return this;
    };
    let timestamp = Math.round(new Date().getTime());
    let myDate = new Date(timestamp).addHours(5);

    console.log(myDate.toGMTString(), myDate.toLocaleString());
  }
}

export default Timezone;
