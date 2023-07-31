import { useState } from "react";
import React from "react";

export default function Form({ onAddItems }) {
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

    //Function to update the state with the new Item.
    onAddItems(newItem);

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

//Print option numbers in select component.
function Options() {
  const arr = Array.from({ length: 20 }, (_, i) => i + 1);
  return arr.map((num) => (
    <option value={num} key={num}>
      {num}
    </option>
  ));
}
