import { Component, React } from "react";

class Recipe extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const { data } = this.props;

    return (
      <div className="recipe">
        <hr></hr>
        <div className="head">
          <div className="naming">
            <div className="heart-shaping">
              <h1>
                <div> &nbsp;{data.strMeal} </div>
              </h1>
            </div>
            <h1>Category : {data.strCategory}</h1>
            <ul>
              <li>
                <h3>{data.strIngredient1}</h3>
              </li>
              <li>
                <h3>{data.strIngredient2}</h3>
              </li>
              <li>
                <h3>{data.strIngredient3}</h3>
              </li>
              <li>
                <h3>{data.strIngredient4}</h3>
              </li>
            </ul>
          </div>
          <div className="image">
            <img src={data.strMealThumb} width="300px"></img>
          </div>
        </div>
        <div className="bottom">
          <p>{data.strInstructions}</p>
          <div className="tutorial">
            <a href={data.strYoutube} target="_blank">
              Video Tutorial
            </a>
          </div>
        </div>
        <hr></hr>
      </div>
    );
  }
}

export default Recipe;
