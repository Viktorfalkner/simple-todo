"use client";

import DeleteButton from "./DeleteButton";
import { useTodoContext } from "@/app/lib/hooks";

function TodoList() {
  const { todos, handleToggleTodo, handleDeleteTodo } = useTodoContext();
  return (
    <ul>
      {todos.length === 0 && (
        <li className="flex justify-center items-center h-full font-semibold text-[32px]">
          Start by adding a Todo!
        </li>
      )}

      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center px-5 h-[50px] text-[14px] cursor-pointer border-b border-black/[8%]"
          onClick={() => handleToggleTodo(todo.id)}
        >
          <span className={`${todo.isCompleted && "line-through text-[#ccc]"}`}>
            {todo.text}
          </span>
          <DeleteButton id={todo.id} onDeleteTodo={handleDeleteTodo} />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
