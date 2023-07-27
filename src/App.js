import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

export default function App() {
  return (
    <div>
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

function Form() {
  return (
    <div className="add-form">
      <h3 className="h3">What do you need for your trip?</h3>
    </div>
  );
}

function PackingList() {
  return <div className="list">LIST</div>;
}

function Stats() {
  return <footer className="stats"></footer>;
}
