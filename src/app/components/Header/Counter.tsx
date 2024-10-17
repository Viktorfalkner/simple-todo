import React from "react";

type CounterProps = {
  totalNumberOfTodos: number;
  numberOfCompletedTodos: number;
};

function Counter({ totalNumberOfTodos, numberOfCompletedTodos }: CounterProps) {
  return (
    <p className="mr-4">
      <b>{numberOfCompletedTodos}</b> / {totalNumberOfTodos} todos completed
    </p>
  );
}

export default Counter;
