import { useState } from "react";
import React from "react";

export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Add some items into the list!!</em>
      </footer>
    );

  const itemLength = items.length;
  const packedLength = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedLength / itemLength) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? `You are ready to go!!`
          : `You have ${itemLength} items in your list and you have packed ${packedLength} (${percentage}%)`}
      </em>
    </footer>
  );
}
