"use client";

import { useState } from "react";
import TitleBackground from "./components/Layout/TitleBackground";
import Footer from "./components/Layout/Footer";
import MainHeader from "./components/Header/MainHeader";
import Sidebar from "./components/Sidebar/Sidebar";
import TodoList from "./components/List/TodoList";

const Initial_TODOs = [
  { id: 1, text: "Dailies", isCompleted: true },
  { id: 2, text: "Walk Dog", isCompleted: false },
  { id: 3, text: "Take Vitamins", isCompleted: true },
];

export default function Home() {
  const [todos, setTodos] = useState(Initial_TODOs);

  return (
    <div className="flex flex-col justify-center items-center bg-[#B4B3F1] min-h-screen">
      <TitleBackground />

      <main className="relative w-[972px] h-[636px] bg-white rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.08)] grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden">
        <MainHeader todos={todos} />
        <TodoList todos={todos} setTodos={setTodos} />
        <Sidebar todos={todos} setTodos={setTodos} />
      </main>

      <Footer />
    </div>
  );
}
