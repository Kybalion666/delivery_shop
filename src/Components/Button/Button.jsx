import React from "react";
import "./Button.css";

function Button({ type, title, disable, onClick }) {
  return (
    <button
    className={`btn ${
      (type === "add" && "add") ||
      (type === "remove" && "remove") ||
      (type === "checkout" && "checkout") ||
      (type === 'mainButton' && 'mainButton') ||
      (type === 'handleAdd' && 'handleAdd') ||
      (type === 'handleRemove' && 'handleRemove') 
    }`}
    disabled={disable}
    onClick={onClick}
  >
    {title}
  </button>
  );
}

export default Button;
