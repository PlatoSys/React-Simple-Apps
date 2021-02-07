import "./css/app.css";
import City from "./components/city";
import axios from "axios";
import React, { Component } from "react";
import { useState } from "react";
import { check } from "prettier";

class App extends Component {
  constructor(props) {
    super(props);

    let storage = JSON.parse(localStorage.getItem("wheather"));
    // storage = [];
    this.state = { value: "", cities: storage };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteCity = this.deleteCity.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.getCity();
  }

  getCity = async () => {
    const response = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=793b87fb703f4c79902152527210102&q=${this.state.value}`
    );
    if (response.status == 200) {
      this.setState((state) => {
        const data = {
          name: response.data.location.name,
          degree: response.data.current.temp_c,
        };
        const cities = this.state.cities.concat(data);
        return {
          cities,
          value: "",
        };
      });
    } else {
      console.log("Bad Request");
    }
    let temp = JSON.stringify(this.state.cities);
    localStorage.setItem("wheather", temp);
  };

  deleteCity(cityName) {
    const data = this.state.cities;
    let result = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].name != cityName.name) {
        let temp = {
          name: data[i].name,
          degree: data[i].degree,
        };
        result = result.concat([temp]);
      }
    }
    localStorage.setItem("wheather", JSON.stringify(result));
    this.setState({
      value: "",
      cities: result,
    });
  }

  async sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  render() {
    const cities = this.state.cities;

    return (
      <div className="container">
        <div>
          <h1>This is a simple app for wheather build with REACT</h1>
        </div>
        <div className="App">
          <div className="form">
            <form className="search-form">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  onChange={this.handleChange}
                  value={this.state.value}
                  placeholder="City..."
                />
                <button
                  type="button"
                  onClick={this.handleSubmit}
                  className="btn btn-primary"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
          <div className="cities">
            {cities.map((city) => (
              <City
                key={city.name}
                deleteCity={this.deleteCity}
                name={city.name}
                degree={city.degree}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
