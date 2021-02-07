import './css/App.css';
import React, { useEffect, useState } from "react";
import axios from "axios";
import Recipe from "./components/recipe";
const App = () => {

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');

  const getRecipes = async () => {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    await sleep(100);
    setRecipes(response.data.meals);
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const handleChange = (e) =>  {
    setSearch(e.target.value)
   }
  
  return (
    <React.Fragment>
      <div className="container">
        <div className="App">
          <form className="search-form">
            <div className="form-group">
              <input type="text" className="form-control" onChange={handleChange} value={search} placeholder="Meal Name..." />
              <button type="button" onClick={() => getRecipes()} className="btn btn-primary">Search</button>
            </div>
          </form>
        </div>

        <div className="recipes">
          {recipes.map(recipe => (
            <Recipe key={recipe.idMeal} data={recipe} />
          ))}
        </div>
    </div>

    </React.Fragment>



  )
}

export default App;
