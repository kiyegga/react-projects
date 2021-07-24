import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

//get all categories and remove duplicates, add 'all' since we dont hv it in our categories dictionary
const allCategories = ['all', ...new Set(items.map((item) => item.category))];
//console.log(allCategories);

function App() {
  const [menuItem, setMenuItem] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  //its better you filter from oiginal list since it does not change
  const filterItems = (category) =>{
    if(category === 'all'){
      setMenuItem(items);
      return;
    }
    const newItems = items.filter((item) =>item.category === category)
    setMenuItem(newItems);
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} categories={categories}/>
        <Menu items={menuItem}/>
      </section>
    </main>
  );
}

export default App;
