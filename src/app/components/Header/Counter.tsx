import { useTodoContext } from "@/app/lib/hooks";
import React from "react";

function Counter() {
  const { numberOfCompletedTodos, totalNumberOfTodos } = useTodoContext();
  return (
    <p className="mr-4">
      <b>{numberOfCompletedTodos}</b> / {totalNumberOfTodos} todos completed
    </p>
  );
}

export default Counter;
