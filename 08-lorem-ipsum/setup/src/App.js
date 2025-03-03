import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(typeof(count));
    let amount = parseInt(count);
    if (amount <= 0) {
      amount = 1;
    }
    if (amount >= data.length) {
      amount = data.length - 1;
    }
    //slice return new copy of array
    setText(data.slice(0, amount));
  };

  return (
    <section>
      <h3>tired of boring lorem ipsum ?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <lable htmlFor="amount">paragraphs:</lable>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
