import React, { Component } from "react";
import Axios from "axios";
import WeatherReport from "./components/WeatherReport";
// import Map from "./components/Map";
import Forecast from "./components/Forecast";
import Loading from "./components/Loading";
class App extends Component {
  constructor() {
    super();
    this.state = {
      icon: "",
      cityName: "",
      display: "none",
      data: "",
      weatherdesc: "",
      temp: "",
      isLoading: "no"
    };
    this.getData = this.getData.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  getData(event) {
    event.preventDefault();
    this.setState({ isLoading: "yes", display: "none" });
    Axios.get(
      `http://api.openweathermap.org/data/2.5/forecast?q=${
        this.state.cityName
      }&appid=1559cd6fa80fdc2f7acd52f4eba147ce&units=metric`
    ).then(result => {
      console.log(result.data);
      this.setState({
        icon: result.data.list[0].weather[0].icon,
        display: "inline-block",
        data: result.data,
        weatherdesc: result.data.list[0].weather[0].description,
        temp: result.data.list[0].main.temp,
        isLoading: "no"
      });
    });
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  componentDidMount() {}
  render() {
    return (
      <div className="App">
        <div className="layer" />
        <div className="header">
          <h1 className="logo animated slideInRight">MapWeather</h1>
          <form onSubmit={this.getData}>
            <input
              type="text"
              name="cityName"
              onChange={this.handleChange}
              required
              className="cityInput animated slideInRight slow"
              placeholder="City Name"
            />
            <button className="butn animated fadeIn delay-2s">Monitor</button>
          </form>
        </div>
        <Loading display={this.state.isLoading === "yes" ? "" : "none"} />
        <div
          style={{
            justifyContent: "center",
            textAlign: "center"
          }}
        >
          <WeatherReport
            icon={this.state.icon}
            display={this.state.display}
            weatherdesc={this.state.weatherdesc}
            temp={this.state.temp}
            city={
              this.state.display === "none" ? "" : this.state.data.city.name
            }
            country={
              this.state.display === "none" ? "" : this.state.data.city.country
            }
            speed={
              this.state.display === "none"
                ? ""
                : this.state.data.list[0].wind.speed
            }
            humidity={
              this.state.display === "none"
                ? ""
                : this.state.data.list[0].main.humidity
            }
          />
          <Forecast
            display={this.state.display}
            data={this.state.data === "" ? "" : this.state.data.list}
          />
        </div>
      </div>
    );
  }
}

export default App;
