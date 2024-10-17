"use client";

import React, { useState } from "react";
import DeleteButton from "./DeleteButton";

const Initial_TODOs = [
  { id: 1, text: "Dailies", isCompleted: true },
  { id: 2, text: "Walk Dog", isCompleted: false },
  { id: 3, text: "Take Vitamins", isCompleted: true },
];

function TodoList() {
  const [todos, setTodos] = useState(Initial_TODOs);
  return (
    <ul>
      {todos.map((item) => (
        <li
          key={item.id}
          className="flex justify-between items-center px-5 h-[50px] text-[14px] cursor-pointer border-b border-black/[8%]"
          onClick={() => {
            setTodos(
              todos.map((t) => {
                if (t.id === item.id) {
                  return { ...t, isCompleted: !t.isCompleted };
                }
                return t;
              })
            );
          }}
        >
          <span className={`${item.isCompleted && "line-through text-[#ccc]"}`}>
            {item.text}
          </span>
          <DeleteButton id={item.id} setTodos={setTodos} />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
