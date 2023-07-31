import { useState } from "react";
import React from "react";
import Item from "./Item.js";

export default function PackingList({
  items,
  onDeleteItem,
  onPackedItem,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => {
          return (
            <Item
              item={item}
              onDeleteItem={onDeleteItem}
              onPackedItem={onPackedItem}
              key={item.id}
            />
          );
        })}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input"> Sort by Input order </option>
          <option value="description"> Sort by Alphabetical order </option>
          <option value="packed"> Sort by Packed status </option>
        </select>
        <button onClick={onClearList}>CLEAR LIST</button>
      </div>
    </div>
  );
}
