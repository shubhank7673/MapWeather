import React from "react";
import "../App.css";

function WeatherReport(props) {
  return (
    <div
      data-aos="fade-in"
      className="weatherTab animated slideInRight"
      style={{ display: props.display, marginTop: "0px" }}
    >
      <p className="" style={{ display: props.display }}>
        <b>{`${props.city},${props.country}`}</b>
      </p>
      <br />
      <div className="text" style={{ display: props.display }}>
        <p className="temperature">
          {props.temp}
          <b> &#8451;</b>
        </p>
        <div className="inner">
          <img src="newicons/condition.svg" alt="" />
          <p>{props.weatherdesc}</p>
        </div>
        <div className="inner">
          <img src="newicons/wind.svg" alt="" />
          <p> {` Wind ${props.speed} m/s`}</p>
        </div>
        <div className="inner">
          <img src="newicons/humidity.svg" alt="" />
          <p> {` Humidity ${props.humidity} %`}</p>
        </div>
      </div>
      <img
        src={`newicons/${props.icon}.svg`}
        alt=""
        style={{
          height: "230px",
          width: "230px",
          display: props.display
        }}
        className="weatherIcon"
      />
    </div>
  );
}

export default WeatherReport;
