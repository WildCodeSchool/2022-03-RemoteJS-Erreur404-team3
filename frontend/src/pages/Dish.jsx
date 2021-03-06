import React, { useState } from "react";
import axios from "axios";

import "../css/Dish.css";

function Dish() {
  const [dishName, setDishName] = useState("");
  const [dish, setDish] = useState([]);

  const getDish = () => {
    if (dishName.length > 0) {
      axios
        .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${dishName}`)
        .then((res) => {
          setDish(res.data.meals);
        });
    }
  };
  return (
    <div className="PageDish">
      <form action="">
        <label htmlFor="dishName">
          <input
            type="text"
            id="dishName"
            value={dishName}
            onChange={(event) => setDishName(event.target.value)}
          />
        </label>
      </form>
      <button type="button" onClick={getDish}>
        GET DISH
      </button>
      {dish.map((data) => (
        <p>{data.strMeal}</p>
      ))}
    </div>
  );
}

export default Dish;
