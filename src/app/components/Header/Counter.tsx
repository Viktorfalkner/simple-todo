import React from "react";

function Counter({ todos }) {
  return (
    <p className="mr-4">
      <b>{todos.filter((todo) => todo.isCompleted).length}</b> / {todos.length}{" "}
      todos completed
    </p>
  );
}

export default Counter;
