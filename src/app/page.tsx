"use client";

import { useState } from "react";
import TitleBackground from "./components/Layout/TitleBackground";
import Footer from "./components/Layout/Footer";
import MainHeader from "./components/Header/MainHeader";
import Sidebar from "./components/Sidebar/Sidebar";
import TodoList from "./components/List/TodoList";

type Todo = {
  id: number;
  text: string;
  isCompleted: boolean;
};

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (todoText: string) => {
    if (todos.length >= 3) {
      alert("login to add more than 3 todos");
      return;
    } else if (todoText != "") {
      setTodos((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: todoText,
          isCompleted: false,
        },
      ]);
    }
  };

  const handleDeleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleToggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      })
    );
  };

  return (
    <div className="flex flex-col justify-center items-center bg-[#B4B3F1] min-h-screen">
      <TitleBackground />

      <main className="relative w-[972px] h-[636px] bg-white rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.08)] grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden">
        <MainHeader todos={todos} />
        <TodoList
          todos={todos}
          handleToggleTodo={handleToggleTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
        <Sidebar handleAddTodo={handleAddTodo} />
      </main>

      <Footer />
    </div>
  );
}
