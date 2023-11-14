
import React from "react";
import { useState } from "react";
import './list.css';

export default function ListAdd() {
  const [List, setList] = useState([]);
  const [Item, setItem] = useState("");

  function handleAdd() {
    setList([...List, Item]);
    setItem("");
  }

  return (
    <div className = "container">
        <div className="inner">

      <h1 style={{color:"#17467f"}}>
        <i>LISTS</i>
      </h1>
      <input type="text" className="myin" value={Item} onChange={(e) => setItem(e.target.value)} placeholder="ENTER ACTIVITY TO ADD"></input>
      <button onClick={handleAdd} className="mybtn">Add</button>
      <ul>
        {List.map((item) => (
            <li className="lists">{item}</li>
            ))}
        <li className="lists">act 1</li>
        <li className="lists">act 2</li>
      </ul>
      <hr />
            </div>
    </div>
  );
}
