import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import "../App.css";
import Logo from "./Logo.js";
import Form from "./Form.js";
import PackingList from "./PackingList.js";
import Stats from "./Stats.js";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

export default function App() {
  const [items, setItems] = useState([]);

  //Function to update new items add to the state.
  function handleItems(newItem) {
    setItems((item) => [...item, newItem]);
  }

  //function to delete an item from the Packing List.
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  //Function to toggle packed status of the object.
  function handlePackedItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : { ...item }
      )
    );
  }

  //Function to clear the items list.
  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete the list?"
    );

    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onPackedItem={handlePackedItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
