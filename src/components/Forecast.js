import React from "react";
import "../App.css";

function Forecast(props) {
  return (
    <div
      className="weatherTab fc animated slideInLeft"
      style={{ display: props.display }}
    >
      <p>
        <b>Forecast</b>
      </p>
      <div className="inner2">
        <p>Tod</p>
        <img
          src={
            props.data === ""
              ? ""
              : `newicons/${props.data[0].weather[0].icon}.svg`
          }
          alt=""
        />
        <p>{props.data === "" ? "" : props.data[0].weather[0].main}</p>
        <img
          src="newicons/temperature.svg"
          className="forecastTmp"
          style={{
            marginLeft: "45%",
            marginTop: "6px",
            height: "35px",
            width: "35px"
          }}
          alt=""
        />
        <p>{props.data === "" ? "" : props.data[0].main.temp}&#8451;</p>
      </div>
      <div className="inner2">
        <p>Tom</p>
        <img
          src={
            props.data === ""
              ? ""
              : `newicons/${props.data[1].weather[0].icon}.svg`
          }
          alt=""
        />
        <p>{props.data === "" ? "" : props.data[1].weather[0].main}</p>
        <img
          src="newicons/temperature.svg"
          className="forecastTmp"
          style={{
            marginLeft: "45%",
            marginTop: "6px",
            height: "35px",
            width: "35px"
          }}
          alt=""
        />
        <p>{props.data === "" ? "" : props.data[1].main.temp}&#8451;</p>
      </div>
      <div className="inner2">
        <p>Dat</p>
        <img
          src={
            props.data === ""
              ? ""
              : `newicons/${props.data[2].weather[0].icon}.svg`
          }
          alt=""
        />
        <p>{props.data === "" ? "" : props.data[2].weather[0].main}</p>
        <img
          src="newicons/temperature.svg"
          className="forecastTmp"
          style={{
            marginLeft: "45%",
            marginTop: "6px",
            height: "35px",
            width: "35px"
          }}
          alt=""
        />
        <p>{props.data === "" ? "" : props.data[2].main.temp}&#8451;</p>
      </div>
    </div>
  );
}

export default Forecast;
