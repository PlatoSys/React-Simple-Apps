import React, { Component } from "react";

class City extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, degree, deleteCity } = this.props;
    return (
      <React.Fragment>
        <div className="city">
          <div className="degree">
            <h1>{degree}°C</h1>
          </div>
          <div className="name">
            <h3>{name}</h3>
          </div>
          <div className="delete-btn">
            <button
              className="btn btn-primary"
              onClick={() => deleteCity({ name })}
            >
              Delete
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default City;
