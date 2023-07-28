import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1 className="h1">Far Away</h1>;
}

function Options() {
  const arr = Array.from({ length: 20 }, (_, i) => i + 1);
  return arr.map((num) => (
    <option value={num} key={num}>
      {num}
    </option>
  ));
}

function Form() {
  const [itmDescription, setDescription] = useState("");
  const [itmQuantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    //Do not capture the value if DESCRIPTION is null.
    if (!itmDescription) return;

    //Capture the new items in the object.
    const newItem = {
      id: Date.now(),
      description: itmDescription,
      quantity: itmQuantity,
      packed: false,
    };

    //Clear the state variable.
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3 className="h3">What do you need for your trip?</h3>
      <select
        value={itmQuantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {<Options />}
      </select>
      <input
        type="text"
        placeholder="Items...."
        value={itmDescription}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((items) => {
          return <Item items={items} key={items.id} />;
        })}
      </ul>
    </div>
  );
}

function Item({ items }) {
  return (
    <li>
      <span style={items.packed ? { textDecoration: "line-through" } : {}}>
        {items.quantity} {items.description}
      </span>
      <button className=""> X </button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have X items in your list and you have packed X (X%)</em>
    </footer>
  );
}
